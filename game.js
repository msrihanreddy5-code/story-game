const STORY = [
    // Chapter 1: The Gathering Storm
    {
        chapter: "Chapter 1: The Gathering Storm",
        background: "assets/bg_citadel.png",
        scenes: [
            { type: "narration", text: "The Kingdom of Eldoria was once a land of light. But shadows have grown long..." },
            { type: "dialogue", speaker: "Azerion", text: "They do not understand. The Void is not destruction... it is evolution.", char: "azerion_normal", charImg: "assets/azerion_normal.png" },
            { type: "narration", text: "Azerion, once the High Wizard, stands alone in his tower. But he is not truly alone." },
            { type: "dialogue", speaker: "Void King", text: "Yes... let them come. We shall feast on their hope.", char: "azerion_corrupted", charImg: "assets/azerion_corrupted.png" },
            { type: "narration", text: "Meanwhile, in the capital..." },
            { type: "dialogue", speaker: "Kael", text: "The reports are true. Azerion has fallen.", char: "kael", charImg: "assets/kael.png" },
            { type: "dialogue", speaker: "Rylan", text: "Then we must strike now, before his power grows beyond our reach.", char: "rylan", charImg: "assets/rylan.png" },
            {
                type: "choice", choices: [
                    { text: "Gather the party immediately", nextIndex: 1 }, // Skip some filler
                    { text: "Scout the enemy first", nextIndex: 1 }
                ]
            }
        ]
    },
    // Chapter 2: The Four Heroes
    {
        chapter: "Chapter 2: The Four Heroes",
        background: "assets/bg_citadel.png", // Reusing for now
        scenes: [
            { type: "narration", text: "Kael and Rylan are joined by Lyra and Elira." },
            { type: "dialogue", speaker: "Lyra", text: "The stars align against him. But his magic is... wrong. It feels like nothing I've ever known.", char: "lyra", charImg: "assets/lyra.png" },
            { type: "dialogue", speaker: "Elira", text: "Fear not. The Light will guide us. Even the deepest shadow cannot withstand the dawn.", char: "elira", charImg: "assets/elira.png" },
            { type: "dialogue", speaker: "Kael", text: "We move at first light. For Eldoria!", char: "kael", charImg: "assets/kael.png" }
        ]
    },
    // Chapter 3: Into the Darkness
    {
        chapter: "Chapter 3: Into the Darkness",
        background: "assets/bg_citadel.png",
        scenes: [
            { type: "narration", text: "The journey to Azerion's Citadel was treacherous. Monsters born of shadow blocked their path." },
            { type: "dialogue", speaker: "Rylan", text: "These beasts... they don't bleed. They dissipate into smoke!", char: "rylan", charImg: "assets/rylan.png" },
            { type: "dialogue", speaker: "Lyra", text: "Illusions! Don't let them touch you!", char: "lyra", charImg: "assets/lyra.png" },
            { type: "narration", text: "The heroes fought bravely, cutting through the phantom army." }
        ]
    },
    // Chapter 4: The Citadel
    {
        chapter: "Chapter 4: The Citadel",
        background: "assets/bg_citadel.png",
        scenes: [
            { type: "narration", text: "They breached the gates. The air inside was cold and heavy." },
            { type: "dialogue", speaker: "Azerion", text: "Welcome, old friends. You have come far to die.", char: "azerion_corrupted", charImg: "assets/azerion_corrupted.png" },
            { type: "dialogue", speaker: "Elira", text: "Azerion! Fight it! This isn't you!", char: "elira", charImg: "assets/elira.png" },
            { type: "dialogue", speaker: "Azerion", text: "Azerion is weak. I am ETERNAL.", char: "azerion_corrupted", charImg: "assets/azerion_corrupted.png" }
        ]
    },
    // Chapter 5: The Truth Revealed
    {
        chapter: "Chapter 5: The Truth Revealed",
        background: "assets/bg_citadel.png",
        scenes: [
            { type: "narration", text: "As they clashed, Lyra noticed something." },
            { type: "dialogue", speaker: "Lyra", text: "Wait! Look at his eyes. He's fighting back tears.", char: "lyra", charImg: "assets/lyra.png" },
            { type: "dialogue", speaker: "Kael", text: "He's possessed? Then we can save him!", char: "kael", charImg: "assets/kael.png" },
            { type: "dialogue", speaker: "Void King", text: "SILENCE! I will crush your souls!", char: "azerion_corrupted", charImg: "assets/azerion_corrupted.png" }
        ]
    },
    // Chapter 6: The Void Realm
    {
        chapter: "Chapter 6: The Void Realm",
        background: "assets/bg_citadel.png", // Placeholder for void realm
        scenes: [
            { type: "narration", text: "The Void King unleashed a wave of energy, pulling them into his dimension." },
            { type: "dialogue", speaker: "Rylan", text: "Where are we? There is no ground, only... nothingness.", char: "rylan", charImg: "assets/rylan.png" },
            { type: "dialogue", speaker: "Elira", text: "Hold onto the Light! Do not let the despair take you!", char: "elira", charImg: "assets/elira.png" }
        ]
    },
    // Chapter 7: The Crystal Source
    {
        chapter: "Chapter 7: The Crystal Source",
        background: "assets/bg_citadel.png", // Placeholder for crystal chamber
        scenes: [
            { type: "narration", text: "They found the source. A massive Void Crystal, pulsing with the heartbeat of the dark god." },
            { type: "dialogue", speaker: "Lyra", text: "That crystal anchors him to Azerion's body. If we break it...", char: "lyra", charImg: "assets/lyra.png" },
            { type: "dialogue", speaker: "Kael", text: "We free our friend. Or we kill him. Either way, the Void King falls.", char: "kael", charImg: "assets/kael.png" }
        ]
    },
    // Chapter 8: The Final Sacrifice
    {
        chapter: "Chapter 8: The Final Sacrifice",
        background: "assets/bg_citadel.png",
        scenes: [
            { type: "narration", text: "With a combined strike, the heroes shattered the crystal." },
            { type: "dialogue", speaker: "Void King", text: "NO! IMPOSSIBLE!", char: "azerion_corrupted", charImg: "assets/azerion_corrupted.png" },
            { type: "narration", text: "Azerion regained control for a fleeting moment." },
            { type: "dialogue", speaker: "Azerion", text: "Thank you... now, GO! I must end this.", char: "azerion_normal", charImg: "assets/azerion_normal.png" },
            { type: "narration", text: "Azerion channeled all his remaining magic into a self-destructive spell, imploding the Void King's essence within him." },
            { type: "narration", text: "The explosion of light cleared the darkness. The world was saved." },
            { type: "narration", text: "And the four heroes became legends. The Four Who Challenged the Void." },
            { type: "end", text: "THE END" }
        ]
    }
];

class Game {
    constructor() {
        this.renderer = new Renderer();
        this.currentChapterIndex = 0;
        this.currentSceneIndex = 0;
        this.story = STORY;

        this.renderer.showTitleScreen(() => this.startGame());

        document.getElementById('next-btn').onclick = () => this.nextScene();
    }

    startGame() {
        this.currentChapterIndex = 0;
        this.currentSceneIndex = 0;
        this.loadChapter(0);
    }

    loadChapter(index) {
        if (index >= this.story.length) return; // End of game

        const chapter = this.story[index];
        this.renderer.setBackground(chapter.background);
        this.renderer.showChapterTitle(chapter.chapter);
        this.renderer.clearCharacters();

        setTimeout(() => {
            this.loadScene();
        }, 3000);
    }

    loadScene() {
        const chapter = this.story[this.currentChapterIndex];
        if (this.currentSceneIndex >= chapter.scenes.length) {
            // Next chapter
            this.currentChapterIndex++;
            this.currentSceneIndex = 0;
            this.loadChapter(this.currentChapterIndex);
            return;
        }

        const scene = chapter.scenes[this.currentSceneIndex];

        if (scene.type === "dialogue") {
            this.renderer.showCharacter(scene.char, scene.charImg);
            this.renderer.showDialogue(scene.speaker, scene.text);
        } else if (scene.type === "narration") {
            this.renderer.hideCharacter(); // Optional: keep last char?
            this.renderer.showDialogue("Narrator", scene.text);
        } else if (scene.type === "choice") {
            this.renderer.showChoices(scene.choices, (nextIndex) => {
                // For simplicity, choices just advance scene or skip slightly
                // In a complex game, this would branch logic
                this.currentSceneIndex += nextIndex;
                this.loadScene();
            });
            return; // Don't auto-advance
        } else if (scene.type === "end") {
            this.renderer.showChapterTitle("THE END", 10000);
            this.renderer.hideDialogue();
            return;
        }

        this.currentSceneIndex++;
    }

    nextScene() {
        this.loadScene();
    }
}

// Start the game
window.onload = () => {
    const game = new Game();
};
