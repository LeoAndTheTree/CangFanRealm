<script setup lang="ts">
defineProps<{ title: string; eyebrow: string; notice: string }>()
const { landing } = useAppConfig()
const root = ref<HTMLElement>()
const progress = ref(0)
const enabled = ref(false)
const paused = ref(false)
const failed = reactive(new Set<string>())
const animated = computed(() => enabled.value && !paused.value)
const clamp = (value: number) => Math.min(1, Math.max(0, value))
const titleStyle = computed(() => animated.value ? {
  opacity: 1 - clamp((progress.value - 0.18) / 0.25),
  transform: `translateY(${-progress.value * 100}px) scale(${1 + progress.value * 0.12})`,
} : {})
const mapStyle = computed(() => animated.value ? {
  opacity: clamp((progress.value - 0.43) / 0.2),
  transform: `translateY(${(1 - clamp((progress.value - 0.4) / 0.5)) * 90}px) scale(${0.9 + clamp((progress.value - 0.4) / 0.5) * 0.1})`,
} : {})
function cardStyle(index: number) {
  if (!animated.value) return {}
  const p = progress.value
  return {
    opacity: 1 - clamp((p - 0.22 - index * 0.025) / 0.25),
    transform: `translateY(${-p * (160 + index * 55)}px) rotate(${(index % 2 ? 1 : -1) * p * 7}deg)`,
  }
}
onMounted(() => {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
  let frame = 0
  const update = () => {
    frame = 0
    if (!root.value) return
    const rect = root.value.getBoundingClientRect()
    progress.value = clamp(-rect.top / Math.max(1, rect.height - window.innerHeight))
  }
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
  const syncPreference = () => { enabled.value = !preference.matches; schedule() }
  syncPreference()
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule)
  preference.addEventListener('change', syncPreference)
  const observer = new ResizeObserver(schedule)
  observer.observe(root.value!)
  onBeforeUnmount(() => {
    cancelAnimationFrame(frame)
    observer.disconnect()
    window.removeEventListener('scroll', schedule)
    window.removeEventListener('resize', schedule)
    preference.removeEventListener('change', syncPreference)
  })
})
</script>

<template>
  <section ref="root" class="scroll-splash" :class="{ 'is-animated': animated }" aria-labelledby="world-title">
    <div class="splash-stage">
      <header class="splash-header">
        <a href="#world-title" class="realm-wordmark">CANGFAN <span>REALM</span></a>
        <a href="#introduction" class="entry-link">初识苍梵界 <span aria-hidden="true">↗</span></a>
      </header>
      <div class="collage-scene">
        <div class="scene-orbit" aria-hidden="true" />
        <figure v-for="(asset, index) in landing.images" :key="asset.id" class="image-slot" :class="`image-slot-${index + 1}`" :style="cardStyle(index)">
          <div class="placeholder-art" :class="`art-${index + 1}`" aria-hidden="true"><span /></div>
          <img v-if="asset.src && !failed.has(asset.id)" :src="asset.src" :alt="asset.alt" @error="failed.add(asset.id)">
          <figcaption><span>{{ asset.label }}</span><span aria-hidden="true">{{ String(index + 1).padStart(2, '0') }} ↗</span></figcaption>
        </figure>
        <div class="splash-title" :style="titleStyle">
          <p class="splash-eyebrow">{{ eyebrow }}</p>
          <h1 id="world-title">{{ title }}</h1>
          <p class="splash-notice">{{ notice }}</p>
          <span class="title-rule" aria-hidden="true" />
        </div>
      </div>
      <div class="map-scene" :style="mapStyle">
        <div class="map-heading"><p class="splash-eyebrow">WORLD ATLAS / 世界全貌</p><h2>{{ landing.map.title }}</h2></div>
        <figure class="map-placeholder">
          <div class="map-grid" aria-hidden="true" />
          <div class="map-compass" aria-hidden="true">✧</div>
          <img v-if="landing.map.src && !failed.has('map')" :src="landing.map.src" :alt="landing.map.alt" @error="failed.add('map')">
          <div v-else class="map-empty"><span aria-hidden="true">＋</span><p>{{ landing.map.label }}</p><small>{{ landing.map.notice }}</small></div>
          <figcaption><span>苍梵界 / WORLD MAP</span><span>地图占位 · 非正式设定</span></figcaption>
        </figure>
      </div>
      <div class="splash-bottom">
        <span class="scroll-cue"><span aria-hidden="true">↓</span> 向下探索 <span class="cue-line" aria-hidden="true" /></span>
        <button v-if="enabled" type="button" :aria-pressed="paused" @click="paused = !paused">{{ paused ? '恢复滚动动效' : '暂停动效' }}</button>
        <span class="scene-number" aria-hidden="true">{{ animated && progress > 0.48 ? '02' : '01' }} <span>/ 02</span></span>
      </div>
    </div>
  </section>
</template>
