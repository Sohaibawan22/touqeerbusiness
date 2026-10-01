import Truck from './Trucks';
import Reveal from './Reveal';
import { stats } from '../data/content';

/** The vehicle-themed band under the hero: silhouettes, glass stat cards and our container truck driving along the road. */
const RoadBand = () => (
  <section
    aria-label="Our reach"
    className="relative overflow-hidden bg-[linear-gradient(160deg,#082F5E_0%,#0F5BB0_58%,#2B8AE6_100%)] text-white"
  >
    <div className="orb -left-20 top-0 h-72 w-72 bg-azure-400/40" aria-hidden="true" />
    <div className="orb -right-24 bottom-10 h-80 w-80 bg-ice-200/30 [animation-delay:-8s]" aria-hidden="true" />

    {/* vehicle silhouettes as a background image */}
    <Truck trailer="decks" uid="sil-a" decorative className="silhouette pointer-events-none absolute -left-[8%] bottom-16 w-[78%] max-w-[980px]" />
    <Truck trailer="flat" uid="sil-b" decorative className="silhouette pointer-events-none absolute -right-[8%] top-6 hidden w-[52%] max-w-[700px] md:block" />

    <div className="container-page relative pt-16 md:pt-20">
      <Reveal className="max-w-2xl">
        <h2 className="h-section !text-white">Moving vehicles and cargo, city to city</h2>
        <p className="lead mt-4 text-ice-200">From a single car to a full trailer load, we keep you updated from pickup to drop-off.</p>
      </Reveal>

      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal as="li" key={s.label} delay={i * 110} className="glass-dark sheen rounded-2xl p-6">
            <p className="font-heading text-[2.6rem] font-bold leading-none text-white">{s.value}</p>
            <p className="mt-2 text-ice-200">{s.label}</p>
          </Reveal>
        ))}
      </ul>
    </div>

    {/* road: our container truck drives across, the road streams beneath it */}
    <div className="relative mt-10 h-[190px] md:mt-12 md:h-[260px]" aria-hidden="true">
      <div className="absolute inset-x-0 bottom-0 h-12 bg-[#06244A]/70" />
      <div className="road-dash absolute inset-x-0 bottom-[22px] h-1" />
      <div className="drive absolute bottom-[24px] left-0 w-[320px] md:w-[500px]">
        <div className="absolute inset-x-[4%] -bottom-1 h-5 rounded-[50%] bg-black/45 blur-md" />
        <img
          src="/images/container.webp"
          alt=""
          width="1200"
          height="329"
          decoding="async"
          className="idle relative block h-auto w-full drop-shadow-[0_16px_18px_rgba(0,0,0,.3)]"
        />
      </div>
    </div>
  </section>
);

export default RoadBand;
