<script setup lang="ts">
defineProps<{ title: string; eyebrow: string; notice: string }>()
const paused = ref(false)
const mounted = ref(false)
onMounted(() => { mounted.value = true })
</script>

<template>
  <section class="splash relative isolate flex min-h-svh flex-col overflow-hidden px-6 py-8 sm:px-12" :class="{ 'is-paused': paused }" aria-labelledby="world-title">
    <div aria-hidden="true" class="splash-art pointer-events-none absolute inset-0 -z-10">
      <div class="orb orb-one" />
      <div class="orb orb-two" />
      <div class="orbit" />
    </div>
    <header class="flex items-center justify-between gap-4 text-xs tracking-[0.2em] text-muted">
      <span>CANGFAN REALM</span>
      <span class="border border-line px-3 py-2">世界序章</span>
    </header>
    <div class="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center py-24 text-center">
      <p class="mb-8 text-sm tracking-[0.35em] text-accent">{{ eyebrow }}</p>
      <h1 id="world-title" class="pl-[0.2em] font-display text-[clamp(4rem,14vw,9rem)] leading-tight tracking-[0.2em]">{{ title }}</h1>
      <p class="mt-7 text-xs leading-relaxed tracking-widest text-muted">{{ notice }}</p>
      <a href="#introduction" class="mt-14 inline-flex min-h-12 items-center gap-10 border border-accent/50 bg-surface/70 px-7 py-3 text-sm tracking-widest transition-colors hover:bg-accent hover:text-surface">
        初识苍梵界 <span aria-hidden="true">↓</span>
      </a>
    </div>
    <div class="flex min-h-11 items-center justify-between gap-4 text-xs text-muted">
      <span>向下探索</span>
      <button v-if="mounted" type="button" class="motion-control min-h-11 px-3 underline underline-offset-4" :aria-pressed="paused" @click="paused = !paused">
        {{ paused ? '继续动画' : '暂停动画' }}
      </button>
    </div>
  </section>
</template>
