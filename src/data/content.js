// All page content lives here. Edit the text, save, and redeploy: no admin panel or backend needed.

export const services = [
  { title: 'Car & Vehicle Transport', text: 'Safe, secure car carrier service for all vehicle types — sedans, SUVs, crossovers and more.', icon: 'Car' },
  { title: 'Door-to-Door Delivery', text: 'We collect your vehicle from your address and deliver it directly to the destination — no depot visits needed.', icon: 'DoorOpen' },
  { title: 'Intercity Car Transport', text: 'We move vehicles between all major Pakistani cities: Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Quetta and more.', icon: 'Map' },
  { title: 'Fully Insured', text: 'Your vehicle is fully insured throughout transportation for complete peace of mind.', icon: 'ShieldCheck' },
  { title: '24/7 Support', text: 'Our team is available around the clock. Call or WhatsApp us any time for updates or assistance.', icon: 'Headset' },
];

// photo: a real picture from /public/images.  trailer: 'flat' | 'single' | 'decks' | 'container'  (a drawn illustration, used when there is no photo)
export const vehicles = [
  {
    name: 'Multi-Car Carrier Trailer',
    capacity: '7–10 cars per load',
    text: 'Our two-deck car carrier trailers transport up to 10 vehicles in a single run — ideal for dealerships, corporate fleets and private vehicle owners. Each vehicle is secured with professional straps and safety equipment before departure.',
    photo: { src: '/images/carrier.webp', width: 1200, height: 348, alt: 'Shazil and Rayan two-deck car carrier trailer loaded with eight cars for transport across Pakistan' }
  },
  {
    name: 'Nationwide Container & Cargo Trucks',
    capacity: 'Goods and cargo',
    text: 'Complete logistics solution for port containers and local goods. Our container trucks provide safe, reliable delivery across Pakistan with real-time communication throughout the journey.',
    photo: { src: '/images/container.webp', width: 1200, height: 329, alt: 'Shazil and Rayan container truck for nationwide cargo and goods transport' }
  },
];

export const stats = [
  { value: '30+', label: 'Vehicles in our fleet' },
  { value: '9+', label: 'Major routes covered' },
  { value: '24/7', label: 'Call or WhatsApp us any hour' },
];

export const routes = [
  { from: 'Karachi', to: 'Lahore', slug: 'karachi-lahore' },
  { from: 'Karachi', to: 'Islamabad', slug: 'karachi-islamabad' },
  { from: 'Karachi', to: 'Rawalpindi', slug: 'karachi-rawalpindi' },
  { from: 'Karachi', to: 'Faisalabad', slug: 'karachi-faisalabad' },
  { from: 'Karachi', to: 'Multan', slug: 'karachi-multan' },
  { from: 'Karachi', to: 'Peshawar', slug: 'karachi-peshawar' },
  { from: 'Karachi', to: 'Quetta', slug: 'karachi-quetta' },
  { from: 'Karachi', to: 'Hyderabad', slug: 'karachi-hyderabad' },
  { from: 'Karachi', to: 'Sukkur', slug: 'karachi-sukkur' },
];

export const howItWorks = [
  { step: '01', title: 'Request a Quote', desc: 'Send your vehicle details (make, model, year), pickup city and destination via WhatsApp or the booking form. We reply promptly with availability and pricing.' },
  { step: '02', title: 'Confirm Your Booking', desc: 'Once you are happy with the quote, confirm the booking. We schedule the pickup date and share the details with you.' },
  { step: '03', title: 'Vehicle Inspection', desc: 'At pickup, we inspect and document your vehicle condition before loading. You receive a clear record before the journey begins.' },
  { step: '04', title: 'Secure Loading', desc: 'Your vehicle is professionally loaded onto the carrier and secured with straps and safety equipment to prevent any movement during transport.' },
  { step: '05', title: 'Transportation', desc: 'Your vehicle travels with our experienced drivers. We keep you updated throughout the journey.' },
  { step: '06', title: 'Delivery & Handover', desc: 'We deliver to your specified address. Vehicle condition is checked again and handed over to you in the same condition it was collected.' },
];

export const faqs = [
  {
    q: 'How much does a car carrier cost in Pakistan?',
    a: 'Car carrier rates depend on the route, vehicle type, vehicle size and whether you choose door-to-door or terminal service. Contact us by WhatsApp or phone for a current quote for your specific route and vehicle.',
  },
  {
    q: 'How much does it cost to transport a car from Karachi to Lahore?',
    a: 'The cost to send a car from Karachi to Lahore varies based on vehicle size and service type. Contact us for a current, accurate quote for the Karachi–Lahore route.',
  },
  {
    q: 'Do you provide door-to-door car transportation?',
    a: 'Yes. We pick up your vehicle from your address and deliver it directly to the destination address, across all major cities in Pakistan.',
  },
 
  {
    q: 'Can you transport SUVs and large vehicles?',
    a: 'Yes. Our multi-car carrier trailers can transport sedans, SUVs, crossovers and vans. Contact us to confirm your specific vehicle.',
  },
 
  {
    q: 'Which cities do you serve?',
    a: 'We operate from Karachi to all major cities across Pakistan — including Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Hyderabad, Sukkur and more.',
  },
  {
    q: 'How do I book a car carrier?',
    a: 'You can book by WhatsApp, by calling +92 300 6631918, or by filling in the booking form on this website. Share your vehicle details, pickup city and destination to get started.',
  },
  {
    q: 'What documents are required for car transportation?',
    a: 'You will typically need your vehicle registration documents and a copy of your CNIC. Contact us to confirm the exact requirements for your specific route.',
  },
  {
    q: 'Can I send a luxury or high-value car?',
    a: 'Yes. Contact us to discuss requirements for high-value vehicles. We take additional care during loading, transit and delivery.',
  },
];
