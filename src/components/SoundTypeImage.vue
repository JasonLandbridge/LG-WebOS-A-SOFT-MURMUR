<template>
  <div class="sound-type-image">
    <div class="img img-outline"/>
    <div class="img img-fill" :style="{opacity: opacity}"/>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  opacity: number;
}>()
</script>
<style lang="scss">
.sound-type-image {
  width: 100px;
  height: 100px;
  position: relative;

  .img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
  }

  .img-outline {
    background-image: url('~/assets/img/sound-type-img-bg.png');
    background-position: -100px -200px;
  }

  .img-fill {
    background-image: url('~/assets/img/sound-type-img-bg.png');
    background-position: -200px -300px;;
  }
}
</style>
