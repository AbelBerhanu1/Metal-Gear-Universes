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