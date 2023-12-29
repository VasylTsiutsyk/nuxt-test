<template>
  <span class="article-tag">
    <slot />
  </span>
</template>

<style lang="scss">
@import '@/assets/scss/base/_mixins.scss';
@import '@/assets/scss/base/_functions.scss';

.article-tag {
  display: inline-block;
  border-radius: rem(21.5);
  border: 0.5px solid #c2d1d9;
  padding: rem(2) rem(18);
  box-shadow: 0px 4px 4px 0px rgba(83, 103, 115, 0.15);
  font-size: rem(12);
  font-weight: 300;
  color: #1b2a31;

  @include respond-below(md) {
    padding: rem(2) rem(12);
  }
}
</style>
