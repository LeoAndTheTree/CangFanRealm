<script setup lang="ts">
const { landing } = useAppConfig()
</script>

<template>
  <main>
    <a href="#introduction" class="skip-link">跳至简介</a>
    <LandingSplash
      :title="landing.title"
      :eyebrow="landing.eyebrow"
      :notice="landing.prototypeNotice"
    />
    <section id="introduction" tabindex="-1" class="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <p class="mb-5 text-xs tracking-[0.25em] text-accent">初识 / 01</p>
      <h2 class="font-display text-3xl sm:text-4xl">{{ landing.introTitle }}</h2>
      <p class="mt-8 max-w-xl text-base leading-loose text-muted sm:text-lg">{{ landing.introBody }}</p>
      <p class="mt-12 border-t border-line pt-6 text-sm text-muted">世界简介 · 待 DM 提供</p>
    </section>
    <footer class="border-t border-line px-6 py-8 text-center text-xs tracking-widest text-muted">
      苍梵界 · 原创世界设定
    </footer>
  </main>
</template>
