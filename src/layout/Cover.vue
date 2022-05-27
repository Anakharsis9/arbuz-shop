<script setup></script>

<template>
  <div class="cover">
    <div class="container">
      <header class="cover__header">
        <div class="logo-wrapper">
          <img
            class="logo-wrapper__img"
            src="src/assets/logo white.png"
            alt="logo-white"
          />
        </div>
        <button class="btn btn--second">Заказать онлайн</button>
      </header>
      <h1 class="cover__title">
        Сочный Арбуз прямо с&nbsp;грядки у&nbsp;фермера
      </h1>
      <div class="img-composition">
        <div class="cloud-image">
          <img src="src/assets/cloud1.png" alt="cloud1">
        </div>
        <div class="watermelon-image">
          <img src="src/assets/watermelon с долками 1.png" alt="watermelon">
        </div>
        <div class="cloud-image">
          <img src="src/assets/cloud2.png" alt="cloud2">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cover {
  background-image: url("src/assets/background.jpg");
  background-repeat: no-repeat;
  background-position: 50% 20%;
  background-size: cover;
  height: 90vh;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
  }

  &__title {
    margin-top: 40px;
    width: 80%;
    font-size: 4rem;
    color: #184604;
  }
}

.img-composition{
  
}

.cloud-image{}

.watermelon-image{}

.logo-wrapper {
  &__img {
    
  }
}
</style>
