<template>
  <article class="article-card">
    <div class="article-card__img">
      <img
        src="@/assets/images/article-01.jpg"
        alt="Adrenaline day. Третій виїзд. Чотири міста за 3 дні."
      />
    </div>

    <div class="article-card__text">
      <h3 class="article-card__title">Adrenaline day. Третій виїзд. Чотири міста за 3 дні.</h3>

      <time datetime="2020-07-08" class="article-card__date">8 липня 2020 р.</time>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/scss/base/_mixins.scss';
@import '@/assets/scss/base/_functions.scss';

.article-card {
  border-radius: rem(45);
  background-color: $color-white;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow $transition-duration-primary;

  @include respond-below(md) {
    border-radius: rem(32);
  }

  @include hover {
    box-shadow: 0px 30px 60px 0px rgba(171, 219, 81, 0.15);

    .article-card__img {
      img {
        transform: scale(1.1);
      }
    }
  }

  &__img {
    position: relative;
    padding-bottom: 71.045%;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform $transition-duration-long;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    padding: rem(32) rem(32) rem(20);
  }

  &__title {
    flex: 1 1 auto;
    margin-bottom: rem(12);
    min-height: rem(48);
    font-size: rem(14);
    font-weight: 400;
    line-height: 142.857%;
    text-decoration: underline;
    color: $color-primary;
  }

  &__date {
    display: block;
    margin-left: auto;
    font-size: rem(12);
    font-weight: 300;
    color: #a1aeb7;
  }
}
</style>
