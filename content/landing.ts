import type { LandingContent } from '../shared/landing-content'

export const landingContent = {
  title: '苍梵界',
  eyebrow: '一个原创 D&D 世界',
  notice: '世界视觉预览 · 正式设定将逐步展开',
  heroBackground: {
    id: 'hero-emblem',
    label: '苍梵界视觉纹章',
    src: '/media/landing/hero-emblem.jpg',
    alt: 'DM 提供的黑金色苍梵界纹章背景',
  },
  images: [
    { id: 'atumaha-overlook', label: '阿图玛哈城', src: '/media/landing/atumaha-overlook.jpg', alt: '金色荒原中的宏伟城池概念图' },
    { id: 'desert-city', label: '城市概念', src: '/media/landing/desert-city.jpg', alt: '夕阳下的沙漠城镇概念图' },
    { id: 'hillside-town', label: '城镇概念', src: '/media/landing/hillside-town.jpg', alt: '山谷里围绕教堂而建的城镇概念图' },
    { id: 'mountain-landscape', label: '荒野概念', src: '/media/landing/mountain-landscape.jpg', alt: '云雾笼罩的山峰与河谷概念图' },
    { id: 'cathedral', label: '建筑概念', src: '/media/landing/cathedral.jpg', alt: '群山间高耸的教堂建筑概念图' },
  ],
  places: {
    eyebrow: 'PLACES / 地方剪影',
    title: '在这里，遇见各具风貌的城镇',
    summary: '沿着画面，先认识三处地点。更多内容将随正式设定逐步展开。',
    items: [
      { id: 'atumaha', name: '阿图玛哈城', nameEn: 'ATUMAHA', label: '城镇视觉', src: '/media/towns/atumaha.jpg', alt: '红色天空下的阿图玛哈城概念图' },
      { id: 'lumina-court', name: '辉庭城', nameEn: 'LUMINA COURT', label: '城镇视觉', src: '/media/towns/lumina-court.webp', alt: '河流穿过辉庭城的城市概念图' },
      { id: 'crypt-of-stars', name: '星冢陵', nameEn: 'CRYPT OF STARS', label: '地点视觉', src: '/media/towns/crypt-of-stars.webp', alt: '星空下通往星冢陵入口的概念图' },
    ],
  },
  map: {
    title: '世界，仍待绘制',
    label: '世界地图 · 待提供',
    notice: '地图完成后将在此呈现苍梵界的全貌',
    src: '',
    alt: '苍梵界世界地图',
  },
  introTitle: '从这里认识苍梵界',
  introBody: '这里将收录 DM 提供的世界简介，帮助新玩家迈出第一步。正式设定与更多素材正在准备中。',
} satisfies LandingContent
