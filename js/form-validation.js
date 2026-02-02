/**
 * Form Validation for MaxMyCloud Calculator
 * Validates user inputs including business email verification
 */

class FormValidator {
    constructor() {
        // Personal email domains to block
        this.personalEmailDomains = [
            'gmail.com', 'yahoo.com', 'hotmail.com',
            'outlook.com', 'aol.com', 'icloud.com',
            'live.com', 'msn.com', 'protonmail.com',
            'mail.com', 'yandex.com', 'gmx.com',
            'zoho.com', 'tutanota.com', 'me.com'
        ];

        // Validation rules
        this.rules = {
            monthlySpend: {
                required: true,
                min: 100,
                max: 100000000,
                type: 'currency'
            },
            email: {
                required: true,
                type: 'business-email'
            },
            name: {
                required: true,
                minLength: 2
            }
        };
    }

    /**
     * Validate a field based on its rules
     * @param {string} fieldName - Name of the field
     * @param {*} value - Value to validate
     * @returns {Object} {valid: boolean, error: string}
     */
    validate(fieldName, value) {
        const rule = this.rules[fieldName];
        if (!rule) return { valid: true };

        // Required check
        if (rule.required && this.isEmpty(value)) {
            return {
                valid: false,
                error: `${this.getFieldLabel(fieldName)} is required`
            };
        }

        // If empty and not required, pass
        if (this.isEmpty(value) && !rule.required) {
            return { valid: true };
        }

        // Type-specific validation
        if (rule.type === 'currency') {
            return this.validateCurrency(value, rule);
        }

        if (rule.type === 'business-email') {
            return this.validateBusinessEmail(value);
        }

        // Min length check
        if (rule.minLength && value.length < rule.minLength) {
            return {
                valid: false,
                error: `${this.getFieldLabel(fieldName)} must be at least ${rule.minLength} characters`
            };
        }

        return { valid: true };
    }

    /**
     * Validate currency input
     */
    validateCurrency(value, rule) {
        const numValue = parseFloat(value.toString().replace(/[^0-9.]/g, ''));

        if (isNaN(numValue)) {
            return { valid: false, error: 'Please enter a valid dollar amount' };
        }

        if (rule.min && numValue < rule.min) {
            return { valid: false, error: `Minimum amount is $${this.formatNumber(rule.min)}` };
        }

        if (rule.max && numValue > rule.max) {
            return { valid: false, error: 'Amount exceeds maximum limit' };
        }

        return { valid: true };
    }

    /**
     * Validate business email (block personal domains)
     */
    validateBusinessEmail(email) {
        // Basic email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return { valid: false, error: 'Please enter a valid email address' };
        }

        // Extract domain
        const domain = email.split('@')[1]?.toLowerCase();

        // Check against personal email domains
        if (this.personalEmailDomains.includes(domain)) {
            return {
                valid: false,
                error: 'Please use your business email address. Personal email addresses (Gmail, Yahoo, etc.) are not accepted.'
            };
        }

        return { valid: true };
    }

    /**
     * Check if value is empty
     */
    isEmpty(value) {
        if (value === null || value === undefined) return true;
        if (typeof value === 'string') return value.trim() === '';
        if (Array.isArray(value)) return value.length === 0;
        return false;
    }

    /**
     * Get field label for error messages
     */
    getFieldLabel(fieldName) {
        const labels = {
            monthlySpend: 'Monthly spend',
            email: 'Email address',
            name: 'Full name',
            company: 'Company name'
        };
        return labels[fieldName] || fieldName;
    }

    /**
     * Format number with commas
     */
    formatNumber(num) {
        return new Intl.NumberFormat('en-US').format(num);
    }

    /**
     * Show error message in UI
     */
    showError(inputElement, errorMessage) {
        const errorId = `${inputElement.id}-error`;
        const errorElement = document.getElementById(errorId);

        if (errorElement) {
            errorElement.textContent = errorMessage;
        }

        inputElement.classList.add('error');
        inputElement.setAttribute('aria-invalid', 'true');
    }

    /**
     * Clear error message from UI
     */
    clearError(inputElement) {
        const errorId = `${inputElement.id}-error`;
        const errorElement = document.getElementById(errorId);

        if (errorElement) {
            errorElement.textContent = '';
        }

        inputElement.classList.remove('error');
        inputElement.removeAttribute('aria-invalid');
    }

    /**
     * Validate entire form
     * @param {HTMLFormElement} form - Form element
     * @returns {Object} {valid: boolean, errors: Object}
     */
    validateForm(form) {
        const formData = new FormData(form);
        const errors = {};
        let isValid = true;

        // Get all inputs
        const inputs = form.querySelectorAll('input[name], select[name], textarea[name]');

        inputs.forEach(input => {
            if (this.rules[input.name]) {
                const value = input.type === 'checkbox'
                    ? (input.checked ? input.value : '')
                    : input.value;

                const result = this.validate(input.name, value);

                if (!result.valid) {
                    errors[input.name] = result.error;
                    this.showError(input, result.error);
                    isValid = false;
                } else {
                    this.clearError(input);
                }
            }
        });

        return { valid: isValid, errors };
    }
}

// Make available globally
if (typeof window !== 'undefined') {
    window.FormValidator = FormValidator;
}

// Export for Node.js (if applicable)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FormValidator;
}
