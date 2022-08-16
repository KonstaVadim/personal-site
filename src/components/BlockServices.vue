<template>
  <div class="block-services">
    <!-- Top line -->
    <div class="top-line-container">
      <div class="right-line line"></div>
      <div class="horizontal-line line"></div>
      <div class="left-line line"></div>
    </div>

    <!-- Services head -->
    <div id="services" class="block-title">
      <h2>My services</h2>
    </div>

    <!-- Block content -->
    <div class="content-container">
      <!-- Content with title and icon -->
      <div class="title-and-icon">
        <div class="block-title">
          <h3>The most creative intuitive workmate.</h3>
        </div>

        <div class="image-container">
          <img
            class="worker-image"
            src="../assets/me-main.png"
            alt="Image of Vadim Konstantinov"
          />

          <div class="icons">
            <div class="icon code"></div>
            <div class="icon js"></div>
            <div class="icon vue"></div>
            <div class="icon github"></div>
          </div>
        </div>
      </div>

      <!-- Content with cards -->
      <div class="service-cards">
        <CardSkills
          title="Developer Skills"
          content="A great knowledge of HTML / CSS, Javascript and React.js. I make responsive applications with Bootstrap with interactive UI's designs."
          color="green"
        >
          <div class="icon developer-skills"></div>
        </CardSkills>
        <CardSkills
          title="2D Artist"
          content="5+ years of digital illustration experience, mastering techniques in Photoshop and Procreate."
          color="pink"
        >
          <div class="icon paint-brush"></div>
        </CardSkills>
        <CardSkills
          title="UI Design"
          content="A love for design and a good eye for creativity. I have proficiency in wireframing, color theory and visual communication."
          color="blue"
        >
          <div class="icon object-ungroup"></div>
        </CardSkills>
      </div>
    </div>

    <!-- Bottom line -->
    <div class="bottom-line-container">
      <div class="right-line line"></div>
      <div class="horizontal-line line"></div>
      <div class="left-line line"></div>
    </div>
  </div>
</template>

<script setup>
import CardSkills from "./CardSkills.vue";
</script>

<style scoped lang="scss">
.block-services {
  padding: 3.5rem 10rem 0;
}

.top-line-container {
  width: 50%;
  padding-left: 3rem;
  padding-bottom: 1rem;

  .right-line {
    height: 5rem;
    border-right: 2px solid;
  }

  .left-line {
    height: 5rem;
    border-left: 2px solid;
  }

  .horizontal-line {
    border-bottom: 2px solid;
  }

  .line {
    border-color: #42d392;
    opacity: 0.5;
  }
}

.bottom-line-container {
  width: 50%;
  margin-left: 50%;
  padding: 3rem 20% 1rem 0;

  .right-line {
    height: 7rem;
    border-right: 2px solid;
  }

  .left-line {
    height: 7rem;
    border-left: 2px solid;
  }

  .horizontal-line {
    border-bottom: 2px solid;
  }

  .line {
    border-color: #4bc0c8;
    opacity: 0.5;
  }
}

.block-title {
  h2 {
    color: #42d392;
  }
}

.content-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .icon {
    background: no-repeat center;
  }

  .image-container {
    padding-top: 60px;
    margin-left: 25%;
    width: 250px;
    position: relative;

    .worker-image {
      padding: 10px;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      box-shadow: -10px -10px 25px rgba(135, 255, 171, 0.25),
        0px 10px 25px rgb(255 219 57 / 30%),
        10px -10px 25px rgb(118 255 255 / 30%),
        0 0 4pt 2pt rgb(255 255 255 / 60%);
    }

    .icon {
      position: absolute;
    }

    .code {
      top: 25px;
      left: -65px;
      height: 70px;
      width: 70px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'%3E%3Cpath d='M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z' fill='%2320bdff'/%3E%3C/svg%3E");
    }
    .js {
      bottom: -5px;
      left: -60px;
      height: 50px;
      width: 50px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z' fill='%23fbd485'/%3E%3C/svg%3E");
    }

    .vue {
      top: 75px;
      right: -65px;
      height: 55px;
      width: 55px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath d='M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z' fill='%2342d392'/%3E%3C/svg%3E");
    }

    .github {
      bottom: 15px;
      right: -55px;
      height: 60px;
      width: 60px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'%3E%3Cpath d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' fill='%23ef629f'/%3E%3C/svg%3E");
    }
  }

  .service-cards {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20%;
    gap: 3rem;

    .icon {
      height: 28px;
      width: 28px;
    }

    .developer-skills {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M318.4 304.5c-3.531 9.344-12.47 15.52-22.45 15.52h-105l45.15 94.82c9.496 19.94 1.031 43.8-18.91 53.31c-19.95 9.504-43.82 1.035-53.32-18.91L117.3 351.3l-75 88.25c-4.641 5.469-11.37 8.453-18.28 8.453c-2.781 0-5.578-.4844-8.281-1.469C6.281 443.1 0 434.1 0 423.1V56.02c0-9.438 5.531-18.03 14.12-21.91C22.75 30.26 32.83 31.77 39.87 37.99l271.1 240C319.4 284.6 321.1 295.1 318.4 304.5z' fill='%2342d392'/%3E%3C/svg%3E");
    }

    .object-ungroup {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'%3E%3Cpath d='M32 119.4C12.87 108.4 0 87.69 0 64C0 28.65 28.65 0 64 0C87.69 0 108.4 12.87 119.4 32H328.6C339.6 12.87 360.3 0 384 0C419.3 0 448 28.65 448 64C448 87.69 435.1 108.4 416 119.4V232.6C435.1 243.6 448 264.3 448 288C448 323.3 419.3 352 384 352C360.3 352 339.6 339.1 328.6 320H119.4C108.4 339.1 87.69 352 64 352C28.65 352 0 323.3 0 288C0 264.3 12.87 243.6 32 232.6V119.4zM96 119.4V232.6C105.7 238.2 113.8 246.3 119.4 256H328.6C334.2 246.3 342.3 238.2 352 232.6V119.4C342.3 113.8 334.2 105.7 328.6 96H119.4C113.8 105.7 105.7 113.8 96 119.4V119.4zM311.4 480C300.4 499.1 279.7 512 256 512C220.7 512 192 483.3 192 448C192 424.3 204.9 403.6 224 392.6V352H288V392.6C297.7 398.2 305.8 406.3 311.4 416H520.6C526.2 406.3 534.3 398.2 544 392.6V279.4C534.3 273.8 526.2 265.7 520.6 255.1H474.5C469.1 240.6 459.9 227.1 448 216.4V191.1H520.6C531.6 172.9 552.3 159.1 576 159.1C611.3 159.1 640 188.7 640 223.1C640 247.7 627.1 268.4 608 279.4V392.6C627.1 403.6 640 424.3 640 448C640 483.3 611.3 512 576 512C552.3 512 531.6 499.1 520.6 480H311.4z' fill='%2320bdff'/%3E%3C/svg%3E");
    }

    .paint-brush {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath d='M224 263.3C224.2 233.3 238.4 205.2 262.4 187.2L499.1 9.605C517.7-4.353 543.6-2.965 560.7 12.9C577.7 28.76 580.8 54.54 568.2 74.07L406.5 324.1C391.3 347.7 366.6 363.2 339.3 367.1L224 263.3zM320 400C320 461.9 269.9 512 208 512H64C46.33 512 32 497.7 32 480C32 462.3 46.33 448 64 448H68.81C86.44 448 98.4 429.1 96.59 411.6C96.2 407.8 96 403.9 96 400C96 339.6 143.9 290.3 203.7 288.1L319.8 392.5C319.9 394.1 320 397.5 320 400V400z' fill='%23ef629f'/%3E%3C/svg%3E");
    }
  }
}

@media screen and (max-width: 991px) {
  .block-services {
    padding: 2.5rem 7rem 0;
  }

  .bottom-line-container {
    padding-right: 50%;

    .horizontal-line,
    .right-line {
      display: none;
    }
  }

  .content-container {
    grid-template-columns: 1fr;

    .service-cards {
      padding: 0;
      margin-top: 5rem;
    }

    .image-container {
      margin: 0 auto;
    }
  }
}

@media screen and (max-width: 768px) {
  .block-services {
    padding: 2.5rem 3rem 0;
  }

  .content-container {
    .image-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      .worker-image {
        width: 230px;
      }

      .icon {
        position: unset;
        height: 35px;
        width: 35px;
      }

      .icons {
        display: flex;
        justify-content: space-around;
        margin-top: 3rem;
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .block-services {
    padding: 2.5rem 1.5rem 0;
  }

  .worker-image {
    width: 210px !important;
  }

  .service-cards {
    .icon {
      height: 24px !important;
      width: 24px !important;
    }
  }
}
</style>
