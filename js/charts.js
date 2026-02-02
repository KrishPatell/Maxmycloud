/**
 * Chart.js Visualizations for Snowflake ROI Calculator
 * Implements: Waterfall Chart, Efficiency Gauge, Waste Donut
 */

class SnowflakeCharts {
  constructor() {
    this.charts = {};
  }

  /**
   * Render all charts
   */
  renderAll(results) {
    this.renderWaterfallChart(results);
    this.renderEfficiencyGauge(results);
    this.renderWasteDonut(results);
  }

  /**
   * Waterfall Chart - Shows savings breakdown
   * Horizontal bars: Current Spend → Right-Sizing → Auto-Suspend → Query Opt → Target Spend
   */
  renderWaterfallChart(results) {
    const ctx = document.getElementById('waterfall-chart');
    if (!ctx) return;

    // Destroy existing chart
    if (this.charts.waterfall) {
      this.charts.waterfall.destroy();
    }

    // Calculate annual values for waterfall
    const current = results.currentSpend * 12;
    const rightSizing = -results.breakdown.rightSizing * 12;
    const autoSuspend = -results.breakdown.autoSuspend * 12;
    const queryOpt = -results.breakdown.queryOptimization * 12;
    const target = (results.currentSpend - results.monthlySavings) * 12;

    this.charts.waterfall = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Current Annual Spend', 'Right-Sizing Savings', 'Auto-Suspend Savings', 'Query Optimization', 'Target Annual Spend'],
        datasets: [{
          label: 'Amount ($)',
          data: [current, rightSizing, autoSuspend, queryOpt, target],
          backgroundColor: [
            'rgba(239, 68, 68, 0.8)',   // Red - Current spend
            'rgba(59, 130, 246, 0.8)',   // Blue - Right-sizing
            'rgba(139, 92, 246, 0.8)',   // Purple - Auto-suspend
            'rgba(16, 185, 129, 0.8)',   // Green - Query opt
            'rgba(16, 185, 129, 0.9)'    // Green - Target
          ],
          borderColor: [
            'rgba(239, 68, 68, 1)',
            'rgba(59, 130, 246, 1)',
            'rgba(139, 92, 246, 1)',
            'rgba(16, 185, 129, 1)',
            'rgba(16, 185, 129, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const value = Math.abs(ctx.raw);
                return `$${value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
              }
            }
          }
        },
        scales: {
          x: {
            ticks: {
              callback: (val) => {
                const absVal = Math.abs(val);
                if (absVal >= 1000000) {
                  return `$${(absVal / 1000000).toFixed(1)}M`;
                } else if (absVal >= 1000) {
                  return `$${(absVal / 1000).toFixed(0)}K`;
                }
                return `$${absVal}`;
              }
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            }
          },
          y: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }

  /**
   * Efficiency Gauge - Doughnut chart showing 0-100 score
   * Higher score = more waste (inverse of efficiency)
   */
  renderEfficiencyGauge(results) {
    const ctx = document.getElementById('efficiency-gauge');
    if (!ctx) return;

    // Destroy existing chart
    if (this.charts.gauge) {
      this.charts.gauge.destroy();
    }

    const score = results.efficiencyScore;
    let color, label;

    // Determine color and label based on score (higher = worse)
    if (score > 70) {
      color = 'rgba(239, 68, 68, 0.8)';  // Red - High waste
      label = 'High Waste';
    } else if (score > 50) {
      color = 'rgba(251, 191, 36, 0.8)'; // Yellow - Medium waste
      label = 'Medium Waste';
    } else {
      color = 'rgba(16, 185, 129, 0.8)'; // Green - Low waste
      label = 'Low Waste';
    }

    // Update label text
    const labelEl = document.getElementById('efficiency-label');
    if (labelEl) {
      labelEl.textContent = `${score}/100 - ${label}`;
    }

    this.charts.gauge = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [score, 100 - score],
          backgroundColor: [
            color,
            'rgba(226, 232, 240, 0.3)' // Light gray for remaining
          ],
          borderWidth: 0,
          circumference: 180,
          rotation: 270
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        cutout: '75%',
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        }
      }
    });
  }

  /**
   * Waste Donut Chart - Shows distribution of cost waste
   * Idle Time, Over-provisioning, Inefficient SQL
   */
  renderWasteDonut(results) {
    const ctx = document.getElementById('waste-donut');
    if (!ctx) return;

    // Destroy existing chart
    if (this.charts.donut) {
      this.charts.donut.destroy();
    }

    const waste = results.wasteDistribution;

    this.charts.donut = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Idle Time', 'Over-provisioning', 'Inefficient SQL'],
        datasets: [{
          data: [waste.idleTime, waste.overProvisioning, waste.inefficientSQL],
          backgroundColor: [
            'rgba(239, 68, 68, 0.8)',   // Red - Idle time
            'rgba(251, 191, 36, 0.8)',  // Yellow - Over-provisioning
            'rgba(139, 92, 246, 0.8)'   // Purple - Inefficient SQL
          ],
          borderColor: '#ffffff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 15,
              font: {
                size: 13
              }
            }
          },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                return `${ctx.label}: ${ctx.raw}%`;
              }
            }
          }
        }
      }
    });
  }

  /**
   * Destroy all charts (cleanup)
   */
  destroyAll() {
    Object.values(this.charts).forEach(chart => {
      if (chart) chart.destroy();
    });
    this.charts = {};
  }
}

// Make available globally
if (typeof window !== 'undefined') {
  window.SnowflakeCharts = SnowflakeCharts;
}
