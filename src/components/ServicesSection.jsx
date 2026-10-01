import { Car, DoorOpen, Headset, Map, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';
import { services } from '../data/content';

const ICONS = { Car, DoorOpen, Map, ShieldCheck, Headset };

const ServicesSection = () => (
  <section id="services" className="section-pad relative overflow-hidden bg-[linear-gradient(180deg,#F7FBFF,#EAF4FF)]">
    <div className="container-page">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="h-section">Vehicle and cargo transport, handled end to end</h2>
        <p className="lead mt-4">
          Professional goods transport, logistics management and car carrier trailer service, with safety,
          speed and reliability for businesses and individuals nationwide.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {services.map((s, i) => {
          const Icon = ICONS[s.icon] || Car;
          return (
            <Reveal as="li" key={s.title} delay={(i % 3) * 100} className={`glass sheen lift rounded-2xl p-7 ${i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
              <span
                className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                style={{ background: 'linear-gradient(160deg,#5AA9F0,#0F5BB0)', boxShadow: '0 10px 22px -8px rgba(15,91,176,.6), inset 0 1px 0 rgba(255,255,255,.5)' }}
              >
                <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-[1.7rem] leading-tight">{s.title}</h3>
              <p className="mt-2">{s.text}</p>
            </Reveal>
          );
        })}
      </ul>
    </div>
  </section>
);

export default ServicesSection;
