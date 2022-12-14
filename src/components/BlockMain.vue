<template>
  <div class="block-main">
    <!-- Main image -->
    <div class="image-container">
      <div class="image">
        <img
          class="main-image"
          src="../assets/comp.webp"
          alt="Image of Vadim Konstantinov" />
      </div>
    </div>

    <!-- Name -->
    <FloatingBlock class="floating-container-name">
      <div class="floating-name">
        <div class="hand">
          <img src="../assets/hand.png" alt="Welcome" />
        </div>
        <div class="text">
          <span>{{ TEXT.welcome.hello }}</span>
          <span class="name">{{ TEXT.welcome.name }}</span>
        </div>
      </div>
    </FloatingBlock>

    <!-- Front-end -->
    <FloatingBlock class="floating-container-frontend">
      <div class="floating-frontend">{{ TEXT.frontend }}</div>
    </FloatingBlock>

    <!-- Back-end -->
    <FloatingBlock class="floating-container-backend">
      <div class="floating-backend">{{ TEXT.backend }}</div>
    </FloatingBlock>

    <!-- Title -->
    <div class="title-container">
      <div class="title">
        <h1>{{ TEXT.profession }}</h1>
      </div>
      <div class="based-in">
        <h2>{{ TEXT.based }}</h2>
      </div>
    </div>

    <!-- Button Let's work -->
    <div class="lets-work-container">
      <div class="lets-work-button" @click="onLetsWork">
        {{ TEXT.letsWork }}
      </div>
    </div>

    <!-- Vertical line -->
    <div class="vertical-line-container">
      <div class="vertical-line"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import FloatingBlock from "./FloatingBlock.vue";

const router = useRouter();
const store = useStore();

const TEXT = computed(() => store.getters["text/MAIN_TEXT"]);

const onLetsWork = () => {
  router.push({ name: "main", params: { route: "contact" } });
};
</script>

<style scoped lang="scss">
.block-main {
  background: linear-gradient(90deg, #fec15e, #7de6ac, #4bc0c8);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;

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

  .image {
    padding-top: 128px;
    margin: 0 auto;
    width: 300px;
    .main-image {
      padding: 10px;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      user-select: none;
      box-shadow: -50px -20px 40px rgba(169, 255, 135, 0.25),
        0px 50px 40px rgb(255 219 57 / 30%),
        50px -20px 40px rgb(118 255 255 / 30%),
        0 0 2pt 4pt rgb(255 255 255 / 60%);
    }
  }

  .floating-container {
    &-name {
      position: absolute;
      left: calc(50% - 415px); // 50% screen - 50% width image - 265px
      top: 230px; // 128px padding-top image + ~ 50% height image - ~ 50% floating block
    }

    &-frontend {
      position: absolute;
      left: calc(50% + 65px); // 50% screen + 65px
      top: 380px; // 128px padding-top image + ~ 100% height image - ~
    }

    &-backend {
      position: absolute;
      left: calc(50% + 175px); // 50% screen + 50% width image + 25px
      top: 155px; // 128px padding-top image + ~ 50% height image - ~
    }
  }

  .floating-name {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-right: 0.5rem;

    .text {
      display: flex;
      flex-direction: column;
    }

    .hand {
      font-size: 1.5rem;
      height: 28px;
      width: 28px;

      img {
        width: 100%;
      }
    }

    .name {
      margin: auto;
      font-size: 2rem;
      font-weight: 700;
    }
  }

  .floating-frontend {
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0.25rem 0.75rem;
  }

  .floating-backend {
    font-size: 1.25rem;
    font-weight: 600;
    padding: 0.125rem 0.5rem;
  }

  .title-container {
    margin-top: 3.5rem;
    padding: 0 1rem;

    h1 {
      font-weight: 600;
      color: #f2f6f9;
      text-align: center;
    }

    .based-in {
      margin-top: 0.5rem;

      h2 {
        text-align: center;
        font-weight: 600;
        color: #f2f6f9;
        opacity: 60%;
      }
    }
  }

  .lets-work-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    text-align: center;

    .lets-work-button {
      cursor: pointer;
      font-size: 1.25rem;
      color: #fff;
      font-weight: 500;
      opacity: 0.9;
      transition: transform 0.3s ease-out;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .vertical-line-container {
    justify-content: center;
    margin-top: 2.5rem;

    .vertical-line {
      border-color: #fff;
      opacity: 0.3;
      height: 5rem;
    }
  }
}

h1 {
  font-size: 4.25rem;
}

h2 {
  font-size: 1.5rem;
}

@media screen and (max-width: 991px) {
  .block-main {
    .floating-container-name {
      top: 100px;
      left: calc(50% - 300px);
    }

    .floating-container-frontend {
      left: calc(50% + 85px); // 50% screen + 85px
    }

    .floating-container-backend {
      display: none;
    }

    .title-container {
      margin-top: 3rem;
    }
  }

  h1 {
    font-size: 3.25rem;
  }
}

@media screen and (max-width: 768px) {
  .block-main {
    .floating-container-name {
      position: relative;
      top: unset;
      left: unset;
      margin: 2rem auto;
    }

    .floating-container-frontend,
    .floating-container-backend {
      display: none;
    }

    .title-container {
      margin-top: 2rem;
    }
  }

  h1 {
    font-size: 2.75rem;
  }

  h2 {
    font-size: 1.25rem;
  }
}

@media screen and (max-width: 480px) {
  .floating-name * {
    font-size: 14px;
  }
  .image {
    width: 200px !important;
  }

  .name {
    font-size: 1.5rem !important;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.25rem;
  }
}
</style>
