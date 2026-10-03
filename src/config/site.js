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
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.645068997327!2d66.94925!3d24.8675735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315007896e215%3A0x6ff12adc87b562b1!2sSHAZIL%20AND%20RAYAN%20CARGO%20CAR%20CARRIER%20SERVICES!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk',
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
