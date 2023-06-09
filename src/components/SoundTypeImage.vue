<template>
    <div class="sound-type-image">
        <div :class="['img', `img-outline-${sound.type}`]" />
        <div :class="['img', `img-fill-${sound.type}`]" :style="{ opacity: mainStore.getSoundVolume(sound.type) }" />
    </div>
</template>

<script setup lang="ts">
import ISoundConfig from '~/types/ISoundConfig';
import { useMainStore } from '~/store';
const mainStore = useMainStore();

defineProps<{
    sound: ISoundConfig;
}>();
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

        &.img-fill-birds {
            background-image: url('img/sounds/birds-fill.png');
        }
        &.img-outline-birds {
            background-image: url('img/sounds/birds-outline.png');
        }
        &.img-fill-crickets {
            background-image: url('img/sounds/crickets-fill.png');
        }
        &.img-outline-crickets {
            background-image: url('img/sounds/crickets-outline.png');
        }
        &.img-fill-fire {
            background-image: url('img/sounds/fire-fill.png');
        }
        &.img-outline-fire {
            background-image: url('img/sounds/fire-outline.png');
        }
        &.img-fill-people {
            background-image: url('img/sounds/people-fill.png');
        }
        &.img-outline-people {
            background-image: url('img/sounds/people-outline.png');
        }
        &.img-fill-rain {
            background-image: url('img/sounds/rain-fill.png');
        }
        &.img-outline-rain {
            background-image: url('img/sounds/rain-outline.png');
        }
        &.img-fill-sbowl {
            background-image: url('img/sounds/sbowl-fill.png');
        }
        &.img-outline-sbowl {
            background-image: url('img/sounds/sbowl-outline.png');
        }
        &.img-fill-thunder {
            background-image: url('img/sounds/thunder-fill.png');
        }
        &.img-outline-thunder {
            background-image: url('img/sounds/thunder-outline.png');
        }
        &.img-fill-waves {
            background-image: url('img/sounds/waves-fill.png');
        }
        &.img-outline-waves {
            background-image: url('img/sounds/waves-outline.png');
        }
        &.img-fill-whitenoise {
            background-image: url('img/sounds/whitenoise-fill.png');
        }
        &.img-outline-whitenoise {
            background-image: url('img/sounds/whitenoise-outline.png');
        }
        &.img-fill-wind {
            background-image: url('img/sounds/wind-fill.png');
        }
        &.img-outline-wind {
            background-image: url('img/sounds/wind-outline.png');
        }
    }
}
</style>
