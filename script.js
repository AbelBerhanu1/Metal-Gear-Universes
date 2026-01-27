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