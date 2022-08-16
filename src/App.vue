<template>
  <!-- Header -->
  <TheHeader @onClickMenuItem="onClickMenuItem" />

  <!-- Blocks -->
  <BlockMain />
  <BlockQuote />
  <BlockServices />
  <BlockPortfolio />
  <BlockAboutMe />
  <BlockContact />

  <!-- Footer -->
  <TheFooter />
</template>

<script setup>
import TheHeader from "@components/TheHeader.vue";
import TheFooter from "@components/TheFooter.vue";
import BlockMain from "@components/BlockMain.vue";
import BlockQuote from "@components/BlockQuote.vue";
import BlockServices from "@components/BlockServices.vue";
import BlockPortfolio from "@components/BlockPortfolio.vue";
import BlockAboutMe from "@components/BlockAboutMe.vue";
import BlockContact from "@components/BlockContact.vue";
import { inject, ref } from "vue";

const smoothScroll = inject("smoothScroll");

const scrollTo = (id) => {
  const offset = 82;
  const blockElement = document.getElementById(id);
  smoothScroll({
    scrollTo: blockElement,
    offset: -offset,
  });
};

const onClickMenuItem = (item) => {
  console.log(item);
  scrollTo(item.route);
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  outline: none;
  padding: 0;
  text-decoration: none;
  vertical-align: baseline;
  font-size: 16px;
  font-family: "Inter", sans-serif;
}

body {
  background-color: #03001e;
}

.title-placeholder {
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  margin-top: 0.5rem;
  opacity: 0.65;
}

.vertical-line-container {
  display: flex;

  .vertical-line {
    border: 1px solid;
    opacity: 0.5;
  }
}

.block-title {
  h2 {
    font-size: 2rem;
    opacity: 0.7;
  }

  h3 {
    color: #fff;
    font-size: 3.75rem;
    margin-top: 0.5rem;
    font-weight: 600;
  }
}

@media screen and (max-width: 991px) {
  .block-title {
    h2 {
      font-size: 1.75rem;
    }

    h3 {
      font-size: 2.75rem;
    }
  }

  .title-placeholder {
    font-size: 1.75rem;
  }
}

@media screen and (max-width: 768px) {
  .block-title {
    h3 {
      font-size: 2.25rem;
    }
  }

  .title-placeholder {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 480px) {
  .block-title {
    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }

  .title-placeholder {
    font-size: 1.25rem;
  }
}
</style>
