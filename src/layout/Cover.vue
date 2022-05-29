<script setup></script>

<template>
  <div class="cover">
    <div class="container">
      <header class="cover__header">
        <div class="logo-wrapper">
          <img class="logo-wrapper__img" src="@/assets/logo.png" alt="logo" />
        </div>
        <a href="#order-section" class="btn btn--main">Заказать онлайн</a>
      </header>
      <h1 class="cover__title">
        Сочный Арбуз прямо с&nbsp;грядки у&nbsp;фермера
      </h1>
      <div class="img-composition">
        <img
          src="@/assets/watermelon-in-clouds.png"
          alt="watermelon in clouds"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cover {
  background-image: url("@/assets/background.jpg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  height: 90vh;

  overflow: hidden;

  @media (max-width: 576px) {
    background-image: url("@/assets/background576px.jpg");
    height: 70vh;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
  }

  &__title {
    margin-top: 3rem;
    width: 80%;
    font-size: 4rem;
    color: #165e00;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 4rem;
    }
    @media (max-width: 576px) {
      width: 100%;
      font-size: 2.5rem;
    }
  }

  a {
    text-decoration: none;
  }
}

.img-composition {
  position: absolute;
  top: 25%;
  left: 0;
  min-height: 40%;

  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 1600px) {
    top: 30%;
    height: 400px;
    min-height: 30%;
  }
  @media (max-width: 992px) {
    top: 35%;
    height: 350px;
    min-height: 40%;
  }
  @media (max-width: 768px) {
    top: 40%;
    height: 300px;
    min-height: 40%;
  }
  @media (max-width: 576px) {
    top: 30%;
    height: 100px;
    min-height: 30%;
  }
}

.logo-wrapper {
  &__img {
    max-width: 100%;
    height: auto;
  }
}
</style>
