import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
    state: () => ({
        isPlaying: false,
        mainVolume: 0,
    }),
    actions: {
        toggleIsPlaying() {
            this.isPlaying = !this.isPlaying;
        },
    },
});
