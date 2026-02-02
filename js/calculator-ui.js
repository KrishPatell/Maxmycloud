/**
 * MaxMyCloud Calculator UI Controller - Gemini Spec
 * Handles all user interactions and DOM updates
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize calculator, validator, and charts
    const calculator = new SnowflakeROICalculator();
    const validator = new FormValidator();
    const chartRenderer = new SnowflakeCharts();

    // DOM Elements
    const form = document.getElementById('savings-calculator');
    const stepIndicators = document.querySelectorAll('.step');
    const calcSteps = document.querySelectorAll('.calc-step');
    const monthlySpendInput = document.getElementById('monthly-spend');
    const spendRangeSelect = document.getElementById('spend-range');
    const analyzingState = document.getElementById('analyzing-state');
    const resultsContainer = document.getElementById('results-container');
    const emailModal = document.getElementById('email-modal');
    const emailForm = document.getElementById('email-capture-form');

    // Current state
    let currentStep = 1;
    let calculationResults = null;

    /**
     * Send height update to parent window (for iframe auto-resize)
     */
    function updateIframeHeight() {
        if (window.parent !== window) {
            const height = Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
            );
            window.parent.postMessage({
                type: 'calculator-height',
                height: height
            }, '*');
        }
    }

    /**
     * Initialize event listeners
     */
    function init() {
        console.log('Initializing calculator UI...');
        
        // Update height on window resize
        window.addEventListener('resize', () => {
            setTimeout(updateIframeHeight, 100);
        });
        
        // Listen for height requests from parent
        window.addEventListener('message', function(event) {
            if (event.data && event.data.type === 'request-height') {
                updateIframeHeight();
            }
        });
        
        // Initial height update
        setTimeout(updateIframeHeight, 500);
        
        // Make function globally accessible
        window.updateIframeHeight = updateIframeHeight;

        // Navigation buttons
        const nextButtons = document.querySelectorAll('.btn-next');
        console.log('Found next buttons:', nextButtons.length);
        nextButtons.forEach(btn => {
            console.log('Attaching click handler to:', btn);
            btn.addEventListener('click', () => handleNext(btn));
        });

        document.querySelectorAll('.btn-back').forEach(btn => {
            btn.addEventListener('click', () => handleBack(btn));
        });

        document.querySelectorAll('.btn-calculate').forEach(btn => {
            btn.addEventListener('click', handleCalculate);
        });

        document.querySelectorAll('[data-skip-to="calculate"]').forEach(btn => {
            btn.addEventListener('click', handleCalculate);
        });

        // Spend input synchronization
        monthlySpendInput.addEventListener('input', handleSpendInput);
        spendRangeSelect.addEventListener('change', handleSpendRangeChange);

        // Real-time validation
        monthlySpendInput.addEventListener('blur', () => {
            const result = validator.validate('monthlySpend', monthlySpendInput.value);
            if (!result.valid) {
                validator.showError(monthlySpendInput, result.error);
            } else {
                validator.clearError(monthlySpendInput);
            }
        });

        // Initialize sliders
        initSliders();

        // Email modal
        const unlockBtn = document.getElementById('btn-unlock-report');
        if (unlockBtn) {
            unlockBtn.addEventListener('click', openEmailModal);
        }

        document.querySelector('.modal-close').addEventListener('click', closeEmailModal);
        document.querySelector('.modal-backdrop').addEventListener('click', closeEmailModal);
        document.getElementById('btn-close-success').addEventListener('click', closeEmailModal);

        // Email form submission
        emailForm.addEventListener('submit', handleEmailSubmit);

        // Real-time email validation
        const emailInput = document.getElementById('report-email');
        emailInput.addEventListener('blur', () => {
            const result = validator.validate('email', emailInput.value);
            if (!result.valid) {
                validator.showError(emailInput, result.error);
            } else {
                validator.clearError(emailInput);
            }
        });

        // Format spend input with commas
        monthlySpendInput.addEventListener('blur', formatSpendInput);
    }

    /**
     * Initialize slider event listeners
     */
    function initSliders() {
        const sliders = [
            { id: 'provisioning-slider', display: 'provisioning-value' },
            { id: 'maturity-slider', display: 'maturity-value' },
            { id: 'idle-slider', display: 'idle-value' }
        ];

        sliders.forEach(({ id, display }) => {
            const slider = document.getElementById(id);
            const displayEl = document.getElementById(display);

            if (slider && displayEl) {
                slider.addEventListener('input', (e) => {
                    displayEl.textContent = e.target.value;
                });
            }
        });
    }

    /**
     * Handle next button click
     */
    function handleNext(btn) {
        console.log('handleNext called', btn);
        const nextStep = parseInt(btn.dataset.next);
        console.log('Next step:', nextStep);
        console.log('Current step:', currentStep);
        console.log('Spend input value:', monthlySpendInput.value);

        // Validate current step if step 1
        if (currentStep === 1) {
            const result = validator.validate('monthlySpend', monthlySpendInput.value);
            console.log('Validation result:', result);
            if (!result.valid) {
                validator.showError(monthlySpendInput, result.error);
                return;
            }
            validator.clearError(monthlySpendInput);
        }

        console.log('Going to step:', nextStep);
        goToStep(nextStep);
    }

    /**
     * Handle back button click
     */
    function handleBack(btn) {
        const prevStep = parseInt(btn.dataset.back);
        goToStep(prevStep);
    }

    /**
     * Navigate to specific step
     */
    function goToStep(step) {
        console.log('goToStep called with step:', step);
        currentStep = step;

        // Update step indicators
        stepIndicators.forEach((indicator, index) => {
            console.log('Indicator', index, 'step:', indicator.dataset.step);
            if (index < step) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });

        // Update visible step
        calcSteps.forEach(calcStep => {
            const stepNum = parseInt(calcStep.dataset.step);
            console.log('CalcStep:', stepNum, 'target:', step, 'match:', stepNum === step);
            if (stepNum === step) {
                calcStep.classList.add('active');
                console.log('Added active class to step', stepNum);
            } else {
                calcStep.classList.remove('active');
            }
        });
        
        // Update iframe height after step change
        setTimeout(updateIframeHeight, 100);
        
        console.log('goToStep completed');
    }

    /**
     * Handle spend input changes
     */
    function handleSpendInput(e) {
        // Clear dropdown when typing
        spendRangeSelect.value = '';

        // Remove non-numeric characters except comma and period
        let value = e.target.value.replace(/[^\d.,]/g, '');
        e.target.value = value;
    }

    /**
     * Handle spend range dropdown change
     */
    function handleSpendRangeChange(e) {
        const value = e.target.value;
        if (value) {
            monthlySpendInput.value = formatNumberWithCommas(value);
            validator.clearError(monthlySpendInput);
        }
    }

    /**
     * Format spend input with commas
     */
    function formatSpendInput() {
        const value = monthlySpendInput.value.replace(/,/g, '');
        if (value && !isNaN(value)) {
            monthlySpendInput.value = formatNumberWithCommas(value);
        }
    }

    /**
     * Handle calculate button click - WITH 3-SECOND ANALYZING ANIMATION
     */
    async function handleCalculate() {
        // Validate monthly spend
        const spendResult = validator.validate('monthlySpend', monthlySpendInput.value);
        if (!spendResult.valid) {
            validator.showError(monthlySpendInput, spendResult.error);
            goToStep(1);
            return;
        }

        // Gather form data
        const formData = gatherFormData();

        // Show 3-second analyzing animation
        await showAnalyzing();

        // Perform calculation with new engine
        calculationResults = calculator.calculate(formData);
        calculationResults.insights = calculator.generateInsights(formData, calculationResults);
        calculationResults.executiveSummary = calculator.generateExecutiveSummary(calculationResults);

        // Hide analyzing, show results
        hideAnalyzing();
        displayResults(calculationResults);
        renderCharts(calculationResults);

        // Announce to screen readers
        announceResults(calculationResults);
        
        // Update iframe height after results displayed
        setTimeout(() => {
            updateIframeHeight();
            // Update again after charts render
            setTimeout(updateIframeHeight, 500);
        }, 100);
    }

    /**
     * Show analyzing state with 3-second progressive animation (GEMINI SPEC)
     */
    async function showAnalyzing() {
        form.classList.add('hidden');
        analyzingState.classList.remove('hidden');
        resultsContainer.classList.add('hidden');
        updateIframeHeight();

        const messages = [
            'Scanning warehouse metadata patterns...',
            'Identifying idle-time outliers...',
            'Benchmarking against industry peers...'
        ];

        const messageEl = document.getElementById('analyzing-message');
        const progressBar = document.getElementById('progress-bar');

        let messageIndex = 0;
        const messageInterval = setInterval(() => {
            messageIndex++;
            if (messageIndex < messages.length) {
                messageEl.textContent = messages[messageIndex];
            }
        }, 1000);

        let progress = 0;
        const progressInterval = setInterval(() => {
            progress += 33.33;
            progressBar.style.width = `${Math.min(progress, 100)}%`;
        }, 1000);

        return new Promise((resolve) => {
            setTimeout(() => {
                clearInterval(messageInterval);
                clearInterval(progressInterval);
                progressBar.style.width = '100%';
                resolve();
            }, 3000);
        });
    }

    /**
     * Hide analyzing state
     */
    function hideAnalyzing() {
        analyzingState.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
        setTimeout(updateIframeHeight, 100);

        // Reset progress for next use
        setTimeout(() => {
            document.getElementById('progress-bar').style.width = '0%';
            document.getElementById('analyzing-message').textContent = 'Scanning warehouse metadata patterns...';
        }, 500);
    }

    /**
     * Gather all form data (including sliders)
     */
    function gatherFormData() {
        return {
            monthlySpend: monthlySpendInput.value.replace(/,/g, ''),
            warehouseCount: document.getElementById('warehouse-count')?.value || 5,
            workloadType: document.getElementById('workload-type')?.value || 'etl',
            provisioningLevel: document.getElementById('provisioning-slider')?.value || 3,
            maturityLevel: document.getElementById('maturity-slider')?.value || 3,
            idleIntensity: document.getElementById('idle-slider')?.value || 3,
            teamSize: document.getElementById('team-size')?.value || 0
        };
    }

    /**
     * Display calculation results
     */
    function displayResults(results) {
        // Current spend
        document.getElementById('current-spend').textContent = calculator.formatCurrency(results.currentSpend);

        // Savings amount (single value now, not range)
        document.getElementById('savings-amount').textContent = calculator.formatCurrency(results.monthlySavings);

        // Savings percentage
        document.getElementById('savings-percentage').textContent = `(${calculator.formatPercent(results.savingsRate)} reduction)`;

        // Annual savings
        document.getElementById('annual-savings').textContent = calculator.formatCurrency(results.annualSavings);

        // Display insights
        displayInsights(results.insights || []);

        // Executive summary
        displayExecutiveSummary(results.executiveSummary);

        // Scroll to results
        resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    /**
     * Render all Chart.js visualizations
     */
    function renderCharts(results) {
        chartRenderer.renderAll(results);
    }

    /**
     * Display dynamic insights
     */
    function displayInsights(insights) {
        const insightsList = document.getElementById('insights-list');
        const insightsContainer = document.getElementById('insights-container');

        if (!insights || insights.length === 0) {
            insightsContainer.style.display = 'none';
            return;
        }

        insightsContainer.style.display = 'block';
        insightsList.innerHTML = '';

        insights.forEach(insight => {
            const card = document.createElement('div');
            card.className = `insight-card ${insight.type}`;

            // Build solution HTML
            let solutionHTML = `<div class="insight-solution">${insight.solution}</div>`;

            // Add estimated savings if available
            if (insight.estimatedSavings) {
                solutionHTML += `<div class="insight-savings">Estimated savings: ${insight.estimatedSavings}/month</div>`;
            }

            card.innerHTML = `
                <div class="insight-header">
                    <span class="insight-icon">${insight.icon}</span>
                    <h4 class="insight-title">${insight.title}</h4>
                </div>
                <p class="insight-description">${insight.description}</p>
                ${solutionHTML}
            `;

            insightsList.appendChild(card);
        });
    }

    /**
     * Display executive summary
     */
    function displayExecutiveSummary(summary) {
        const container = document.getElementById('executive-summary');
        if (!summary || !container) return;

        container.innerHTML = `
            <h3>Executive Summary</h3>
            <p>${summary.summary}</p>
        `;
    }

    /**
     * Announce results to screen readers
     */
    function announceResults(results) {
        const announcement = document.getElementById('results-announcement');
        const text = `Estimated savings: ${calculator.formatCurrency(results.monthlySavings)} per month, or ${calculator.formatPercent(results.savingsRate)} reduction`;
        announcement.textContent = text;
    }

    /**
     * Open email capture modal
     */
    function openEmailModal() {
        emailModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        // Focus on first input
        setTimeout(() => {
            document.getElementById('report-name').focus();
        }, 100);
    }

    /**
     * Close email capture modal
     */
    function closeEmailModal() {
        emailModal.classList.add('hidden');
        document.body.style.overflow = '';

        // Reset form if success was shown
        const successDiv = document.getElementById('email-success');
        if (!successDiv.classList.contains('hidden')) {
            successDiv.classList.add('hidden');
            emailForm.classList.remove('hidden');
            emailForm.reset();
        }
    }

    /**
     * Handle email form submission
     */
    async function handleEmailSubmit(e) {
        e.preventDefault();

        // Validate form
        const nameInput = document.getElementById('report-name');
        const emailInput = document.getElementById('report-email');

        const nameResult = validator.validate('name', nameInput.value);
        const emailResult = validator.validate('email', emailInput.value);

        if (!nameResult.valid) {
            validator.showError(nameInput, nameResult.error);
            return;
        }

        if (!emailResult.valid) {
            validator.showError(emailInput, emailResult.error);
            return;
        }

        // Gather form data
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            company: document.getElementById('report-company').value,
            consultation: document.querySelector('input[name="consultation"]:checked')?.value || 'no',
            calculatorData: calculationResults
        };

        // Disable submit button
        const submitBtn = document.getElementById('btn-submit-report');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        try {
            // Submit to Formspree
            const response = await fetch('https://formspree.io/f/xvgqlgyo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    consultation: formData.consultation,
                    monthlySpend: calculationResults.currentSpend,
                    estimatedSavings: calculator.formatCurrency(calculationResults.monthlySavings),
                    savingsRate: calculator.formatPercent(calculationResults.savingsRate),
                    efficiencyScore: calculationResults.efficiencyScore,
                    _subject: 'New Calculator Lead - Detailed Report Request'
                })
            });

            if (response.ok) {
                // Show success message
                emailForm.classList.add('hidden');
                document.getElementById('email-success').classList.remove('hidden');
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            alert('There was an error submitting your request. Please try again or contact us directly at support@maxmycloud.com');
            console.error('Form submission error:', error);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send My Report →';
        }
    }

    /**
     * Format number with commas
     */
    function formatNumberWithCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    // Initialize on page load
    init();
});
