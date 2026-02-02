/**
 * Snowflake ROI Calculator - Gemini Specification
 * Implements exact weighted formula: Total = (S × P_r) + (S × P_a) + (S × P_q)
 *
 * P_r = Right-Sizing Potential
 * P_a = Auto-Suspend Potential
 * P_q = Query Efficiency Potential
 */

class SnowflakeROICalculator {
  constructor() {
    // Workload-specific query optimization adjustments
    this.workloadAdjustments = {
      etl: { P_q: 0.07 },        // +7% - ETL has high optimization potential
      adhoc: { P_q: 0.12 },      // +12% - Ad-hoc has HIGHEST waste (concurrency spikes)
      bi: { P_q: 0.03 },         // +3% - BI dashboards are more predictable
      datascience: { P_q: 0.05 } // +5% - Data science has moderate optimization potential
    };
  }

  /**
   * Main calculation method - EXACT Gemini formula
   * @param {Object} inputs - User form inputs
   * @returns {Object} Calculation results with all breakdowns
   */
  calculate(inputs) {
    // Parse inputs
    const S = this.parseSpend(inputs.monthlySpend);
    const W = parseInt(inputs.warehouseCount) || 5;
    const P = parseInt(inputs.provisioningLevel) || 3;
    const M = parseInt(inputs.maturityLevel) || 3;
    const I = parseInt(inputs.idleIntensity) || 3;
    const L = parseInt(inputs.teamSize) || 0;
    const workload = inputs.workloadType || 'etl';

    // Validate spend
    if (!this.isValidSpend(S)) {
      return { error: 'Invalid spend amount' };
    }

    // ========================================
    // P_r: Right-Sizing Potential
    // ========================================
    let P_r = 0.05; // Base 5%

    // Warehouse sprawl penalty
    if (W > 10) {
      P_r += 0.02; // +2% if >10 warehouses (resource fragmentation)
    }

    // Low maturity bonus
    if (M < 3) {
      P_r += 0.05; // +5% if "Wild West" governance
    }

    // Provisioning level impact
    if (P >= 4) {
      P_r += 0.03; // +3% if over-provisioning
    }

    // ========================================
    // P_a: Auto-Suspend Potential
    // ========================================
    let P_a = 0.03; // Base 3%

    // Idle intensity is THE critical factor
    P_a += (I * 0.025); // I × 2.5% (scales linearly with idle time)

    // Additional bonus for extreme idle time
    if (I >= 4) {
      P_a += 0.02; // +2% bonus for "Always on" settings
    }

    // ========================================
    // P_q: Query Efficiency Potential
    // ========================================
    let P_q = 0.04; // Base 4%

    // Large team size increases query chaos
    if (L > 20) {
      P_q += 0.04; // +4% if large data team (more ad-hoc queries)
    }

    // Low maturity = inefficient queries
    if (M <= 2) {
      P_q += 0.03; // +3% for "Wild West" query patterns
    }

    // Apply workload-specific adjustment
    const workloadAdj = this.workloadAdjustments[workload];
    if (workloadAdj) {
      P_q += workloadAdj.P_q;
    }

    // ========================================
    // Total Savings Calculation (Gemini Formula)
    // ========================================
    const totalSavingsRate = P_r + P_a + P_q;
    const monthlySavings = S * totalSavingsRate;
    const annualSavings = monthlySavings * 12;

    // Individual component breakdowns (for waterfall chart)
    const breakdown = {
      rightSizing: S * P_r,
      autoSuspend: S * P_a,
      queryOptimization: S * P_q
    };

    // ========================================
    // Efficiency Score (0-100, higher = worse)
    // ========================================
    const warehouseSprawlPenalty = Math.min((W - 5) * 2, 20);
    const maturityPenalty = M * 10; // Direct multiplier
    const idlePenalty = I * 5; // Idle time penalty

    const efficiencyScore = Math.max(0, Math.min(100,
      maturityPenalty + warehouseSprawlPenalty + idlePenalty
    ));

    // ========================================
    // Waste Distribution (dynamic based on inputs)
    // ========================================
    const wasteDistribution = this.calculateWasteDistribution(I, M, W, P);

    return {
      currentSpend: S,
      monthlySavings,
      annualSavings,
      savingsRate: totalSavingsRate,
      breakdown,
      efficiencyScore,
      wasteDistribution,
      inputs: { S, W, P, M, I, L, workload }
    };
  }

  /**
   * Calculate waste distribution based on slider inputs
   * Returns percentages that sum to 100%
   */
  calculateWasteDistribution(I, M, W, P) {
    // Start with base distribution
    let idleWaste = 30;
    let overprovisionWaste = 35;
    let inefficientSQLWaste = 35;

    // ========================================
    // Idle Intensity Impact (strongest factor)
    // ========================================
    if (I >= 4) {
      idleWaste += 15;          // High idle = more idle waste
      inefficientSQLWaste -= 10; // Reduce SQL portion
      overprovisionWaste -= 5;   // Reduce provisioning portion
    } else if (I <= 2) {
      idleWaste -= 10;           // Low idle = less idle waste
      overprovisionWaste += 5;   // Increase provisioning
      inefficientSQLWaste += 5;  // Increase SQL
    }

    // ========================================
    // Maturity Level Impact
    // ========================================
    if (M <= 2) {
      // "Wild West" = bad queries + no governance
      inefficientSQLWaste += 10;
      idleWaste += 5;
      overprovisionWaste -= 5;
    } else if (M >= 4) {
      // Well-governed = fewer SQL issues
      inefficientSQLWaste -= 5;
      overprovisionWaste += 5;
    }

    // ========================================
    // Warehouse Count Impact
    // ========================================
    if (W > 10) {
      overprovisionWaste += 10; // Sprawl = over-provisioning
      idleWaste -= 5;
      inefficientSQLWaste -= 5;
    }

    // ========================================
    // Provisioning Level Impact
    // ========================================
    if (P >= 4) {
      overprovisionWaste += 8; // "Always over-provision"
      idleWaste -= 4;
      inefficientSQLWaste -= 4;
    }

    // Ensure no negative values
    idleWaste = Math.max(0, idleWaste);
    overprovisionWaste = Math.max(0, overprovisionWaste);
    inefficientSQLWaste = Math.max(0, inefficientSQLWaste);

    // Normalize to 100%
    const total = idleWaste + overprovisionWaste + inefficientSQLWaste;

    return {
      idleTime: Math.round((idleWaste / total) * 100),
      overProvisioning: Math.round((overprovisionWaste / total) * 100),
      inefficientSQL: Math.round((inefficientSQLWaste / total) * 100)
    };
  }

  /**
   * Generate slider-based insights (Gemini specification)
   * Triggers specific insights based on slider values
   */
  generateInsights(inputs, results) {
    const insights = [];
    const { W, M, I, workload } = results.inputs;

    // ========================================
    // Critical Insight: Ghost Credit Leak
    // Triggers when: Idle Intensity ≥ 4
    // ========================================
    if (I >= 4) {
      insights.push({
        type: 'critical',
        icon: '🚨',
        title: 'The "Ghost Credit" Leak',
        description: 'Your warehouses are staying active significantly longer than necessary. We estimate that 15–25% of your spend consists of "ghost credits"—paying for compute when no queries are actually running.',
        solution: 'MaxMyCloud can automate your auto-suspend policies to millisecond precision, ensuring you stop paying the moment the last query finishes.',
        estimatedSavings: this.formatCurrency(results.breakdown.autoSuspend),
        priority: 'high'
      });
    }

    // ========================================
    // Warning: Resource Fragmentation
    // Triggers when: Warehouse Count > 10
    // ========================================
    if (W > 10) {
      insights.push({
        type: 'warning',
        icon: '🧩',
        title: 'Resource Fragmentation Alert',
        description: `With over ${W} active warehouses, your environment is likely suffering from "Sprawl." This leads to poor cache utilization and high overhead.`,
        solution: 'Our engine identifies underutilized clusters that can be consolidated, improving performance through better data caching while slashing baseline compute costs.',
        estimatedSavings: this.formatCurrency(results.breakdown.rightSizing),
        priority: 'high'
      });
    }

    // ========================================
    // Critical: "Wild West" Risk
    // Triggers when: Maturity ≤ 2
    // ========================================
    if (M <= 2) {
      insights.push({
        type: 'critical',
        icon: '🛡️',
        title: 'The "Wild West" Risk',
        description: 'No strict resource monitors = runaway queries. A single inefficient JOIN can burn thousands in minutes. Your governance maturity indicates significant exposure to query cost explosions.',
        solution: 'MaxMyCloud implements automated guardrails and cost limits per query, warehouse, or user. We prevent expensive surprises before they happen.',
        estimatedSavings: this.formatCurrency(results.breakdown.queryOptimization),
        priority: 'high'
      });
    }

    // ========================================
    // Workload-Specific Insights
    // ========================================
    if (workload === 'etl') {
      insights.push({
        type: 'info',
        icon: '📊',
        title: 'ETL Workload Optimization',
        description: 'Inefficient COPY INTO or MERGE statements are bloating costs. ETL workloads have the highest optimization potential through proper warehouse sizing and clustering strategies.',
        solution: 'We analyze ETL patterns and recommend optimal warehouse sizing, clustering keys, and incremental load strategies to reduce compute by 20-35%.',
        priority: 'medium'
      });
    } else if (workload === 'bi') {
      insights.push({
        type: 'info',
        icon: '📈',
        title: 'BI Concurrency Spikes',
        description: 'BI dashboards create unpredictable query bursts during business hours. You\'re likely over-provisioning warehouses to handle peak loads, wasting capacity during off-hours.',
        solution: 'Multi-Cluster auto-scaling allocates compute only when needed, reducing baseline costs by 20-40% while maintaining dashboard performance.',
        priority: 'medium'
      });
    } else if (workload === 'adhoc') {
      insights.push({
        type: 'warning',
        icon: '🔍',
        title: 'Ad-hoc Query Chaos',
        description: 'Ad-hoc workloads have the highest waste potential (up to 50%). Users run exploratory queries without cost awareness, leading to inefficient resource utilization.',
        solution: 'Implement query cost prediction and user-level budgets to prevent expensive surprises. We provide real-time cost visibility before queries execute.',
        priority: 'high'
      });
    } else if (workload === 'datascience') {
      insights.push({
        type: 'info',
        icon: '🔬',
        title: 'Data Science Efficiency',
        description: 'Data science workloads often involve iterative experimentation with varying compute needs. Inconsistent warehouse sizing leads to wasted capacity.',
        solution: 'Right-size warehouses for each experiment phase and implement auto-suspend for idle notebook sessions. Potential 15-25% reduction in data science compute costs.',
        priority: 'medium'
      });
    }

    // ========================================
    // Over-Provisioning Warning
    // Triggers when: Provisioning Level ≥ 4
    // ========================================
    if (inputs.provisioningLevel >= 4) {
      insights.push({
        type: 'warning',
        icon: '⚙️',
        title: 'Over-Provisioning Detected',
        description: 'Your provisioning strategy leans heavily toward "always over-provision." While this ensures performance, it results in significant wasted capacity during normal operations.',
        solution: 'Implement intelligent right-sizing recommendations based on actual query patterns. Start with 15% smaller warehouses and scale up only when needed.',
        priority: 'medium'
      });
    }

    return insights;
  }

  /**
   * Generate executive summary based on efficiency score
   */
  generateExecutiveSummary(results) {
    const { efficiencyScore } = results;

    let potential, overProvisioningEstimate, message;

    if (efficiencyScore > 70) {
      potential = 'High';
      overProvisioningEstimate = '35-50%';
      message = 'Your Snowflake environment has <strong>High Optimization Potential</strong>. Our analysis indicates you are likely over-provisioning by <strong>35-50%</strong>. Immediate action recommended.';
    } else if (efficiencyScore > 50) {
      potential = 'Medium';
      overProvisioningEstimate = '20-30%';
      message = 'Your Snowflake environment has <strong>Medium Optimization Potential</strong>. While your setup is functional, you are likely over-provisioning by <strong>20-30%</strong>. Significant savings are available.';
    } else {
      potential = 'Low';
      overProvisioningEstimate = '10-15%';
      message = 'Your Snowflake environment has <strong>Low Optimization Potential</strong>. Your governance and provisioning strategies are relatively efficient. Estimated over-provisioning: <strong>10-15%</strong>.';
    }

    return {
      potential,
      overProvisioningEstimate,
      summary: `${message} A 15-minute metadata audit will confirm these numbers with 100% accuracy.`
    };
  }

  /**
   * Parse spend input (handles strings with commas)
   */
  parseSpend(input) {
    if (typeof input === 'number') return input;
    if (!input) return 0;
    return parseFloat(input.toString().replace(/[^0-9.]/g, ''));
  }

  /**
   * Validate spend amount
   */
  isValidSpend(spend) {
    return !isNaN(spend) && spend >= 100 && spend <= 100000000;
  }

  /**
   * Format currency for display
   */
  formatCurrency(amount, includeDecimals = false) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: includeDecimals ? 2 : 0,
      maximumFractionDigits: includeDecimals ? 2 : 0
    }).format(amount);
  }

  /**
   * Format percentage for display
   */
  formatPercent(rate) {
    return `${Math.round(rate * 100)}%`;
  }

  /**
   * Format number with commas
   */
  formatNumber(num) {
    return new Intl.NumberFormat('en-US').format(Math.round(num));
  }
}

// Make available globally
if (typeof window !== 'undefined') {
  window.SnowflakeROICalculator = SnowflakeROICalculator;
}

// Export for Node.js (if applicable)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SnowflakeROICalculator;
}
