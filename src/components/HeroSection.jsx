import { ShieldCheck, DoorOpen } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { site, whatsappLink } from '../config/site';

const HeroSection = () => (
  <section id="home" className="relative overflow-hidden bg-[linear-gradient(180deg,#E3F0FF_0%,#F4F9FF_60%,#FFFFFF_100%)] pt-16 lg:pt-[72px]">
    {/* soft drifting light */}
    <div className="orb -left-24 top-24 h-72 w-72 bg-azure-400/35" aria-hidden="true" />
    <div className="orb -right-20 top-10 h-80 w-80 bg-ice-300/70 [animation-delay:-6s]" aria-hidden="true" />

    <div className="container-page relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-8 lg:py-24">
      <div className="lg:col-span-5">
        <h1 className="h-display">Safe, secure, <span className="whitespace-nowrap">on-time</span> vehicle transport across Pakistan.</h1>
        <p className="lead mt-6 max-w-xl">
          {site.name} runs car carrier trailers and container trucks out of Karachi. Tell us the vehicle
          and the route, and we will quote you.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <WhatsAppIcon /> Get a quote on WhatsApp
          </a>
          <a href={site.phone.href} className="btn-glass">Call {site.phone.display}</a>
        </div>
        <p className="mt-2 text-sm text-slate-500">
          Prefer a form?{' '}
          <a href="#contact" className="inline-flex min-h-[44px] items-center font-medium text-azure-700 underline underline-offset-4 hover:text-azure-900">
            Send a booking request
          </a>
        </p>
      </div>

      <div className="relative lg:col-span-7">
        <div className="glass relative rounded-[28px] px-3 pb-8 pt-16 sm:px-8 sm:pt-[4.5rem]">
          <div className="relative">
            <div className="absolute inset-x-[5%] -bottom-1 h-5 rounded-[50%] bg-azure-900/30 blur-md" aria-hidden="true" />
            <img
              src="/images/carrier.webp"
              alt="Shazil and Rayan two-deck car carrier loaded with eight cars"
              width="1200"
              height="348"
              fetchpriority="high"
              decoding="async"
              className="truck-arrive relative h-auto w-full drop-shadow-[0_18px_14px_rgba(15,91,176,.25)]"
            />
          </div>
          <div className="float-a glass absolute left-3 top-3 flex items-center gap-2 rounded-full py-2 pl-2.5 pr-4 text-sm font-semibold text-ink sm:left-5 sm:top-5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-azure-600 text-white"><DoorOpen size={15} aria-hidden="true" /></span>
            Door to door
          </div>
          <div className="float-b glass absolute right-3 top-3 flex items-center gap-2 rounded-full py-2 pl-2.5 pr-4 text-sm font-semibold text-ink sm:right-5 sm:top-5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-azure-600 text-white"><ShieldCheck size={15} aria-hidden="true" /></span>
            Fully insured
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
