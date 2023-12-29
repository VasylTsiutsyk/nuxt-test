<template>
  <div>
    <h1 class="sr-only">Home Page</h1>

    <section class="section">
      <div class="section__container container">
        <div class="section__wrap">
          <div class="section__header">
            <h2 class="section__title">Home</h2>
          </div>

          <div class="section__body">
            <ol class="pages-list">
              <li>
                <NuxtLink to="/blog">Blog</NuxtLink>
              </li>

              <li>
                <NuxtLink to="/blog/01">Blog Details (TEST!!!)</NuxtLink>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
