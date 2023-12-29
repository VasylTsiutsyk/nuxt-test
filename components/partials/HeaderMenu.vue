<template>
  <div class="header-menu" v-click-outside="closeMenu">
    <button class="header-menu__btn" :class="{ _active: isActive }" @click="toggleMenu">
      Меню
    </button>

    <div class="header-menu__popup header-menu-popup" :class="{ _active: isActive }">
      <nav class="header-menu-popup__nav">
        <ul class="header-menu-popup__list">
          <li>
            <NuxtLink to="#">Сапорт</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">Блог</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">Партнери</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">Контакти</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">Календар</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">Всі подорожі</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">Ми волонтери</NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="header-menu-popup__exchange header-exchange">
        <h3 class="header-exchange__label">Курс валют</h3>

        <ul class="header-exchange__list">
          <li><span>$ 24.65</span> <span>25.25</span></li>
          <li><span>€ 27.25</span> <span>28.1</span></li>
        </ul>
      </div>

      <AppSwitchInput inactiveLabel="$/€" activeLabel="Грн" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AppSwitchInput from '../atoms/AppSwitchInput.vue';

const isActive = ref(false);

const toggleMenu = () => {
  isActive.value = !isActive.value;
};

const closeMenu = () => {
  isActive.value = false;
};
</script>

<style lang="scss">
@import '@/assets/scss/base/_mixins.scss';
@import '@/assets/scss/base/_functions.scss';

.header-menu {
  position: relative;

  &__btn {
    display: flex;
    align-items: center;
    gap: rem(8);
    border: none;
    padding: rem(8) rem(16);
    background: none;
    font-size: rem(14);
    font-weight: 600;
    line-height: 128.571%;
    color: #222;

    &:not(:disabled) {
      cursor: pointer;
    }

    &::after {
      content: '\e92b';
      font-family: 'icomoon';
      font-size: rem(16);
      color: #5c5c5c;
      transition: transform $transition-duration-primary;
    }

    &._active {
      &::after {
        transform: rotate(180deg);
      }
    }
  }

  &__popup {
    position: absolute;
    z-index: 999;
    left: 0;
    min-width: rem(140);
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transition: visibility $transition-duration-primary, opacity $transition-duration-primary;

    &._active {
      visibility: visible;
      opacity: 1;
      pointer-events: all;
    }
  }
}

.header-menu-popup {
  border-radius: rem(8);
  padding: rem(22) rem(16) rem(14);
  background-color: $color-white;
  box-shadow: 4px 4px 10.6px 0px rgba(0, 0, 0, 0.25);

  &__nav {
    margin-bottom: rem(64);
  }

  &__list {
    > li {
      &:not(:last-child) {
        margin-bottom: rem(8);
      }

      > a {
        font-size: rem(14);
        font-weight: 300;
        color: #536773;
        transition: text-shadow $transition-duration-primary, color $transition-duration-primary;

        @include hover {
          text-shadow: 0.5px 0.5px 0;
          color: #acc945;
        }
      }
    }
  }

  &__exchange {
    margin-bottom: rem(28);
  }
}
</style>
