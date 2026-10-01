import WhatsAppIcon from './WhatsAppIcon';
import { whatsappLink } from '../config/site';

const FloatingWhatsApp = () => (
  <a
    href={whatsappLink('Hello, I need a vehicle transportation service.')}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform hover:scale-105"
    style={{ right: 'max(1rem, env(safe-area-inset-right))', bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
  >
    <WhatsAppIcon className="h-7 w-7" />
  </a>
);

export default FloatingWhatsApp;
