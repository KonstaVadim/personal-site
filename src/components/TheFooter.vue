<template>
  <div id="footer">
    <div class="contact-icons">
      <a href="mailto:konstavadim@gmail.com">
        <div class="icon email"></div>
      </a>
      <a href="https://github.com/KonstaVadim" target="_blank">
        <div class="icon git-hub"></div>
      </a>
      <a href="tel:+79963327071">
        <div class="icon whats-app"></div>
      </a>
      <!-- <a href="mailto:konstavadim@gmail.com" target="_blank">
        <div class="icon linked-in"></div>
      </a> -->
      <a href="https://www.instagram.com/consta_v2.0/" target="_blank">
        <div class="icon instagram"></div>
      </a>
      <a href="https://vk.com/c0nsta" target="_blank">
        <div class="icon vk"></div>
      </a>
    </div>

    <div class="copyright-sign">© 2022 Konstantinov Vadim</div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
#footer {
  background: linear-gradient(0deg, #26243b, #03001e);
  padding-bottom: 3rem;
}

.contact-icons {
  display: flex;
  justify-content: center;
  gap: 3rem;

  .icon {
    border-radius: 50%;
    background: center/70% no-repeat;
    background-color: #26243b;
    transition: all 0.2s ease;
    box-shadow: 0px 0px 5px 0px rgb(180, 255, 255);
  }

  .email {
    background-image: url("../assets/contacts/email.png");

    &:hover {
      background-image: url("../assets/contacts/email.gif");
    }
  }

  .git-hub {
    background-image: url("../assets/contacts/github.png");

    &:hover {
      background-image: url("../assets/contacts/github.gif");
    }
  }

  .whats-app {
    background-image: url("../assets/contacts/whatsapp.png");

    &:hover {
      background-image: url("../assets/contacts/whatsapp.gif");
    }
  }

  .linked-in {
    background-image: url("../assets/contacts/linkedin.png");

    &:hover {
      background-image: url("../assets/contacts/linkedin.gif");
    }
  }

  .instagram {
    background-image: url("../assets/contacts/instagram.png");

    &:hover {
      background-image: url("../assets/contacts/instagram.gif");
    }
  }
  .vk {
    background-image: url("../assets/contacts/vk.png");

    &:hover {
      background-image: url("../assets/contacts/vk.gif");
    }
  }
}

.icon {
  width: 50px;
  height: 50px;
}

.copyright-sign {
  text-align: center;
  color: #fff;
  margin-top: 3rem;
}

@media screen and (max-width: 768px) {
  .contact-icons {
    gap: 2rem;
  }
  .icon {
    width: 40px;
    height: 40px;
  }
}

@media screen and (max-width: 480px) {
  .contact-icons {
    gap: 1rem;
  }
  .icon {
    width: 32px;
    height: 32px;
  }

  .copyright-sign {
    font-size: 0.875rem;
  }
}
</style>
