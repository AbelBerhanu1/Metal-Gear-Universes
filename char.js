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

document.addEventListener("DOMContentLoaded", () => {
    const characters = [
        {
            id: 1,
            name: "Naked Snake",
            faction: "fox_unit",
            role: "CIA FOX Unit Operative",
            clearance: 2,
            bio: "The man who would become Big Boss. A disciple of The Boss and an expert in CQC. He famously infiltrated Tselinoyarsk to stop the Shagohod and eliminate his own mentor.",
            quote: "'I'm just a soldier. And always will be.'",
            story: "Before the legend of Big Boss, he was a green operative known as Naked Snake. During Operation Snake Eater, he was forced to kill his mentor, The Boss, to prevent a nuclear war, a task that forever changed his worldview.",
            image: "images/METAL Gear Solid 3_ SNAKE EATER REMAKE.jpg",
            video: "Video/Metal Gear Solid Delta Snake Eater - Grave Scene (Snake Crying) - Savage Slayer (720p, h264).mp4",
            audio: "Audio/Solid_Snake_MGS2_Speech.mp3.wav",
            wiki: "https://metalgear.fandom.com/wiki/Big_Boss"
        },
        