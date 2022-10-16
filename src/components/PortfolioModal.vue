<template>
  <div class="portfolio-modal">
    <div class="portfolio-card">
      <div class="modal-header">
        <h2 class="title">
          <a :href="data.link" target="_blank">{{ data.name }}</a>
        </h2>
        <div class="close-btn" @click="onClose"></div>
      </div>
      <div class="modal-content">
        <div class="row">
          <div class="legend">Период</div>
          <div class="period">{{ data.period }}</div>
        </div>

        <div class="row">
          <div class="legend">Должность</div>
          <div class="post">{{ data.post }}</div>
        </div>

        <div class="row">
          <div class="legend">Обязанности</div>
          <div class="responsibilities">
            <ul>
              <li
                v-for="(responsibility, index) in data.responsibilities"
                :key="index">
                {{ responsibility }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
  },
});
const emit = defineEmits(["closeModal"]);

const onClose = () => {
  emit("closeModal");
};
</script>

<style scoped lang="scss">
.portfolio-modal {
  display: flex;
  position: fixed;
  padding: 3rem 1rem;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.75);
}

.portfolio-card {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 1rem;
  max-width: 900px;
  height: max-content;
  max-height: 100%;
  color: #fff;
  background-color: rgba(34, 102, 106, 0.8);
  border-radius: 1rem;
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 12%);
}

.modal-header {
  display: flex;
  margin-bottom: 1.5rem;

  .title {
    margin-left: auto;
  }

  .title a {
    color: #54d5df;
    font-size: 1.25rem;
    font-weight: 600;
    position: relative;
    transition: color ease 0.7s;

    &::before,
    &::after {
      position: absolute;
      content: "";
      left: 0;
      bottom: -0.1rem;
      display: block;
      width: 100%;
      height: 1px;
      background: #54d5df !important;
      transition: 0.7s cubic-bezier(0.19, 1, 0.22, 1);
      transition-property: transform, transform-origin;
    }

    &::before {
      transform: scaleX(0);
      transform-origin: left;
    }

    &::after {
      transform-origin: right;
      transition-delay: 0.25s;
    }

    &:hover,
    &:focus-visible {
      color: #5aeaf5 !important;

      &::before {
        background: currentColor !important;
        transform: scaleX(1);
        transition-delay: 0.25s;
      }

      &::after {
        background: currentColor !important;
        transform: scaleX(0);
        transition-delay: 0s;
      }
    }
  }

  .close-btn {
    margin-left: auto;
    --icon-url: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z' fill='currentColor'/%3E%3C/svg%3E%0A");
    background-color: currentColor;
    mask: var(--icon-url) no-repeat 100% 100%;
    -webkit-mask: var(--icon-url) no-repeat 100% 100%;
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: all 300ms ease-in-out;

    &:hover {
      color: #4bc0c8;
      transform: rotateZ(190deg);
    }
  }
}

.legend {
  color: #dfdfdf;
  opacity: 0.9;
}

.modal-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.6;
  overflow: auto;
}

.responsibilities {
  ul {
    white-space: pre-wrap;
    list-style-type: disc;
    list-style-position: inside;

    & ::marker {
      color: #74eef7;
    }

    li {
      padding: 4px 0;
    }

    li:not(:last-child) {
      border-bottom: 1px solid rgba(116, 238, 247, 0.3);
      margin-bottom: 0.5rem;
    }
  }
}
</style>
