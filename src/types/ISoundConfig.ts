import SoundType from '~/types/SoundTypeEnum';

export default interface ISoundConfig {
    title: string;
    type: SoundType;
    volume: number;
    audio?: HTMLAudioElement | null;
}
