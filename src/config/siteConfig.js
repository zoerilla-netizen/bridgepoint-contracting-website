// =============================================================================
// SITE CONFIGURATION
//
// This is the ONE file to edit for routine updates: contact info, the
// Google Form URL, logo/image paths, navigation, and the content for the
// Markets and Execution-process sections. You should not need to dig
// through component files to make these kinds of changes.
// =============================================================================

// -----------------------------------------------------------------------------
// GOOGLE FORM URL
// Every "Request Capabilities Statement" button on the site opens this link
// in a new tab.
// -----------------------------------------------------------------------------
export const GOOGLE_CAPABILITIES_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfb8M_b4PVvQmkhc4LbRdz3REYv1GuB-ayfEfHETHN8tYa88A/viewform?usp=dialog";

// -----------------------------------------------------------------------------
// COMPANY / SITE INFO
// -----------------------------------------------------------------------------
export const siteConfig = {
  companyName: "Bridgepoint Contracting LLC",
  shortName: "Bridgepoint Contracting",
  tagline: "Unlocking Opportunities, Securing Success.",
  positioning: "Federal Contracting. Built for Execution.",
  markets: "Construction | Facility Maintenance | Real Estate",
  domain: "bpointcontracting.com",
  url: "https://bpointcontracting.com",
  metaTitle: "Bridgepoint Contracting | Federal Contracting",
  metaDescription:
    "Bridgepoint Contracting is a federal contracting company operating across construction, facility maintenance, and real estate.",
};

// -----------------------------------------------------------------------------
// CONTACT INFORMATION
// -----------------------------------------------------------------------------
export const contactInfo = {
  phone: "813-480-2038",
  phoneHref: "+18134802038",
  email: "info@bpointcontracting.com",
  addressLine1: "17425 Bridge Hill Ct Ste 100",
  addressLine2: "Tampa, FL 33647",
};

// -----------------------------------------------------------------------------
// LOGO
// One folder, one place to look: /public/images/
// logo.png is the official Bridgepoint logo. Replace it there (same
// filename) if you ever get an updated version.
// -----------------------------------------------------------------------------
export const logoPaths = {
  logoPngPath: "/images/logo.png",
};

// -----------------------------------------------------------------------------
// IMAGES
// All site photos live in ONE folder: /public/images/
// To replace a photo, just drop a file with the matching name into that
// folder — no subfolders, nothing else to find.
// -----------------------------------------------------------------------------
export const imagePaths = {
  heroMain: "/images/hero-main.jpg",
  construction: "/images/construction-01.jpg",
  facilityMaintenance: "/images/facility-01.jpg",
  realEstate: "/images/real-estate-01.jpg",
  aboutMain: "/images/about-main.jpg",
  partners: "/images/partners-01.jpg",
};

// -----------------------------------------------------------------------------
// PRIMARY NAVIGATION
// -----------------------------------------------------------------------------
export const navLinks = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// -----------------------------------------------------------------------------
// OUR MARKETS — content
// Used on the Home page (summary cards) and the Capabilities page (full detail).
// -----------------------------------------------------------------------------
export const markets = [
  {
    slug: "construction",
    name: "Construction",
    image: imagePaths.construction,
    summary:
      "Federal construction and specialty trade requirements executed through qualified resources and strategic partners.",
    examples: [
      "General Construction",
      "HVAC",
      "Electrical",
      "Plumbing",
      "Generators",
      "Fuel Systems",
      "Specialty Trades",
    ],
  },
  {
    slug: "facility-maintenance",
    name: "Facility Maintenance",
    image: imagePaths.facilityMaintenance,
    summary: "Facility operations, maintenance, repair, and support requirements.",
    examples: [
      "Preventive Maintenance",
      "HVAC Maintenance",
      "Building Maintenance",
      "Janitorial",
      "Grounds",
      "Waste Management",
      "Repairs",
      "Operations Support",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    image: imagePaths.realEstate,
    summary: "Federal real estate and property-related opportunities.",
    examples: [
      "Property Services",
      "Property Management",
      "Facility Solutions",
      "Leasing Opportunities",
      "Real Estate Support",
      "Facility Acquisition / Disposition Support",
    ],
  },
];

// -----------------------------------------------------------------------------
// HOW WE EXECUTE — process steps
// -----------------------------------------------------------------------------
export const executionSteps = [
  {
    num: "01",
    title: "Identify",
    detail: "We identify federal requirements aligned with our operating markets.",
  },
  {
    num: "02",
    title: "Qualify",
    detail: "We evaluate scope, location, requirements, contract structure, and execution needs.",
  },
  {
    num: "03",
    title: "Build",
    detail: "We assemble the appropriate internal resources, subcontractors, vendors, and strategic partners.",
  },
  {
    num: "04",
    title: "Contract",
    detail: "We develop the pursuit, proposal, and contracting strategy.",
  },
  {
    num: "05",
    title: "Execute",
    detail: "We coordinate performance, compliance, communication, and contract administration.",
  },
  {
    num: "06",
    title: "Deliver",
    detail: "We remain focused on successful performance from award through completion.",
  },
];

// -----------------------------------------------------------------------------
// ABOUT PAGE — principles
// -----------------------------------------------------------------------------
export const principles = [
  {
    title: "Opportunity",
    detail: "We pursue requirements where we can create meaningful value.",
  },
  {
    title: "Capability",
    detail: "We build execution teams around qualified resources.",
  },
  {
    title: "Compliance",
    detail: "Compliance is foundational to successful contract performance.",
  },
  {
    title: "Execution",
    detail: "We remain focused on delivering what was contracted.",
  },
];
