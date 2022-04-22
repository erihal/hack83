<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import IconSupport from "./icons/IconSupport.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <IconSupport />
    </template>
    <template #heading>Spotify</template>
    <a target="_blank" href="#">playlist</a>
  </WelcomeItem>
</template>
