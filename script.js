// Get DOM elements
const labelInput = document.getElementById('label');
const messageInput = document.getElementById('message');
const includeMessageCheckbox = document.getElementById('include-message');
const labelColorInput = document.getElementById('label-color');
const labelColorHexInput = document.getElementById('label-color-hex');
const colorInput = document.getElementById('color');
const colorHexInput = document.getElementById('color-hex');
const styleSelect = document.getElementById('style');
const logoInput = document.getElementById('logo');
const logoColorInput = document.getElementById('logo-color');
const logoColorHexInput = document.getElementById('logo-color-hex');
const badgePreview = document.getElementById('badge-preview');
const markdownLink = document.getElementById('markdown-link');
const copyButton = document.getElementById('copy-button');
const successMessage = document.getElementById('success-message');

// Preset badges data
const presets = {
    javascript: { label: 'JavaScript', message: '', color: '4CAF50', labelColor: '323330', style: 'for-the-badge' },
    python: { label: 'Python', message: '', color: '4CAF50', labelColor: 'FFD43B', style: 'for-the-badge' },
    rust: { label: 'Rust', message: '', color: '4CAF50', labelColor: 'FF6B6B', style: 'for-the-badge' },
    r: { label: 'R', message: '', color: '4CAF50', labelColor: '276DC3', style: 'for-the-badge' },
    cpp: { label: 'C++', message: '', color: '4CAF50', labelColor: '00599C', style: 'for-the-badge' },
    java: { label: 'Java', message: '', color: '4CAF50', labelColor: 'ED8B00', style: 'for-the-badge' },
    go: { label: 'Go', message: '', color: '4CAF50', labelColor: '00ADD8', style: 'for-the-badge' },
    typescript: { label: 'TypeScript', message: '', color: '4CAF50', labelColor: '3178C6', style: 'for-the-badge' },
    c: { label: 'C', message: '', color: '4CAF50', labelColor: 'A8B9CC', style: 'for-the-badge' },
    csharp: { label: 'C#', message: '', color: '4CAF50', labelColor: '239120', style: 'for-the-badge' },
    php: { label: 'PHP', message: '', color: '4CAF50', labelColor: '777BB4', style: 'for-the-badge' },
    ruby: { label: 'Ruby', message: '', color: '4CAF50', labelColor: 'CC342D', style: 'for-the-badge' },
    swift: { label: 'Swift', message: '', color: '4CAF50', labelColor: 'FA7343', style: 'for-the-badge' },
    kotlin: { label: 'Kotlin', message: '', color: '4CAF50', labelColor: '7F52FF', style: 'for-the-badge' },
    scala: { label: 'Scala', message: '', color: '4CAF50', labelColor: 'DC322F', style: 'for-the-badge' },
    perl: { label: 'Perl', message: '', color: '4CAF50', labelColor: '39457E', style: 'for-the-badge' },
    lua: { label: 'Lua', message: '', color: '4CAF50', labelColor: '2C2D72', style: 'for-the-badge' },
    haskell: { label: 'Haskell', message: '', color: '4CAF50', labelColor: '5D4F85', style: 'for-the-badge' },
    clojure: { label: 'Clojure', message: '', color: '4CAF50', labelColor: '5881D8', style: 'for-the-badge' },
    erlang: { label: 'Erlang', message: '', color: '4CAF50', labelColor: 'A90533', style: 'for-the-badge' },
    elixir: { label: 'Elixir', message: '', color: '4CAF50', labelColor: '4E2A8E', style: 'for-the-badge' },
    dart: { label: 'Dart', message: '', color: '4CAF50', labelColor: '00B4AB', style: 'for-the-badge' },
    flutter: { label: 'Flutter', message: '', color: '4CAF50', labelColor: '02569B', style: 'for-the-badge' },
    react: { label: 'React', message: '', color: '4CAF50', labelColor: '61DAFB', style: 'for-the-badge' },
    vue: { label: 'Vue', message: '', color: '4CAF50', labelColor: '4FC08D', style: 'for-the-badge' },
    angular: { label: 'Angular', message: '', color: '4CAF50', labelColor: 'DD0031', style: 'for-the-badge' },
    svelte: { label: 'Svelte', message: '', color: '4CAF50', labelColor: 'FF3E00', style: 'for-the-badge' },
    nodejs: { label: 'Node.js', message: '', color: '4CAF50', labelColor: '339933', style: 'for-the-badge' },
    django: { label: 'Django', message: '', color: '4CAF50', labelColor: '092E20', style: 'for-the-badge' },
    flask: { label: 'Flask', message: '', color: '4CAF50', labelColor: '000000', style: 'for-the-badge' },
    spring: { label: 'Spring', message: '', color: '4CAF50', labelColor: '6DB33F', style: 'for-the-badge' },
    laravel: { label: 'Laravel', message: '', color: '4CAF50', labelColor: 'FF2D20', style: 'for-the-badge' },
    rails: { label: 'Rails', message: '', color: '4CAF50', labelColor: 'CC0000', style: 'for-the-badge' },
    express: { label: 'Express', message: '', color: '4CAF50', labelColor: '000000', style: 'for-the-badge' },
    fastapi: { label: 'FastAPI', message: '', color: '4CAF50', labelColor: '009688', style: 'for-the-badge' },
    graphql: { label: 'GraphQL', message: '', color: '4CAF50', labelColor: 'E10098', style: 'for-the-badge' },
    docker: { label: 'Docker', message: '', color: '4CAF50', labelColor: '2496ED', style: 'for-the-badge' },
    kubernetes: { label: 'Kubernetes', message: '', color: '4CAF50', labelColor: '326CE5', style: 'for-the-badge' },
    aws: { label: 'AWS', message: '', color: '4CAF50', labelColor: 'FF9900', style: 'for-the-badge' },
    azure: { label: 'Azure', message: '', color: '4CAF50', labelColor: '0078D4', style: 'for-the-badge' },
    gcp: { label: 'GCP', message: '', color: '4CAF50', labelColor: '4285F4', style: 'for-the-badge' },
    linux: { label: 'Linux', message: '', color: '4CAF50', labelColor: 'FCC624', style: 'for-the-badge' },
    windows: { label: 'Windows', message: '', color: '4CAF50', labelColor: '0078D4', style: 'for-the-badge' },
    macos: { label: 'macOS', message: '', color: '4CAF50', labelColor: '000000', style: 'for-the-badge' },
    ubuntu: { label: 'Ubuntu', message: '', color: '4CAF50', labelColor: 'E95420', style: 'for-the-badge' },
    centos: { label: 'CentOS', message: '', color: '4CAF50', labelColor: '262577', style: 'for-the-badge' },
    fedora: { label: 'Fedora', message: '', color: '4CAF50', labelColor: '294172', style: 'for-the-badge' },
    debian: { label: 'Debian', message: '', color: '4CAF50', labelColor: 'A81D33', style: 'for-the-badge' },
    arch: { label: 'Arch Linux', message: '', color: '4CAF50', labelColor: '1793D1', style: 'for-the-badge' },
    mysql: { label: 'MySQL', message: '', color: '4CAF50', labelColor: '4479A1', style: 'for-the-badge' },
    postgresql: { label: 'PostgreSQL', message: '', color: '4CAF50', labelColor: '4169E1', style: 'for-the-badge' },
    mongodb: { label: 'MongoDB', message: '', color: '4CAF50', labelColor: '47A248', style: 'for-the-badge' },
    redis: { label: 'Redis', message: '', color: '4CAF50', labelColor: 'DC382D', style: 'for-the-badge' },
    sqlite: { label: 'SQLite', message: '', color: '4CAF50', labelColor: '003B57', style: 'for-the-badge' },
    firebase: { label: 'Firebase', message: '', color: '4CAF50', labelColor: 'FFCA28', style: 'for-the-badge' },
    heroku: { label: 'Heroku', message: '', color: '4CAF50', labelColor: '430098', style: 'for-the-badge' },
    vercel: { label: 'Vercel', message: '', color: '4CAF50', labelColor: '000000', style: 'for-the-badge' },
    netlify: { label: 'Netlify', message: '', color: '4CAF50', labelColor: '00C58E', style: 'for-the-badge' },
    github: { label: 'GitHub', message: '', color: '4CAF50', labelColor: '181717', style: 'for-the-badge' },
    gitlab: { label: 'GitLab', message: '', color: '4CAF50', labelColor: 'FC6D26', style: 'for-the-badge' },
    bitbucket: { label: 'Bitbucket', message: '', color: '4CAF50', labelColor: '0052CC', style: 'for-the-badge' }
};

// add near top (after DOM elements)
let lastBadgeUrl = '';
function debounce(fn, delay = 150) {
    // simple debounce
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

// Function to generate badge URL
function generateBadgeUrl() {
    const label = encodeURIComponent(labelInput.value || 'label');
    const labelColor = labelColorHexInput.value.replace('#', '');
    const style = styleSelect.value;
    const logo = encodeURIComponent(logoInput.value);
    const logoColor = logoColorHexInput.value.replace('#', '');

    let url = '';

    if (includeMessageCheckbox.checked) {
        const message = encodeURIComponent(messageInput.value);
        const color = colorHexInput.value.replace('#', '');
        url = `https://img.shields.io/badge/${label}-${message}-${color}?style=${style}&labelColor=${labelColor}`;
    } else {
        // Render single-part badge (Label only) to avoid empty message box
        url = `https://img.shields.io/badge/-${label}-${labelColor}?style=${style}`;
    }

    if (logo) {
        url += `&logo=${logo}&logoColor=${logoColor}`;
    }

    return url;
}

// replace updateBadge + preview behavior with preloading + cache
function updateBadgeImmediate() {
    const url = generateBadgeUrl();
    // update markdown immediately
    markdownLink.value = `![Badge](${url})`;

    // avoid redundant reloads
    if (url === lastBadgeUrl) return;
    lastBadgeUrl = url;

    // preload remote image and only set preview when loaded
    const img = new Image();
    img.onload = () => {
        badgePreview.src = url;
    };
    img.onerror = () => {
        // keep previous image on error; optional: set to a fallback
        console.warn('Failed to load badge:', url);
    };
    img.src = url;
}

// debounce wrapper used for frequent events
const updateBadge = debounce(updateBadgeImmediate, 120);

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

// Function to sync logo color inputs
function syncLogoColorInputs(source) {
    if (source === 'picker') {
        const hex = logoColorInput.value.replace('#', '');
        logoColorHexInput.value = hex;
    } else {
        let hex = logoColorHexInput.value.replace('#', '');
        // Ensure valid hex format
        if (/^[0-9A-Fa-f]{3,6}$/.test(hex)) {
            logoColorInput.value = '#' + hex;
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

// Function to toggle message input visibility
function toggleMessageInput() {
    const messageColorGroup = document.getElementById('message-color-group');

    if (includeMessageCheckbox.checked) {
        messageInput.style.display = 'block';
        messageColorGroup.style.display = 'block';
    } else {
        messageInput.style.display = 'none';
        messageColorGroup.style.display = 'none';
        messageInput.value = '';
        updateBadge();
    }
}

// Function to apply preset
function applyPreset(presetKey) {
    const preset = presets[presetKey];
    labelInput.value = preset.label;
    messageInput.value = preset.message;
    colorHexInput.value = preset.color;
    labelColorHexInput.value = preset.labelColor;
    styleSelect.value = preset.style;

    // Use preset logo or default to the preset key (most match Simple Icons slugs)
    logoInput.value = preset.logo || presetKey;
    logoColorHexInput.value = 'ffffff'; // Default logo color

    // Automatically uncheck "Include Message" if preset message is empty
    includeMessageCheckbox.checked = preset.message !== '';
    toggleMessageInput(); // Updates UI visibility and calls updateBadge

    syncColorInputs('hex');
    syncLabelColorInputs('hex');
    syncLogoColorInputs('hex');
}

// Event listeners
labelInput.addEventListener('input', updateBadge);
messageInput.addEventListener('input', updateBadge);
labelColorInput.addEventListener('input', () => { syncLabelColorInputs('picker'); });
labelColorHexInput.addEventListener('input', () => { syncLabelColorInputs('hex'); });
colorInput.addEventListener('input', () => { syncColorInputs('picker'); });
colorHexInput.addEventListener('input', () => { syncColorInputs('hex'); });
styleSelect.addEventListener('change', updateBadge);
logoInput.addEventListener('input', updateBadge);
logoColorInput.addEventListener('input', () => { syncLogoColorInputs('picker'); });
logoColorHexInput.addEventListener('input', () => { syncLogoColorInputs('hex'); });
includeMessageCheckbox.addEventListener('change', () => { toggleMessageInput(); updateBadgeImmediate(); });

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
        updateBadgeImmediate(); // immediate preview for preset selection
    }
});

// Initialize
toggleMessageInput();

// Initialize badge on page load
updateBadge();