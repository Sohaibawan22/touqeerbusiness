// All page content lives here. Edit the text, save, and redeploy: no admin panel or backend needed.

export const services = [
  { title: 'Car&Goods transportation', text: 'Safe and secure transport for all types of cars.', icon: 'Car' },
  { title: 'Door to door delivery', text: 'We pick up and drop off your vehicle at your location.', icon: 'DoorOpen' },
  { title: 'Intercity transport', text: 'We move vehicles between all major cities.', icon: 'Map' },
  { title: 'Fully insured', text: 'Your vehicle is insured for complete peace of mind.', icon: 'ShieldCheck' },
  { title: '24/7 support', text: 'Our support team is available round the clock.', icon: 'Headset' },
];

// photo: a real picture from /public/images.  trailer: 'flat' | 'single' | 'decks' | 'container'  (a drawn illustration, used when there is no photo)
export const vehicles = [
  { name: 'Multi car carrier', capacity: '7-10 cars', text: 'Streamlined nationwide auto transport for dealerships, corporate fleets, and private vehicles', photo: { src: '/images/carrier.webp', width: 1200, height: 348, alt: 'Shazil and Rayan two-deck car carrier loaded with eight cars' } },
  { name: 'Nationwide Container & Cargo Services', capacity: 'Goods and cargo', text: 'Complete logistics solution for port containers and local goods with safe delivery across Pakistan.', photo: { src: '/images/container.webp', width: 1200, height: 329, alt: 'Shazil and Rayan container truck' } },

];

export const stats = [
  { value: '30+', label: 'Vehicles in our fleet' },
  { value: 'Pakistan', label: 'City to city coverage' },
  { value: '24/7', label: 'Call or message any hour' },
];
