<template>
  <div>
    <h1 class="sr-only">Blog Page</h1>

    <section class="section">
      <div class="section__container container">
        <div class="section__wrap">
          <div class="section__header">
            <h2 class="section__title">Blog Page</h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Blog | Test',
  meta: [
    {
      name: 'description',
      content: 'Blog Page',
    },
  ],
});
</script>
