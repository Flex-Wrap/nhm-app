import knud from "../assets/knud.jpg";
import jakobsen from "../assets/jakobsen.jpg";  
import scene1 from "../assets/scene1-bg.mp4";
import scene2 from "../assets/scene2-bg.jpg";
import scene3 from "../assets/scene3-bg.jpg";
import scene4 from "../assets/scene4-bg.jpg";
import scene5 from "../assets/scene5-bg.jpg";
import scene6 from "../assets/scene6-bg.jpg";
import scene78910 from "../assets/scene78910-bg.jpg";
import scene11 from "../assets/scene11-bg.jpg";
import scene12 from "../assets/scene12-bg.jpg";
import scene13 from "../assets/scene13-bg.jpg";
import scene1415 from "../assets/scene14-bg.jpg";
import scene16 from "../assets/scene16-bg.jpg";
import audio1 from "../assets/audio/safari-scene-1.mp3";
import audio2 from "../assets/audio/safari-scene-2.mp3";
import audio3 from "../assets/audio/safari-scene-5.mp3";
import audio4 from "../assets/audio/safari-scene-6.mp3";
import audio5 from "../assets/audio/safari-scene-7.mp3";
import audio6 from "../assets/audio/safari-scene-8.mp3";
import audio7 from "../assets/audio/safari-scene-10.mp3";
import audio8 from "../assets/audio/safari-scene-11.mp3";
import audio9 from "../assets/audio/safari-scene-10.1.mp3";
import audio10 from "../assets/audio/safari-scene-11.1.mp3";
import audio11 from "../assets/audio/safari-scene-13.mp3";
import audio12 from "../assets/audio/safari-scene-15.mp3";
import audio13 from "../assets/audio/safari-scene-17.mp3";
import audio14 from "../assets/audio/safari-scene-22.mp3";
import audio15 from "../assets/audio/safari-scene-23.mp3";
import audio16 from "../assets/audio/safari-scene-25.mp3";

export type Scene = {
    id: number;
    text: string;
    image: string;
    video?: string;
    audio: string;
    progress: number;
    nextPage: string;
    previousPage: string;
    characterImage: string;
    buttonText: string;
}


export const scenes = [
    {
        id: 1,
        text: "It’s 1947, a group of explorers from Denmark is preparing to go for an expedition to Africa - not for gold or glory, but to hunt and bring back wild animals for the museum.\n\nKnud Elmdahl -  a well-known nature photographer picked to document the expedition in films and pictures.",
        video: scene1,
        audio: audio1,
        progress: 5,
        nextPage: "/safariPages/scene/2",
        previousPage: "/safariPages/slider",
        character: false,
        characterImage: "",
        buttonText: "Continue"
    },
    {
        id: 2,
        text:"I remember this stop like it was yesterday. The unexpectedly warm wood, the partial shadow under the roof, the scent of dust and earth lingering in the air. I've sat at countless train stops back home in Denmark, yet something about this place felt strangely unfamiliar, like uncharted territory. It brought back memories of packing in a rush.\n\nDid I forget anything? I know my camera is here, the most essential thing. It's so warm, I could probably manage with just the camera if needed. Still, I should probably double-check my suitcase, just to be sure.",
        image:scene2,
        audio: audio2,
        progress: 10,
        nextPage: "/safariPages/notification/1",
        previousPage: "/safariPages/scene/1",
        character: true,
        characterImage: knud,
        buttonText: "Continue"
    },
    {
        id: 3,
        text: "Hey Knud! The cars are here! Hurry — we don’t wanna be late for camping. I wanna unpack my weapons and get set up. It’s important to get a win on the first day — sets the mood, you know? Brings good luck.",
        image: scene3,
        audio: audio3,
        progress: 24,
        nextPage: "/safariPages/scene/4",
        previousPage: "/safariPages/checkbox",
        character: true,
        characterImage: jakobsen,
        buttonText: "Continue"
    },
    {
        id: 4,
        text: "At that moment, I still didn’t quite understand what Jakobsen meant by ‘wins’.\n\nI came here to capture beauty — or at least that’s what I told myself. The landscapes… the animals… the people. But there’s a line between capturing and taking, isn’t there?...\n\nSometimes I think the camera did more damage than the bullets. We told ourselves it was for science, for adventure, for pride.\n\nYet my photos feel vain.\n\nI’d like to believe these images serve a purpose — that by trapping those moments of cruelty inside the four black walls of my film, they stay there. Frozen.",
        image: scene4,
        audio: audio4,
        progress: 29,
        nextPage: "/safariPages/scene/5",
        previousPage: "/safariPages/scene/3",
        character: true,
        characterImage: knud,
        buttonText: "Continue"
    },
    {
        id: 5,
        text: "But I’m here to tell a story — not get lost in my own thoughts.\n\nWhich brings me to the first friend I met on the expedition: the leopard turtle.\n\nLook at it.\n\nIts shell, its carapace...almost identical to our helmets. Same curve. Same purpose. Protection. Survival. They retreat when danger comes — and so do we. Desperately trying to set up camp before nightfall. We blend into the terrain, we wait, we hope not to be seen.\n\nAre we really so different?",
        image: scene5,
        audio: audio5,
        progress: 35,
        nextPage: "/safariPages/scene/6",
        previousPage: "/safariPages/scene/4",
        character: true,
        characterImage: knud,
        buttonText: "Continue"
    },
    {
        id: 6,
        text: "Look. These are gazelle horns.\n\nThey’re easier to hunt than you'd think. They live in groups—mostly females and their young. One shot, and the whole herd panics. Easy to pick off a second one if you’re fast. You don’t aim for the biggest. You aim for the slowest. The weakest. That’s how it works out here.\n\nPeople get soft when they talk about animals. But it’s just instinct. Predator, prey. That’s the whole game.",
        image: scene6,  
        audio: audio6, 
        progress: 38,
        nextPage: "/safariPages/choose",
        previousPage: "/safariPages/scene/5",
        character: true,
        characterImage: jakobsen,
        buttonText: "Continue"
    },
    {
        id: 7,
        text: "So, Jakobsen, do you have family? Kids?",
        image: scene78910,
        audio: audio7,
        progress: 48,
        nextPage: "/safariPages/scene/8",
        previousPage: "/safariPages/choose",
        character: true,
        characterImage: knud,
        buttonText: "Continue"
    },
    {
        id: 8,
        text: "That’s not your business.\n\nOut here, personal things get people killed. So drop it. Let’s better be back to work. There is my notebook with all the pictures that I took.",
        image: scene78910,
        audio: audio8,
        progress: 52,
        nextPage: "/safariPages/notification/2",
        previousPage: "/safariPages/scene/7",
        character: true,
        characterImage: jakobsen,
        buttonText: "Check notebook"
    },
    {
        id: 9,
        text: "Is it your notebook on the table?",
        image: scene78910,
        audio: audio9,
        progress: 48,
        nextPage: "/safariPages/scene/10",
        previousPage: "/safariPages/choose",
        character: true,
        characterImage: knud,
        buttonText: "Continue"
    },
    {
        id: 10,
        text: "Yes, I draw this pictures I want to catch all of it to not forget important details.",
        image: scene78910,
        audio: audio10,
        progress: 52,
        nextPage: "/safariPages/notification/2",
        previousPage: "/safariPages/scene/9",
        character: true,
        characterImage: jakobsen,
        buttonText: "Check notebook"
    },
    {
        id: 11,
        text: "We need to capture all real scenes with animals—every detail, every instinct—to represent it perfectly in Denmark.\n\nIt’s not just about the hunt; it’s about understanding the behavior, the patterns.\n\nThat’s how you make it real.",
        image: scene11,
        audio: audio11,
        progress: 62,
        nextPage: "/safariPages/AR/1",
        previousPage: "/safariPages/scene/10",
        character: true,
        characterImage: jakobsen,
        buttonText: "Take a picture"
    },
    {
        id: 12,
        text: "You see, Knud, the savannah's a fascinating place. It’s all about the rhythms of migration. Every year, like clockwork, these plant-eaters—gazelles, zebras, wildebeests—start moving, following the rains—always on the run, looking over their shoulder.\n\nIt’s a harsh life, governed by the hunt. The predators—they’re relentless. But that's nature. The brutality, the survival, it’s normal here. You don’t question it—you just do it...\n\nSpeak of the devil! The lions, let’s get closer ",
        image: scene12,
        audio: audio12,
        progress: 67,
        nextPage: "/safariPages/ar/2",
        previousPage: "/safariPages/ar/1",
        character: true,
        characterImage: jakobsen,
        buttonText: "Take a picture"
    },
    {
        id: 13,
        text: "Photographing the zebras was no easy task — but the lions were on a completely different level. Capturing them up close as they feasted on their prey… their heavy breaths from the hunt, mouths soaked in red.\n\nJakobsen spoke about the lions as if he knew them personally. He said they assigned roles — some scout, some hunt, some just watch.\n\nJust like us. We both kill.And yet I wonder — does the lion feel remorse, like I do?\n\nHow does Jakobsen feel? I had to know.",
        image: scene13,
        audio: audio13,
        progress: 71,
        nextPage: "/safariPages/dialog",
        previousPage: "/safariPages/ar/2",
        character: true,
        characterImage: knud,
        buttonText: "Continue"
    },
    {
        id: 14,
        text: "I used to think he did this for the thrill... the hunt... some twisted pride. But it’s not that. Not really. It’s something else. Something deeper.\n\nHe’s not just preserving bodies. He is trying to preserve wonder... trying to give it to someone who can’t be here to see it for himself. \n\nLook at his passion. His eyes... you can see his devotion.\n\nIt’s not just taxidermy.",
        image: scene1415,
        audio: audio14,
        progress: 90,
        nextPage: "/safariPages/scene/15",
        previousPage: "/safariPages/notification/3",
        character: true,
        characterImage: knud,
        buttonText: "Continue"
    },
    {
        id: 15,
        text: "Hey, Knud! Come, help me with these bones. I still have some to sort before we go back to Denmark.",
        image: scene1415,
        audio: audio15,
        progress: 95,
        nextPage: "/safariPages/notification/4",
        previousPage: "/safariPages/scene/14",
        character: true,
        characterImage: jakobsen,
        buttonText: "Continue"
    },
    {
        id: 16,
        text: "I still don’t know what we really brought back with us. Was it knowledge? Was it beauty? Or was it something we had no right to take? Maybe one day I’ll look at those photographs and feel proud. But right now... all I feel is the weight of it.",
        image: scene16,
        audio: audio16,
        progress: 99,
        nextPage: "/safariPages/sliderEnd",
        previousPage: "/safariPages/notification/4",
        character: true,
        characterImage: knud,
        buttonText: "Continue",

    }
];