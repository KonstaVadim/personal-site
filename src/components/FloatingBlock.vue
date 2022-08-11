<template>
  <div class="floating-container">
    <div class="floating-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.floating-container {
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 12%);
  backdrop-filter: blur(7px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  animation: float 3s ease-in-out infinite;
  width: max-content;
  color: #212529;
  cursor: default;

  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(72, 6, 6, 0.11);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgb(0 0 0 / 4%);
      transform: translatey(-10px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgb(0 0 0 / 14%);
      transform: translatey(0px);
    }
  }

  .floating-content {
    padding: 1rem;
  }
}
</style>
