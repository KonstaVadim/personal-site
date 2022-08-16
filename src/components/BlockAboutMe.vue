<template>
  <div class="block-about-me">
    <!-- Vertical line -->
    <div class="vertical-line-container">
      <div class="vertical-line"></div>
    </div>

    <!-- Portfolio head -->
    <div id="about" class="block-title">
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
      flex-grow: 1;
      gap: 1rem;
    }

    .image-about-me {
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

.cards-about-me {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  min-width: 670px;
  width: 0px;
}

@media screen and (max-width: 991px) {
  .block-about-me {
    padding: 0 5rem 1.5rem;
  }
}

@media screen and (max-width: 768px) {
  .block-about-me {
    padding: 0 3rem 1.5rem;
  }

  .cards-about-me {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    min-width: unset;
    width: 100%;
  }
}

@media screen and (max-width: 480px) {
  .block-about-me {
    padding: 0 1.5rem 1.5rem;
  }
}
</style>
