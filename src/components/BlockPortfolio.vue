<template>
  <div class="block-portfolio">
    <!-- Portfolio head -->
    <div class="block-title">
      <h2>My portfolio</h2>
      <h3>A selection of my best projects.</h3>
    </div>

    <!-- Portfolio cases -->
    <div class="portfolio-items">
      <!-- Bolid -->
      <div class="item">
        <img src="../assets/bolid.svg" alt="ЗАО НВП Болид" />
      </div>

      <!-- PFSZ -->
      <div class="item">
        <img src="../assets/amicum.png" alt="ООО Профсоюз" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
