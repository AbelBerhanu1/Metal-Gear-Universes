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
            {
                year: "1999",
                title: "Metal Gear 2: Solid Snake",
                era: "Zanzibar Land",
                desc: "Solid Snake kills the real Big Boss, ending the era of legendary soldiers.",
                image: "images/konami-kukeiha-club-metal-gear-2-solid-snake_800x.jpg",
                details: {
                    context: "Big Boss resurfaces in Zanzibar Land, creating another rogue nuclear state.",
                    consequences: "Solid Snake faces and ultimately defeats his genetic father and ideological opposite.",
                    legacy: "The definitive end of Big Boss's physical presence in the world."
                }
            },
            {
                year: "2005",
                title: "Metal Gear Solid",
                era: "Shadow Moses",
                desc: "FOXHOUND rebels. Solid Snake learns the truth about Les Enfants Terribles.",
                image: "images/Metal Gear Solid.jpg",
                details: {
                    context: "Liquid Snake leads FOXHOUND in a takeover of Shadow Moses Island.",
                    consequences: "Solid Snake discovers he is a clone and defeats his brother Liquid.",
                    legacy: "Reveals the existence of the Patriots and sets the stage for information age conflicts."
                }
            },
            {
                year: "2007–2009",
                title: "Metal Gear Solid 2: Sons of Liberty",
                era: "Information Control",
                desc: "Raiden uncovers the Patriots' AI system and the manipulation of digital truth.",
                image: "images/mgs2cover.jpg",
                details: {
                    context: "Solid Snake investigates the Manhattan incident, uncovering S3 Plan.",
                    consequences: "Raiden becomes a new hero while learning about AI-controlled reality.",
                    legacy: "Exposes how information control shapes society in the digital age."
                }
            },
            {
                year: "2014",
                title: "Metal Gear Solid 4: Guns of the Patriots",
                era: "System Collapse",
                desc: "Solid Snake destroys the Patriots, ending total information control.",
                image: "images/Metal Gear Solid 4 -.jpg",
                details: {
                    context: "Old Snake races against time as the Patriots' system nears total control.",
                    consequences: "Solid Snake finally ends the Patriots' AI network and Big Boss's legacy.",
                    legacy: "Frees humanity from AI control but leaves a power vacuum in global affairs."
                }
            },
            {
                year: "2018",
                title: "Metal Gear Rising: Revengeance",
                era: "Post-Patriots World",
                desc: "Raiden confronts privatized warfare in a world without ideological control.",
                image: "images/Amazon_com_ Metal Gear Rising_ Revengeance….jpg",
                details: {
                    context: "In a world without Patriots, private military companies fill the power vacuum.",
                    consequences: "Raiden embraces his cyborg abilities to fight new forms of warfare.",
                    legacy: "Shows the chaotic aftermath when centralized control systems collapse."
                }
            }
        ],

        events: [
            {
                year: "1945–1964",
                title: "The Philosophers",
                desc: "A shadow organization manipulates world politics after World War II.",
                image: "images/The Philosophers.jpg",
                details: {
                    context: "Formed by WWII allies to control global resources and prevent future conflicts.",
                    consequences: "Created massive secret funds and manipulated governments from the shadows.",
                    legacy: "Eventually splintered into the Patriots and influenced all major Metal Gear events."
                }
            },
            {
                year: "1975",
                title: "Mother Base Incident",
                desc: "Cipher destroys MSF, forcing Big Boss into hiding.",
                image: "images/Mother Base Incident.jpg",
                details: {
                    context: "Zero's faction attacks MSF to eliminate Big Boss's growing influence.",
                    consequences: "Destroys the first private military force and nearly kills Big Boss.",
                    legacy: "Directly leads to the creation of Diamond Dogs and the phantom legend."
                }
            },
            {
                year: "1984",
                title: "The Phantom Truth",
                desc: "Venom Snake is revealed as a body double, preserving Big Boss's legend.",
                image: "images/The Phantom Truth.jpg",
                details: {
                    context: "Big Boss uses a comatose soldier as his double to work in secret.",
                    consequences: "Creates two Big Boss legends - one public, one operating in shadows.",
                    legacy: "Establishes the theme of identity and legend over individual in the series."
                }
            },
            {
                year: "2009",
                title: "Patriots Exposed",
                desc: "The Patriots are revealed to be AI constructs.",
                image: "images/The Patriots Exposed.jpg",
                details: {
                    context: "Raiden discovers the truth during the Big Shell incident.",
                    consequences: "Reveals that human Patriots have been dead for years, replaced by AI.",
                    legacy: "Forces humanity to confront its reliance on automated control systems."
                }
            },
            {
                year: "2014",
                title: "AI Destruction",
                desc: "The Patriots' AI network is destroyed by Solid Snake.",
                image: "images/AI Destruction.jpg",
                details: {
                    context: "Solid Snake infiltrates the Patriots' core system with help from Otacon.",
                    consequences: "Global control system collapses, freeing nations from AI manipulation.",
                    legacy: "Creates a new era of uncertainty without centralized information control."
                }
            }
        ],

        canon: [
            {
                year: "1964–1984",
                title: "Rise of Big Boss",
                desc: "From hero to symbol. Big Boss becomes an idea rather than a man.",
                image: "images/Rise of BigBoss.jpg",
                details: {
                    context: "Naked Snake's transformation from loyal soldier to revolutionary icon.",
                    consequences: "Creates the template for the legendary soldier that shapes decades of conflict.",
                    legacy: "His ideology spawns Outer Heaven, Foxhound, and inspires countless followers."
                }
            },
            {
                year: "1995–2009",
                title: "Legacy of the Snakes",
                desc: "Solid Snake dismantles the systems created by his predecessors.",
                image: "images/Legacy of the Snakes.jpg",
                details: {
                    context: "Solid Snake's journey from pawn to savior across multiple conflicts.",
                    consequences: "Systematically destroys every system Big Boss and the Patriots created.",
                    legacy: "Proves that individuals can change history, despite being engineered pawns."
                }
            },
            {
                year: "2014–2018+",
                title: "After the Patriots",
                desc: "Humanity enters an unstable era of free information and endless conflict.",
                image: "images/After the Patriots.jpg",
                details: {
                    context: "World without the Patriots' controlling AI systems.",
                    consequences: "Power vacuum leads to rise of private military companies and new conflicts.",
                    legacy: "Humanity must learn to govern itself without artificial control systems."
                }
            }
        ]
    };

     const tabButtons = document.querySelectorAll(".tab-btn");
     const contents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            if (window.playClickSound) window.playClickSound();
            if (window.playNavSound) window.playNavSound();

            tabButtons.forEach(b => b.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            btn.classList.add("active");
            const targetId = btn.dataset.tab + "Content";
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.classList.add("active");
            }
        });
    });

    function renderTimeline(section, containerId) {
        const container = document.getElementById(containerId);
         if (!container) return;
         container.innerHTML = "";

         timelineData[section].forEach(item => {
            const entry = document.createElement("div");
            entry.className = "timeline-entry";

            entry.innerHTML = `
                <div class="timeline-front">
                    <div class="timeline-image-container">
                        <img src="${item.image}" alt="${item.title}" class="timeline-img">
                    </div>
                    <h3>${item.title}</h3>
                    <span class="timeline-year">${item.year}</span>
                    ${item.era ? `<span class="timeline-era">${item.era}</span>` : ""}
                    <p class="timeline-desc">${item.desc}</p>
                    <div class="timeline-hint">▶ ACCESS DOSSIER</div>
                </div>

                <div class="timeline-expanded hidden">
                    <p><strong>OPERATION CONTEXT</strong><br>${item.details?.context || "Classified"}</p>
                    <p><strong>IMMEDIATE CONSEQUENCES</strong><br>${item.details?.consequences || "Classified"}</p>
                    <p><strong>STRATEGIC LEGACY</strong><br>${item.details?.legacy || "Classified"}</p>
                    <div class="timeline-close">◀ CLOSE DOSSIER</div>
                </div>
            `;

            const front = entry.querySelector(".timeline-front");
            const expanded = entry.querySelector(".timeline-expanded");
            const closeBtn = entry.querySelector(".timeline-close");

            if (front && expanded && closeBtn) {
                front.addEventListener("click", () => {
                    if (window.playPanelSound) window.playPanelSound();
                    if (window.playClickSound) window.playClickSound();

                    document.querySelectorAll(".timeline-expanded").forEach(e => e.classList.add("hidden"));
                    expanded.classList.remove("hidden");
                });

                closeBtn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    if (window.playClickSound) window.playClickSound();
                    expanded.classList.add("hidden");
                });
            }

            container.appendChild(entry);
        });
    }

    renderTimeline("games", "gamesContent");
    renderTimeline("events", "eventsContent");
    renderTimeline("canon", "canonContent");