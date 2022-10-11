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
      <h3>Multitalented. Intuitive. Dedicated.</h3>
    </div>
  </div>
</template>

<script setup>
import CardInfo from "./CardInfo.vue";

const cardEducationText = {
  title: "Education",
  content: `Окончил бакалавр по специальности "Фундаментальная информатика и информационные технологии" и магистратуру по специальности "Прикладная информатика".`,
  color: "pink",
};

const cardPersonalQualitiesText = {
  title: "Personal qualities",
  content:
    `Умение фокусировать внимание и ответственность внутри меня позволяет писать качественный и поддерживаемый код. Для любой задачи найду решение. Люблю узнавать и применять в работе что-то новое.`,
  color: "green",
};

const cardLanguagesText = {
  title: "Languages",
  content:
    "Радной мой язык - Русский. В данный момент активно изучаю английский и испанский язык.",
  color: "blue",
};

const cardHobbiesText = {
  title: "Hobbies",
  content:
    "Люблю путешествовать и узнавать об истории мест, которые посетил. Смотрю обучающие видео на различные темы. Играю в видеоигры в свободное время.",
  color: "yellow",
};
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
