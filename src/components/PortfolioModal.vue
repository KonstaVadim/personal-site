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
  background-color: rgba(0, 0, 0, 0.6);
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
  background-color: rgba(124, 223, 169, 0.5);
  border-radius: 1rem;
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 12%);
}

.modal-header {
  display: flex;
  margin-bottom: 1.5rem;

  .title {
    margin-left: auto;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .title a {
    font-size: 1.25rem;
    font-weight: 600;
    background-color: #fff;
    background: linear-gradient(90deg, #21ebfa, #74eef7);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
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
      color: #42f2ff;
      transform: rotateZ(190deg);
    }
  }
}

.legend {
  color: #d3d3d3;
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
  }
}
</style>
