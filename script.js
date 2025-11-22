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

// Preset badges data
const presets = {
    javascript: { label: 'JavaScript', message: '', color: 'F7DF1E', labelColor: '323330', style: 'for-the-badge' },
    python: { label: 'Python', message: '', color: '3776AB', labelColor: 'FFD43B', style: 'for-the-badge' },
    rust: { label: 'Rust', message: '', color: '000000', labelColor: 'FFFFFF', style: 'for-the-badge' },
    r: { label: 'R', message: '', color: '276DC3', labelColor: 'FFFFFF', style: 'for-the-badge' },
    cpp: { label: 'C++', message: '', color: '00599C', labelColor: 'FFFFFF', style: 'for-the-badge' },
    java: { label: 'Java', message: '', color: 'ED8B00', labelColor: 'FFFFFF', style: 'for-the-badge' },
    go: { label: 'Go', message: '', color: '00ADD8', labelColor: 'FFFFFF', style: 'for-the-badge' },
    typescript: { label: 'TypeScript', message: '', color: '3178C6', labelColor: 'FFFFFF', style: 'for-the-badge' },
    c: { label: 'C', message: '', color: 'A8B9CC', labelColor: '000000', style: 'for-the-badge' },
    csharp: { label: 'C#', message: '', color: '239120', labelColor: 'FFFFFF', style: 'for-the-badge' },
    php: { label: 'PHP', message: '', color: '777BB4', labelColor: 'FFFFFF', style: 'for-the-badge' },
    ruby: { label: 'Ruby', message: '', color: 'CC342D', labelColor: 'FFFFFF', style: 'for-the-badge' },
    swift: { label: 'Swift', message: '', color: 'FA7343', labelColor: 'FFFFFF', style: 'for-the-badge' },
    kotlin: { label: 'Kotlin', message: '', color: '7F52FF', labelColor: 'FFFFFF', style: 'for-the-badge' },
    scala: { label: 'Scala', message: '', color: 'DC322F', labelColor: 'FFFFFF', style: 'for-the-badge' },
    perl: { label: 'Perl', message: '', color: '39457E', labelColor: 'FFFFFF', style: 'for-the-badge' },
    lua: { label: 'Lua', message: '', color: '2C2D72', labelColor: 'FFFFFF', style: 'for-the-badge' },
    haskell: { label: 'Haskell', message: '', color: '5D4F85', labelColor: 'FFFFFF', style: 'for-the-badge' },
    clojure: { label: 'Clojure', message: '', color: '5881D8', labelColor: 'FFFFFF', style: 'for-the-badge' },
    erlang: { label: 'Erlang', message: '', color: 'A90533', labelColor: 'FFFFFF', style: 'for-the-badge' },
    elixir: { label: 'Elixir', message: '', color: '4E2A8E', labelColor: 'FFFFFF', style: 'for-the-badge' },
    dart: { label: 'Dart', message: '', color: '00B4AB', labelColor: 'FFFFFF', style: 'for-the-badge' },
    flutter: { label: 'Flutter', message: '', color: '02569B', labelColor: 'FFFFFF', style: 'for-the-badge' },
    react: { label: 'React', message: '', color: '61DAFB', labelColor: '000000', style: 'for-the-badge' },
    vue: { label: 'Vue', message: '', color: '4FC08D', labelColor: 'FFFFFF', style: 'for-the-badge' },
    angular: { label: 'Angular', message: '', color: 'DD0031', labelColor: 'FFFFFF', style: 'for-the-badge' },
    svelte: { label: 'Svelte', message: '', color: 'FF3E00', labelColor: 'FFFFFF', style: 'for-the-badge' },
    nodejs: { label: 'Node.js', message: '', color: '339933', labelColor: 'FFFFFF', style: 'for-the-badge' },
    django: { label: 'Django', message: '', color: '092E20', labelColor: 'FFFFFF', style: 'for-the-badge' },
    flask: { label: 'Flask', message: '', color: '000000', labelColor: 'FFFFFF', style: 'for-the-badge' },
    spring: { label: 'Spring', message: '', color: '6DB33F', labelColor: 'FFFFFF', style: 'for-the-badge' },
    laravel: { label: 'Laravel', message: '', color: 'FF2D20', labelColor: 'FFFFFF', style: 'for-the-badge' },
    rails: { label: 'Rails', message: '', color: 'CC0000', labelColor: 'FFFFFF', style: 'for-the-badge' },
    express: { label: 'Express', message: '', color: '000000', labelColor: 'FFFFFF', style: 'for-the-badge' },
    fastapi: { label: 'FastAPI', message: '', color: '009688', labelColor: 'FFFFFF', style: 'for-the-badge' },
    graphql: { label: 'GraphQL', message: '', color: 'E10098', labelColor: 'FFFFFF', style: 'for-the-badge' },
    docker: { label: 'Docker', message: '', color: '2496ED', labelColor: 'FFFFFF', style: 'for-the-badge' },
    kubernetes: { label: 'Kubernetes', message: '', color: '326CE5', labelColor: 'FFFFFF', style: 'for-the-badge' },
    aws: { label: 'AWS', message: '', color: 'FF9900', labelColor: '000000', style: 'for-the-badge' },
    azure: { label: 'Azure', message: '', color: '0078D4', labelColor: 'FFFFFF', style: 'for-the-badge' },
    gcp: { label: 'GCP', message: '', color: '4285F4', labelColor: 'FFFFFF', style: 'for-the-badge' },
    linux: { label: 'Linux', message: '', color: 'FCC624', labelColor: '000000', style: 'for-the-badge' },
    windows: { label: 'Windows', message: '', color: '0078D4', labelColor: 'FFFFFF', style: 'for-the-badge' },
    macos: { label: 'macOS', message: '', color: '000000', labelColor: 'FFFFFF', style: 'for-the-badge' },
    ubuntu: { label: 'Ubuntu', message: '', color: 'E95420', labelColor: 'FFFFFF', style: 'for-the-badge' },
    centos: { label: 'CentOS', message: '', color: '262577', labelColor: 'FFFFFF', style: 'for-the-badge' },
    fedora: { label: 'Fedora', message: '', color: '294172', labelColor: 'FFFFFF', style: 'for-the-badge' },
    debian: { label: 'Debian', message: '', color: 'A81D33', labelColor: 'FFFFFF', style: 'for-the-badge' },
    arch: { label: 'Arch Linux', message: '', color: '1793D1', labelColor: 'FFFFFF', style: 'for-the-badge' },
    mysql: { label: 'MySQL', message: '', color: '4479A1', labelColor: 'FFFFFF', style: 'for-the-badge' },
    postgresql: { label: 'PostgreSQL', message: '', color: '4169E1', labelColor: 'FFFFFF', style: 'for-the-badge' },
    mongodb: { label: 'MongoDB', message: '', color: '47A248', labelColor: 'FFFFFF', style: 'for-the-badge' },
    redis: { label: 'Redis', message: '', color: 'DC382D', labelColor: 'FFFFFF', style: 'for-the-badge' },
    sqlite: { label: 'SQLite', message: '', color: '003B57', labelColor: 'FFFFFF', style: 'for-the-badge' },
    firebase: { label: 'Firebase', message: '', color: 'FFCA28', labelColor: '000000', style: 'for-the-badge' },
    heroku: { label: 'Heroku', message: '', color: '430098', labelColor: 'FFFFFF', style: 'for-the-badge' },
    vercel: { label: 'Vercel', message: '', color: '000000', labelColor: 'FFFFFF', style: 'for-the-badge' },
    netlify: { label: 'Netlify', message: '', color: '00C58E', labelColor: 'FFFFFF', style: 'for-the-badge' },
    github: { label: 'GitHub', message: '', color: '181717', labelColor: 'FFFFFF', style: 'for-the-badge' },
    gitlab: { label: 'GitLab', message: '', color: 'FC6D26', labelColor: 'FFFFFF', style: 'for-the-badge' },
    bitbucket: { label: 'Bitbucket', message: '', color: '0052CC', labelColor: 'FFFFFF', style: 'for-the-badge' }
};

// Function to generate badge URL
function generateBadgeUrl() {
    const label = encodeURIComponent(labelInput.value || 'label');
    const message = encodeURIComponent(messageInput.value);
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

// Function to apply preset
function applyPreset(presetKey) {
    const preset = presets[presetKey];
    labelInput.value = preset.label;
    messageInput.value = preset.message;
    colorHexInput.value = preset.color;
    labelColorHexInput.value = preset.labelColor;
    styleSelect.value = preset.style;
    syncColorInputs('hex');
    syncLabelColorInputs('hex');
    updateBadge();
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

// Event listener for preset select
document.getElementById('preset-select').addEventListener('change', (e) => {
    const presetKey = e.target.value;
    if (presetKey) {
        applyPreset(presetKey);
    }
});

// Initialize badge on page load
updateBadge();