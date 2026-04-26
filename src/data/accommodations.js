export const accommodations = [
  {
    slug: 'kungshamn',
    name: 'Kungshamn',
    tagline: 'Coastal stay near cliffs, seafood, and quiet mornings by the water.',
    location: 'Bohuslan, Sweden',
    season: 'Best for summer escapes and long weekends by the sea.',
    intro:
      'A bright west coast stay for guests who want easy access to swimming, harbor walks, and day trips around Smogen and the surrounding coastline.',
    accent: 'coast',
    stats: [
      { label: 'Guests', value: '4' },
      { label: 'Bedrooms', value: '2' },
      { label: 'Drive to water', value: '5 min' },
    ],
    highlights: [
      'Close to swimming spots, restaurants, and the harbor.',
      'A calm base for exploring Smogen, Bovallstrand, and the Bohuslan coast.',
      'Comfortable for couples, small families, or friends traveling together.',
    ],
    amenities: [
      'Fully equipped kitchen',
      'Fast Wi-Fi',
      'Fresh linens and towels',
      'Dedicated dining area',
      'Easy parking access',
      'Outdoor seating',
    ],
    nearby: [
      'Smogen boardwalk and harbor restaurants',
      'Saltwater swimming and cliff bathing',
      'Boat trips and coastal day excursions',
    ],
    bookingNote: 'Booking link can be added here when the Airbnb listing is ready.',
  },
  {
    slug: 'falkoping',
    name: 'Falkoping',
    tagline: 'A peaceful countryside base with nature, history, and open skies nearby.',
    location: 'Vastergotland, Sweden',
    season: 'Great year-round for slower stays, events, and family visits.',
    intro:
      'A practical and welcoming stay in Falkoping with easy access to local sights, walking routes, and the wider Vastergotland landscape.',
    accent: 'meadow',
    stats: [
      { label: 'Guests', value: '5' },
      { label: 'Bedrooms', value: '2' },
      { label: 'Town access', value: 'Central' },
    ],
    highlights: [
      'A relaxed setting with good access to both town services and countryside trips.',
      'Works well for visiting family, work trips, or a quiet weekend away.',
      'Comfort-focused layout with space to settle in for multiple nights.',
    ],
    amenities: [
      'Kitchen for longer stays',
      'Reliable Wi-Fi',
      'Workspace-friendly table',
      'Laundry access',
      'Family-friendly setup',
      'Simple self check-in flow',
    ],
    nearby: [
      'Mosseberg recreation area',
      'Local cafes and town center essentials',
      'Day trips across Vastergotland',
    ],
    bookingNote: 'Booking link can be added here when the Airbnb listing is ready.',
  },
]

export function getAccommodationBySlug(slug) {
  return accommodations.find((accommodation) => accommodation.slug === slug)
}
