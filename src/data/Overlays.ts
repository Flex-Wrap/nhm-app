export const Overlays = {
    1: {
        id: 1,
        message: "Ah, there’s my hat. I won’t have to borrow Jakobsen’s for the whole trip."
    },
    2: {
        id: 5,
        message: "Alright — belts, shirts, lenses, film… check."
    },
    3:{
        id: 6,
        message: "And my loyal Finette — she’s been through rain, dust, and war. She’ll manage Africa."
    }
} as const;

export type OverlayId = keyof typeof Overlays;