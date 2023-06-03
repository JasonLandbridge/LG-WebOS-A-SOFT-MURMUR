<template>
    <q-page>
        <q-row>
            <q-col>
                <h1>A SOFT PURPUR</h1>
            </q-col>
        </q-row>
        <q-row justify="center">
            <q-col cols="auto">
                <QBtn
                    size="80px"
                    flat
                    square
                    :icon="mainStore.isPlaying ? 'mdi-pause' : 'mdi-play'"
                    @click="mainStore.toggleIsPlaying()" />
            </q-col>
        </q-row>
        <q-row justify="center">
            <SoundControl v-for="(sound, index) in mainStore.sounds" :key="index" :sound="sound" />
        </q-row>
    </q-page>
</template>

<script setup lang="ts">
import { useMainStore } from '~/store';

const mainStore = useMainStore();

onMounted(() => {
    mainStore.setup();
});
</script>
