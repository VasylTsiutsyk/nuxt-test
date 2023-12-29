<template>
  <div class="hero-card">
    <div class="hero-card__content">
      <h3 class="hero-card__title">COVID-19</h3>

      <ul class="hero-card__metas">
        <li>Переглядів <span>0</span></li>
        <li>Опубліковано <span>0</span></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/base/_mixins.scss';
@import '@/assets/scss/base/_functions.scss';

.hero-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: rem(27);
  padding: rem(64) rem(38) rem(38);
  background: rgba(30, 28, 28, 0.1);
  box-shadow: 4px -1px 11px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(3.5px);

  @include respond-above(md) {
    min-height: rem(350);
  }

  @include respond-below(md) {
    border-radius: rem(20);
    padding: rem(64) rem(24) rem(24);
  }

  &__content {
    margin: 0 auto;
    min-width: rem(284);
    max-width: rem(284);
  }

  &__title {
    margin-bottom: rem(48);
    font-size: rem(48);
    font-weight: 700;
    line-height: 1;
    text-align: center;
    text-transform: uppercase;

    @include respond-below(md) {
      margin-bottom: rem(32);
      font-size: rem(32);
    }
  }

  &__metas {
    > li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: rem(12);
      font-size: rem(18);
      font-weight: 400;
      line-height: 147.687%;

      @include respond-below(md) {
        font-size: rem(16);
      }
    }
  }
}
</style>
