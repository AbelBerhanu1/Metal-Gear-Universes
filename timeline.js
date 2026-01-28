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
            {
                year: "1970",
                title: "Metal Gear Solid: Peace Walker",
                era: "Age of Deterrence",
                desc: "Big Boss forms MSF and rejects Zero's vision, accelerating the arms race and the creation of proxy warfare.",
                image: "images/Metal Gear Solid_ Peace Walker.jpg",
                details: {
                    context: "Post-Snake Eater, Big Boss establishes Militaires Sans Frontières as a private military force.",
                    consequences: "The rejection of Zero's Patriots leads to ideological schism and escalating conflicts.",
                    legacy: "MSF becomes the prototype for Outer Heaven and future private military companies."
                }
            },
            {
                year: "1974–1975",
                title: "Metal Gear Solid V: Ground Zeroes",
                era: "Phantom Genesis",
                desc: "Mother Base is destroyed. Big Boss disappears. The world believes the legend is dead.",
                image: "images/Metal Gear Solid V; Ground Zeroes (Sıfır Noktası, 18 Mart 2014).jpg",
                details: {
                    context: "Cipher launches a surprise attack on MSF's Mother Base to eliminate Big Boss.",
                    consequences: "MSF is destroyed, Paz and Chico are captured, and Big Boss falls into a coma.",
                    legacy: "Sets the stage for the Phantom Pain and the creation of Venom Snake."
                }
            },
            {
                year: "1984",
                title: "Metal Gear Solid V: The Phantom Pain",
                era: "The Phantom War",
                desc: "Venom Snake leads Diamond Dogs. A manufactured Big Boss ensures the survival of a myth instead of a man.",
                image: "images/Metal Gear solid 5_ the Phantom Pain.jpg",
                details: {
                    context: "Big Boss awakens from a 9-year coma to find his identity and organization stolen.",
                    consequences: "Venom Snake becomes a phantom body double, perpetuating the Big Boss legend.",
                    legacy: "Creates the perfect decoy, allowing the real Big Boss to work in the shadows."
                }
            },
            {
                year: "1995",
                title: "Metal Gear",
                era: "Outer Heaven",
                desc: "Solid Snake infiltrates Outer Heaven and unknowingly kills Venom Snake — the phantom Big Boss.",
                image: "images/Metal Gear.jpg",
                details: {
                    context: "Outer Heaven emerges as a nuclear-armed nation-state threatening global stability.",
                    consequences: "Solid Snake eliminates Venom Snake, believing he killed the real Big Boss.",
                    legacy: "Solid Snake's legend begins as he unwittingly becomes a pawn in larger schemes."
                }
            },