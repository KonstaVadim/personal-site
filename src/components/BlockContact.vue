<template>
  <div class="block-contact">
    <!-- Vertical line -->
    <div class="vertical-line-container">
      <div class="vertical-line"></div>
    </div>

    <div class="block-title">
      <h2>Let's work together!</h2>
    </div>

    <div class="button-container">
      <ContactButton></ContactButton>
    </div>
  </div>
</template>

<script setup>
import ContactButton from "./ContactButton.vue";
</script>

<style scoped lang="scss">
.block-contact {
  .vertical-line-container {
    justify-content: center;

    .vertical-line {
      border-color: #fbd485;
      height: 8rem;
    }
  }

  .block-title {
    margin-top: 6rem;
    text-align: center;

    h2 {
      background-color: #f3ec78;
      background: linear-gradient(90deg, #fec15e, #7de6a5, #4bc0c8);
      background-size: 400% 400%;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: gradient 9s ease infinite;
      font-weight: 600;
      font-size: 5rem;
      opacity: 1;
    }
  }

  .button-container {
    display: flex;
    justify-content: center;
    padding: 5rem 0 10rem;
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
