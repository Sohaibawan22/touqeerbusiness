import { Mail, MapPin, Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { navLinks, site, whatsappLink } from '../config/site';

const Footer = () => (
  <footer className="bg-[linear-gradient(180deg,#082F5E,#06244A)] text-ice-200">
    <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <a href="#home" className="inline-flex items-center gap-3" aria-label={`${site.fullName}, back to top`}>
          <img src="/favicon.svg" alt="" width="44" height="44" loading="lazy" className="h-11 w-11 rounded-[10px]" />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-2xl font-bold text-white">{site.name}</span>
            <span className="mt-1 text-sm text-ice-300">{site.tagline}</span>
          </span>
        </a>
        <p className="mt-5 max-w-sm">Safe, secure and reliable vehicle and cargo transport, from Karachi to cities across Pakistan.</p>
      </div>

      <nav aria-label="Footer" className="lg:col-span-3">
        <h2 className="font-heading text-xl font-semibold !text-white">Explore</h2>
        <ul className="mt-4">
          {navLinks.map(({ label, id }) => (
            <li key={id}>
              <a href={`#${id}`} className="inline-flex min-h-[44px] items-center hover:text-white hover:underline hover:underline-offset-4">{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="lg:col-span-4">
        <h2 className="font-heading text-xl font-semibold !text-white">Contact</h2>
        <ul className="mt-3">
          <li><a href={site.phone.href} className="inline-flex min-h-[44px] items-center gap-3 hover:text-white"><Phone size={18} className="text-ice-300" aria-hidden="true" /> {site.phone.display}</a></li>
          <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-3 hover:text-white"><WhatsAppIcon className="h-[18px] w-[18px] text-ice-300" /> WhatsApp us</a></li>
          <li><a href={`mailto:${site.email}`} className="inline-flex min-h-[44px] items-center gap-3 break-all hover:text-white"><Mail size={18} className="shrink-0 text-ice-300" aria-hidden="true" /> {site.email}</a></li>
          <li><a href={site.address.mapsLink} target="_blank" rel="noopener noreferrer" className="flex min-h-[44px] items-start gap-3 py-2 hover:text-white"><MapPin size={18} className="mt-1 shrink-0 text-ice-300" aria-hidden="true" /> {site.address.oneLine}</a></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10">
      <p className="container-page py-6 text-sm text-ice-300">
        © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {site.fullName}. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
