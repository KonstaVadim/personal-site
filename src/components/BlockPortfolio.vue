<template>
  <div class="block-portfolio">
    <!-- Portfolio head -->
    <div id="portfolio" class="block-title">
      <h2>My portfolio</h2>
      <h3>Компании в которых я работал.</h3>
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
import { ref } from "vue";
import PortfolioModal from "./PortfolioModal.vue";

const portfolio = {
  bolid: {
    name: `ЗАО НВП "Болид"`,
    link: "https://bolid.ru/",
    period: `10.2020-н.в.`,
    post: `Web-developer`,
    responsibilities: [
      `Оптимизировал процесс frontend разработки в web-отделе, а именно:
        1. разработал корпоративную UI-библиотеку на Vue 3 (для сборки использовал - Rollup.js; для описания документации и тестирования - Confluence и Storybook);
        2. составил список правил для ESLint'а на основе Google и Vue styleguide.
      Благодаря этому, затраченное время на разработку web-интерфейсов снизилось в 3-4 раза.`,

      `Разработал личный кабинет настройки и учета устройств пользователя за 3 месяца (для серверной разработки использовал Django REST Framework и БД PostgreSQL; для разработки web-интерфейса - Vue 3)`,

      `Переписал с нуля web-интерфейс для настройки устройства пожарной безопасности за 3 месяца и интегрировал его в личный кабинет.`,

      `Занимался доработкой web-интерфейса устройства пожарной безопасности, а именно:
        1. произвел рефакторинг более 10 000 тыс. строк JS кода;
        2. переписал авторизацию и регистрацию пользователя (вместо логина использовал почту), настроил bruteforce защиту;
        3. переписал получение данных на JSON формат вместо шаблонизатора.`,

      `Участвовал в доработке проекта "Сириус" (7 месяцев параллельной разработки), а именно:
        1. Доработал и исправил более 120 задач;
        2. Произвел рефакторинг более 5 000 строк JS кода.`,
    ],
  },
  pfsz: {
    name: `ООО "Профсоюз"`,
    link: "https://pfsz.ru/",
    period: `04.2019-04.2020`,
    post: `Frontend-developer`,
    responsibilities: [
      `Разработал 7 модулей для системы AMICUM с нуля.`,

      `Доработал, интегрировал и произвел рефакторинг 5 готовых модулей в систему AMICUM.`,

      `Сверстал более 10 печатных форм документов с автоматическим заполнением на основе введенных данных.`,

      `Разработал общие компоненты для проекта. Например: модальные окна, таблицы, календарь.`,

      `Занимался поддержанием работоспособности 3D схемы шахт, разработанных на Unity C#.`,
    ],
  },
};

let activeModal = ref("");
let portfolioData = ref({});

const showPortfolioModal = (type) => {
  portfolioData.value = portfolio[type];
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
