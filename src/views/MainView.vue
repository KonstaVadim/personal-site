<template>
  <div class="main-view">
    <!-- Blocks -->
    <BlockMain />
    <BlockQuote />
    <BlockServices />
    <BlockPortfolio />
    <BlockAboutMe />
    <BlockContact />

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup>
import TheFooter from "@components/TheFooter.vue";
import BlockMain from "@components/BlockMain.vue";
import BlockQuote from "@components/BlockQuote.vue";
import BlockServices from "@components/BlockServices.vue";
import BlockPortfolio from "@components/BlockPortfolio.vue";
import BlockAboutMe from "@components/BlockAboutMe.vue";
import BlockContact from "@components/BlockContact.vue";
</script>

<style scoped lang="scss"></style>
