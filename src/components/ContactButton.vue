<template>
  <button class="contact-button" @mouseleave="onMouseLeave">
    <span>Contact me</span>
    <div class="contact-button-icon"></div>
  </button>
</template>

<script setup>
const onMouseLeave = (event) => {
  // Когда сдвигаем курсор при фокусе на кнопке
  event.target.blur();
};
</script>

<style scoped lang="scss">
.contact-button {
  display: flex;
  align-items: center;
  background: none;
  font-weight: 600;
  text-align: center;
  color: #fff;
  cursor: pointer;
  outline: 2px solid;
  outline-color: rgb(124, 223, 169);
  padding: 1rem 2rem;
  border-radius: 1000px;
  transition: all 450ms cubic-bezier(0.2, 0, 0, 0.8);

  &:hover,
  &:focus {
    outline: 3px solid;
    color: #fff;
    outline-color: rgba(71, 126, 232, 0);
    outline-offset: 150px;
    transform: translateY(-8px);
    background-color: rgb(124, 223, 169);
    box-shadow: 0px 8px 30px rgba(23, 9, 44, 0.3);
  }

  span {
    font-size: 1.75rem;
  }

  .contact-button-icon {
    width: 24px;
    height: 24px;
    margin-left: 0.5rem;
    background: no-repeat center;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath d='M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z' fill='%23fff'/%3E%3C/svg%3E");
  }
}
</style>
