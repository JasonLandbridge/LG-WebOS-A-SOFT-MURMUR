<template>
    <div style="max-width: 800px">
        <h1>A SOFT MURMUR</h1>
        <div>
            <QBtn :icon="mainStore.isPlaying ? 'mdi-pause' : 'mdi-play-arrow'" @click="mainStore.toggleIsPlaying()" />
        </div>
        <SoundControl v-for="(sound, index) in sounds" :key="index" :sound="sound" />
    </div>
</template>

<script setup lang="ts">
import ISoundConfig from '~/types/ISoundConfig';
import SoundType from '~/types/SoundTypeEnum';
import { useMainStore } from '~/store';

const mainStore = useMainStore();

const sounds = ref<ISoundConfig[]>([
    {
        title: 'Rain',
        type: SoundType.Rain,
    },
]);
</script>
