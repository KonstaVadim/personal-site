<template>
  <div class="block-about-me">
    <!-- Vertical line -->
    <div class="vertical-line-container">
      <div class="vertical-line"></div>
    </div>

    <!-- Portfolio head -->
    <div id="about" class="block-title">
      <h2>{{ TEXT.titleBlock }}</h2>
      <h3>{{ TEXT.welcome }}</h3>
    </div>

    <div class="content-container">
      <div class="cards-about-me">
        <CardInfo
          :title="cardEducationText.title"
          :content="cardEducationText.content"
          :color="cardEducationText.color" />
        <CardInfo
          :title="cardPersonalQualitiesText.title"
          :content="cardPersonalQualitiesText.content"
          :color="cardPersonalQualitiesText.color" />
        <CardInfo
          :title="cardLanguagesText.title"
          :content="cardLanguagesText.content"
          :color="cardLanguagesText.color" />
        <CardInfo
          :title="cardHobbiesText.title"
          :content="cardHobbiesText.content"
          :color="cardHobbiesText.color" />
      </div>
      <div class="image-about-me">
        <img src="../assets/about.webp" alt="icon of Vadim" />
      </div>
    </div>

    <!-- Portfolio head -->
    <div class="block-title footer-title">
      <h3>{{ TEXT.commonQualities }}</h3>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import CardInfo from "./CardInfo.vue";

const store = useStore();

const TEXT = computed(() => store.getters["text/ABOUT_ME_TEXT"]);

const cardEducationText = computed(() => {
  return {
    ...TEXT.value.cardEducationText,
    color: "pink",
  };
});

const cardPersonalQualitiesText = computed(() => {
  return {
    ...TEXT.value.cardPersonalQualitiesText,
    color: "green",
  };
});

const cardLanguagesText = computed(() => {
  return {
    ...TEXT.value.cardLanguagesText,
    color: "blue",
  };
});

const cardHobbiesText = computed(() => {
  return {
    ...TEXT.value.cardHobbiesText,
    color: "yellow",
  };
});
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
      max-width: 330px;
      flex-grow: 1;

      img {
        width: 100%;
        height: auto;
        user-select: none;
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
  min-width: 800px;
  width: 0px;
}

@media screen and (max-width: 991px) {
  .block-about-me {
    padding: 0 5rem 1.5rem;
  }

  .cards-about-me {
    min-width: 670px;
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

  .image-about-me {
    max-width: 320px !important;
  }
}

@media screen and (max-width: 480px) {
  .block-about-me {
    padding: 0 1.5rem 1.5rem;
  }

  .image-about-me {
    max-width: 270px !important;
  }
}
</style>
