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
        {
            id: 2,
            name: "The Boss",
            faction: "cobra_unit",
            role: "The Mother of Special Forces",
            clearance: 2,
            bio: "Legendary soldier who created modern special forces tactics. Mentor to Big Boss and founder of the Cobra Unit. Considered the greatest soldier who ever lived.",
            quote: "'There's only room for one Boss... and one snake.'",
            story: "Created the basics of CQC (Close Quarters Combat). Sacrificed everything for her country, allowing herself to be branded a traitor to maintain world balance. Her will shaped the entire Metal Gear saga.",
            image: "images/metal gear solid delta _ • The Boss.jpg",
            video: "Video/Metal Gear Solid Delta Snake Eater - The Boss Final Boss Fight (PS5 Pro 4K 60FPS) - Boss Fight Database (360p, h264).mp4",
            wiki: "https://metalgear.fandom.com/wiki/The_Boss"
        },
        {
            id: 3,
            name: "Venom Snake",
            faction: "diamond_dogs", 
            role: "The Phantom / Commander of Diamond Dogs",
            clearance: 2,
            bio: "A combat medic who underwent mental and physical reconstruction to serve as a body double for Big Boss. He leads Diamond Dogs with a robotic prosthetic and a shrapnel 'horn' embedded in his skull.",
            quote: "'I'm already a demon. Heaven's not my kind of place anyway.'",
            story: "After the destruction of MSF, he was transformed into a 'Phantom' to draw attention away from the real Big Boss. He built Diamond Dogs and faced Skull Face, eventually accepting his role as part of the legend.",
            image: "images/Metal Gear Solid V_ The Phantom Pain _ Big Boss!.jpg",
            video: "Video/INVISIBLE  MGSV  TRIBUTE - Doomdy (720p, h264).mp4",
            wiki: "https://metalgear.fandom.com/wiki/Venom_Snake"
        },
        {
            id: 4,
            name: "Major Zero",
            faction: "fox_unit",
            role: "Founder of Cipher / The Patriots",
            clearance: 2,
            bio: "Former SAS member and commander of the FOX Unit. Originally Naked Snake's commanding officer, he eventually became his greatest ideological rival, seeking to control the world through information.",
            quote: "'We'll be the ones to pull the strings. The world will be united under a single will.'",
            story: "Following the death of The Boss, Zero founded the Patriots to realize her vision. However, his obsession with control led to a rift with Big Boss and the eventual creation of the AI network that ruled society.",
            image: "images/ZERO -  Metal Gear Solid 3_ Snake Eater….jpg",
            audio: "Audio/Zero_I_have_found_the_way.wav",
            wiki: "https://metalgear.fancy.com/wiki/Zero"
        },
        {
            id: 5,
            name: "Para-Medic",
            faction: "fox_unit",
            role: "Medical and Biolife Specialist",
            clearance: 4,
            bio: "A movie-obsessed medical specialist who provided support during the Virtuous Mission and Operation Snake Eater. She later became a key founding member of the Patriots.",
            quote: "'Snake, have you ever seen 'Godzilla'? It's a classic!'",
            story: "Known as Dr. Clark in later years, she was responsible for the Les Enfants Terribles cloning project and the cyborg ninja experiments on Gray Fox. Her medical genius shaped the darker side of Patriot history.",
            image: "images/౨ৎ (1).jpg",
            video: "video/paramedic.mp4",
            audio: "audio/voices/paramedic.ogg",
            wiki: "https://metalgear.fandom.com/wiki/Para-Medic"
        },
        {
            id: 6,
            name: "Sigint",
            faction: "foxhound",
            role: "Technical and Weapons Consultant",
            clearance: 2,
            bio: "An expert in high-tech weaponry and equipment. He provided technical support to Naked Snake before eventually becoming the Chief of DARPA.",
            quote: "'I'm a tech man. If it's got a circuit or a trigger, I can tell you how it works.'",
            story: "A brilliant engineer who helped develop the gear used by the FOX unit. As Donald Anderson, he later oversaw the development of Metal Gear REX before being killed during the Shadow Moses incident.",
            image: "images/Sigint.jpg",
            wiki: "https://metalgear.fandom.com/wiki/Sigint"
        },
        {
            id: 7,
            name: "Quiet",
            faction: "diamond_dogs",
            role: "Supernatural Sniper",
            clearance: 2,
            bio: "An elite assassin infected with 'The One Who Covers' parasites. She possesses superhuman speed, strength, and the ability to photosynthesize, but cannot speak without triggering a deadly plague.",
            quote: "(Silence/Humming)",
            story: "Originally sent by XOF to kill Big Boss, she was defeated and joined Diamond Dogs. She eventually sacrificed herself by speaking English to save Venom Snake's life in the Afghan desert.",
            image: "images/Metal Gear Solid V_ The Phantom Pain.jpg",
            wiki: "https://metalgear.fandom.com/wiki/Quiet"
        },
        {
            id: 8,
            name: "Skull Face",
            faction: "xof",
            role: "Commander of XOF",
            clearance: 2,
            bio: "The mysterious, disfigured leader of the XOF strike force. A survivor of a childhood trauma that robbed him of his language and his face, he seeks to destroy the English language with parasites.",
            quote: "'Words can kill. I will give the world its freedom... by taking its speech.'",
            story: "He operated in the shadows of the FOX unit for years. He destroyed Mother Base in 1975 and later attempted to use Sahelanthropus to force the world into a nuclear standoff controlled by his parasites.",
            image: "images/Skull Face (XOF)  _ Metal Gear Solid V The Phantom….jpg",
            video: "Video/Skull Face Intro First Scene — Metal Gear Solid 5 - Gamer Guru (360p, h264).mp4",
            wiki: "https://metalgear.fandom.com/wiki/Skull_Face"
        },
        