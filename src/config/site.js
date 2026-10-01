// Single source of truth for business details.
// Edit here and the header, hero, footer, contact section and WhatsApp links all update.

const WHATSAPP_NUMBER = '923006631918'; // country code + number, digits only

export const site = {
  name: 'Shazil and Rayan',
  fullName: 'Shazil and Rayan Cargo Car Carrier Services',
  tagline: 'Cargo car carrier services',
  phone: { display: '+92 300 6631918', href: 'tel:+923006631918' },
  email: 'tauqeer6342@gmail.com',
  address: {
    lines: ['Plot 683/A, New Qaid e Azam Truck Stand, Gate No. 6', 'Mauripur Road, Mauripur, Karachi, Pakistan'],
    oneLine: 'Plot 683/A, New Qaid e Azam Truck Stand, Gate No. 6, Mauripur Road, Mauripur, Karachi, Pakistan',
    mapsLink: 'https://maps.app.goo.gl/eWMh4FqKmtxKAgLd8',
    // exact pin of the business listing on Google Maps
    mapsEmbed: 'https://maps.google.com/maps?q=24.8675687,66.9518249&z=17&output=embed',
    geo: { lat: 24.8675687, lng: 66.9518249 },
  },
};

export const whatsappLink = (message = 'Hello, I would like a quote for vehicle transport.') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Fleet', id: 'vehicles' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];
