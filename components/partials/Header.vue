<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__wrap">
        <NuxtLink to="/" class="header__logo">
          <img src="@/assets/images/logo-white.svg" alt="" />
        </NuxtLink>

        <div class="header__btn-box">
          <HeaderMenu />

          <HeaderProfile />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { initHeader } from '~/utils/header';
import HeaderMenu from './HeaderMenu.vue';
import HeaderProfile from './HeaderProfile.vue';

let cleanup;

onMounted(() => {
  cleanup = initHeader({
    isScrolled: true,
    isHidden: true,
    headerSelector: '.header',
  });
});

onUnmounted(() => {
  cleanup();
});
</script>

<style lang="scss">
@import '@/assets/scss/base/_mixins.scss';
@import '@/assets/scss/base/_functions.scss';

.header {
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  background-color: $color-white;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.08);
  transition: box-shadow $transition-duration-primary, background-color $transition-duration-primary,
    transform $transition-duration-primary;

  &._scrolled {
    background-color: $color-white;
    box-shadow: 0 0 2rem rgba($color-black, 0.15);

    .header__wrap {
      @include respond-above(md) {
        padding: rem(8) 0;
      }
    }
  }

  &._hidden {
    overflow: hidden;
    box-shadow: none;
    transform: translateY(-100%);
  }

  &__wrap {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: rem(10) 0;
    transition: padding $transition-duration-primary;

    @include respond-below(md) {
      padding: rem(8) 0;
    }
  }

  &__logo {
    margin-right: rem(24);
    transition: opacity $transition-duration-primary;

    @include respond-below(md) {
      max-width: rem(120);
    }

    @include hover {
      opacity: 0.75;
    }

    &:focus,
    &:active {
      opacity: 0.75;
    }

    img {
      display: block;
    }
  }

  &__btn-box {
    display: flex;
    align-items: center;
    gap: rem(14);
  }
}

.header-exchange {
  &__label {
    display: block;
    margin-bottom: rem(8);
    font-size: rem(11);
    font-weight: 400;
    color: #798287;
  }

  &__list {
    > li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: rem(8);
      font-size: rem(14);
      font-weight: 300;
      color: #1b2a31;
    }
  }
}
</style>
