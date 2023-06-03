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
                volume: 0,
            },
            {
                title: 'Thunder',
                type: SoundType.Thunder,
                volume: 0,
            },
            {
                title: 'Waves',
                type: SoundType.Waves,
                volume: 0,
            },
            {
                title: 'Wind',
                type: SoundType.Wind,
                volume: 0,
            },
            {
                title: 'Fire',
                type: SoundType.Fire,
                volume: 0,
            },
            {
                title: 'Birds',
                type: SoundType.Birds,
                volume: 0,
            },
            {
                title: 'Crickets',
                type: SoundType.Crickets,
                volume: 0,
            },
            {
                title: 'Coffee shop',
                type: SoundType.People,
                volume: 0,
            },
            {
                title: 'Singing Bowl',
                type: SoundType.SingingBowl,
                volume: 0,
            },
            {
                title: 'White noise',
                type: SoundType.WhiteNoise,
                volume: 0,
            },
        ],
    }),
    actions: {
        setup() {
            this.sounds.forEach((sound) => {
                sound.audio = new Audio(`/sounds/${sound.type}/main-${sound.type}.mp3`);
                sound.audio.defaultMuted = true;
                // sound.audio.autoplay = true;
                sound.audio.loop = true;
                sound.audio.volume = sound.volume;
            });
        },
        toggleIsPlaying() {
            this.isPlaying = !this.isPlaying;
            this.sounds.forEach((sound) => {
                if (sound.audio) {
                    if (this.isPlaying) {
                        sound.audio.play();
                        sound.audio.muted = false;
                    } else {
                        sound.audio.pause();
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
                this.sounds[index].volume = volume >= 0.1 ? volume : 0;
            }
        },
    },
    getters: {
        getSoundVolume: (state) => {
            return (type: SoundType) => {
                const index = state.sounds.findIndex((x) => x.type === type);
                if (index > -1) {
                    return state.sounds[index].volume ?? 0;
                }
                return 0;
            };
        },
    },
});
