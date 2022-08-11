<template>
  <div class="block-about-me">
    <!-- Vertical line -->
    <div class="vertical-line-container">
      <div class="vertical-line"></div>
    </div>

    <!-- Portfolio head -->
    <div class="block-title">
      <h2>About me</h2>
      <h3>Welcome to Vadim's World</h3>
    </div>

    <div class="content-container">
      <div class="cards-about-me">
        <CardInfo
          title="Education"
          content="Certificated React Developer by SheCodes Workshops in 2021 - 2022"
          color="pink"
        />
        <CardInfo
          title="Illustration"
          content="Freelancer illustrator since 2018. A love for portraits and character design"
          color="green"
        />
        <CardInfo
          title="Influencer"
          content="Created a plataform on Instagram to share coding tips, tutorials and promote tech products (@mili.codes)"
          color="blue"
        />
        <CardInfo
          title="Music & Games"
          content="Songwritter, pianist and singer in my freetime. I also enjoy playing videogames as a hobby"
          color="yellow"
        />
      </div>
      <div class="image-about-me">
        <img src="../assets/about.webp" alt="icon of Vadim" />
      </div>
    </div>

    <!-- Portfolio head -->
    <div class="block-title footer-title">
      <h3>Multitalented. Intuitive. Dedicated.</h3>
      <div class="title-placeholder">Wanna know more? Visit my Instagram</div>
    </div>
  </div>
</template>

<script setup>
import CardInfo from "./CardInfo.vue";
</script>

<style scoped lang="scss">
.vertical-line-container {
  justify-content: center;
  margin-bottom: 1.5rem;

  .vertical-line {
    border-color: #fe8454;
    height: 7rem;
  }
}
.block-about-me {
  padding: 0 7rem 1.5rem;
  margin-top: 2.5rem;

  .block-title {
    text-align: center;
    h2 {
      color: #fe8454;
    }
  }

  .content-container {
    display: flex;
    align-items: center;
    margin-top: 3rem;
    flex-wrap: wrap-reverse;
    justify-content: center;

    .cards-about-me {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      width: 0px;
      flex-grow: 1;
      min-width: 670px;
      gap: 1rem;
    }

    .image-about-me {
      width: 30%;
      max-width: 350px;
      flex-grow: 1;

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .footer-title {
    margin-top: 5rem;
  }
}

@media screen and (max-width: 991px) {
}

@media screen and (max-width: 768px) {
}
</style>
