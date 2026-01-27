const SYSTEM_CONFIG = {
    version: '2.5.0',
    securityLevel: 3,
    consolePrefix: '[FOXHOUND]',
    storageKey: 'foxhound_system_data',
    soundEnabled: true,
    minAge: 18,
    typingSoundDelay: 100,
    lastTypingTime: 0
};

let elements = {};
document.addEventListener('DOMContentLoaded', function () {
    initializeElements();
    initializeSystem();
    initializeVideoBackground();

    const bootSequence = elements.bootSequence;
    const mainSystem = elements.mainSystem;
    const ageVerified = localStorage.getItem('foxhound_age_verified') === 'true';
    const bootedThisSession = sessionStorage.getItem('foxhoundBooted') === 'true';

    if (ageVerified && bootedThisSession) {
        bootSequence.classList.add('hidden');
        mainSystem.classList.remove('hidden');
        consoleLog('Session resumed — boot skipped');
        initializeMainSystem();
        return;
    }

    if (bootedThisSession) {
        bootSequence.classList.add('hidden');
        mainSystem.classList.remove('hidden');
        consoleLog('Session resumed — boot skipped');
        initializeMainSystem();
        return;
    }

    startBootSequence();
});

function initializeElements() {
    elements = {
        bootSequence: document.getElementById('bootSequence'),
        bootTime: document.getElementById('bootTime'),
        accessPanel: document.querySelector('.access-panel'),
        accessCodeInput: document.getElementById('accessCode'),
        verifyAccessBtn: document.getElementById('verifyAccess'),
        accessError: document.getElementById('accessError'),
        bootComplete: document.querySelector('.boot-complete'),
        enterSystemBtn: document.getElementById('enterSystem'),
        
        mainSystem: document.getElementById('mainSystem'),
        liveTime: document.getElementById('liveTime'),
        consoleTime: document.getElementById('consoleTime'),
        toggleConsole: document.getElementById('toggleConsole'),
        toggleSound: document.getElementById('toggleSound'),
        navToggle: document.querySelector('.nav-toggle'),
        navMenu: document.querySelector('.nav-menu'),
        
        commsForm: document.getElementById('commsForm'),
        agentIdInput: document.getElementById('agentId'),
        frequencyInput: document.getElementById('frequency'),
        messageInput: document.getElementById('message'),
        transmissionStatus: document.getElementById('transmissionStatus'),
        transmissionId: document.getElementById('transmissionId'),
        
        storageStatus: document.getElementById('storageStatus'),
        cacheNote: document.getElementById('cacheNote'),
        saveCacheBtn: document.getElementById('saveCache'),
        clearCacheBtn: document.getElementById('clearCache'),
        cacheDisplay: document.getElementById('cacheDisplay'),
        
        bgVideo: document.getElementById('bgVideo')
    };
}

function initializeSystem() {
    updateSystemTime();
    setInterval(updateSystemTime, 1000);
    
    const savedSound = localStorage.getItem('foxhound_sound');
    if (savedSound !== null) {
        SYSTEM_CONFIG.soundEnabled = savedSound === 'true';
        if (elements.toggleSound) {
            elements.toggleSound.textContent = SYSTEM_CONFIG.soundEnabled ? 'SND: ON' : 'SND: OFF';
        }
        if (elements.bgVideo) {
            elements.bgVideo.muted = !SYSTEM_CONFIG.soundEnabled;
        }
    }
}

function initializeVideoBackground() {
    if (elements.bgVideo) {
        elements.bgVideo.muted = !SYSTEM_CONFIG.soundEnabled;
        elements.bgVideo.play().catch(e => {
            consoleLog('Video autoplay waiting for user interaction');
        });
    }
}

function updateBackgroundVideo() {
    if (!elements.bgVideo) return;

    const homeSection = document.getElementById('home');
    if (!homeSection) return;

    const isHomeVisible = !homeSection.classList.contains('hidden');

    if (isHomeVisible) {
        elements.bgVideo.classList.remove('hidden');
        elements.bgVideo.play().catch(() => {});
    } else {
        elements.bgVideo.pause();
        elements.bgVideo.classList.add('hidden');
    }
}

function playClickSound() {
    if (!SYSTEM_CONFIG.soundEnabled) return;
    const sound = document.getElementById('uiClickSound');
    if (sound) {
        sound.currentTime = 0;
        sound.volume = 0.3;
        sound.play().catch(e => console.log('Click sound failed:', e));
    }
}

function playTypingSound() {
    if (!SYSTEM_CONFIG.soundEnabled) return;
    
    const now = Date.now();
    if (now - SYSTEM_CONFIG.lastTypingTime < SYSTEM_CONFIG.typingSoundDelay) {
        return;
    }
    
    SYSTEM_CONFIG.lastTypingTime = now;
    
    const typingSound = document.getElementById('typingSound');
    if (typingSound) {
        typingSound.volume = 0.2;
        typingSound.currentTime = 0;
        typingSound.play().catch(e => console.log('Typing sound failed:', e));
    }
}

function playNavSound() {
    if (!SYSTEM_CONFIG.soundEnabled) return;
    
    const navSound = document.getElementById('navSound');
    if (navSound) {
        navSound.volume = 0.4;
        navSound.currentTime = 0;
        navSound.play().catch(e => console.log('Nav sound failed:', e));
    }
}

function playPanelSound() {
    if (!SYSTEM_CONFIG.soundEnabled) return;
    
    const panelSound = document.getElementById('panelSound');
    if (panelSound) {
        panelSound.volume = 0.4;
        panelSound.currentTime = 0;
        panelSound.play().catch(e => console.log('Panel sound failed:', e));
    }
}

document.addEventListener('click', function(e) {
    if (e.target.closest('.nav-link')) {
        playNavSound();
        playClickSound();
    }
    else if (e.target.closest('.panel-btn')) {
        playPanelSound();
        playClickSound();
    }
    else if (e.target.closest('button, a[href]:not(.nav-link), .sys-btn, .transmit-btn, .cache-btn, .access-btn, .enter-btn')) {
        playClickSound();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const textInputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
    extInputs.forEach(input => {
        input.addEventListener('keydown', function(e) {
            if (e.key.length === 1 || e.key === 'Backspace' || e.key === 'Delete') {
                playTypingSound();
            }
        });
        input.addEventListener('paste', playTypingSound);
        input.addEventListener('cut', playTypingSound);
    });
    if (elements.accessCodeInput) {
        elements.accessCodeInput.addEventListener('keydown', function(e) {
            if (e.key.length === 1 || e.key === 'Backspace' || e.key === 'Delete') {
                playTypingSound();
            }
        });
    }
});

function startBootSequence() {
    const now = new Date();
    elements.bootTime.textContent = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    setTimeout(() => {
        elements.accessPanel.classList.remove('hidden');
        elements.accessCodeInput.focus();
    }, 3000);

    elements.verifyAccessBtn.addEventListener('click', verifyAccess);
    elements.accessCodeInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') verifyAccess();
    });
    
    elements.enterSystemBtn.addEventListener('click', enterSystem);
}

function verifyAccess() {
    const code = elements.accessCodeInput.value.trim();
    
    if (!/^\d{8}$/.test(code)) {
        denyAccess();
        return;
    }

    const day = parseInt(code.slice(0, 2), 10);
    const month = parseInt(code.slice(2, 4), 10) - 1;
    const year = parseInt(code.slice(4, 8), 10);

    if (day < 1 || day > 31 || month < 0 || month > 11 || year < 1900 || year > new Date().getFullYear()) {
        denyAccess();
        return;
    }
    
    const dob = new Date(year, month, day);
    const today = new Date();

    if (isNaN(dob.getTime()) || 
        dob.getDate() !== day || 
        dob.getMonth() !== month || 
        dob.getFullYear() !== year ||
        dob > today) {
        denyAccess();
        return;
    }