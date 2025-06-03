import knud from "../assets/knud.jpg";
import jakobsen from "../assets/jakobsen.jpg";  
import scene2 from "../assets/scene2-bg.jpg";
import scene3 from "../assets/scene3-bg.jpg";
import scene4 from "../assets/scene4-bg.jpg";
import scene5 from "../assets/scene5-bg.jpg";
import scene6 from "../assets/scene6-bg.jpg";
import scene78910 from "../assets/scene78910-bg.jpg";

const scenes = [
    {
        id: 1,
        text: "It’s 1947, a group of explorers from Denmark is preparing to go for an expedition to Africa - not for gold or glory, but to hunt and bring back wild animals for the museum.\n\nKnud Elmdahl -  a well-known nature photographer picked to document the expedition in films and pictures.",
        image: "/",
        audio: "/",
        progress: "5%",
        nextPage: "/safariPages/scene/2",
        previousPage: "/safariPages/slider",
        characterImage: "",
        buttonText: "continue"
    },
    {
        id: 2,
        text:"I remember this stop like it was yesterday. The unexpectedly warm wood, the partial shadow under the roof, the scent of dust and earth lingering in the air. I've sat at countless train stops back home in Denmark, yet something about this place felt strangely unfamiliar, like uncharted territory. It brought back memories of packing in a rush.\n\nDid I forget anything? I know my camera is here, the most essential thing. It's so warm, I could probably manage with just the camera if needed. Still, I should probably double-check my suitcase, just to be sure.",
        image:scene2,
        audio: "/",
        progress: "10%",
        nextPage: "/safariPages/notification/1",
        previousPage: "/safariPages/scene/1",
        characterImage: knud,
        buttonText: "continue"
    },
    {
        id: 3,
        text: "Hey Knud! The cars are here! Hurry — we don’t wanna be late for camping. I wanna unpack my weapons and get set up. It’s important to get a win on the first day — sets the mood, you know? Brings good luck.",
        image: scene3,
        audio: "/",
        progress: "24%",
        nextPage: "/safariPages/scene/4",
        previousPage: "/safariPages/checkbox",
        characterImage: jakobsen,
        buttonText: "continue"
    },
    {
        id: 4,
        text: "At that moment, I still didn’t quite understand what Jakobsen meant by ‘wins’.\n\nI came here to capture beauty — or at least that’s what I told myself. The landscapes… the animals… the people. But there’s a line between capturing and taking, isn’t there?...\n\nSometimes I think the camera did more damage than the bullets. We told ourselves it was for science, for adventure, for pride.\n\nYet my photos feel vain.\n\nI’d like to believe these images serve a purpose — that by trapping those moments of cruelty inside the four black walls of my film, they stay there. Frozen.",
        image: scene4,
        audio: "/",
        progress: "29%",
        nextPage: "/safariPages/scene/5",
        previousPage: "/safariPages/scene/3",
        characterImage: knud,
        buttonText: "continue"
    },
    {
        id: 5,
        text: "But I’m here to tell a story — not get lost in my own thoughts.\n\nWhich brings me to the first friend I met on the expedition: the leopard turtle.\n\nLook at it.\n\nIts shell, its carapace...almost identical to our helmets. Same curve. Same purpose. Protection. Survival. They retreat when danger comes — and so do we. Desperately trying to set up camp before nightfall. We blend into the terrain, we wait, we hope not to be seen.\n\nAre we really so different?",
        image: scene5,
        audio: "/",
        progress: "35%",
        nextPage: "/safariPages/scene/6",
        previousPage: "/safariPages/scene/4",
        characterImage: knud,
        buttonText: "continue"
    },
    {
        id: 6,
        text: "Look. These are gazelle horns.\n\nThey’re easier to hunt than you'd think. They live in groups—mostly females and their young. One shot, and the whole herd panics. Easy to pick off a second one if you’re fast. You don’t aim for the biggest. You aim for the slowest. The weakest. That’s how it works out here.\n\nPeople get soft when they talk about animals. But it’s just instinct. Predator, prey. That’s the whole game.",
        image: scene6,  
        audio: "/", 
        progress: "38%",
        nextPage: "/safariPages/choose",
        previousPage: "/safariPages/scene/5",
        characterImage: jakobsen,
        buttonText: "continue"
    },
    {
        id: 7,
        text: "So, Jakobsen, do you have family? Kids?",
        image: scene78910,
        audio: "/",
        progress: "48%",
        nextPage: "/safariPages/scene/8",
        previousPage: "/safariPages/choose",
        characterImage: knud,
        buttonText: "continue"
    },
    {
        id: 8,
        text: "That’s not your business.\n\nOut here, personal things get people killed. So drop it. Let’s better be back to work. There is my notebook with all the pictures that I took.",
        image: scene78910,
        audio: "/",
        progress: "52%",
        nextPage: "/safariPages/notification/2",
        previousPage: "/safariPages/scene/7",
        characterImage: jakobsen,
        buttonText: "check notebook"
    },
    {
        id: 9,
        text: "Is it your notebook on the table?",
        image: scene78910,
        audio: "/",
        progress: "48%",
        nextPage: "/safariPages/scene/10",
        previousPage: "/safariPages/choose",
        characterImage: knud,
        buttonText: "continue"
    },
    {
        id: 10,
        text: "Yes, I draw this pictures I want to catch all of it to not forget important details.",
        image: scene78910,
        audio: "/",
        progress: "52%",
        nextPage: "/safariPages/notification/2",
        previousPage: "/safariPages/scene/9",
        characterImage: jakobsen,
        buttonText: "check notebook"
    }
];
export default scenes;