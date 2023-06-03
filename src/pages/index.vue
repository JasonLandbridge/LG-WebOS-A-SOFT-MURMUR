<template>
  <div style="max-width: 800px">
    <h1>
      A SOFT MURMUR
    </h1>
    <SoundControl v-for="(sound, index) in sounds" :key="index" :sound="sound"/>
  </div>
</template>

<script setup lang="ts">
import ISoundConfig from "~/types/ISoundConfig";
import SoundType from "~/types/SoundTypeEnum";

const sounds = ref<ISoundConfig[]>([{
  title: 'Rain',
  type: SoundType.Rain,
}]);
</script>


