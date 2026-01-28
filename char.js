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
            image: "images/Naked Snake.jpg",
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
            image: "images/The Boss.jpg",
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
            image: "images/The man who sold the world.jpg",
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
            image: "images/Major Zero.jpg",
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
            image: "images/Para-Medic.jpg",
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
            image: "images/Quiet.jpg",
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
            image: "images/Skull Face.jpg",
            video: "Video/Skull Face Intro First Scene — Metal Gear Solid 5 - Gamer Guru (360p, h264).mp4",
            wiki: "https://metalgear.fandom.com/wiki/Skull_Face"
        },
        {
            id: 9,
            name: "The Sorrow",
            faction: "cobra_unit",
            role: "Spirit Medium / Cobra Unit Member",
            clearance: 2,
            bio: "A powerful medium who could summon the dead to aid him in battle. Even in death, his spirit continued to guide and haunt Naked Snake.",
            quote: "'The spirits of those you have killed will follow you forever.'",
            story: "The lover of The Boss and father of Revolver Ocelot. He was killed by The Boss during a mission in 1962, but returned as a ghost to test Snake's resolve during the mission to destroy Groznyj Grad.",
            image: "images/The Sorrow.png",
            video: "Video/Metal Gear Solid Delta Snake Eater - Full The Sorrow Boss Fight (4K) - Sirloin (360p, h264).mp4",
            wiki: "https://metalgear.fandom.com/wiki/The_Sorrow"
        },
        {
            id: 10,
            name: "The Fury",
            faction: "cobra_unit",
            role: "Pyrotechnics Expert",
            clearance: 2,
            bio: "A former Soviet cosmonaut who suffered horrific burns during a failed atmospheric reentry. He channels his eternal rage through a specialized flame-retardant suit and a powerful flamethrower.",
            quote: "'I've seen the fire of the stars... now you will feel the fire of my hate!'",
            story: "After returning from space, he felt only a constant, burning anger. He joined the Cobra Unit to find a place where his fire could truly consume his enemies.",
            image: "images/The Fury.jpg",
            video: "Video/The Fury Introduction - Metal Gear Solid Delta Snake Eater - iamhijak (360p, h264).mp4",
            wiki: "https://metalgear.fandom.com/wiki/The_Fury"
        },
        {
            id: 11,
            name: "The Pain",
            faction: "cobra_unit",
            role: "Hornet Controller",
            clearance: 2,
            bio: "A soldier who controls swarms of 'bullet bees' housed within his own body. He can use them to create shields, weapons, and even clones of himself.",
            quote: "'Taste the sting of my hornets!'",
            story: "A member of the Cobra Unit who fought alongside The Boss in WWII. He can manipulate his bees through pheromones and high-frequency sounds, making him a terrifying forest-dwelling predator.",
            image: "images/ThePain.jpg",
            video: "Video/The Pain MGS3 REMAKE Full Scene - thevoicebox (360p, h264).mp4",
            wiki: "https://metalgear.fandom.com/wiki/The_Pain"
        },
        {
            id: 12,
            name: "The Fear",
            faction: "cobra_unit",
            role: "Stealth and Traps Specialist",
            clearance: 2,
            bio: "An incredibly agile soldier with a double-jointed body and the ability to blend into his surroundings like a chameleon. He uses a specialized crossbow with venom-tipped bolts.",
            quote: "'The fear... I can smell it coming off you in waves!'",
            story: "Known for his terrifying appearance and spider-like movements. He set traps throughout the Graniny Gorki forests to hunt Naked Snake, utilizing his 'stealth camouflage' parasites.",
            image: "images/The Fear.jpg",
            video: "Video/The Fear MGS3 REMAKE Full Scene - thevoicebox (360p, h264).mp4",
            wiki: "https://metalgear.fandom.com/wiki/The_Fear"
        },
        {
            id: 13,
            name: "Code Talker",
            faction: "diamond_dogs",
            role: "Parasite Specialist / Wise Man",
            clearance: 7,
            bio: "A centenarian Navajo biologist who discovered the secrets of the vocal cord parasites. He survives through a symbiotic relationship with 'The One Who Covers' parasites.",
            quote: "'The words we speak are the chains that bind us to our history.'",
            story: "Forced by Skull Face to develop the vocal cord parasites. He eventually joined Diamond Dogs to help Venom Snake develop a cure for the infection that threatened to wipe out their base.",
            image: "images/Code Talker",
            wiki: "https://metalgear.fandom.com/wiki/Code_Talker"
        },
        {
            id: 14,
            name: "Colonel Volgin",
            faction: "others",
            role: "GRU Commander / Thunderbolt",
            clearance: 2,
            bio: "A sadistic Soviet Colonel with the ability to manipulate electricity. He sought to use the Philosophers' Legacy to overthrow the Soviet government and spark a new world war.",
            quote: "'Kuwabara... Kuwabara... I'll show you the true power of the Thunderbolt!'",
            story: "The main antagonist of Snake Eater. He commanded the fortress Groznyj Grad and the Shagohod. After his apparent death, his vengeful spirit returned as the 'Man on Fire' in 1984.",
            image: "images/Volgin.jpg",
            video: "Video/Volgin Fires The Nuke MGS3 REMAKE (Full Scene) HD - Manalithy (360p, h264).mp4",
            wiki: "https://metalgear.fandom.com/wiki/Yevgeny_Borisovitch_Volgin"
        },
        {
            id: 15,
            name: "Solid Snake",
            faction: "foxhound",
            role: "Infiltration Specialist",
            clearance: 5,
            bio: "Clone of Big Boss, legendary operative who saved the world multiple times. Known for his cynical outlook and relentless determination. Codenamed 'Iroquois Pliskin' during the Big Shell incident.",
            quote: "'There's no such thing in the world as absolute reality. Most of what they call real is actually fiction. What you think you see is only as real as your brain tells you it is.'",
            story: "Main protagonist of the Metal Gear series. A former Green Beret and FOXHOUND operative who took down Metal Gear multiple times. Despite being a clone destined to die young, he chose his own path and became a legend.",
            image: "images/Solid Snake.jpg",
            video: "video/snake.mp4",
            audio: "audio/voices/snake.ogg",
            wiki: "https://metalgear.fandom.com/wiki/Solid_Snake"
        },
        {
            id: 16,
            name: "Big Boss",
            faction: "others",
            role: "Legendary Soldier / Mercenary Leader",
            clearance: 2,
            bio: "The greatest soldier of the 20th century. Real name John. Veteran of WWII, Vietnam, and numerous Cold War conflicts. Founded both FOXHOUND and Outer Heaven.",
            quote: "'We have no nation, no philosophy, no ideology. We go where we're needed, fighting not for country, not for government, but for ourselves. We need no reason to fight.'",
            story: "Originally known as Naked Snake, he became Big Boss after defeating his mentor, The Boss. Created the concept of the nation-less army and inspired generations of soldiers. His DNA was used to create the Les Enfants Terribles project.",
            image: "images/Big Boss.jpg",
            audio: "Audio/Big_Boss_No_Nation.wav",
            wiki: "https://metalgear.fandom.com/wiki/Big_Boss"
        },
        {
            id: 17,
            name: "EVA",
            faction: "others",
            role: "Triple Agent / Spy",
            clearance: 2,
            bio: "Chinese spy who infiltrated the Philosophers and later worked with both the CIA and KGB. Real name unknown. One of the most skilled espionage agents in history.",
            quote: "'The world calls for wetwork, and we answer. No greater good. No just cause.'",
            story: "Posed as a scientist during the Virtuous Mission, she helped Naked Snake defeat The Boss. Later revealed to be a triple agent working for China. Became the lover of both Big Boss and Ocelot at different points in her life.",
            image: "images/Eva.jpg",
            wiki: "https://metalgear.fandom.com/wiki/EVA"
        },
        {
            id: 18,
            name: "Raiden",
            faction: "others",
            role: "Cyborg Ninja/The Patriots",
            clearance: 2,
            bio: "Former child soldier turned elite operative. Initially a rookie during the Big Shell incident, he later becomes the most advanced cyborg ninja in the world.",
            quote: "'I'm no hero. Never was, never will be. I'm just an old killer hired to do some wet work.'",
            story: "Survived the Liberian Civil War as a child. Was manipulated by the Patriots during the Big Shell incident. After being captured and turned into a cyborg, he became a legendary mercenary known as 'Jack the Ripper.'",
            image: "images/Raiden.jpg",
            wiki: "https://metalgear.fandom.com/wiki/Raiden"
        },
        {
            id: 19,
            name: "The End",
            faction: "cobra_unit",
            role: "Sniper / Biologist",
            clearance: 2,
            bio: "Centenarian sniper with supernatural abilities. Can photosynthesize and merge with nature. Considered the greatest sniper in history.",
            quote: "'Time is on my side... always.'",
            story: "Over 100 years old, The End fought in both World Wars. Member of the Cobra Unit. His unique biology allows him to go without food or water for weeks. The only enemy that can literally die of old age if the player waits long enough.",
            image: "images/The End.jpg",
            video: "Video/Metal Gear Solid Delta Snake Eater - Full The End Boss Fight (4K) - Sirloin (360p, h264).mp4",
            wiki: "https://metalgear.fandom.com/wiki/The_End"
        },
        {
            id: 20,
            name: "Meryl Silverburgh",
            faction: "us_army",
            role: "Special Forces Commander",
            clearance: 8,
            bio: "Niece of Colonel Campbell. Started as a rookie during the Shadow Moses incident, eventually becoming commander of Rat Patrol Team 01.",
            quote: "'I fight for what I believe in. Not for a country, not for a flag, but for myself.'",
            story: "Defied her uncle to join FOXHOUND. Survived the Shadow Moses incident and became a highly respected special forces operative. Known for her purple hair and determination to prove herself.",
            image: "images/𝐌𝐞𝐫𝐲𝐥 𝐒𝐢𝐥𝐯𝐞𝐫𝐛𝐮𝐫𝐠𝐡.jpg",
            video: "video/meryl.mp4",
            audio: "audio/voices/meryl.ogg",
            wiki: "https://metalgear.fandom.com/wiki/Meryl_Silverburgh"
        },
        {
            id: 21,
            name: "Colonel Roy Campbell",
            faction: "us_army",
            role: "Commanding Officer",
            clearance: 2,
            bio: "Veteran commander with decades of experience. Uncle to Meryl Silverburgh. Served in Vietnam and numerous special operations.",
            quote: "'This is no time for hesitation. Make a decision, and live with the consequences.'",
            story: "Commanded FOXHOUND during the Shadow Moses incident. Former lover of The Boss. Despite his tough exterior, cares deeply for his subordinates. One of the few commanders who truly understands the cost of war.",
            image: "images/Colonel Roy Campbell.jpg",
            wiki: "https://metalgear.fandom.com/wiki/Roy_Campbell"
        },
        {
            id: 22,
            name: "Psycho Mantis",
            faction: "foxhound",
            role: "Psychic / Interrogator",
            clearance: 2,
            bio: "Powerful psychic who can read minds and control people. Hates humanity due to childhood trauma.",
            quote: "'I can see into your mind... I know everything about you.'",
            story: "Born with powerful psychic abilities that made him an outcast. Joined FOXHOUND and became Liquid Snake's most dangerous operative. Known for his iconic boss battle where he reads the player's memory card.",
            image: "images/Psycho Mantis.jpg",
            video: "Video/Metal Gear Solid 5 Phantom Pain - Psycho Mantis (MGS5) - DarkSagor (720p, h264).mp4",
            wiki: "https://metalgear.fandom.com/wiki/Psycho_Mantis"
        },
        {
            id: 23,
            name: "Chico Valenciano Libre",
            faction: "MSF",
            role: "Child Soldier / Radio Operator",
            clearance: 9,
            bio: "Young Costa Rican boy rescued by Big Boss. Became a radio operator for the Militaires Sans Frontières.",
            quote: "'I want to be strong, like you. I want to fight.'",
            story: "Survived the Sandinista conflict in Costa Rica. Saved by Big Boss and became his protege. His fate remains one of the series' most tragic stories, showing the cost of war on children.",
            image: "images/Chico.jpg",
            video: "video/chico.mp4",
            audio: "audio/voices/chico.ogg",
            wiki: "https://metalgear.fandom.com/wiki/Chico"
        },
        {
            id: 24,
            name: "Huey Emmerich",
            faction: "MSF",
            role: "Scientist / Engineer",
            clearance: 2,
            bio: "Brilliant but morally compromised scientist. Father of Hal 'Otacon' Emmerich. Creator of early Metal Gear prototypes.",
            quote: "'Science cannot progress without sacrifice... but some sacrifices are too great.'",
            story: "Designed the first bipedal nuclear weapon carrier. Worked for multiple governments and private organizations. His unethical experiments and personal failures created a legacy of tragedy for his family.",
            image: "images/ꉂ ᕼᑌEY EᗰᗰEᖇIᑕᕼ 𐭩.jpg",
            video: "Video/Metal Gear Solid V The Phantom Pain - Huey Introduction - Generic Gaming (720p, h264).mp4",
            wiki: "https://metalgear.fandom.com/wiki/Huey_Emmerich"
        },
        {
            id: 25,
            name: "Revolver Ocelot",
            faction: "foxhound",
            role: "Interrogation Specialist",
            clearance: 2,
            bio: "Master marksman, strategist, and triple agent. Son of The Boss and a Soviet GRU colonel. The ultimate schemer of the series.",
            quote: "'I'm a revolver... six bullets... more than enough to kill anything that moves.'",
            story: "Played every side against the middle for decades. His loyalty was always to himself and his mother's will. The architect behind the Patriots' downfall. Known for his obsession with revolvers and psychological warfare.",
            image: "images/Revolver Ocelot.jpg",
            video: "Video/Snake Meets Ocelot For The First Time — MGS3 REMAKE (Full Scene & No Commentary) - PythonSelkan (360p, h264).mp4",
            audio: "Audio/TTS_Ocelot_We_Need_Tension.mp3.wav",
            wiki: "https://metalgear.fandom.com/wiki/Revolver_Ocelot"
        },
        {
            id: 26,
            name: "Kazuhira Miller",
            faction: "philanthropy",
            role: "Strategic Advisor / Logistician",
            clearance: 9,
            bio: "Master of logistics, training, and battlefield economics. The man who keeps armies running.",
            quote: "'We're not tools of the government, or anyone else. Fighting was the only thing... the only thing I was good at.'",
            story: "Half-Japanese, half-American soldier who lost everything in the Cold War. Co-founded Militaires Sans Frontières with Big Boss. After losing Mother Base, he dedicated his life to revenge and rebuilding.",
            image: "images/Kaz.jpg",
            video: "video/miller.mp4",
            audio: "audio/voices/miller.ogg",
            wiki: "https://metalgear.fandom.com/wiki/Kazuhira_Miller"
        },
                {
            id: 27,
            name: "Otacon",
            faction: "philanthropy",
            role: "Scientist / Engineer",
            clearance: 9,
            bio: "Brilliant engineer with a strong moral compass. Son of Huey Emmerich. Creator of Metal Gear REX.",
            quote: "'Science is about finding the truth. Even if that truth is ugly.'",
            story: "Overcame his family's legacy to become a force for good. Co-founded Philanthropy with Solid Snake to stop Metal Gear proliferation. Known for his technical genius and social anxiety.",
            image: "images/Otacon.jpg",
            video: "video/otacon.mp4",
            audio: "audio/voices/otacon.ogg",
            wiki: "https://metalgear.fandom.com/wiki/Otacon"
        },
        {
            id: 28,
            name: "Liquid Snake",
            faction: "foxhound",
            role: "Terrorist Leader",
            clearance: 2,
            bio: "Twin brother of Solid Snake. Dominant genes from Big Boss. Led the FOXHOUND rebellion on Shadow Moses.",
            quote: "'We're not just clones, brother. We're the future. And you're the past.'",
            story: "Believed he inherited recessive genes from Big Boss, driving his inferiority complex and hatred for his brother. Masterminded the Shadow Moses incident to obtain Metal Gear REX and declare war on the Patriots.",
            image: "images/Liquid Snake.jpg",
            audio: "Audio/Liquid_Snake_World_Gone_Soft.wav",
            wiki: "https://metalgear.fandom.com/wiki/Liquid_Snake"
        },
        {
            id: 29,
            name: "Sniper Wolf",
            faction: "foxhound",
            role: "Sniper",
            clearance: 2,
            bio: "Kurdish sniper saved by Big Boss. Considered the best sniper in FOXHOUND after The End.",
            quote: "'I live for the hunt. The moment when the crosshairs align... and time stops.'",
            story: "Orphaned during the Gulf War and rescued by Big Boss. Devoted to him completely. Her tragic love story with Otacon highlights the human cost of war.",
            image: "images/Sniper Wolf  Metal Gear Solid 1.jpg",
            wiki: "https://metalgear.fandom.com/wiki/Sniper_Wolf"
        },
        {
            id: 30,
            name: "Boris Vyacheslavovich Popov",
            faction: "maverick",
            role: "President of Maverick Security",
            clearance: 10,
            bio: "A Russian veteran and former comrade of Sergei Gurlukovich. He founded Maverick Security Counseling, Inc. to provide legitimate PMC services in the post-Patriots era.",
            quote: "'We are not killers, Raiden. We are guardians.'",
            story: "Boris provides the tactical oversight for Raiden's missions. He is a man of honor who tries to navigate the chaotic world of privatized warfare while staying true to his moral compass.",
            image: "images/Boris Vyacheslavovich Popov.jpg",
            video: "video/boris.mp4",
            audio: "audio/voices/boris.ogg",
            wiki: "https://metalgear.fandom.com/wiki/Boris_Vyacheslavovich_Popov"
        },
        {
            id: 31,
            name: "Kevin Washington",
            faction: "maverick",
            role: "Military Counselor / Strategy",
            clearance: 2,
            bio: "Maverick's lead strategist and briefing officer. A former NGO worker who understands the socio-political climate of the regions Raiden infiltrates.",
            quote: "'Don't just look at the mission, Raiden. Look at the people behind it.'",
            story: "Kevin handles the logistics and planning for Maverick's operations. He often provides Raiden with cultural and political context, helping him understand the impact of their actions on local populations.",
            image: "images/Kevin.jpg",
            wiki: "https://metalgear.fandom.com/wiki/Kevin_Washington"
        },
        {
            id: 32,
            name: "Courtney Collins",
            faction: "maverick",
            role: "Data Analyst / Communication",
            clearance: 2,
            bio: "The communications officer for Maverick. She is responsible for recording mission data and monitoring Raiden's vitals during high-intensity combat.",
            quote: "'I've got the data feed secured. Be careful out there.'",
            story: "Courtney serves as the modern-day 'Para-Medic' or 'Save' contact for Raiden. She handles the massive amounts of data generated by his cyborg body and ensures the mission remains documented.",
            image: "images/Courtney Collins.jpg",
            wiki: "https://metalgear.fandom.com/wiki/Courtney_Collins"
        },
        {
            id: 33,
            name: "Doktor",
            faction: "maverick",
            role: "Cybernetics Specialist",
            clearance: 10,
            bio: "Real name Wilhelm Voigt. A brilliant German scientist specializing in cybernetic engineering. He maintains and upgrades Raiden's chassis and weaponry.",
            quote: "'A spectacular demonstration of cybernetic prowess!'",
            story: "Doktor is obsessed with the evolution of cyborg technology. He provides Raiden with technical upgrades and analyzes the 'Left Arms' of enemies to harvest battle data and advanced tech.",
            image: "images/Doktorr.jpg",
            video: "video/doktor.mp4",
            audio: "audio/voices/doktor.ogg",
            wiki: "https://metalgear.fandom.com/wiki/Doktor"
        },
        {
            id: 34,
            name: "Senator Armstrong",
            faction: "others",
            role: "U.S. Senator / World Marshall Shadow Leader",
            clearance: 2,
            bio: "A presidential candidate with extreme Social Darwinist views. He is powered by 'Nanomachines' that harden his skin in response to physical trauma.",
            quote: "'Nanomachines, son! They harden in response to physical trauma.'",
            story: "Armstrong sought to restart the American war economy to create a world where individuals fight for what they believe in, rather than for money or government orders. He is the ultimate ideological foil to Raiden.",
            image: "images/Metal Gear Rising.jpg",
            video: "Video/Metal Gear Rising Revengeance - R-07 Assassination Attempt Senator Armstrong & Excelsus Intro PS3 - Jason's Video Games Source (360p, h264).mp4",
            wiki: "https://metalgear.fandom.com/wiki/Steven_Armstrong"
        },
        {
            id: 35,
            name: "Jetstream Sam",
            faction: "desperado",
            role: "Brazilian Samurai / Mercenary",
            clearance: 2,
            bio: "Samuel Rodrigues, a master of the New South American School of Brazilian Jiu-Jitsu. He wields the high-frequency Murasama blade with terrifying speed.",
            quote: "'Show me a good time, Jack!'",
            story: "A rival to Raiden who believes that 'losing one's purpose' is the greatest sin. He joined Desperado after failing to take down World Marshall, serving as the final test for Raiden's resolve.",
            image: "images/Jet stream sam.jpg",
            video: "Video/Metal Gear Rising Revengeance - 'Jetstream Sam Opening Cinematic' [1080p] TRUE-HD QUALITY - RajmanGaming HD (360p, h264).mp4",
            wiki: "https://metalgear.fandom.com/wiki/Samuel_Rodrigues"
        },
        {
            id: 36,
            name: "Blade Wolf",
            faction: "maverick",
            role: "AI Prototype / Scout",
            clearance: 2,
            bio: "An Unmanned Gear (IFP-V1) with a highly advanced AI. Originally programmed for assassination, he was rebuilt by Maverick to assist Raiden.",
            quote: "'I possess intellect, yet I am a tool. I am searching for my own directives.'",
            story: "After being defeated by Raiden, the wolf-like robot was reprogrammed. He eventually developed his own sense of self, choosing to fight alongside Raiden rather than serve a master.",
            image: "images/Metal Gear Rising (1).jpg",
            video: "Video/Blade Wolf Introduction - Scott Andrew (360p, h264).mp4",
            wiki: "https://metalgear.fandom.com/wiki/Blade_Wolf"
        },
        {
            id: 37,
            name: "Sundowner",
            faction: "desperado",
            role: "Leader of Desperado Enforcement",
            clearance: 2,
            bio: "A massive cyborg wielding dual high-frequency 'Bloodlust' machetes. He is the leader of the Winds of Destruction and a lover of pure warfare.",
            quote: "'Like I said, kids are cruel, Jack. And I'm very in touch with my inner child.'",
            story: "Sundowner lives for the 'good old days after 9/11.' He believes that war is a natural state and works to reignite global conflict to keep the PMC industry thriving.",
            image: "images/Sundowner is the leader of the three deadly pack….jpg",
            video: "Video/sundowner opening cutscene - Maniacal Mallard (720p, h264).mp4",
            wiki: "https://metalgear.fandom.com/wiki/Sundowner"
        },
        {
            id: 38,
            name: "Mistral",
            faction: "desperado",
            role: "Winds of Destruction / Cold Wind",
            clearance: 2,
            bio: "A cyborg from Algeria who utilizes a specialized chassis that can attach multiple 'Dwarf Gekko' arms for multi-directional combat.",
            quote: "'I've finally found what I was looking for. A place where I can be free.'",
            story: "A survivor of the Algerian Civil War who found her 'raison d'être' in combat. She joined Desperado to find a master worth following, eventually finding her place among the Winds of Destruction.",
            image: "images/Mistral_.jpg",
            video: "Video/Metal Gear Rising Revengeance - Mistral Boss Fight [4K 60FPS] - Shirrako (360p, h264).mp4",
            wiki: "https://metalgear.fandom.com/wiki/Mistral"
        },
        {
            id: 39,
            name: "Monsoon",
            faction: "desperado",
            role: "Winds of Destruction / Sower of Nihilism",
            clearance: 7,
            bio: "A nihilistic cyborg with a magnetic body that can break apart and reform at will. He uses smoke and high-frequency 'Dystopia' sai.",
            quote: "'Memes, the DNA of the soul.'",
            story: "Having survived the Khmer Rouge in Cambodia, Monsoon believes the world is ruled by memes and chance. He attempts to break Raiden's mind by exposing the 'Jack the Ripper' side of his personality.",
            image: "images/Monsoon - Metal Gear Rising.jpg",
            video: "Video/Metal Gear Rising Revengeance - Monsoon Boss Fight [4K 60FPS] - Shirrako (360p, h264).mp4",
            audio: "audio/voices/monsoon.ogg",
            wiki: "https://metalgear.fandom.com/wiki/Monsoon"
        }
    ];

    const grid = document.getElementById("charactersGrid");
    const modal = document.getElementById("characterModal");
    const modalContent = document.getElementById("modalContent");
    const closeModal = document.querySelector(".close-modal");
    const filterButtons = document.querySelectorAll(".filter-btn");

    function renderCharacters(filter = "all") {
        grid.innerHTML = "";

        characters
            .filter(c => {
                if (filter === "all") return true;
                const charFaction = c.faction.toLowerCase().replace(/[\s-]+/g, '_');
                const filterKey = filter.toLowerCase().replace(/[\s-]+/g, '_');
                return charFaction === filterKey;
            })
            .forEach(c => {
                const card = document.createElement("div");
                card.className = "character-card";

                card.innerHTML = `
                    ${c.image ? `<img src="${c.image}" alt="${c.name}" class="character-image">` : '<div class="image-placeholder">[CLASSIFIED IMAGE UNAVAILABLE]</div>'}
                    <div class="character-name">${c.name}</div>
                    <div class="character-role">${c.role}</div>
                    <div class="character-faction">${formatFaction(c.faction)}</div>
                `;

                card.addEventListener("click", () => {
                playSound('uiClickSound', 0.35);
                openModal(c);});

                grid.appendChild(card);
            });
    }

    function formatFaction(faction) {
        const factionNames = {
            'foxhound': 'FOXHOUND',
            'cobra_unit': 'COBRA UNIT',
            'us_army': 'U.S. ARMY',
            'militaires_sans_frontieres': 'MSF',
            'philanthropy': 'PHILANTHROPY',
            'fox_unit': 'FOX UNIT',
            'diamond_dogs': 'DIAMOND DOGS',
            'maverick': 'MAVERICK SECURITY',
            'desperado': 'DESPERADO',
            'others': 'OTHERS',
        };
        const key = faction.toLowerCase().replace(/[\s-]+/g, "_");
        return factionNames[key] || faction.toUpperCase().replace("_", " ");
    }

    function openModal(character) {
        const userClearance = parseInt(localStorage.getItem('foxhound_clearance')) || 0;
        if (character.clearance > userClearance) {
            playSound('uiClickSound', 0.5);
            modalContent.innerHTML = `
                <div class="access-denied-container" style="padding: 30px; border: 2px solid #8b2a2a; background: rgba(20,0,0,0.95); color: #ff4d4d; font-family: 'Courier New', monospace; text-align: center;">
                    <h2 style="letter-spacing: 5px; animation: flash 1s infinite; margin-bottom: 20px;">⚠️ SECURITY BREACH ⚠️</h2>
                    <div style="margin-bottom: 20px; padding: 15px; background: #000; border: 1px solid #ff4d4d; text-align: left;">
                        <p style="margin: 5px 0;"><strong>ERROR:</strong> INSUFFICIENT CLEARANCE</p>
                        <p style="margin: 5px 0;"><strong>REQUIRED:</strong> LEVEL ${character.clearance}</p>
                        <p style="margin: 5px 0;"><strong>CURRENT:</strong> LEVEL ${userClearance}</p>
                    </div>
                    <p style="color: #8a958a; font-style: italic; font-size: 0.9rem; line-height: 1.5; margin-bottom: 20px;">
                        Access to Dossier ID: ${character.id} (${character.name.toUpperCase()}) is restricted to authorized personnel only. 
                        Your biometric signature does not match required parameters for Level ${character.clearance} intelligence.
                    </p>
                    <button class="panel-btn" onclick="document.querySelector('.close-modal').click()" 
                            style="background: transparent; color: #ff4d4d; border: 1px solid #ff4d4d; padding: 10px 20px; cursor: pointer; text-transform: uppercase;">
                        Return to Archive
                    </button>
                </div>
            `;
            modal.classList.add("show");
            return;
        }

        playSound('codecOpenSound', 0.45);
        let modalHTML = `
            <h2>${character.name}</h2>
            <p class="character-title"><strong>CODENAME:</strong> ${character.name.toUpperCase()}</p>
            <p><strong>ROLE:</strong> ${character.role}</p>
            <p><strong>AFFILIATION:</strong> ${formatFaction(character.faction)}</p>
            <div class="bio-section">
                <h3>PROFILE</h3>
                <p>${character.bio}</p>
            </div>
        `;

        if (character.quote) {
            modalHTML += `
                <div class="quote-section">
                    <h3>BRIEFING LOG</h3>
                    <blockquote>"${character.quote}"</blockquote>
                </div>
            `;
        }

        if (character.story) {
            modalHTML += `
                <div class="story-section">
                    <h3>OPERATIONAL HISTORY</h3>
                    <p>${character.story}</p>
                </div>
            `;
        }

        if (character.video) {
            modalHTML += `
                <div class="modal-media">
                    <h3>VIDEO DOSSIER</h3>
                    <video src="${character.video}" controls width="100%"></video>
                </div>
            `;
        }

        if (character.audio) {
            modalHTML += `
                <div class="modal-media">
                    <h3>CODEC TRANSMISSION</h3>
                    <audio src="${character.audio}" controls style="width: 100%"></audio>
                </div>
            `;
        }

        if (character.wiki) {
            modalHTML += `
                <div class="wiki-section">
                    <a href="${character.wiki}" target="_blank" class="wiki-link">
                        ▶ ACCESS FULL DOSSIER (CLASSIFIED INTEL)
                    </a>
                </div>
            `;
        }

        modalContent.innerHTML = modalHTML;
        modal.classList.add("show");

        document.querySelectorAll('video, audio').forEach(media => {
            if (media.id !== 'codecOpenSound') media.pause();
        });
    }

    closeModal.addEventListener("click", () => {
        playSound('codecCloseSound', 0.35);
        modal.classList.remove("show");
        const modalMedia = modalContent.querySelectorAll('video, audio');
        modalMedia.forEach(m => m.pause());
    });

    modal.addEventListener("click", e => {
        if (e.target === modal) {
            playSound('codecCloseSound', 0.35);
            modal.classList.remove("show");
            const modalMedia = modalContent.querySelectorAll('video, audio');
            modalMedia.forEach(m => m.pause());
        }
    });

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            playSound('navSound', 0.4);
            document.querySelector(".filter-btn.active")?.classList.remove("active");
            btn.classList.add("active");
            renderCharacters(btn.dataset.filter);
        });
    });

    renderCharacters();
});