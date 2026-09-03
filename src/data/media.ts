/**
 * Background plates. Each has a still poster (a real property photo) and an
 * optional looping video. Drop generated MP4s into public/videos and set the
 * paths here; until then the poster plays a slow drift.
 */
export const media = {
  hero: { video: undefined as string | undefined, poster: '/images/hero-marine-view.jpg' },
  numbers: { video: undefined as string | undefined, poster: '/images/plate-silver-creek-aerial.jpg' },
  quote: { video: undefined as string | undefined, poster: '/images/plate-marine-view-pool.jpg' },
  outro: { video: undefined as string | undefined, poster: '/images/plate-marine-view-entrance.jpg' },
  pages: {
    help: '/images/plate-residents-party.jpg',
    housing: '/images/plate-silver-creek-playground.jpg',
    services: '/images/plate-residents-celebrating.jpg',
    about: '/images/plate-residents-celebrating.jpg',
    partners: '/images/plate-silver-creek-sign.jpg',
    contact: '/images/plate-two10-living.jpg',
  },
}
