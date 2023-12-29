<template>
  <div class="header__profile header-profile" v-click-outside="closeMenu">
    <button class="header-profile__btn" :class="{ _active: isActive }" @click="toggleMenu">
      <img src="@/assets/images/header-profile.jpg" alt="" />
    </button>

    <div class="header-profile__popup header-profile-popup" :class="{ _active: isActive }">
      <ul class="header-profile-popup__menu">
        <li>
          <a href="#">
            <img src="@/assets/images/icons/home.png" alt="" />
            Мій кабінет
          </a>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/images/icons/id-card.png" alt="" />
            Моя картка
          </a>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/images/icons/star.png" alt="" />
            Мої закладки
          </a>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/images/icons/exit.png" alt="" />
            Вийти
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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

.header-profile {
  position: relative;

  &__btn {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: rem(1) solid #ddd;
    border-radius: rem(30);
    width: rem(86);
    height: rem(48);
    padding: rem(8);
    background: $color-white url('@/assets/images/icons/menu-lines.svg') no-repeat left rem(16)
      center / rem(14) rem(8);
    transition: border-color $transition-duration-primary;

    &:not(:disabled) {
      cursor: pointer;

      @include hover {
        border-color: $color-primary;
      }

      &._active {
        border-color: $color-primary;
      }
    }

    img {
      flex: 0 0 rem(32);
      width: rem(32);
      height: rem(32);
      border-radius: 50%;
      overflow: hidden;
    }
  }

  &__popup {
    position: absolute;
    z-index: 999;
    right: 0;
    top: rem(52);
    min-width: rem(140);
    visibility: hidden;
    opacity: 0;
    transition: visibility $transition-duration-primary, opacity $transition-duration-primary;

    &._active {
      visibility: visible;
      opacity: 1;
    }
  }
}

.header-profile-popup {
  border-radius: rem(7);
  padding: rem(28) rem(8) rem(12);
  background-color: $color-white;
  box-shadow: 4px 4px 10.6px 0px rgba(0, 0, 0, 0.25);

  &__menu {
    > li {
      &:not(:last-child) {
        margin-bottom: rem(8);
      }

      &:last-child {
        margin-top: rem(20);
      }

      > a {
        display: flex;
        align-items: center;
        gap: rem(12);
        font-size: rem(14);
        font-weight: 300;
        color: #536773;
        transition: color $transition-duration-primary;

        @include hover {
          color: $color-primary;
        }

        img {
          flex: 0 0 rem(16);
          width: rem(16);
          height: rem(16);
          object-fit: contain;
        }
      }
    }
  }
}
</style>
