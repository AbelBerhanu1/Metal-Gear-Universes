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
        games: [
            {
                year: "1964",
                title: "Metal Gear Solid 3: Snake Eater",
                era: "Cold War",
                desc: "Naked Snake undertakes Operation Snake Eater, killing The Boss and laying the foundation for Big Boss and the Patriots.",
                image: "images/Metal Gear Solid Delta_ Snake Eater.jpg",
                details: {
                    context: "During the height of the Cold War, nations relied on covert operations instead of open conflict.",
                    consequences: "The death of The Boss reshaped global power and shattered Naked Snake's identity.",
                    legacy: "This mission created Big Boss and indirectly led to the Patriots."
                }
            },