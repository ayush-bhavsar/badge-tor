// Get DOM elements
const labelInput = document.getElementById('label');
const messageInput = document.getElementById('message');
const labelColorInput = document.getElementById('label-color');
const labelColorHexInput = document.getElementById('label-color-hex');
const colorInput = document.getElementById('color');
const colorHexInput = document.getElementById('color-hex');
const styleSelect = document.getElementById('style');
const badgePreview = document.getElementById('badge-preview');
const markdownLink = document.getElementById('markdown-link');
const copyButton = document.getElementById('copy-button');
const successMessage = document.getElementById('success-message');

// Function to generate badge URL
function generateBadgeUrl() {
    const label = encodeURIComponent(labelInput.value || 'label');
    const message = encodeURIComponent(messageInput.value || 'message');
    const labelColor = labelColorHexInput.value.replace('#', '');
    const color = colorHexInput.value.replace('#', '');
    const style = styleSelect.value;
    
    return `https://img.shields.io/badge/${label}-${message}-${color}?style=${style}&labelColor=${labelColor}`;
}

// Function to update badge preview and markdown
function updateBadge() {
    const url = generateBadgeUrl();
    badgePreview.src = url;
    markdownLink.value = `![Badge](${url})`;
}

// Function to sync label color inputs
function syncLabelColorInputs(source) {
    if (source === 'picker') {
        const hex = labelColorInput.value.replace('#', '');
        labelColorHexInput.value = hex;
    } else {
        let hex = labelColorHexInput.value.replace('#', '');
        // Ensure valid hex format
        if (/^[0-9A-Fa-f]{3,6}$/.test(hex)) {
            labelColorInput.value = '#' + hex;
        }
    }
    updateBadge();
}

// Function to sync color inputs
function syncColorInputs(source) {
    if (source === 'picker') {
        const hex = colorInput.value.replace('#', '');
        colorHexInput.value = hex;
    } else {
        let hex = colorHexInput.value.replace('#', '');
        // Ensure valid hex format
        if (/^[0-9A-Fa-f]{3,6}$/.test(hex)) {
            colorInput.value = '#' + hex;
        }
    }
    updateBadge();
}

// Function to show success message
function showSuccessMessage() {
    successMessage.classList.add('show');
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 2000);
}

// Event listeners
labelInput.addEventListener('input', updateBadge);
messageInput.addEventListener('input', updateBadge);
labelColorInput.addEventListener('input', () => syncLabelColorInputs('picker'));
labelColorHexInput.addEventListener('input', () => syncLabelColorInputs('hex'));
colorInput.addEventListener('input', () => syncColorInputs('picker'));
colorHexInput.addEventListener('input', () => syncColorInputs('hex'));
styleSelect.addEventListener('change', updateBadge);

// Copy to clipboard functionality
copyButton.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(markdownLink.value);
        showSuccessMessage();
        copyButton.textContent = 'Copied!';
        copyButton.style.background = '#2196f3';
        setTimeout(() => {
            copyButton.textContent = 'Copy';
            copyButton.style.background = '#4caf50';
        }, 2000);
    } catch (err) {
        // Fallback for older browsers
        markdownLink.select();
        document.execCommand('copy');
        showSuccessMessage();
        copyButton.textContent = 'Copied!';
        copyButton.style.background = '#2196f3';
        setTimeout(() => {
            copyButton.textContent = 'Copy';
            copyButton.style.background = '#4caf50';
        }, 2000);
    }
});

// Handle Enter key on inputs
document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            updateBadge();
        }
    });
});

// Initialize badge on page load
updateBadge();