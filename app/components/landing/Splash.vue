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
const enter = (from: number, to: number) => clamp((progress.value - from) / (to - from))
const leave = (from: number, to: number) => 1 - clamp((progress.value - from) / (to - from))

const heroStyle = computed(() => animated.value ? {
  opacity: leave(0.2, 0.34),
  transform: `scale(${1 + progress.value * 0.08})`,
} : {})

const titleStyle = computed(() => animated.value ? {
  opacity: leave(0.17, 0.29),
  transform: `translateY(${-progress.value * 120}px) scale(${1 + progress.value * 0.1})`,
} : {})

const placesStyle = computed(() => animated.value ? {
  opacity: enter(0.25, 0.38) * leave(0.6, 0.72),
  transform: `translateY(${(1 - enter(0.25, 0.46)) * 90 - enter(0.58, 0.72) * 70}px)`,
} : {})

const mapStyle = computed(() => animated.value ? {
  opacity: enter(0.68, 0.82),
  transform: `translateY(${(1 - enter(0.67, 0.9)) * 90}px) scale(${0.94 + enter(0.67, 0.9) * 0.06})`,
} : {})

const sceneNumber = computed(() => progress.value < 0.3 ? '01' : progress.value < 0.7 ? '02' : '03')

function cardStyle(index: number) {
  if (!animated.value) return {}
  return {
    opacity: leave(0.19 + index * 0.014, 0.33 + index * 0.014),
    transform: `translateY(${-progress.value * (150 + index * 45)}px) rotate(${(index % 2 ? 1 : -1) * progress.value * 7}deg)`,
  }
}

function placeCardStyle(index: number) {
  if (!animated.value) return {}
  const local = enter(0.25, 0.56)
  return { transform: `translateY(${(1 - local) * (70 + index * 40)}px)` }
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

      <div class="collage-scene" :style="heroStyle">
        <img
          v-if="!failed.has(landing.heroBackground.id)"
          class="hero-background"
          :src="landing.heroBackground.src"
          :alt="landing.heroBackground.alt"
          @error="failed.add(landing.heroBackground.id)"
        >
        <div class="hero-shade" aria-hidden="true" />
        <figure
          v-for="(asset, index) in landing.images"
          :key="asset.id"
          class="image-slot"
          :class="`image-slot-${index + 1}`"
          :style="cardStyle(index)"
        >
          <div class="placeholder-art" aria-hidden="true" />
          <img v-if="!failed.has(asset.id)" :src="asset.src" :alt="asset.alt" @error="failed.add(asset.id)">
          <figcaption><span>{{ asset.label }}</span><span aria-hidden="true">{{ String(index + 1).padStart(2, '0') }} ↗</span></figcaption>
        </figure>
        <div class="splash-title" :style="titleStyle">
          <p class="splash-eyebrow">{{ eyebrow }}</p>
          <h1 id="world-title">{{ title }}</h1>
          <p class="splash-notice">{{ notice }}</p>
          <span class="title-rule" aria-hidden="true" />
        </div>
      </div>

      <section class="places-scene" :style="placesStyle" aria-labelledby="places-title">
        <div class="places-copy">
          <p class="splash-eyebrow">{{ landing.places.eyebrow }}</p>
          <h2 id="places-title">{{ landing.places.title }}</h2>
          <p>{{ landing.places.summary }}</p>
        </div>
        <div class="places-grid">
          <figure v-for="(place, index) in landing.places.items" :key="place.id" class="place-card" :style="placeCardStyle(index)">
            <div class="placeholder-art" aria-hidden="true" />
            <img v-if="!failed.has(place.id)" :src="place.src" :alt="place.alt" @error="failed.add(place.id)">
            <figcaption>
              <span><b>{{ place.name }}</b><small>{{ place.nameEn }}</small></span>
              <span aria-hidden="true">0{{ index + 1 }}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section class="map-scene" :style="mapStyle" aria-labelledby="map-title">
        <div class="map-heading"><p class="splash-eyebrow">WORLD ATLAS / 世界全貌</p><h2 id="map-title">{{ landing.map.title }}</h2></div>
        <figure class="map-placeholder">
          <div class="map-grid" aria-hidden="true" />
          <div class="map-compass" aria-hidden="true">✧</div>
          <img v-if="landing.map.src && !failed.has('map')" :src="landing.map.src" :alt="landing.map.alt" @error="failed.add('map')">
          <div v-else class="map-empty"><span aria-hidden="true">＋</span><p>{{ landing.map.label }}</p><small>{{ landing.map.notice }}</small></div>
          <figcaption><span>苍梵界 / WORLD MAP</span><span>地图占位 · 非正式设定</span></figcaption>
        </figure>
      </section>

      <div class="splash-bottom">
        <span class="scroll-cue"><span aria-hidden="true">↓</span> 向下探索 <span class="cue-line" aria-hidden="true" /></span>
        <button v-if="enabled" type="button" :aria-pressed="paused" @click="paused = !paused">{{ paused ? '恢复滚动动效' : '暂停动效' }}</button>
        <span class="scene-number" aria-hidden="true">{{ animated ? sceneNumber : '03' }} <span>/ 03</span></span>
      </div>
    </div>
  </section>
</template>
