/**
 * Vehicle illustrations, drawn as SVG (sharp on every screen, no image files to download).
 * One cab + three trailer types: a container box, a two-deck car carrier and a flatbed.
 */
const LINE = 'rgba(10,37,64,.28)';
const FRAME = '#3B5B8C';

const Wheel = ({ cx, cy = 304, r = 26 }) => (
  <g>
    <circle cx={cx} cy={cy} r={r + 4} fill="#0A2540" opacity=".9" />
    <circle cx={cx} cy={cy} r={r} fill="#14263F" />
    <circle cx={cx} cy={cy} r={r * 0.52} fill="#B9CCE6" />
    <circle cx={cx} cy={cy} r={r * 0.2} fill="#14263F" />
  </g>
);

const Cab = () => (
  <g>
    <rect x="690" y="262" width="46" height="9" fill="#0A2540" />
    <path d="M700 304 V226 Q700 208 714 204 L780 196 Q800 194 812 204 L846 236 Q862 250 866 268 V304 Z" fill="#E07018" stroke={LINE} strokeWidth="1.5" />
    <path d="M700 304 V280 H866 V304 Z" fill="#B85410" opacity=".35" />
    <path d="M762 208 L796 206 Q806 206 812 214 L836 244 L762 244 Z" fill="#DDEEFF" stroke={LINE} strokeWidth="1.5" />
    <path d="M770 214 L790 213 L800 226 L770 228 Z" fill="#fff" opacity=".6" />
    <rect x="846" y="288" width="26" height="12" rx="3" fill="#0A2540" />
    <rect x="700" y="272" width="46" height="24" rx="4" fill="#B9CCE6" />
    <circle cx="858" cy="270" r="5" fill="#FFF3C2" />
    <path d="M820 262 h30 M820 270 h30 M820 278 h30" stroke="#A94B08" strokeWidth="2.5" />
    <Wheel cx={752} />
    <Wheel cx={830} />
  </g>
);

const TrailerWheels = () => (
  <g>
    <rect x="86" y="262" width="150" height="10" rx="3" fill="#2C4A78" />
    <Wheel cx={122} />
    <Wheel cx={190} />
  </g>
);

const carColors = ['#2B8AE6', '#F4F8FF', '#E07018', '#8FB4E8', '#0F5BB0', '#CFE5FB', '#5AA9F0'];

const Cars = ({ uid, list }) =>
  list.map((c, i) => (
    <use key={i} href={`#car-${uid}`} x={c.x} y={c.y} width="170" height="56" style={{ color: carColors[i % carColors.length] }} />
  ));

const CarSymbol = ({ uid }) => (
  <symbol id={`car-${uid}`} viewBox="0 0 170 56" overflow="visible">
    <path d="M3 42 V32 Q3 27 9 26 L38 22 Q50 5 80 4 L110 4 Q132 6 146 22 L160 26 Q167 28 167 34 V42 Z" fill="currentColor" stroke={LINE} strokeWidth="1.5" />
    <path d="M52 22 Q60 10 80 9 L104 9 L104 22 Z M110 9 Q126 10 138 22 L110 22 Z" fill="#0A2540" opacity=".7" />
    <rect x="3" y="30" width="5" height="4" fill="#E24A3B" />
    <rect x="161" y="30" width="6" height="4" fill="#FFF3C2" />
    <circle cx="38" cy="43" r="12" fill="#14263F" /><circle cx="38" cy="43" r="5.5" fill="#B9CCE6" />
    <circle cx="132" cy="43" r="12" fill="#14263F" /><circle cx="132" cy="43" r="5.5" fill="#B9CCE6" />
  </symbol>
);

const DECK_CARS = [
  { x: 66, y: 195 }, { x: 256, y: 195 }, { x: 446, y: 195 },
  { x: 96, y: 105 }, { x: 286, y: 105 }, { x: 476, y: 105 }, { x: 666, y: 105 },
];

const Decks = ({ uid }) => (
  <g>
    <rect x="30" y="248" width="672" height="14" rx="3" fill={FRAME} />
    <rect x="60" y="158" width="810" height="14" rx="3" fill={FRAME} />
    {[74, 372, 676].map((x) => <rect key={x} x={x} y="172" width="10" height="76" fill={FRAME} />)}
    <path d="M84 176 L372 244 M372 176 L84 244 M382 176 L676 244 M676 176 L382 244" stroke={FRAME} strokeWidth="3" opacity=".5" fill="none" />
    <rect x="556" y="262" width="8" height="42" fill={FRAME} />
    <path d="M30 248 L6 262 L30 262 Z" fill={FRAME} />
    <Cars uid={uid} list={DECK_CARS} />
    <TrailerWheels />
  </g>
);

const Flat = ({ uid, count }) => (
  <g>
    <rect x="30" y="248" width="672" height="14" rx="3" fill={FRAME} />
    <rect x="648" y="180" width="10" height="68" rx="2" fill={FRAME} />
    <rect x="556" y="262" width="8" height="42" fill={FRAME} />
    <path d="M30 248 L2 262 L30 262 Z" fill={FRAME} />
    <Cars uid={uid} list={[{ x: 90, y: 195 }, { x: 290, y: 195 }, { x: 470, y: 195 }].slice(0, count)} />
    <TrailerWheels />
  </g>
);

const Container = () => (
  <g>
    <rect x="30" y="248" width="672" height="14" rx="3" fill={FRAME} />
    <rect x="556" y="262" width="8" height="42" fill={FRAME} />
    <rect x="40" y="96" width="652" height="152" rx="8" fill="#FFFFFF" stroke={LINE} strokeWidth="1.5" />
    {Array.from({ length: 38 }).map((_, i) => (
      <line key={i} x1={66 + i * 16} y1="108" x2={66 + i * 16} y2="238" stroke="#D7E6F8" strokeWidth="3" />
    ))}
    <rect x="40" y="96" width="652" height="10" rx="5" fill="#CFE5FB" />
    <path d="M40 218 H692 V240 Q692 248 684 248 H48 Q40 248 40 240 Z" fill="#0F5BB0" />
    <rect x="40" y="96" width="20" height="152" rx="6" fill="#C5D8EF" />
    <rect x="672" y="96" width="20" height="152" rx="6" fill="#C5D8EF" />
    <text x="366" y="166" textAnchor="middle" className="font-heading" fontSize="58" fontWeight="700" fill="#0A2540" letterSpacing="1">SHAZIL &amp; RAYAN</text>
    <text x="366" y="198" textAnchor="middle" className="font-heading" fontSize="23" fontWeight="600" fill="#E07018" letterSpacing="4">CARGO CAR CARRIER SERVICES</text>
    {[[40, 96], [680, 96], [40, 236], [680, 236]].map(([x, y]) => <rect key={x + '-' + y} x={x} y={y} width="12" height="12" rx="2" fill="#1F3A63" />)}
    <TrailerWheels />
  </g>
);

const ALT = {
  container: 'Illustration of a truck pulling a Shazil and Rayan shipping container',
  decks: 'Illustration of a two-deck car carrier loaded with seven cars',
  flat: 'Illustration of a flatbed car carrier with two cars',
  single: 'Illustration of a carrier moving a single car',
};

/** trailer: 'container' | 'decks' | 'flat' | 'single' */
const Truck = ({ trailer = 'container', uid = 'a', className = '', decorative = false }) => (
  <svg
    viewBox="0 88 880 282"
    className={className}
    role={decorative ? undefined : 'img'}
    aria-label={decorative ? undefined : ALT[trailer]}
    aria-hidden={decorative ? 'true' : undefined}
    focusable="false"
  >
    <defs><CarSymbol uid={uid} /></defs>
    <rect x="0" y="330" width="880" height="3" fill="#0F5BB0" opacity=".25" />
    <g className="truck-arrive">
      <ellipse cx="440" cy="334" rx="420" ry="6" fill="#0F5BB0" opacity=".18" />
      {trailer === 'container' && <Container />}
      {trailer === 'decks' && <Decks uid={uid} />}
      {trailer === 'flat' && <Flat uid={uid} count={2} />}
      {trailer === 'single' && <Flat uid={uid} count={1} />}
      <Cab />
    </g>
  </svg>
);

export default Truck;
