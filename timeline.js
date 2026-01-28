const SYSTEM_CONFIG = {
    soundEnabled: true,
    lastTypingTime: 0,
    typingSoundDelay: 80
};

function playSound(id, volume = 0.3) {
    if (!SYSTEM_CONFIG.soundEnabled) return;
    const sound = document.getElementById(id);
    if (!sound) {
        console.warn(`Sound element #${id} not found in HTML.`);
        return;
    }

    sound.currentTime = 0;
    sound.volume = volume;
    sound.play().catch(() => {});
}

window.playClickSound = () => playSound('uiClickSound', 0.3);
window.playNavSound = () => playSound('navSound', 0.4);
window.playPanelSound = () => playSound('panelSound', 0.4);

document.addEventListener("DOMContentLoaded", () => {
    const timelineData = {