<template>
  <div :class="classesCard">
    <div class="card-info-title">
      {{ title }}
    </div>
    <span class="card-info-content">
      {{ content }}
    </span>
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

const classesCard = computed(() => {
  return [
    "card-info",
    {
      green: props.color === "green",
      blue: props.color === "blue",
      yellow: props.color === "yellow",
      pink: props.color === "pink",
    },
  ];
});
</script>

<style scoped lang="scss">
.card-info {
  background: rgba(50, 49, 100, 0.4);
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 12%);
  padding: 0.75rem 2rem;
  border-radius: 20px;
  transition: all 300ms ease;
  cursor: default;

  .card-info-title {
    align-items: center;
    display: flex;
    background-color: #f3ec78;
    background-clip: text !important;
    font-size: 2.5rem;
    font-weight: 600;
    padding-left: 0.5rem;
    -webkit-text-fill-color: transparent;
    width: max-content;
    text-align: center;
    margin: 0 auto;
  }

  &.green {
    &:hover {
      box-shadow: 0 5px 20px rgba(101, 239, 159, 0.7);
    }
    .card-info-title {
      background: linear-gradient(120deg, #87e15d, #42d392);
    }
  }
  &.blue {
    &:hover {
      box-shadow: 0 5px 20px rgba(82, 156, 241, 0.8);
    }
    .card-info-title {
      background: linear-gradient(45deg, #00e3ae, #1fa2ff);
    }
  }
  &.yellow {
    &:hover {
      box-shadow: 0 5px 20px rgba(233, 200, 82, 0.7);
    }

    .card-info-title {
      background: linear-gradient(120deg, #fbda61, #ff6450);
    }
  }

  &.pink {
    &:hover {
      box-shadow: 0 5px 20px rgba(239, 101, 159, 0.7);
    }

    .card-info-title {
      background: linear-gradient(120deg, #ff5acd, #fbda61);
    }
  }

  .card-info-content {
    color: rgba(242, 246, 249, 0.8);
    margin-top: 1rem;
    font-size: 1.25rem;
    text-align: center;
  }
}

@media screen and (max-width: 991px) {
  .card-info-title {
    font-size: 2rem !important;
  }

  .card-info-content {
    font-size: 1.125rem !important;
  }
}

@media screen and (max-width: 480px) {
  .card-info-title {
    font-size: 1.5rem !important;
  }

  .card-info-content {
    font-size: 1rem !important;
  }
}
</style>
