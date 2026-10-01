import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import Reveal from './Reveal';
import { site, whatsappLink } from '../config/site';

const SERVICE_TYPES = ['Car transportation', 'Logistics services'];
const EMPTY = { name: '', phone: '', location: '', serviceType: SERVICE_TYPES[0], description: '' };

const details = [
  { icon: <Phone size={20} aria-hidden="true" />, label: 'Phone', value: site.phone.display, href: site.phone.href },
  { icon: <WhatsAppIcon className="h-5 w-5" />, label: 'WhatsApp', value: 'Message us on WhatsApp', href: whatsappLink(), external: true },
  { icon: <Mail size={20} aria-hidden="true" />, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: <MapPin size={20} aria-hidden="true" />, label: 'Office address', value: site.address.oneLine, href: site.address.mapsLink, external: true },
];

const ContactSection = () => {
  const [form, setForm] = useState(EMPTY);
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // No backend: the request is written out as a message and sent through WhatsApp.
  const message = () =>
    [
      'Hello, I would like a quote.',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.serviceType}`,
      `Pickup and drop-off: ${form.location}`,
      `Details: ${form.description}`,
    ].join('\n');

  const sendWhatsApp = (e) => {
    e.preventDefault();
    window.open(whatsappLink(message()), '_blank', 'noopener');
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-[linear-gradient(180deg,#E6F2FF,#F4F9FF)]">
      <div className="container-page grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 className="h-section">Get a quote</h2>
          <p className="lead mt-4">Send the vehicle, pickup and drop-off, and we will get back to you. For anything urgent, call or message us directly.</p>

          <ul className="mt-8 divide-y divide-ice-300">
            {details.map((d) => (
              <li key={d.label}>
                <a href={d.href} {...(d.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="group flex min-h-[56px] items-start gap-4 py-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-azure-700 shadow-sm">{d.icon}</span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-ink">{d.label}</span>
                    <span className="block break-words text-slate-600 group-hover:text-azure-800 group-hover:underline group-hover:underline-offset-4">{d.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="glass mt-6 overflow-hidden rounded-2xl p-1.5">
            <iframe
              src={site.address.mapsEmbed}
              title="Map showing the Shazil and Rayan office at the New Qaid e Azam Truck Stand, Mauripur, Karachi"
              className="block h-[220px] w-full rounded-xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <div className="glass rounded-3xl p-6 sm:p-10">
            <h3 className="text-3xl">Request a quote or booking</h3>
            <p className="mt-1 text-sm">Your details open in WhatsApp as a ready-to-send message. Nothing is stored on this website.</p>

            <form onSubmit={sendWhatsApp} className="mt-6 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="field-label">Full name</label>
                  <input id="name" name="name" type="text" required autoComplete="name" value={form.name} onChange={onChange} className="field" />
                </div>
                <div>
                  <label htmlFor="phone" className="field-label">Mobile number</label>
                  <input id="phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" value={form.phone} onChange={onChange} className="field" />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="location" className="field-label">Pickup and drop-off</label>
                  <input id="location" name="location" type="text" required placeholder="Karachi to Lahore" value={form.location} onChange={onChange} className="field" />
                </div>
                <div>
                  <label htmlFor="serviceType" className="field-label">Type of service</label>
                  <select id="serviceType" name="serviceType" value={form.serviceType} onChange={onChange} className="field">
                    {SERVICE_TYPES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="description" className="field-label">Vehicle or cargo details</label>
                <textarea id="description" name="description" rows="4" required value={form.description} onChange={onChange} placeholder="Make, model and year, or what you need moved" className="field resize-y" />
              </div>

              <div>
                <button type="submit" className="btn-primary w-full sm:w-auto sm:px-8"><WhatsAppIcon /> Send on WhatsApp</button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
