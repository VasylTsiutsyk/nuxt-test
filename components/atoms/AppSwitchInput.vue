<template>
  <div class="switch-input" @click="toggleSwitch">
    <label class="switch-input__label switch-input__label--left">
      {{ inactiveLabel }}
    </label>

    <label class="switch-input__toggle">
      <input type="checkbox" v-model="isChecked" @change="handleChange" />

      <span class="switch-input__slider"></span>
    </label>

    <label class="switch-input__label switch-input__label--right" :class="{ _active: isChecked }">
      {{ activeLabel }}
    </label>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isChecked = ref(false);

const handleChange = () => {
  // Handle the change event as needed
  // You can emit an event or perform any other actions
};

const toggleSwitch = () => {
  isChecked.value = !isChecked.value;
};

const props = defineProps({
  inactiveLabel: {
    type: String,
    default: '',
  },
  activeLabel: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss">
@import '@/assets/scss/base/_mixins.scss';
@import '@/assets/scss/base/_functions.scss';

.switch-input {
  display: flex;
  align-items: center;
  gap: rem(12);
  font-size: rem(14);
  font-weight: 300;
  line-height: 1.5;
  color: #798287;

  &:not(:disabled) {
    cursor: pointer;
  }

  &__toggle {
    position: relative;
    display: inline-block;
    width: rem(32);
    height: rem(14);
    pointer-events: none;

    input {
      position: absolute;
      z-index: -1;
      width: 0.1px;
      height: 0.1px;
      opacity: 0;

      &:checked {
        + .switch-input__slider {
          background-color: $color-primary;
        }

        + .switch-input__slider:before {
          transform: translateX(rem(18));
        }
      }
    }
  }

  &__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 24px;

    &::before {
      content: '';
      position: absolute;
      left: rem(1);
      top: rem(1);
      width: rem(12);
      height: rem(12);
      background-color: $color-white;
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  &__label {
    pointer-events: none;
    user-select: none;
    transition: color $transition-duration-primary;

    &._active {
      color: #5a5a5a;
    }
  }
}
</style>
