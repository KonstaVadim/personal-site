<template>
  <div class="card-skills">
    <div class="card-skills-title">
      <div class="card-icon">
        <slot></slot>
      </div>
      <span :class="classesCardTitle">{{ title }}</span>
    </div>
    <div class="card-skills-content">
      <span>{{ content }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "green",
  },
});

const classesCardTitle = computed(() => {
  return [
    "card-title",
    {
      green: props.color === "green",
      blue: props.color === "blue",
      pink: props.color === "pink",
    },
  ];
});
</script>

<style scoped lang="scss">
.card-skills {
  background: rgba(50, 49, 100, 0.4);
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 12%);
  padding: 0.75rem 1rem;
  border-radius: 10px;
  cursor: default;

  .card-skills-title {
    align-items: center;
    display: flex;

    .card-title {
      background-color: #f3ec78;
      background-clip: text !important;
      font-size: 1.75rem;
      font-weight: 900;
      padding-left: 0.5rem;
      -webkit-text-fill-color: transparent;

      &.green {
        background: linear-gradient(45deg, #42d392, #b7fcc3);
      }
      &.blue {
        background: linear-gradient(45deg, #20bdff, #a5fecb);
      }
      &.pink {
        background: linear-gradient(45deg, #ef629f, #eecda3);
      }
    }
  }

  .card-skills-content {
    color: rgba(242, 246, 249, 0.8);
    margin-top: 1rem;
  }
}

@media screen and (max-width: 480px) {
  .card-title {
    font-size: 1.5rem !important;
  }
}
</style>
