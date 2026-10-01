import { Car } from 'lucide-react';
import Truck from './Trucks';
import Reveal from './Reveal';
import { vehicles } from '../data/content';

const VehiclesSection = () => (
  <section id="vehicles" className="section-pad relative overflow-hidden bg-[linear-gradient(180deg,#EAF4FF,#DCEBFB)]">
    <div className="orb -right-24 top-20 h-80 w-80 bg-azure-400/20" aria-hidden="true" />
    <div className="container-page relative">
      <Reveal className="max-w-2xl">
        <h2 className="h-section">Our transport fleet</h2>
        <p className="lead mt-4">30+ vehicles, including modern car carriers and container trucks equipped with safety and security tracking.</p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {vehicles.map((v, i) => (
          <Reveal as="article" key={v.name} delay={(i % 2) * 120} className="glass sheen lift overflow-hidden rounded-3xl">
            <div className="flex min-h-[150px] items-end md:min-h-[190px] lg:min-h-[235px] bg-[linear-gradient(180deg,#DDEEFF,#F7FBFF)] px-4 pb-4 pt-8 sm:px-6">
              {v.photo ? (
                <div className="relative w-full">
                  <div className="absolute inset-x-[6%] bottom-0 h-4 rounded-[50%] bg-azure-900/25 blur-md" aria-hidden="true" />
                  <img
                    src={v.photo.src}
                    alt={v.photo.alt}
                    width={v.photo.width}
                    height={v.photo.height}
                    loading="lazy"
                    decoding="async"
                    className="relative h-auto w-full drop-shadow-[0_14px_12px_rgba(15,91,176,.22)]"
                  />
                </div>
              ) : (
                <Truck trailer={v.trailer} uid={`fleet-${i}`} className="h-auto w-full" />
              )}
            </div>
            <div className="p-6 sm:p-7">
              <h3 className="text-[1.8rem] leading-tight">{v.name}</h3>
              <p className="mt-2">{v.text}</p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-azure-700/10 px-4 py-2 text-sm font-semibold text-azure-800">
                <Car size={17} aria-hidden="true" /> {v.capacity}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default VehiclesSection;
