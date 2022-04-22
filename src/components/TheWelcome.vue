<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import IconSupport from "./icons/IconSupport.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <IconSupport />
    </template>
    <template #heading>Playlist</template>
    <a
      target="_blank"
      href="https://open.spotify.com/playlist/2tepnoLFxvCtOIONW1SbNT?si=c581c39f57db4d55&pt=bd05651f45d688b83f5f56eb8c6aeaa9"
      >colab</a
    >
  </WelcomeItem>
</template>
