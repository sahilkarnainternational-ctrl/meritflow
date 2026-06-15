"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
  type Variants,
} from "framer-motion";
import {
  Building2,
  TrendingUp,
  Shield,
  Users,
  Clock,
  MapPin,
  ArrowRight,
  Star,
  CheckCircle2,
  Sparkles,
  Globe,
  Zap,
  Heart,
  Calendar,
  Bed,
  Bath,
  Square,
  ArrowUpRight,
  Play,
  Award,
  ChevronRight,
  Phone,
  Mail,
  Send,
  Bookmark,
  Search,
  BarChart3,
  Lock,
  MessageCircle,
  X,
  Camera,
  Quote,
  Briefcase,
  GraduationCap,
} from "lucide-react";

function AnimatedCounter({ value, prefix = "", suffix = "", duration = 2000 }: {
  value: number; prefix?: string; suffix?: string; duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;
      if (value % 1 !== 0) {
        setDisplay(current.toFixed(1));
      } else {
        setDisplay(Math.floor(current).toLocaleString());
      }
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};
const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease } },
};
const fadeRight: Variants = {
  hidden: { opacity: 0, x: 70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease } },
};
const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease } },
};
const stagger: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const variantMap = { fadeUp, fadeLeft, fadeRight, scaleUp };

function Reveal({
  children,
  className = "",
  id,
  variant = "fadeUp",
  amount = 0.25,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: keyof typeof variantMap;
  amount?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount });
  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variantMap[variant]}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const properties = [
  {
    id: 1,
    title: "The Meridian Penthouse",
    location: "432 Park Avenue, Manhattan, New York",
    price: "$14,500,000",
    beds: 5,
    baths: 4,
    sqft: "8,200",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    tag: "Exclusive",
    owner: "Sterling Family Trust",
    agent: "Victoria Ashford",
    agentRole: "Senior Luxury Specialist",
    description: "A breathtaking penthouse spanning the 82nd floor with 360-degree views of Central Park and the Manhattan skyline. Floor-to-ceiling windows, Italian marble finishes, and a private rooftop terrace.",
    year: "2024",
    parking: "3",
    type: "Penthouse",
  },
  {
    id: 2,
    title: "Pacific Palisades Estate",
    location: "1200 Pacific Coast Hwy, Malibu, California",
    price: "$22,750,000",
    beds: 7,
    baths: 6,
    sqft: "12,400",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    tag: "New Listing",
    owner: "Chen-Watanabe Holdings",
    agent: "James Whitmore",
    agentRole: "Coastal Estate Director",
    description: "An architectural masterpiece perched above the Pacific with direct beach access. Infinity pool, glass-walled living spaces, and a private path to the sand. Designed by Marmol Radziner.",
    year: "2023",
    parking: "4",
    type: "Estate",
  },
  {
    id: 3,
    title: "Aspen Mountain Lodge",
    location: "295 Silent Creek Trail, Aspen, Colorado",
    price: "$9,800,000",
    beds: 6,
    baths: 5,
    sqft: "9,600",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
    tag: "Featured",
    owner: "Rocky Mountain Partners LLC",
    agent: "Elena Rodriguez",
    agentRole: "Mountain Properties Specialist",
    description: "A ski-in/ski-out lodge nestled in the Aspen trees with hand-hewn timber beams, a grand stone fireplace, and a heated outdoor pool with mountain views. Wine cellar and home theater included.",
    year: "2022",
    parking: "5",
    type: "Lodge",
  },
  {
    id: 4,
    title: "Brickell Key Residence",
    location: "1000 Brickell Ave, Miami, Florida",
    price: "$7,200,000",
    beds: 4,
    baths: 3,
    sqft: "5,800",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    tag: "Waterfront",
    owner: "Montgomery International Realty",
    agent: "David Chen",
    agentRole: "Waterfront Specialist",
    description: "A sleek waterfront penthouse on Brickell Key with unobstructed bay and ocean views. Smart home automation, chef's kitchen with Gaggenau appliances, and a private elevator entrance.",
    year: "2025",
    parking: "2",
    type: "Penthouse",
  },
  {
    id: 5,
    title: "Villa della Toscana",
    location: "2900 Silverado Trail, Napa Valley, California",
    price: "$15,300,000",
    beds: 8,
    baths: 7,
    sqft: "14,200",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    tag: "Estate",
    owner: "Marchetti Family Vineyards",
    agent: "Isabella Fontaine",
    agentRole: "Wine Country Estate Director",
    description: "A 42-acre Tuscan-inspired estate with a 12,000 sqft main residence, a working vineyard, olive grove, and a 2-bedroom guest house. Outdoor kitchen, championship tennis court, and heated pool.",
    year: "2021",
    parking: "6",
    type: "Villa",
  },
  {
    id: 6,
    title: "Emerald Bay Retreat",
    location: "750 Lakeshore Blvd, Lake Tahoe, Nevada",
    price: "$6,900,000",
    beds: 5,
    baths: 4,
    sqft: "7,100",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    tag: "Waterfront",
    owner: "Tahoe Legacy Trust",
    agent: "Michael Torres",
    agentRole: "Lakefront Property Advisor",
    description: "A modern lakefront retreat with 120 feet of private shoreline, a boat dock, and panoramic lake views. Floor-to-ceiling glass, radiant heated floors, and a rooftop deck with hot tub.",
    year: "2023",
    parking: "3",
    type: "Retreat",
  },
  {
    id: 7,
    title: "Bel Air Modern Mansion",
    location: "10201 Chalon Road, Los Angeles, California",
    price: "$35,000,000",
    beds: 9,
    baths: 11,
    sqft: "21,500",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    tag: "Ultra Luxury",
    owner: "Pacific Crest Holdings",
    agent: "Alexander Pierce",
    agentRole: "Billionaire Row Specialist",
    description: "A trophy property in the most prestigious enclave of Bel Air. Two-story foyer, indoor basketball court, 20-car gallery garage, and a cantilevered infinity pool overlooking the city.",
    year: "2024",
    parking: "20",
    type: "Mansion",
  },
  {
    id: 8,
    title: "Hamptons Oceanfront Estate",
    location: "11 Gin Lane, Southampton, New York",
    price: "$28,500,000",
    beds: 8,
    baths: 9,
    sqft: "16,800",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    tag: "Oceanfront",
    owner: "Harrington Family Office",
    agent: "Katherine Bolton",
    agentRole: "Hamptons Luxury Director",
    description: "A rare oceanfront compound on one of the most coveted stretches of the Hamptons shoreline. Tennis court, heated gunite pool, carriage house, and 200 feet of pristine dune frontage.",
    year: "2023",
    parking: "8",
    type: "Estate",
  },
  {
    id: 9,
    title: "Aspen Snowmass Chalet",
    location: "455 Crystal Bridge Road, Snowmass Village, Colorado",
    price: "$12,400,000",
    beds: 6,
    baths: 7,
    sqft: "10,200",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80",
    tag: "Ski-In/Ski-Out",
    owner: "Aspen Peak Ventures",
    agent: "Elena Rodriguez",
    agentRole: "Mountain Properties Specialist",
    description: "A masterfully crafted timber-frame chalet with ski-in/ski-out access to Snowmass. Vaulted great room, outdoor hot tub with mountain views, wine cellar, and a cozy library with fireplace.",
    year: "2023",
    parking: "4",
    type: "Chalet",
  },
  {
    id: 10,
    title: "Coral Gables Waterfront",
    location: "4200 Santa Maria Street, Coral Gables, Florida",
    price: "$8,900,000",
    beds: 6,
    baths: 7,
    sqft: "9,400",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
    tag: "Waterfront",
    owner: "Meridian Coastal Trust",
    agent: "David Chen",
    agentRole: "Waterfront Specialist",
    description: "A Mediterranean revival masterpiece on the open waters of Coral Gables. 120-foot private dock, resort-style pool, summer kitchen, and lush tropical landscaping on half an acre.",
    year: "2022",
    parking: "4",
    type: "Estate",
  },
  {
    id: 11,
    title: "Tribeca Loft Conversion",
    location: "60 Hudson Street, New York, New York",
    price: "$5,750,000",
    beds: 3,
    baths: 3,
    sqft: "4,600",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    tag: "Penthouse",
    owner: "Hudson Square Partners",
    agent: "Victoria Ashford",
    agentRole: "Senior Luxury Specialist",
    description: "A meticulously converted industrial loft in the heart of Tribeca. 14-foot ceilings, exposed brick and steel beams, floor-to-ceiling windows, and a private rooftop with Empire State Building views.",
    year: "2024",
    parking: "2",
    type: "Loft",
  },
  {
    id: 12,
    title: "Scottsdale Desert Oasis",
    location: "7800 N Pima Road, Scottsdale, Arizona",
    price: "$4,200,000",
    beds: 5,
    baths: 6,
    sqft: "8,100",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    tag: "Desert Modern",
    owner: "Sonoran Holdings LLC",
    agent: "Marcus Reid",
    agentRole: "Desert Properties Specialist",
    description: "A stunning desert modern retreat nestled in the McDowell Mountains. Negative-edge pool overlooking the valley, outdoor fire pit, meditation garden, and sustainable adobe construction.",
    year: "2023",
    parking: "4",
    type: "Oasis",
  },
];

const testimonials = [
  {
    name: "Victoria Sterling",
    role: "CEO, Sterling Holdings",
    quote:
      "EstateAI found us a penthouse we never would have discovered on our own. The AI understood our lifestyle preferences better than any agent we've worked with in twenty years.",
    rating: 5,
    initials: "VS",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
  },
  {
    name: "James Montgomery III",
    role: "Montgomery Family Office",
    quote:
      "The market intelligence is unparalleled. We've worked with every major brokerage globally — EstateAI's technology gives them an edge nobody else has.",
    rating: 5,
    initials: "JM",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
  },
  {
    name: "Sarah Chen-Park",
    role: "Tech Entrepreneur",
    quote:
      "As someone who values efficiency, the AI-powered approach was exactly what I needed. Found my dream home in half the usual time. The concierge service is exceptional.",
    rating: 5,
    initials: "SC",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
  },
  {
    name: "Robert Harrington",
    role: "Chairman, Harrington Capital",
    quote:
      "From the first conversation to closing, every detail was handled with absolute precision. The AI predicted market shifts that saved us $2M on our acquisition.",
    rating: 5,
    initials: "RH",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
  },
];

const stats = [
  { value: 4.2, suffix: "B+", label: "Properties Transacted", icon: BarChart3, prefix: "$" },
  { value: 2847, suffix: "", label: "Happy Clients", icon: Users, prefix: "" },
  { value: 98.6, suffix: "%", label: "Client Satisfaction", icon: Heart, prefix: "" },
  { value: 24, suffix: "/7", label: "AI Concierge Online", icon: Clock, prefix: "" },
];

const priceFilters = ["All Prices", "Under $10M", "$10M - $20M", "Over $20M"];
const typeFilters = ["All Types", "Penthouse", "Estate", "Villa", "Lodge", "Chalet", "Mansion", "Loft", "Retreat", "Oasis"];
const bedsFilters = ["Any Beds", "4+ Beds", "5+ Beds", "6+ Beds", "7+ Beds"];
const sortOptions = ["Featured", "Price: High to Low", "Price: Low to High", "Newest"];

function parsePrice(price: string): number {
  return parseFloat(price.replace(/[^0-9.]/g, ""));
}

function filterProperties(
  props: typeof properties,
  priceFilter: string,
  typeFilter: string,
  bedsFilter: string,
  sortBy: string,
) {
  let result = [...props];

  if (priceFilter === "Under $10M") result = result.filter((p) => parsePrice(p.price) < 10000000);
  else if (priceFilter === "$10M - $20M") result = result.filter((p) => { const pr = parsePrice(p.price); return pr >= 10000000 && pr <= 20000000; });
  else if (priceFilter === "Over $20M") result = result.filter((p) => parsePrice(p.price) > 20000000);

  if (typeFilter !== "All Types") result = result.filter((p) => p.type === typeFilter);

  if (bedsFilter === "4+ Beds") result = result.filter((p) => p.beds >= 4);
  else if (bedsFilter === "5+ Beds") result = result.filter((p) => p.beds >= 5);
  else if (bedsFilter === "6+ Beds") result = result.filter((p) => p.beds >= 6);
  else if (bedsFilter === "7+ Beds") result = result.filter((p) => p.beds >= 7);

  if (sortBy === "Price: High to Low") result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  else if (sortBy === "Price: Low to High") result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  else if (sortBy === "Newest") result.sort((a, b) => parseInt(b.year) - parseInt(a.year));

  return result;
}

const marqueeLogos = [
  "Forbes", "Bloomberg", "Wall Street Journal", "Robb Report",
  "Architectural Digest", "Financial Times", "Luxury Portfolio",
  "Mansion Global", "DuJour", "Departures",
];

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */

export default function HomePage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<typeof properties[0] | null>(null);
  const [priceFilter, setPriceFilter] = useState("All Prices");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [bedsFilter, setBedsFilter] = useState("Any Beds");
  const [sortBy, setSortBy] = useState("Featured");
  const [cardTilts, setCardTilts] = useState<Record<number, { x: number; y: number }>>({});

  const filteredProperties = filterProperties(properties, priceFilter, typeFilter, bedsFilter, sortBy);

  const { scrollYProgress: servicesScroll } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"],
  });
  const servicesBgY = useTransform(servicesScroll, [0, 1], ["0%", "30%"]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  useMotionValueEvent(scrollYProgress, "change", (v) => setScrolled(v > 0.02));

  useEffect(() => {
    if (selectedProperty) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedProperty]);

  const handleCardMouseMove = (id: number, e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setCardTilts((prev) => ({ ...prev, [id]: { x, y } }));
  };

  const handleCardMouseLeave = (id: number) => {
    setCardTilts((prev) => ({ ...prev, [id]: { x: 0, y: 0 } }));
  };

  return (
    <main className="min-h-screen bg-cream">
      {/* ═══ NAV ═══ */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.1 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/90 backdrop-blur-2xl shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
                <Building2 className="w-5 h-5 text-gold" />
              </div>
              <span className="text-xl font-bold tracking-tight text-navy" style={{ fontFamily: "var(--font-italiana)" }}>
                Estate<span className="text-gold">AI</span>
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-10">
              {["Properties", "Services", "Concierge", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[12px] font-semibold text-slate-mid hover:text-navy transition-colors tracking-[0.12em] uppercase"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a href="#contact" className="btn-gold text-[11px] py-3 px-6">
                <span><Calendar className="w-4 h-4" /> Book Consultation</span>
              </a>
            </div>

            <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden p-2">
              <div className={`w-6 h-0.5 bg-navy mb-1.5 transition-all ${mobileMenu ? "rotate-45 translate-y-[7px]" : ""}`} />
              <div className={`w-6 h-0.5 bg-navy mb-1.5 transition-all ${mobileMenu ? "opacity-0" : ""}`} />
              <div className={`w-6 h-0.5 bg-navy transition-all ${mobileMenu ? "-rotate-45 -translate-y-[7px]" : "w-4"}`} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-black/5 overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4">
                {["Properties", "Services", "Concierge", "Contact"].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenu(false)} className="block text-sm font-semibold text-navy py-2">
                    {item}
                  </a>
                ))}
                <a href="#contact" className="btn-gold text-[11px] py-3 px-6 w-full justify-center mt-4">
                  <span><Calendar className="w-4 h-4" /> Book Consultation</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ═══ HERO ═══ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 -top-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-cream" />
        </motion.div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[15%] right-[8%] w-[600px] h-[600px] rounded-full bg-gold/[0.06] blur-[150px] animate-float" />
          <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-gold/[0.04] blur-[120px] animate-float-delay" />
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12 w-full pt-40 pb-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-10"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-[11px] font-semibold text-white/80 uppercase tracking-[0.2em]">AI-Powered Luxury Real Estate</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-[clamp(2.8rem,7.5vw,7rem)] font-bold leading-[0.9] tracking-tight mb-8 text-white"
              style={{ fontFamily: "var(--font-italiana)" }}
            >
              Discover Your Dream
              <br />
              <span className="text-gradient-gold">Home</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-white/65 max-w-xl leading-relaxed mb-14"
            >
              Premium properties, intelligent guidance, and a concierge that
              understands your lifestyle — all powered by artificial intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="btn-gold">
                <span><Calendar className="w-4 h-4" /> Book a Consultation <ArrowRight className="w-4 h-4" /></span>
              </a>
              <a href="#concierge" className="btn-outline-dark !border-white/25 !text-white hover:!border-gold hover:!text-gold hover:!bg-white/5">
                <Play className="w-4 h-4" /> Start AI Chat
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-10"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + i * 0.15, ease }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <s.icon className="w-4 h-4 text-gold" />
                    <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                      <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                    </span>
                  </div>
                  <span className="text-[11px] text-white/45 uppercase tracking-[0.15em] font-medium">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-navy/40 font-semibold">Scroll</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-[1px] h-10 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <Reveal className="py-20 border-b border-black/5 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 mb-10">
          <p className="text-center text-[11px] uppercase tracking-[0.3em] text-slate-mid font-semibold">As Featured In</p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-cream to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-cream to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeLogos, ...marqueeLogos].map((logo, i) => (
              <span key={i} className="mx-14 text-xl md:text-2xl font-bold text-navy/10 select-none" style={{ fontFamily: "var(--font-italiana)" }}>
                {logo}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ═══ SERVICES — Real Estate Reimagined ═══ */}
      <div ref={servicesRef} id="services">
      <Reveal className="section-xl relative overflow-hidden">
        <motion.div className="absolute inset-0 opacity-[0.05]" style={{ y: servicesBgY }}>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80')" }} />
        </motion.div>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="lg:sticky lg:top-32">
              <Reveal variant="fadeLeft">
                <span className="inline-block text-[11px] font-bold text-gold uppercase tracking-[0.3em] mb-6">What We Do</span>
                <h2 className="text-[clamp(2.2rem,4.5vw,4.2rem)] font-bold leading-[1.08] tracking-tight mb-8 text-navy" style={{ fontFamily: "var(--font-italiana)" }}>
                  Real Estate,
                  <br />Reimagined.
                </h2>
                <p className="text-lg text-slate-mid leading-relaxed max-w-lg mb-10">
                  Three decades of luxury market expertise, fused with cutting-edge AI.
                  Every property, every transaction, every detail — elevated beyond expectation.
                </p>
                <div className="flex gap-4">
                  <a href="#contact" className="btn-gold text-[11px]"><span>Get Started <ArrowRight className="w-4 h-4" /></span></a>
                  <a href="#properties" className="btn-outline-dark text-[11px]">View Properties</a>
                </div>
              </Reveal>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Search, num: "01", title: "Buy", headline: "Find Your Perfect Address",
                  desc: "AI-curated property matching, off-market access, and neighborhood intelligence — all in one seamless experience.",
                  features: ["Off-Market Access", "AI Price Analytics", "Lifestyle Matching"],
                  img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
                },
                {
                  icon: TrendingUp, num: "02", title: "Sell", headline: "Maximize Every Square Foot",
                  desc: "Dynamic pricing algorithms, professional staging guidance, and access to our global network of qualified luxury buyers.",
                  features: ["AI Valuation Engine", "Global Buyer Network", "Premium Marketing"],
                  img: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80",
                },
                {
                  icon: Building2, num: "03", title: "Rent", headline: "Temporary Luxury, Lasting Impressions",
                  desc: "Curated rental portfolio spanning penthouses, villas, and estates — with flexible terms and white-glove move-in service.",
                  features: ["Curated Selection", "Flexible Terms", "Concierge Move-In"],
                  img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
                },
              ].map((s) => (
                <Reveal key={s.title} variant="fadeRight" amount={0.15}>
                  <motion.div whileHover={{ x: 6 }} transition={{ duration: 0.4, ease }} className="rounded-3xl border border-black/5 bg-white overflow-hidden group cursor-pointer hover-lift">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex-1 p-8 md:p-10">
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 rounded-2xl bg-navy flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
                            <s.icon className="w-5 h-5 text-gold group-hover:text-navy transition-colors duration-500" />
                          </div>
                          <ArrowUpRight className="w-5 h-5 text-slate-light group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                        </div>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-light font-semibold mb-2">{s.num} — {s.title}</p>
                        <h4 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-navy" style={{ fontFamily: "var(--font-italiana)" }}>{s.headline}</h4>
                        <p className="text-slate-mid leading-relaxed mb-6 text-[15px]">{s.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {s.features.map((f) => (
                            <span key={f} className="px-4 py-2 rounded-full bg-cream text-[11px] font-semibold text-navy/70 border border-black/5">{f}</span>
                          ))}
                        </div>
                      </div>
                      <div className="hidden md:block w-48 lg:w-56 flex-shrink-0 img-zoom">
                        <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
      </div>

      {/* ═══ PROPERTIES ═══ */}
      <Reveal id="properties" className="section-xl bg-white relative">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal className="text-center mb-16">
            <span className="inline-block text-[11px] font-bold text-gold uppercase tracking-[0.3em] mb-6">Portfolio</span>
            <h2 className="text-[clamp(2.2rem,4.5vw,4.2rem)] font-bold leading-[1.08] tracking-tight mb-6 text-navy" style={{ fontFamily: "var(--font-italiana)" }}>
              Signature Listings
            </h2>
            <p className="text-lg text-slate-mid max-w-2xl mx-auto">
              Each property is hand-selected, AI-verified for value, and presented with the detail it deserves.
            </p>
          </Reveal>

          <Reveal className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="flex flex-wrap gap-3 p-4 rounded-2xl bg-cream border border-black/5"
            >
              {[
                { label: priceFilter, options: priceFilters, onChange: setPriceFilter },
                { label: typeFilter, options: typeFilters, onChange: setTypeFilter },
                { label: bedsFilter, options: bedsFilters, onChange: setBedsFilter },
                { label: sortBy, options: sortOptions, onChange: setSortBy },
              ].map((filter, fi) => (
                <motion.div
                  key={fi}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: fi * 0.1, ease }}
                  className="relative"
                >
                  <select
                    value={filter.label}
                    onChange={(e) => filter.onChange(e.target.value)}
                    className="appearance-none px-5 py-3 pr-10 bg-white border border-black/8 rounded-xl text-[12px] font-medium text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all cursor-pointer hover:border-gold/50"
                  >
                    {filter.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 w-4 h-4 text-slate-light pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </Reveal>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((p) => (
              <motion.article
                key={p.id}
                variants={fadeUp}
                transition={{ duration: 0.5, ease }}
                className="group rounded-3xl bg-cream border border-black/5 overflow-hidden cursor-pointer"
                style={{
                  transform: `perspective(800px) rotateY(${cardTilts[p.id]?.x || 0}deg) rotateX(${cardTilts[p.id]?.y || 0}deg)`,
                  transition: "transform 0.3s cubic-bezier(0.23,1,0.32,1)",
                }}
                onMouseMove={(e) => handleCardMouseMove(p.id, e)}
                onMouseLeave={() => handleCardMouseLeave(p.id)}
                onClick={() => setSelectedProperty(p)}
              >
                <div className="relative h-[300px] img-zoom">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 rounded-full bg-gold text-navy text-[10px] font-bold uppercase tracking-wider">{p.tag}</span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors">
                      <Bookmark className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <button className="w-full py-3 rounded-xl bg-white text-navy font-semibold text-[12px] hover:bg-gold hover:text-white transition-colors">
                      View Full Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-slate-mid text-[11px] uppercase tracking-wider mb-2 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-gold" /> {p.location.split(",")[0]}
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight text-navy" style={{ fontFamily: "var(--font-italiana)" }}>{p.title}</h3>
                  <div className="flex items-center gap-4 text-[12px] text-slate-mid mb-4">
                    <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5" /> {p.beds} Beds</span>
                    <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" /> {p.baths} Baths</span>
                    <span className="flex items-center gap-1"><Square className="w-3.5 h-3.5" /> {p.sqft} ft²</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-black/5">
                    <span className="text-xl font-bold text-gradient-gold">{p.price}</span>
                    <span className="text-[11px] text-slate-light font-medium">{p.type}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-12 h-12 text-slate-light mx-auto mb-4" />
              <p className="text-lg text-slate-mid font-medium">No properties match your filters</p>
              <button
                onClick={() => { setPriceFilter("All Prices"); setTypeFilter("All Types"); setBedsFilter("Any Beds"); setSortBy("Featured"); }}
                className="mt-4 text-[12px] text-gold font-semibold uppercase tracking-wider hover:text-navy transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </Reveal>

      {/* ═══ AI CONCIERGE ═══ */}
      <Reveal id="concierge" className="section-xl bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.04] blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/[0.03] blur-[120px]" />

        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
          <Reveal className="text-center mb-24">
            <span className="inline-block text-[11px] font-bold text-gold uppercase tracking-[0.3em] mb-6">Intelligence</span>
            <h2 className="text-[clamp(2.2rem,4.5vw,4.2rem)] font-bold leading-[1.08] tracking-tight mb-6 text-white" style={{ fontFamily: "var(--font-italiana)" }}>
              Your AI Concierge
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Available around the clock. Ask anything — from market trends to scheduling a private viewing.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Reveal variant="fadeUp" className="md:col-span-2 md:row-span-2">
              <div className="h-full p-10 md:p-14 rounded-3xl border border-white/10 glass-dark relative overflow-hidden group min-h-[400px]">
                <div className="absolute top-0 right-0 w-80 h-80 bg-gold/[0.08] rounded-full blur-[100px] group-hover:bg-gold/[0.12] transition-all duration-700" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-8">
                      <Sparkles className="w-7 h-7 text-navy" />
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white" style={{ fontFamily: "var(--font-italiana)" }}>
                      Conversations<br />That Move You
                    </h3>
                    <p className="text-white/50 leading-relaxed max-w-lg text-lg">
                      Our AI concierge understands natural language, learns your preferences, and delivers personalized property recommendations — in real time.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-12">
                    {["Natural Language", "Market Predictions", "Instant Scheduling", "Multi-Language"].map((f) => (
                      <span key={f} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-white/60 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold" /> {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" amount={0.15}>
              <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] h-full">
                <Zap className="w-8 h-8 text-gold mb-5" />
                <h4 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: "var(--font-italiana)" }}>Instant Responses</h4>
                <p className="text-[14px] text-white/40 leading-relaxed">Get answers in under two seconds. Property questions, pricing queries, market insights — all instant.</p>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" amount={0.15}>
              <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] h-full">
                <Shield className="w-8 h-8 text-gold mb-5" />
                <h4 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: "var(--font-italiana)" }}>Verified & Secure</h4>
                <p className="text-[14px] text-white/40 leading-relaxed">Every listing AI-verified. Bank-level encryption. Your data stays completely private.</p>
              </div>
            </Reveal>
          </div>

          <Reveal className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-gold"><span><MessageCircle className="w-4 h-4" /> Start a Conversation <ArrowRight className="w-4 h-4" /></span></a>
            <a href="#contact" className="btn-outline-dark !border-white/20 !text-white hover:!border-gold hover:!text-gold"><Phone className="w-4 h-4" /> Schedule a Call</a>
          </Reveal>
        </div>
      </Reveal>

      {/* ═══ TESTIMONIALS ═══ */}
      <Reveal className="section-xl bg-cream-warm relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80')" }} />
        </div>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
          <Reveal className="text-center mb-24">
            <span className="inline-block text-[11px] font-bold text-gold uppercase tracking-[0.3em] mb-6">Testimonials</span>
            <h2 className="text-[clamp(2.2rem,4.5vw,4.2rem)] font-bold leading-[1.08] tracking-tight mb-6 text-navy" style={{ fontFamily: "var(--font-italiana)" }}>
              Trusted by the Discerning
            </h2>
            <p className="text-lg text-slate-mid max-w-2xl mx-auto">
              Our clients expect the extraordinary. Here&apos;s what they have to say.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <Reveal key={t.name} variant="fadeUp" amount={0.15}>
                <motion.div whileHover={{ y: -6 }} className="p-10 rounded-3xl bg-navy relative overflow-hidden group h-full">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gold/[0.06] rounded-full blur-[80px]" />
                  <Quote className="w-10 h-10 text-gold/30 mb-6" />
                  <p className="text-[15px] text-white/70 leading-relaxed mb-10 relative z-10">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/30">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-[14px] text-white">{t.name}</div>
                      <div className="text-[12px] text-white/40">{t.role}</div>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ═══ TRUST SIGNALS ═══ */}
      <Reveal className="py-20 bg-white border-y border-black/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: Shield, label: "Licensed & Bonded", sub: "All 50 States" },
              { icon: Award, label: "#1 AI Brokerage", sub: "2024 — 2026" },
              { icon: Globe, label: "Global Network", sub: "40+ Countries" },
              { icon: Lock, label: "Bank-Level Security", sub: "SOC 2 Certified" },
            ].map((t) => (
              <Reveal key={t.label} variant="scaleUp" amount={0.3}>
                <div className="text-center group">
                  <div className="w-14 h-14 rounded-2xl bg-gold-dim border border-gold/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                    <t.icon className="w-6 h-6 text-gold group-hover:text-navy transition-colors duration-500" />
                  </div>
                  <div className="font-bold text-[13px] text-navy mb-1">{t.label}</div>
                  <div className="text-[11px] text-slate-mid uppercase tracking-wider">{t.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ═══ CONTACT & BOOKING ═══ */}
      <Reveal id="contact" className="section-xl bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80')" }} />
        </div>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24">
            <Reveal variant="fadeLeft">
              <span className="inline-block text-[11px] font-bold text-gold uppercase tracking-[0.3em] mb-6">Get in Touch</span>
              <h2 className="text-[clamp(2.2rem,4vw,3.8rem)] font-bold leading-[1.1] tracking-tight mb-8 text-navy" style={{ fontFamily: "var(--font-italiana)" }}>
                Let&apos;s Discuss Your<br />Next Move
              </h2>
              <p className="text-lg text-slate-mid leading-relaxed mb-14 max-w-md">
                Complimentary consultations with our luxury property specialists. Available seven days a week.
              </p>

              <div className="space-y-8 mb-14">
                {[
                  { icon: Phone, label: "+1 (888) 555-0199", sub: "24/7 Direct Line" },
                  { icon: Mail, label: "concierge@estateai.com", sub: "1-hour Response Guarantee" },
                  { icon: MapPin, label: "500 Fifth Avenue, Suite 2400", sub: "New York, NY 10110" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-cream border border-black/5 flex items-center justify-center flex-shrink-0">
                      <c.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="font-semibold text-[15px] text-navy">{c.label}</div>
                      <div className="text-[12px] text-slate-mid mt-0.5">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="#concierge" className="btn-gold text-[11px]"><span><MessageCircle className="w-4 h-4" /> Chat with AI</span></a>
                <a href="#" className="btn-outline-dark text-[11px]"><Phone className="w-4 h-4" /> Request Callback</a>
              </div>
            </Reveal>

            <Reveal variant="fadeRight">
              <div className="p-10 md:p-12 rounded-3xl bg-cream border border-black/5">
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-navy" style={{ fontFamily: "var(--font-italiana)" }}>
                  Book a Consultation
                </h3>
                <p className="text-[13px] text-slate-mid mb-8">Fill in your details and we&apos;ll get back to you within 1 hour.</p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="w-full px-5 py-4 bg-white border border-black/8 rounded-xl text-[14px] text-navy placeholder-slate-light focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all" />
                    <input type="text" placeholder="Last Name" className="w-full px-5 py-4 bg-white border border-black/8 rounded-xl text-[14px] text-navy placeholder-slate-light focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all" />
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full px-5 py-4 bg-white border border-black/8 rounded-xl text-[14px] text-navy placeholder-slate-light focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-5 py-4 bg-white border border-black/8 rounded-xl text-[14px] text-navy placeholder-slate-light focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all" />
                  <select className="w-full px-5 py-4 bg-white border border-black/8 rounded-xl text-[14px] text-slate-light focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all appearance-none">
                    <option>I&apos;m looking to...</option>
                    <option>Buy a Property</option>
                    <option>Sell a Property</option>
                    <option>Rent a Property</option>
                    <option>Investment Consultation</option>
                  </select>
                  <textarea rows={4} placeholder="Tell us about your ideal property..." className="w-full px-5 py-4 bg-white border border-black/8 rounded-xl text-[14px] text-navy placeholder-slate-light focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all resize-none" />
                  <button type="submit" className="w-full btn-gold py-4">
                    <span><Send className="w-4 h-4" /> Book a Consultation</span>
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </Reveal>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-navy pt-24 pb-10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-navy" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-italiana)" }}>
                  Estate<span className="text-gold">AI</span>
                </span>
              </div>
              <p className="text-[13px] text-white/35 leading-relaxed max-w-xs">
                Redefining luxury real estate through artificial intelligence and white-glove service.
              </p>
            </div>
            {[
              { title: "Services", links: ["Buy Property", "Sell Property", "Rent", "Investment", "Consultation"] },
              { title: "Company", links: ["About Us", "Our Team", "Careers", "Press", "Partners"] },
              { title: "Support", links: ["Contact", "FAQ", "Privacy Policy", "Terms", "Sitemap"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-bold mb-6">{col.title}</h4>
                <ul className="space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[13px] text-white/40 hover:text-gold transition-colors duration-300">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="divider-gold mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[12px] text-white/25">© 2026 EstateAI. All rights reserved.</p>
            <div className="flex gap-6">
              {["LinkedIn", "Twitter", "Instagram"].map((s) => (
                <a key={s} href="#" className="text-[12px] text-white/25 hover:text-gold transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ═══ PROPERTY MODAL ═══ */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProperty(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.4, ease }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[400px] md:h-[500px] img-zoom">
                <img src={selectedProperty.image} alt={selectedProperty.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <div className="absolute top-5 left-5">
                  <span className="px-4 py-1.5 rounded-full bg-gold text-navy text-[10px] font-bold uppercase tracking-wider">{selectedProperty.tag}</span>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-[11px] text-white/60 uppercase tracking-[0.15em] font-semibold mb-2 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" /> {selectedProperty.location}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-italiana)" }}>{selectedProperty.title}</h2>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-black/5">
                  <div className="text-center px-6">
                    <div className="text-2xl font-bold text-navy">{selectedProperty.beds}</div>
                    <div className="text-[11px] text-slate-mid uppercase tracking-wider mt-1">Bedrooms</div>
                  </div>
                  <div className="w-px h-10 bg-black/5" />
                  <div className="text-center px-6">
                    <div className="text-2xl font-bold text-navy">{selectedProperty.baths}</div>
                    <div className="text-[11px] text-slate-mid uppercase tracking-wider mt-1">Bathrooms</div>
                  </div>
                  <div className="w-px h-10 bg-black/5" />
                  <div className="text-center px-6">
                    <div className="text-2xl font-bold text-navy">{selectedProperty.sqft}</div>
                    <div className="text-[11px] text-slate-mid uppercase tracking-wider mt-1">Sq. Feet</div>
                  </div>
                  <div className="w-px h-10 bg-black/5" />
                  <div className="text-center px-6">
                    <div className="text-2xl font-bold text-navy">{selectedProperty.parking}</div>
                    <div className="text-[11px] text-slate-mid uppercase tracking-wider mt-1">Parking</div>
                  </div>
                  <div className="w-px h-10 bg-black/5" />
                  <div className="text-center px-6">
                    <div className="text-2xl font-bold text-navy">{selectedProperty.year}</div>
                    <div className="text-[11px] text-slate-mid uppercase tracking-wider mt-1">Year Built</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold text-navy mb-4" style={{ fontFamily: "var(--font-italiana)" }}>About This Property</h3>
                    <p className="text-[15px] text-slate-mid leading-relaxed mb-6">{selectedProperty.description}</p>
                    <div className="flex items-center gap-3 mb-4">
                      <Briefcase className="w-4 h-4 text-gold" />
                      <span className="text-[13px] text-navy font-medium">Listed by {selectedProperty.owner}</span>
                    </div>
                  </div>
                  <div className="bg-cream rounded-2xl p-6">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mx-auto mb-3">
                        <Camera className="w-7 h-7 text-navy" />
                      </div>
                      <div className="font-bold text-navy text-[15px]">{selectedProperty.agent}</div>
                      <div className="text-[11px] text-slate-mid mt-1">{selectedProperty.agentRole}</div>
                    </div>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-gradient-gold" style={{ fontFamily: "var(--font-italiana)" }}>{selectedProperty.price}</div>
                    </div>
                    <a href="#contact" className="btn-gold text-[11px] w-full justify-center" onClick={() => setSelectedProperty(null)}>
                      <span><Calendar className="w-4 h-4" /> Schedule Viewing</span>
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Smart Home", "Wine Cellar", "Pool", "Gym", "Concierge", "Rooftop"].map((a) => (
                    <span key={a} className="px-4 py-2 rounded-full bg-cream text-[11px] font-semibold text-navy/70 border border-black/5">{a}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
