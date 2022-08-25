<template>
  <teleport to="body">
    <div class="portfolio-modal">
    </div>
  </teleport>
</template>

<script setup></script>

<style scoped lang="scss">
.portfolio-modal {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
