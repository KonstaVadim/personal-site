<template>
  <div class="block-portfolio">
    <!-- Portfolio head -->
    <div id="portfolio" class="block-title">
      <h2>{{ TEXT.titleBlock }}</h2>
      <h3>{{ TEXT.companyTitle }}</h3>
    </div>

    <!-- Portfolio cases -->
    <div class="portfolio-items">
      <!-- Bolid -->
      <div class="item" @click="showPortfolioModal(`bolid`)">
        <img src="../assets/bolid.svg" alt="ЗАО НВП Болид" />
      </div>

      <!-- PFSZ -->
      <div class="item" @click="showPortfolioModal(`pfsz`)">
        <img src="../assets/amicum.png" alt="ООО Профсоюз" />
      </div>
    </div>

    <teleport to="body">
      <transition name="fade">
        <PortfolioModal
          @closeModal="onCloseModal"
          :data="portfolioData"
          v-if="activeModal == `PortfolioModal`" />
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import PortfolioModal from "./PortfolioModal.vue";

const store = useStore();

const TEXT = computed(() => store.getters["text/PORTFOLIO_TEXT"]);

const portfolio = computed(() => {
  return {
    bolid: {
      ...TEXT.value.companies.bolid,
      link: "https://bolid.ru/",
    },
    pfsz: {
      ...TEXT.value.companies.pfsz,
      link: "https://pfsz.ru/",
    },
  };
});

let activeModal = ref("");
let portfolioData = ref({});

const showPortfolioModal = (type) => {
  portfolioData.value = portfolio.value[type];
  activeModal.value = "PortfolioModal";
};

const onCloseModal = () => {
  activeModal.value = "";
};
</script>

<style scoped lang="scss">
.block-title {
  padding: 0 1.5rem;
  text-align: center;

  h2 {
    color: #4bc0c8;
  }
}

.portfolio-items {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin-top: 3rem;
  padding: 0 3rem;

  .item {
    width: 50%;
    max-width: 400px;
    border-radius: 30px;
    padding: 1rem;
    cursor: pointer;
    transition: 0.4s ease all;
    opacity: 0.9;
    overflow: hidden;

    &:hover {
      transform: perspective(800px) rotateY(-8deg) translateY(-20px)
        rotateX(10deg);
      opacity: 1;
      box-shadow: 10px -10px 25px rgb(118 255 255 / 30%),
        0 0 4pt 2pt rgb(255 255 255 / 60%);
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
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
  .portfolio-items {
    gap: 2rem;
  }
}

@media screen and (max-width: 768px) {
  .block-title {
    padding: 0 1rem;
  }

  .portfolio-items {
    padding: 0 2rem;
    gap: 1rem;
  }
}

@media screen and (max-width: 480px) {
  .portfolio-items {
    flex-wrap: wrap;
    gap: 2rem;

    .item {
      width: 100%;
    }
  }
}
</style>
