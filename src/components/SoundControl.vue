<template>
    <q-card class="sound-control">
        <q-card-section>
            <SoundTypeImage :opacity="mainStore.getSoundVolume(sound.type)" />
            <span class="sound-title">{{ sound.title }}</span>
            <q-slider
                :model-value="mainStore.getSoundVolume(sound.type) * 10"
                :min="0"
                :max="10"
                snap
                :step="0.5"
                color="red"
                label-always
                @update:model-value="mainStore.setSoundVolume(sound.type, $event / 10)" />
        </q-card-section>
    </q-card>
</template>

<script setup lang="ts">
import ISoundConfig from '~/types/ISoundConfig';
import { useMainStore } from '~/store';

const mainStore = useMainStore();

const props = defineProps<{
    sound: ISoundConfig;
}>();
</script>
<style lang="scss">
.sound-control {
    background: transparent;
    max-width: 300px;
    text-align: center;

    .sound-title {
        font-weight: bold;
    }
}
</style>
