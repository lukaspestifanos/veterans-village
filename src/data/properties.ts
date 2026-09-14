export type PropertyType = 'family' | 'senior' | 'soon'

export interface Property {
  slug: string
  name: string
  type: PropertyType
  state: 'WA' | 'AL'
  status: string
  city: string
  address: string
  description: string
  features: string[]
  phone?: string
  site?: string
  siteLabel?: string
  image?: string
}

// The same properties listed on veterans-village.org/developments.
export const properties: Property[] = [
  {
    slug: 'silver-creek',
    name: 'Silver Creek Apartments',
    type: 'family',
    state: 'WA',
    status: 'Open',
    city: 'Pasco, WA',
    address: '9315 Chapel Hill Blvd, Pasco, WA 99301',
    description:
      'One to four-bedroom homes with full-size washers and dryers, central A/C, and private balconies or patios. Pet-friendly community.',
    features: ['1 to 4 bedrooms', 'Central A/C', 'Pet-friendly'],
    phone: '(509) 341-1124',
    site: 'https://www.silvercreekaptliving.com/',
    image: '/images/silver-creek.jpg',
  },
  {
    slug: 'vintage-at-marine-view',
    name: 'Vintage at Marine View',
    type: 'senior',
    state: 'WA',
    status: 'Open, 55+',
    city: 'Everett, WA',
    address: '1001 E Marine View Drive, Everett, WA 98201',
    description:
      'Newly renovated apartments and amenities for adults 55 and over, minutes from shopping, dining, and transit.',
    features: ['Senior 55+', 'Renovated', 'Near transit'],
    phone: '(425) 368-9202',
    site: 'https://www.vintageatmarineview.com',
    image: '/images/marine-view.jpg',
  },
  {
    slug: 'two10-by-vintage',
    name: 'Two10 by Vintage',
    type: 'family',
    state: 'WA',
    status: 'Open',
    city: 'Shoreline, WA',
    address: '18110 Midvale Ave N, Shoreline, WA 98133',
    description:
      'Studio, one, and two-bedroom residences with well-equipped kitchens, in-unit laundry, a resident lounge, courtyard with BBQs, fitness center, and dog run.',
    features: ['Studio to 2 bedrooms', 'Courtyard', 'Dog run'],
    site: 'https://www.vintagehousing.com/property/two10-vintage',
    image: '/images/two10.jpg',
  },
  {
    slug: 'kneeland-park',
    name: 'Kneeland Park Apartments',
    type: 'family',
    state: 'WA',
    status: 'Open',
    city: 'Shelton, WA',
    address: '215 Turner Ave, Shelton, WA 98584',
    description: 'Affordable apartment homes in Shelton, Washington.',
    features: ['Affordable apartments'],
    image: '/images/kneeland-park.jpg',
  },
  {
    slug: 'kamiakin',
    name: 'Kamiakin Apartments',
    type: 'family',
    state: 'WA',
    status: 'Open',
    city: 'Kennewick, WA',
    address: '4711 W Metaline Ave, Kennewick, WA 99336',
    description: 'Affordable apartment homes in Kennewick, Washington.',
    features: ['Affordable apartments'],
    image: '/images/kamiakin.jpg',
  },
  {
    slug: 'meadow-park',
    name: 'Meadow Park Apartments',
    type: 'family',
    state: 'WA',
    status: 'Open',
    city: 'Kennewick, WA',
    address: '1001 W 4th Ave, Kennewick, WA 99336',
    description: 'Affordable apartment homes in Kennewick, Washington.',
    features: ['Affordable apartments'],
    image: '/images/meadow-park.jpg',
  },
  {
    slug: 'kent-manor',
    name: 'Kent Manor',
    type: 'family',
    state: 'WA',
    status: 'Open',
    city: 'Kennewick, WA',
    address: '1001 W 5th Ave, Kennewick, WA 99336',
    description: 'Affordable apartment homes in Kennewick, Washington.',
    features: ['Affordable apartments'],
    image: '/images/kent-manor.jpg',
  },
  {
    slug: 'lake-stevens',
    name: 'Vintage at Lake Stevens',
    type: 'soon',
    state: 'WA',
    status: 'Under construction',
    city: 'Lake Stevens, WA',
    address: '2988 90th Ave NE, Lake Stevens, WA 98258',
    description: 'Construction is underway on this new community. Ask us to be notified when leasing opens.',
    features: ['Coming soon'],
  },
  {
    slug: 'vintage-at-the-overlook',
    name: 'Vintage at the Overlook',
    type: 'soon',
    state: 'WA',
    status: 'Under construction',
    city: 'Tukwila, WA',
    address: '10811 47th Ave S, Tukwila, WA 98178',
    description: 'Construction is underway on this new community.',
    features: ['Coming soon'],
    site: 'https://www.djc.com/news/re/12156532.html',
    siteLabel: 'Read the coverage',
  },
  {
    slug: 'camp-chula-vista',
    name: 'Camp Chula Vista',
    type: 'soon',
    state: 'AL',
    status: 'Under contract',
    city: 'Pell City, AL',
    address: '1000 Chula Vista Lane, Pell City, AL 35125',
    description:
      'A wooded property on a private lake with a conference center, guest lodging, cabins, and camp facilities. Our first community in Alabama.',
    features: ['Alabama', 'Expansion'],
    site: 'https://www.campchulavista.com/',
  },
]

export const tiers = [
  {
    who: 'For veterans and families',
    title: 'Family apartments',
    text: 'Affordable apartment homes with modern kitchens and community amenities. Two10 by Vintage, Silver Creek, Kneeland Park, Kamiakin, Meadow Park, and Kent Manor.',
    filter: 'family' as PropertyType,
  },
  {
    who: 'For adults 55 and over',
    title: 'Senior 55+ communities',
    text: 'Renovated apartments and amenities for mature adults, close to shopping, dining, and transit. Vintage at Marine View in Everett.',
    filter: 'senior' as PropertyType,
  },
  {
    who: 'Coming soon',
    title: 'Under construction and expansion',
    text: 'Vintage at Lake Stevens and Vintage at the Overlook are being built now. Camp Chula Vista in Pell City, Alabama is under contract, our first community in the state.',
    filter: 'soon' as PropertyType,
  },
]
