/**
 * Background plates. Each has a still poster (a real property photo) and an
 * optional looping video. Drop generated MP4s into public/videos and set the
 * paths here; until then the poster plays a slow drift.
 */
export const media = {
  hero: { video: undefined as string | undefined, poster: '/images/quinn.png' },
  numbers: { video: undefined as string | undefined, poster: '/images/marine-view.jpg' },
  quote: { video: undefined as string | undefined, poster: '/images/two10.jpg' },
  outro: { video: undefined as string | undefined, poster: '/images/silverdale.jpg' },
  pages: {
    help: '/images/silver-creek.jpg',
    housing: '/images/two10.jpg',
    services: '/images/marine-view.jpg',
    about: '/images/silverdale.jpg',
    partners: '/images/quinn.png',
    contact: '/images/silver-creek.jpg',
  },
}
