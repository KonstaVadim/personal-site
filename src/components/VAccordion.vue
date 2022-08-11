<template>
  <div class="accordion">
    <div ref="content" class="accordion__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "VAccordion",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      animationDuration: 300,
      timer: null,
    };
  },
  methods: {
    openAccordion() {
      this.startAnimation("closed");

      this.endAnimation("opened");
    },
    closeAccordion() {
      this.startAnimation("opened");

      setTimeout(() => {
        this.$el.style.maxHeight = "0px";

        this.endAnimation("closed");
      });
    },
    /**
     * Функция начала анимации аккордеон
     * @param {"opened" | "closed"} way
     */
    startAnimation(way) {
      const height = this.$refs.content.offsetHeight;

      this.$el.classList.remove(`accordion--${way}`);

      this.$el.classList.add("accordion--animating");
      this.$el.style.maxHeight = `${height}px`;
    },
    /**
     * Функция окончания анимации аккордеон
     * @param {"opened" | "closed"} way
     */
    endAnimation(way) {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(() => {
        this.$el.classList.remove("accordion--animating");
        this.$el.classList.add(`accordion--${way}`);

        this.$el.style = "";
      }, this.animationDuration);
    },
  },
  mounted() {
    const accordionClass = this.isOpen
      ? "accordion--opened"
      : "accordion--closed";
    this.$el.classList.add(accordionClass);
  },
  watch: {
    isOpen(isOpen) {
      if (isOpen) {
        this.openAccordion();
        return;
      }

      this.closeAccordion();
    },
  },
};
</script>

<style lang="scss" scoped>
.accordion {
  transition: max-height 300ms ease-in-out;

  &--opened {
    max-height: unset;
  }

  &--closed {
    overflow: hidden;
    max-height: 0px;
  }

  &--animating {
    overflow: hidden;
  }
}
</style>
