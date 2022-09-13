<template>
  <!-- Header -->
  <TheHeader />

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in" :duration="300">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import TheHeader from "@components/TheHeader.vue";
</script>

<style lang="scss">
*,
*::before,
*::after {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  outline: none;
  padding: 0;
  text-decoration: none;
  vertical-align: baseline;
  font-size: 16px;
  font-family: "Inter", sans-serif;
}

body {
  background-color: #03001e;
}

.title-placeholder {
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  margin-top: 0.5rem;
  opacity: 0.65;
}

.vertical-line-container {
  display: flex;

  .vertical-line {
    border: 1px solid;
    opacity: 0.5;
  }
}

.block-title {
  h2 {
    font-size: 2rem;
    opacity: 0.7;
  }

  h3 {
    color: #fff;
    font-size: 3.75rem;
    margin-top: 0.5rem;
    font-weight: 600;
  }
}

.fade-view-enter-active,
.fade-view-leave-active {
  transition: opacity 0.3s ease;
}

.fade-view-enter-from,
.fade-view-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 991px) {
  .block-title {
    h2 {
      font-size: 1.75rem;
    }

    h3 {
      font-size: 2.75rem;
    }
  }

  .title-placeholder {
    font-size: 1.75rem;
  }
}

@media screen and (max-width: 768px) {
  .block-title {
    h3 {
      font-size: 2.25rem;
    }
  }

  .title-placeholder {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 480px) {
  .block-title {
    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }

  .title-placeholder {
    font-size: 1.25rem;
  }
}
</style>
