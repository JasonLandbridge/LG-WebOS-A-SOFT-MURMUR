import { defineStore } from 'pinia';
import SoundType from '~/types/SoundTypeEnum';
import ISoundConfig from '~/types/ISoundConfig';

export const useMainStore = defineStore('main', {
    state: (): {
        isPlaying: boolean;
        mainVolume: number;
        sounds: ISoundConfig[];
    } => ({
        isPlaying: false,
        mainVolume: 0,
        sounds: [
            {
                title: 'Rain',
                type: SoundType.Rain,
            },
            {
                title: 'Thunder',
                type: SoundType.Thunder,
            },
            {
                title: 'Waves',
                type: SoundType.Waves,
            },
            {
                title: 'Wind',
                type: SoundType.Wind,
            },
            {
                title: 'Fire',
                type: SoundType.Fire,
            },
            {
                title: 'Birds',
                type: SoundType.Birds,
            },
            {
                title: 'Crickets',
                type: SoundType.Crickets,
            },
            {
                title: 'Coffee shop',
                type: SoundType.People,
            },
            {
                title: 'Singing Bowl',
                type: SoundType.SingingBowl,
            },
            {
                title: 'White noise',
                type: SoundType.WhiteNoise,
            },
        ],
    }),
    actions: {
        setup() {
            this.sounds.forEach((sound) => {
                sound.audio = new Audio(`/sounds/${sound.type}/main-${sound.type}.mp3`);
                sound.audio.volume = 0;
                sound.audio.autoplay = true;
                sound.audio.loop = true;
                sound.audio.defaultMuted = true;
            });
        },
        toggleIsPlaying() {
            this.isPlaying = !this.isPlaying;
            this.sounds.forEach((sound) => {
                if (sound.audio) {
                    if (this.isPlaying) {
                        sound.audio.pause();
                    } else {
                        sound.audio.play();
                    }
                }
            });
        },
        setMainVolume(volume: number) {
            this.mainVolume = volume;
        },
        setSoundVolume(type: SoundType, volume: number) {
            const index = this.sounds.findIndex((x) => x.type === type);
            if (index > -1 && this.sounds[index].audio) {
                // @ts-ignore
                this.sounds[index].audio.volume = volume >= 0.1 ? volume : 0;
            }
        },
    },
    getters: {
        getSoundVolume: (state) => {
            return (type: SoundType) => {
                const index = state.sounds.findIndex((x) => x.type === type);
                if (index > -1) {
                    return state.sounds[index].audio?.volume ?? 0;
                }
                return 0;
            };
        },
    },
});
