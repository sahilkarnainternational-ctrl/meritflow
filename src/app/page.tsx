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
  ChevronDown,
  SlidersHorizontal,
  Home,
  Castle,
  Trees,
  Building,
  Warehouse,
  Landmark,
  Mountain,
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

const FadeIn = ({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

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
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
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

const soldProperties = [
  { id: 1, price: "$8.2M", location: "Manhattan, NY", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80" },
  { id: 2, price: "$14.5M", location: "Malibu, CA", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80" },
  { id: 3, price: "$6.8M", location: "Aspen, CO", image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&q=80" },
  { id: 4, price: "$5.4M", location: "Miami, FL", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80" },
  { id: 5, price: "$11.2M", location: "Napa Valley, CA", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80" },
  { id: 6, price: "$4.9M", location: "Lake Tahoe, NV", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80" },
  { id: 7, price: "$18.7M", location: "Bel Air, CA", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&q=80" },
  { id: 8, price: "$7.3M", location: "Coral Gables, FL", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80" },
  { id: 9, price: "$9.1M", location: "Beverly Hills, CA", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&q=80" },
  { id: 10, price: "$3.8M", location: "Scottsdale, AZ", image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400&q=80" },
  { id: 11, price: "$12.6M", location: "The Hamptons, NY", image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=400&q=80" },
  { id: 12, price: "$6.1M", location: "Austin, TX", image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=400&q=80" },
  { id: 13, price: "$8.9M", location: "Nashville, TN", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80" },
  { id: 14, price: "$4.2M", location: "Charlotte, NC", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80" },
  { id: 15, price: "$15.3M", location: "Greenwich, CT", image: "https://images.unsplash.com/photo-1576940758220-1a4f1c8f92db?w=400&q=80" },
  { id: 16, price: "$7.8M", location: "Dallas, TX", image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=400&q=80" },
];

const testimonials = [
  {
    name: "Victoria Sterling",
    role: "CEO, Sterling Holdings",
    quote:
      "EstateX found us a property we never would have discovered on our own. The market intelligence was better than any brokerage we have worked with in twenty years.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    size: "large" as const,
  },
  {
    name: "James Montgomery III",
    role: "Montgomery Family Office",
    quote:
      "The market intelligence is unparalleled. We have worked with every major brokerage globally. EstateX delivers an edge nobody else has.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    size: "normal" as const,
  },
  {
    name: "Sarah Chen-Park",
    role: "Tech Entrepreneur",
    quote:
      "As someone who values efficiency, the approach was exactly what I needed. Found my dream home in half the usual time. The concierge service is exceptional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    size: "normal" as const,
  },
  {
    name: "Robert Harrington",
    role: "Chairman, Harrington Capital",
    quote:
      "From the first conversation to closing, every detail was handled with absolute precision. Their market analysis saved us $2M on our acquisition.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    size: "tall" as const,
  },
  {
    name: "Elena Vasquez",
    role: "Interior Design Director",
    quote:
      "They do not just find properties. They curate experiences. Every recommendation felt like it was designed specifically for my aesthetic and lifestyle.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&q=80",
    size: "normal" as const,
  },
  {
    name: "Marcus Thompson",
    role: "Real Estate Investor",
    quote:
      "In 15 years of luxury real estate investment, I have never seen this level of analytical rigor applied. The ROI insights alone are worth their weight in gold.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    size: "normal" as const,
  },
  {
    name: "Amanda Chen",
    role: "Architecture Firm Partner",
    quote:
      "Working with EstateX felt like having a brilliant co-pilot who understands both architecture and market dynamics. They found us three perfect properties in one week.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    size: "large" as const,
  },
  {
    name: "David Kim",
    role: "Venture Capitalist",
    quote:
      "Speed, precision, discretion. EstateX delivers on all three. The concierge responded to my requests at 2am and had three qualified options by morning.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
    size: "tall" as const,
  },
];

const stats = [
  { value: 4.2, suffix: "B+", label: "Properties Transacted", icon: BarChart3, prefix: "$" },
  { value: 2847, suffix: "", label: "Happy Clients", icon: Users, prefix: "" },
  { value: 98.6, suffix: "%", label: "Client Satisfaction", icon: Heart, prefix: "" },
  { value: 24, suffix: "/7", label: "Concierge Online", icon: Clock, prefix: "" },
];

const propertyTypes = ["All", "Penthouse", "Estate", "Villa", "Lodge", "Chalet", "Mansion", "Loft", "Retreat", "Oasis"];

const priceFilters = ["All Prices", "Under $10M", "$10M - $20M", "Over $20M"];
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

  if (typeFilter !== "All") result = result.filter((p) => p.type === typeFilter);

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
  const [typeFilter, setTypeFilter] = useState("All");
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

  const typeIcon = (type: string) => {
    switch (type) {
      case "Penthouse": return Building2;
      case "Estate": return Landmark;
      case "Villa": return Home;
      case "Lodge": return Trees;
      case "Chalet": return Mountain;
      case "Mansion": return Castle;
      case "Loft": return Warehouse;
      case "Retreat": return Trees;
      case "Oasis": return Building;
      default: return Search;
    }
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
                Estate<span className="text-gold">X</span>
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
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />
        </motion.div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[15%] right-[8%] w-[600px] h-[600px] rounded-full bg-gold/[0.06] blur-[150px] animate-float" />
          <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-gold/[0.04] blur-[120px] animate-float-delay" />
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12 w-full pt-40 pb-32">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-10"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-[11px] font-semibold text-white/80 uppercase tracking-[0.2em]">EstateX — Discover Properties That Match Your Vision</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.88] tracking-tight mb-8 text-white"
              style={{ fontFamily: "var(--font-italiana)" }}
            >
              Where Expertise Meets
              <br />
              <span className="text-gradient-gold">Extraordinary Properties</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-white/65 max-w-2xl leading-relaxed mb-14"
            >
              Three decades of luxury market expertise, enhanced by intelligent tools.
              Every property, every transaction, every detail — elevated beyond expectation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#properties" className="btn-gold">
                <span><Calendar className="w-4 h-4" /> Explore Collection <ArrowRight className="w-4 h-4" /></span>
              </a>
              <a href="#contact" className="btn-outline-dark !border-white/25 !text-white hover:!border-gold hover:!text-gold hover:!bg-white/5">
                <Play className="w-4 h-4" /> Book Private Viewing
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
                <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight mb-8 text-navy" style={{ fontFamily: "var(--font-italiana)" }}>
                  Real Estate,
                  <br />Reimagined.
                </h2>
                <p className="text-lg text-slate-mid leading-relaxed max-w-lg mb-10">
                  Three decades of luxury market expertise, fused with cutting-edge tools.
                  Every property, every transaction, every detail — elevated beyond expectation.
                </p>
                <div className="flex gap-4">
                  <a href="#contact" className="btn-gold text-[11px]"><span>Get Started <ArrowRight className="w-4 h-4" /></span></a>
                  <a href="#properties" className="btn-outline-dark text-[11px]">View Properties</a>
                </div>
              </Reveal>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: Search, num: "01", title: "Buy", headline: "Find Your Perfect Address",
                  desc: "AI-curated property matching, off-market access, and neighborhood intelligence — all in one seamless experience.",
                  features: ["Off-Market Access", "Price Analytics", "Lifestyle Matching"],
                  img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
                },
                {
                  icon: TrendingUp, num: "02", title: "Sell", headline: "Maximize Every Square Foot",
                  desc: "Dynamic pricing algorithms, professional staging guidance, and access to our global network of qualified luxury buyers.",
                  features: ["Valuation Engine", "Global Buyer Network", "Premium Marketing"],
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

      {/* ═══ OUR APPROACH ═══ */}
      <Reveal className="py-24 dark-section-bg relative overflow-hidden">
        <div className="grain-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/98 to-navy" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gold/[0.04] blur-[180px]" />
        </div>
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12 relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="inline-block text-[11px] font-bold text-gold uppercase tracking-[0.3em] mb-6">Our Approach</span>
            <h2 className="text-[clamp(2.2rem,4vw,3.8rem)] font-bold leading-[1.08] tracking-tight text-white mb-4" style={{ fontFamily: "var(--font-italiana)" }}>
              A Refined Process
            </h2>
            <p className="text-lg text-white/40 max-w-xl mx-auto">
              Three deliberate steps from discovery to your dream property.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-0">
            {[
              { num: "01", title: "Discover", desc: "We listen to understand your vision, lifestyle, and aspirations." },
              { num: "02", title: "Curate", desc: "Our advisors present only properties that truly match your criteria." },
              { num: "03", title: "Deliver", desc: "From negotiation to closing, we handle every detail personally." },
            ].map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.15} className="approach-step">
                <div className="text-5xl font-bold text-gold/20 mb-4" style={{ fontFamily: "var(--font-italiana)" }}>{step.num}</div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-italiana)" }}>{step.title}</h3>
                <p className="text-[13px] text-white/40 leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="section-divider" />

      {/* ═══ PROPERTIES ═══ */}
      <Reveal id="properties" className="section-xl dark-section-bg relative">
        <div className="grain-overlay" />
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.03]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/98 to-navy" />

        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
          <Reveal className="text-center mb-16">
            <span className="inline-block text-[11px] font-bold text-gold uppercase tracking-[0.3em] mb-6">Portfolio</span>
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.02em] mb-6 text-white" style={{ fontFamily: "var(--font-italiana)" }}>
              Signature Collection
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              Each property is hand-selected and presented with the detail it deserves.
            </p>
          </Reveal>

          {/* ─── FILTER BAR ─── */}
          <Reveal className="mb-12">
            <div className="mb-6">
              <p className="text-[11px] text-white/30 uppercase tracking-[0.2em] font-semibold mb-4 flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5" /> Property Type
              </p>
              <div className="flex flex-wrap gap-2">
                {propertyTypes.map((type, i) => {
                  const Icon = typeIcon(type);
                  return (
                    <motion.button
                      key={type}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.04, ease }}
                      onClick={() => setTypeFilter(type)}
                      className={`filter-pill ${typeFilter === type ? (type === "All" ? "filter-pill-gold active" : "active") : ""}`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {type}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <p className="text-[11px] text-white/30 uppercase tracking-[0.2em] font-semibold mr-2">Filters</p>

              <div className="relative">
                <select
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="filter-pill appearance-none pr-8 cursor-pointer"
                >
                  {priceFilters.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none text-slate-light" />
              </div>

              <div className="relative">
                <select
                  value={bedsFilter}
                  onChange={(e) => setBedsFilter(e.target.value)}
                  className="filter-pill appearance-none pr-8 cursor-pointer"
                >
                  {bedsFilters.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none text-slate-light" />
              </div>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="filter-pill appearance-none pr-8 cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none text-slate-light" />
              </div>
            </div>
          </Reveal>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((p) => (
              <motion.article
                key={p.id}
                variants={fadeUp}
                transition={{ duration: 0.5, ease }}
                className="group glass-card-dark overflow-hidden cursor-pointer"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
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
                  <div className="flex items-center gap-2 text-white/40 text-[11px] uppercase tracking-wider mb-2 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-gold" /> {p.location.split(",")[0]}
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight text-white" style={{ fontFamily: "var(--font-italiana)" }}>{p.title}</h3>
                  <div className="flex items-center gap-4 text-[12px] text-white/40 mb-4">
                    <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5" /> {p.beds} Beds</span>
                    <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" /> {p.baths} Baths</span>
                    <span className="flex items-center gap-1"><Square className="w-3.5 h-3.5" /> {p.sqft} ft²</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-xl font-bold text-gradient-gold">{p.price}</span>
                    <span className="text-[11px] text-white/30 font-medium">{p.type}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-12 h-12 text-white/20 mx-auto mb-4" />
              <p className="text-lg text-white/40 font-medium">No properties match your filters</p>
              <button
                onClick={() => { setPriceFilter("All Prices"); setTypeFilter("All"); setBedsFilter("Any Beds"); setSortBy("Featured"); }}
                className="mt-4 text-[12px] text-gold font-semibold uppercase tracking-wider hover:text-white transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </Reveal>

      {/* ═══ WHY DISCERNING CLIENTS CHOOSE ESTATEX ═══ */}
      <Reveal className="py-24 dark-section-bg relative overflow-hidden">
        <div className="grain-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/98 to-navy" />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.04] blur-[150px]" />
        </div>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="inline-block text-[11px] font-bold text-gold uppercase tracking-[0.3em] mb-6">The Difference</span>
            <h2 className="text-[clamp(2.2rem,4vw,3.8rem)] font-bold leading-[1.08] tracking-tight text-white mb-4" style={{ fontFamily: "var(--font-italiana)" }}>
              Why Discerning Clients Choose EstateX
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              We deliver what others cannot — access, intelligence, and an unwavering commitment to excellence.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Lock,
                title: "Off-Market Access",
                desc: "500+ exclusive properties never listed publicly. Our network opens doors that remain closed to others.",
              },
              {
                icon: Sparkles,
                title: "Intelligent Matching",
                desc: "Our advisors learn your lifestyle to find perfect matches. Every recommendation is deliberate and personal.",
              },
              {
                icon: Heart,
                title: "White-Glove Service",
                desc: "From search to closing, every detail handled personally. A single point of contact for your entire journey.",
              },
            ].map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.12}>
                <div className="feat-card h-full">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-6">
                    <f.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-italiana)" }}>{f.title}</h3>
                  <p className="text-[13px] text-white/40 leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ═══ SOLD PROPERTIES CAROUSEL ═══ */}
      <Reveal className="py-24 dark-section-bg relative overflow-hidden">
        <div className="grain-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/98 to-navy" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gold/[0.03] blur-[200px]" />
        </div>

        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
          <Reveal className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="inline-block text-[11px] font-bold text-gold uppercase tracking-[0.3em] mb-6">Track Record</span>
                <h2 className="text-[clamp(2.2rem,4vw,3.8rem)] font-bold leading-[1.08] tracking-tight text-white" style={{ fontFamily: "var(--font-italiana)" }}>
                  Recently Closed
                </h2>
              </div>
              <p className="text-white/40 max-w-md text-[15px] leading-relaxed">
                Every transaction represents a family who trusted us with their most important asset.
              </p>
            </div>
          </Reveal>

          <div className="sold-carousel">
            {[...soldProperties, ...soldProperties].map((s, i) => (
              <motion.div
                key={`${s.id}-${i}`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % soldProperties.length) * 0.05, ease }}
                className="sold-card"
              >
                <div className="relative h-[160px] overflow-hidden">
                  <img src={s.image} alt={s.location} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-gold text-navy text-[9px] font-bold uppercase tracking-wider">Sold</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-lg font-bold text-gradient-gold mb-1" style={{ fontFamily: "var(--font-italiana)" }}>{s.price}</div>
                  <div className="flex items-center gap-1.5 text-white/40 text-[11px]">
                    <MapPin className="w-3 h-3" /> {s.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ═══ THE ESTATEX DIFFERENCE — QUOTE BANNER ═══ */}
      <Reveal className="quote-banner py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gold/[0.03] blur-[200px]" />
        </div>
        <div className="mx-auto max-w-[900px] px-6 lg:px-12 relative z-10 text-center">
          <FadeIn>
            <Quote className="w-10 h-10 text-gold/30 mx-auto mb-8" />
            <blockquote className="text-[clamp(1.3rem,3vw,2.2rem)] font-bold leading-[1.4] tracking-tight text-white mb-8" style={{ fontFamily: "var(--font-italiana)" }}>
              &ldquo;EstateX found us our dream home in 3 weeks. The off-market access and personal attention was unlike anything we experienced.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gold/30">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" alt="James & Victoria M." className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-[13px] text-white">James & Victoria M.</div>
                <div className="text-[11px] text-white/30">New York</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Reveal>

      <div className="section-divider" />

      {/* ═══ TESTIMONIALS + AI CONCIERGE (Merged Bento) ═══ */}
      <div id="concierge">
      <Reveal className="section-xl dark-section-bg relative">
        <div className="grain-overlay" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center opacity-[0.03]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/98 to-navy" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.04] blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/[0.03] blur-[120px]" />

        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
            {/* ─── LEFT: Testimonials ─── */}
            <div>
              <Reveal className="mb-12">
                <span className="inline-block text-[11px] font-bold text-gold uppercase tracking-[0.3em] mb-6">Testimonials</span>
                <h2 className="text-[clamp(2.2rem,4vw,3.8rem)] font-bold leading-[1.08] tracking-tight mb-4 text-white" style={{ fontFamily: "var(--font-italiana)" }}>
                  Trusted by the Discerning
                </h2>
                <p className="text-lg text-white/40 max-w-lg">
                  Our clients expect the extraordinary. Here&apos;s what they have to say.
                </p>
              </Reveal>

              {/* Bento Grid */}
              <div className="grid grid-cols-2 gap-4">
                {testimonials.map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className={`bento-card ${
                      t.size === "large" ? "col-span-2" :
                      t.size === "tall" ? "row-span-2" : ""
                    }`}
                  >
                    <Quote className="w-6 h-6 text-gold/30 mb-4" />
                    <p className="text-[13px] text-white/55 leading-relaxed mb-6">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gold/30 flex-shrink-0">
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[13px] text-white truncate">{t.name}</div>
                        <div className="text-[11px] text-white/30 truncate">{t.role}</div>
                      </div>
                      <div className="flex gap-0.5 flex-shrink-0">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} className="w-3 h-3 fill-gold text-gold" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ─── RIGHT: Intelligence Card ─── */}
            <div className="lg:sticky lg:top-32">
              <Reveal variant="fadeRight">
                <div className="glass-card-dark p-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-60 h-60 bg-gold/[0.08] rounded-full blur-[100px] group-hover:bg-gold/[0.12] transition-all duration-700" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-6 animate-pulse-gold">
                      <Sparkles className="w-6 h-6 text-navy" />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 tracking-tight text-white" style={{ fontFamily: "var(--font-italiana)" }}>
                      Why EstateX
                    </h3>
                    <p className="text-[13px] text-white/40 leading-relaxed mb-6">
                      Our advisors combine decades of market expertise with intelligent tools to deliver results others cannot.
                    </p>

                    <div className="space-y-3 mb-8">
                      {[
                        { icon: Lock, text: "Exclusive Off-Market Access" },
                        { icon: Clock, text: "24/7 Concierge Support" },
                        { icon: BarChart3, text: "Market Intelligence Reports" },
                        { icon: Camera, text: "Private Showings" },
                        { icon: Globe, text: "Global Network" },
                      ].map((f) => (
                        <div key={f.text} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                          <f.icon className="w-4 h-4 text-gold flex-shrink-0" />
                          <span className="text-[13px] text-white/60 font-medium">{f.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {["Market Predictions", "Price Analytics", "Lifestyle Matching"].map((f) => (
                        <span key={f} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-[10px] font-semibold text-white/50 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-gold" /> {f}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-3 mb-8">
                      {[
                        { icon: Zap, title: "Sub-2s Response", desc: "Instant answers to any property question." },
                        { icon: Shield, title: "Verified & Secure", desc: "Bank-level encryption. Your data stays private." },
                      ].map((f) => (
                        <div key={f.title} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                          <div className="flex items-center gap-3">
                            <f.icon className="w-4 h-4 text-gold flex-shrink-0" />
                            <div>
                              <div className="text-[13px] font-semibold text-white">{f.title}</div>
                              <div className="text-[11px] text-white/30">{f.desc}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3 mb-8">
                      <a href="#contact" className="btn-gold text-[11px] w-full justify-center">
                        <span><MessageCircle className="w-4 h-4" /> Start Conversation <ArrowRight className="w-4 h-4" /></span>
                      </a>
                      <a href="#contact" className="btn-outline-dark !border-white/15 !text-white hover:!border-gold hover:!text-gold text-[11px] w-full justify-center">
                        <Calendar className="w-4 h-4" /> Schedule a Private Consultation
                      </a>
                    </div>

                    <div className="pt-8 border-t border-white/5">
                      <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-[0.2em] mb-4">Our Track Record</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="stat-mini">
                          <div className="text-lg font-bold text-gradient-gold" style={{ fontFamily: "var(--font-italiana)" }}>2,400+</div>
                          <div className="text-[10px] text-white/35 mt-0.5">Properties Sold</div>
                        </div>
                        <div className="stat-mini">
                          <div className="text-lg font-bold text-gradient-gold" style={{ fontFamily: "var(--font-italiana)" }}>$4.8B+</div>
                          <div className="text-[10px] text-white/35 mt-0.5">Total Value</div>
                        </div>
                        <div className="stat-mini">
                          <div className="text-lg font-bold text-gradient-gold" style={{ fontFamily: "var(--font-italiana)" }}>98%</div>
                          <div className="text-[10px] text-white/35 mt-0.5">Client Satisfaction</div>
                        </div>
                        <div className="stat-mini">
                          <div className="text-lg font-bold text-gradient-gold" style={{ fontFamily: "var(--font-italiana)" }}>15+</div>
                          <div className="text-[10px] text-white/35 mt-0.5">Years Experience</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/5">
                      <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-[0.2em] mb-4">Featured In</h4>
                      <div className="flex flex-wrap items-center gap-6">
                        <span className="text-[14px] font-bold text-white/15" style={{ fontFamily: "var(--font-italiana)" }}>WSJ</span>
                        <span className="text-[14px] font-bold text-white/15" style={{ fontFamily: "var(--font-italiana)" }}>Forbes</span>
                        <span className="text-[14px] font-bold text-white/15" style={{ fontFamily: "var(--font-italiana)" }}>Bloomberg</span>
                        <span className="text-[14px] font-bold text-white/15" style={{ fontFamily: "var(--font-italiana)" }}>Robb Report</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Reveal>
      </div>

      {/* ═══ LICENSED & BONDED ═══ */}
      <Reveal className="py-24 dark-section-bg relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-gold/[0.04] blur-[180px]" />
        </div>

        <div className="mx-auto max-w-[1100px] px-6 lg:px-12 relative z-10">
          <Reveal variant="fadeUp">
            <div className="license-card">
              <div className="text-center mb-10">
                <span className="inline-block text-[11px] font-bold text-gold uppercase tracking-[0.3em] mb-4">Credentials</span>
                <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white mb-4" style={{ fontFamily: "var(--font-italiana)" }}>
                  Licensed & Bonded Luxury Brokerage
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {[
                  { icon: Shield, label: "Licensed in All 50 States", desc: "Full regulatory compliance" },
                  { icon: Lock, label: "Bonded & Insured", desc: "Maximum transaction protection" },
                  { icon: BarChart3, label: "Fiduciary Standard", desc: "Your interests first, always" },
                  { icon: Search, label: "Privacy Guaranteed", desc: "Discretion by design" },
                ].map((pillar) => (
                  <div key={pillar.label} className="text-center group">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-500">
                      <pillar.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div className="font-bold text-[13px] text-white mb-1">{pillar.label}</div>
                    <div className="text-[11px] text-white/30">{pillar.desc}</div>
                  </div>
                ))}
              </div>

              <div className="section-divider mb-10" />

              <div className="text-center">
                <p className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-gradient-gold tracking-tight" style={{ fontFamily: "var(--font-italiana)" }}>
                  Trusted by $4.8B+ in transactions
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Reveal>

      <div className="section-divider" />

      {/* ═══ CONTACT & BOOKING ═══ */}
      <Reveal id="contact" className="section-xl dark-section-bg relative">
        <div className="grain-overlay" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center opacity-[0.03]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/98 to-navy" />
        </div>

        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24">
            <Reveal variant="fadeLeft">
              <span className="inline-block text-[11px] font-bold text-gold uppercase tracking-[0.3em] mb-6">Get in Touch</span>
              <h2 className="text-[clamp(2.2rem,4vw,3.8rem)] font-bold leading-[1.1] tracking-tight mb-8 text-white" style={{ fontFamily: "var(--font-italiana)" }}>
                Let&apos;s Discuss Your<br />Next Move
              </h2>
              <p className="text-lg text-white/40 leading-relaxed mb-14 max-w-md">
                Complimentary consultations with our luxury property specialists. Available seven days a week.
              </p>

              <div className="space-y-8 mb-14">
                {[
                  { icon: Phone, label: "+1 (888) 555-0199", sub: "24/7 Direct Line" },
                  { icon: Mail, label: "concierge@estatex.com", sub: "1-hour Response Guarantee" },
                  { icon: MapPin, label: "500 Fifth Avenue, Suite 2400", sub: "New York, NY 10110" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl glass-card-dark flex items-center justify-center flex-shrink-0">
                      <c.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="font-semibold text-[15px] text-white">{c.label}</div>
                      <div className="text-[12px] text-white/30 mt-0.5">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="#concierge" className="btn-gold text-[11px]"><span><MessageCircle className="w-4 h-4" /> Chat with Us</span></a>
                <a href="#" className="btn-outline-dark !border-white/15 !text-white hover:!border-gold hover:!text-gold text-[11px]"><Phone className="w-4 h-4" /> Request Callback</a>
              </div>
            </Reveal>

            <Reveal variant="fadeRight">
              <div className="consultation-form-dark p-10 md:p-12">
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-white" style={{ fontFamily: "var(--font-italiana)" }}>
                  Book a Consultation
                </h3>
                <p className="text-[13px] text-white/35 mb-8">Fill in your details and we&apos;ll get back to you within 1 hour.</p>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="input-dark" />
                    <input type="text" placeholder="Last Name" className="input-dark" />
                  </div>
                  <input type="email" placeholder="Email Address" className="input-dark" />
                  <input type="tel" placeholder="Phone Number" className="input-dark" />
                  <select className="input-dark appearance-none cursor-pointer">
                    <option value="">I&apos;m looking to...</option>
                    <option>Buy a Property</option>
                    <option>Sell a Property</option>
                    <option>Rent a Property</option>
                    <option>Investment Consultation</option>
                  </select>
                  <textarea rows={4} placeholder="Tell us about your ideal property..." className="input-dark resize-none" />
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
                  Estate<span className="text-gold">X</span>
                </span>
              </div>
              <p className="text-[13px] text-white/35 leading-relaxed max-w-xs">
                EstateX — Discover Properties That Match Your Vision. Redefining luxury real estate through expertise and innovation.
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
            <p className="text-[12px] text-white/25">&copy; 2026 EstateX. All rights reserved.</p>
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
