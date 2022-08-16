<template>
  <div class="block-contact">
    <!-- Vertical line -->
    <div class="vertical-line-container">
      <div class="vertical-line"></div>
    </div>

    <div id="contact" class="contact-title">
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
  padding: 0 2rem;
  .vertical-line-container {
    justify-content: center;

    .vertical-line {
      border-color: #fbd485;
      height: 8rem;
    }
  }

  .contact-title {
    text-align: center;

    h2 {
      background-color: #f3ec78;
      background: linear-gradient(90deg, #fec15e, #7de6a5, #4bc0c8);
      background-size: 400% 400%;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: gradient 9s ease infinite;
      font-weight: 600;
      opacity: 1;
    }
  }

  .button-container {
    display: flex;
    justify-content: center;
  }
}

.contact-title {
  margin-top: 5rem;

  h2 {
    font-size: 5rem;
  }
}

.button-container {
  padding: 5rem 0 10rem;
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

@media screen and (max-width: 991px) {
  .button-container {
    padding: 5rem 0 8rem;
  }
  .contact-title {
    margin-top: 4rem;

    h2 {
      font-size: 4rem;
    }
  }
}

@media screen and (max-width: 768px) {
  .contact-title {
    margin-top: 3rem;

    h2 {
      font-size: 3rem;
    }
  }
}

@media screen and (max-width: 480px) {
  .block-contact {
    padding: 0 1rem;
  }

  .contact-title {
    margin-top: 2rem;

    h2 {
      font-size: 2.5rem;
    }
  }
}
</style>
