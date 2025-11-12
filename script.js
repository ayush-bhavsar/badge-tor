const labelInput = document.getElementById('label');
const messageInput = document.getElementById('message');
const colorInput = document.getElementById('color');
const styleSelect = document.getElementById('style');
const badgePreview = document.getElementById('badge-preview');
const markdownLinkInput = document.getElementById('markdown-link');
const copyButton = document.getElementById('copy-button');

function updateBadge() {
    const label = encodeURIComponent(labelInput.value || ' ');
    const message = encodeURIComponent(messageInput.value || ' ');
    const color = colorInput.value.substring(1); // Remove #
    const style = styleSelect.value;

    const badgeUrl = `https://img.shields.io/badge/${label}-${message}-${color}?style=${style}`;
    
    badgePreview.src = badgeUrl;
    markdownLinkInput.value = `![${labelInput.value}](${badgeUrl})`;
}

labelInput.addEventListener('input', updateBadge);
messageInput.addEventListener('input', updateBadge);
colorInput.addEventListener('input', updateBadge);
styleSelect.addEventListener('change', updateBadge);

copyButton.addEventListener('click', () => {
    markdownLinkInput.select();
    document.execCommand('copy');
    copyButton.textContent = 'Copied!';
    setTimeout(() => {
        copyButton.textContent = 'Copy';
    }, 2000);
});

// Initial badge update
updateBadge();