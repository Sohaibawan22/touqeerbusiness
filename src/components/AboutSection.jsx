import { Check, MapPin } from 'lucide-react';
import Reveal from './Reveal';
import { site } from '../config/site';

const points = [
  'Experienced, professional drivers and team',
  'Fully insured vehicle transportation',
  'On-time delivery commitment',
  'Door-to-door service across Pakistan',
  '30+ vehicle fleet — car carriers & container trucks',
  '24/7 customer support by phone and WhatsApp',
];

const AboutSection = () => (
  <section id="about" className="section-pad bg-white">
    <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
      <Reveal className="lg:col-span-6">
        <h2 className="h-section">Karachi&rsquo;s Trusted Car Carrier &amp; Vehicle Transport Company</h2>
        <p className="lead mt-5">
          Shazil &amp; Rayan Enterprise operates a professional car carrier and cargo transport service from Karachi to all major cities across Pakistan. We provide safe, reliable and fully insured vehicle transportation for individuals, businesses and dealerships.
        </p>
        <p className="mt-4 text-slate-600">
          Based at the New Qaid e Azam Truck Stand, Mauripur Road, Karachi, our team of experienced drivers and logistics professionals handles every shipment with care. Whether you are moving a single car or an entire fleet, we deliver it securely and on time.
        </p>
        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-slate-700">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-azure-600 text-white">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              {p}
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-primary mt-9">Talk to our team</a>
      </Reveal>

      <Reveal delay={120} className="lg:col-span-6">
        <div className="glass rounded-3xl bg-ice-100 p-6 sm:p-10" style={{ background: 'linear-gradient(145deg,#E6F2FF,#fff)' }}>
          <img src="/logo-seal.png" alt="Shazil and Rayan Cargo Car Carrier Services logo" width="374" height="236" loading="lazy" decoding="async" className="mx-auto h-auto w-full max-w-[340px]" />
          <div className="mt-8 flex gap-3 border-t border-ice-300 pt-6">
            <MapPin size={22} className="mt-0.5 shrink-0 text-azure-700" aria-hidden="true" />
            <div>
              <p className="font-heading text-xl font-semibold text-ink">Find our office</p>
              <p className="mt-1">{site.address.lines.map((l) => <span key={l} className="block">{l}</span>)}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default AboutSection;
