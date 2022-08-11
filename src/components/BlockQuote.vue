<template>
  <div class="block-quote">
    <!-- Vertical line -->
    <div class="vertical-line-container">
      <div class="vertical-line"></div>
    </div>

    <!-- Quote -->
    <div class="quote-container">
      <div class="quote">
        <h3 class="size-quote first-part-quote">
          Perfection is achieved, not when there is nothing more to add,
        </h3>
        <h3 class="size-quote second-part-quote">
          but when there is nothing left to take away.
        </h3>
      </div>
      <div class="title-placeholder">- Antoine de Saint-Exupéry</div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.block-quote {
  padding: 0 5rem;
  background-color: #03001e;

  .vertical-line-container {
    justify-content: center;
    margin-bottom: 2.5rem;

    .vertical-line {
      height: 5rem;
      border-color: #feac5e;
    }
  }

  .quote-container {
    text-align: center;
    .quote {
      text-align: center;
      color: #fff;

      .size-quote {
        font-weight: 600;
      }

      .second-part-quote {
        background-color: #f3ec78;
        background: linear-gradient(90deg, #fec15e, #7de6a5, #4bc0c8);
        background-size: 400% 400%;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradient 9s ease infinite;
      }
    }
  }
}

.size-quote {
  font-size: 4.5rem;
  line-height: 1.1;
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

@media screen and (max-width: 1024px) {
  .block-quote {
    padding: 0 4rem;

    .vertical-line-container {
      margin-bottom: 2rem;
    }
  }
}

@media screen and (max-width: 991px) {
  .size-quote {
    font-size: 3.5rem;
  }
}

@media screen and (max-width: 768px) {
  .block-quote {
    padding: 0 2rem;

    .vertical-line-container {
      margin-bottom: 1rem;
    }
  }

  .size-quote {
    font-size: 3rem;
    line-height: 1.2;
  }
}

@media screen and (max-width: 480px) {
  .block-quote {
    padding: 0 1rem;
  }

  .size-quote {
    font-size: 2.25rem;
    line-height: 1.2;
  }
}
</style>
