export interface LandingImage {
  id: string
  label: string
  src: string
  alt: string
  objectPosition?: string
}

export interface LandingPlace extends LandingImage {
  name: string
  nameEn: string
}

export interface LandingContent {
  title: string
  eyebrow: string
  notice: string
  heroBackground: LandingImage
  images: LandingImage[]
  places: {
    eyebrow: string
    title: string
    summary: string
    items: LandingPlace[]
  }
  map: {
    title: string
    label: string
    notice: string
    src: string
    alt: string
  }
  introTitle: string
  introBody: string
}
