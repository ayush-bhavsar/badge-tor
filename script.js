// Get DOM elements
const labelInput = document.getElementById('label');
const messageInput = document.getElementById('message');
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
    const color = colorHexInput.value.replace('#', '');
    const style = styleSelect.value;
    
    return `https://img.shields.io/badge/${label}-${message}-${color}?style=${style}`;
}

// Function to update badge preview and markdown
function updateBadge() {
    const url = generateBadgeUrl();
    badgePreview.src = url;
    markdownLink.value = `![Badge](${url})`;
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
colorInput.addEventListener('input', () => syncColorInputs('picker'));
colorHexInput.addEventListener('input', () => syncColorInputs('hex'));
styleSelect.addEventListener('change', updateBadge);

// Copy to clipboard functionality
copyButton.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(markdownLink.value);
        showSuccessMessage();
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
            copyButton.textContent = 'Copy';
        }, 2000);
    } catch (err) {
        // Fallback for older browsers
        markdownLink.select();
        document.execCommand('copy');
        showSuccessMessage();
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