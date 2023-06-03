<template>
  <q-card class="sound-control">
    <q-card-section>
      <SoundTypeImage :opacity="volume / 10"/>
      <span class="sound-title">{{ sound.title }}</span>
      <q-slider v-model="volume" :min="0" :max="10" snap :step="1" color="red" @update:model-value="onVolumeChange"
                @click="onClick"/>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import Log from 'consola';
import ISoundConfig from "~/types/ISoundConfig";
import {get, set} from '@vueuse/core'

const props = defineProps<{
  sound: ISoundConfig;
}>();

const volume = ref(0)
const audio = ref<HTMLAudioElement>()

function onClick() {
  get(audio)?.play();
}

function onVolumeChange(volume: number) {
  Log.debug('volume', volume);
  if (get(audio) === undefined) {
    return;
  }
  if (audio.value) {
    audio.value.volume = volume / 10;
  }

}

onMounted(() => {
  set(audio, new Audio("sounds/rain/main-rain.mp3") ?? null);
  if (audio.value) {
    audio.value.loop = true;
  }
})
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
