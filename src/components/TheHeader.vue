<template>
  <div id="nav">
    <div class="brand">
      <div class="brand-list">
        <div class="brand-item">Vadim Konstantinov</div>
        <div class="brand-item">Web Developer</div>
      </div>
    </div>

    <div class="menu-btn" @click="showMenu = !showMenu">
      <div class="icon-menu"></div>
    </div>

    <VAccordion :isOpen="showMenu">
      <div class="menu">
        <div
          @click="onClickMenuItem(tab)"
          class="menu-item"
          v-for="tab in menuTabs"
          :key="tab.title">
          <span>{{ tab.title }}</span>
        </div>
      </div>
    </VAccordion>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import VAccordion from "@components/VAccordion.vue";

const router = useRouter();

const menuTabs = [
  {
    title: "Services",
    route: "services",
  },
  {
    title: "Portfolio",
    route: "portfolio",
  },
  {
    title: "About me",
    route: "about",
  },
  {
    title: "Contact",
    route: "contact",
  },
];

let showMenu = ref(false);

const onClickMenuItem = (tab) => {
  showMenu.value = false;

  router.push({ name: "main", params: { route: tab.route } });
};
</script>

<style scoped lang="scss">
.icon-menu {
  --icon-url: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' focusable='false' viewBox='0 0 24 24'%3E%3Cpath d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z' fill='currentColor' stroke='none'%3E%3C/path%3E%3C/svg%3E");
  background-color: currentColor;
  mask: var(--icon-url) no-repeat 100% 100%;
  -webkit-mask: var(--icon-url) no-repeat 100% 100%;
  width: 24px;
  height: 24px;
}

#nav {
  align-items: center;
  background: rgba(81, 79, 207, 0.2);
  backdrop-filter: blur(10px);
  color: rgba(255, 255, 255, 0.9);
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: auto 1fr;
  justify-content: space-around;
  left: 0;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.brand {
  font-weight: 600;
  pointer-events: none;
  overflow: hidden;
  height: 40px;

  &-list {
    animation: change 10s infinite;
  }

  &-item {
    font-size: 1.25rem;
    line-height: 40px;
  }
}

.menu-btn {
  display: none;
  cursor: pointer;

  &:hover .icon-menu {
    animation: scale 3s linear infinite;
  }
}

.menu {
  display: flex;
  padding: 0 10px;
  gap: 1rem;

  &-item {
    display: flex;
    cursor: pointer;
    width: max-content;

    &:hover > span {
      animation: scale 3s linear infinite;
    }
  }
}

@keyframes scale {
  0% {
    transform: scale(1.1);
    opacity: 0.9;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.1);
    opacity: 0.9;
  }
}

@keyframes change {
  0%,
  35%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  50%,
  85% {
    transform: translate3d(0, -50%, 0);
  }
}

@media screen and (min-width: 992px) {
  .accordion {
    max-height: unset !important;
  }
}

@media screen and (max-width: 991px) {
  #nav {
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .menu-btn {
    display: block;
  }

  .menu {
    flex-direction: column;
    margin-top: 1rem;
    width: 100%;
  }
}
</style>
