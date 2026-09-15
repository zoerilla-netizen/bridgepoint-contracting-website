// =============================================================================
// SITE CONFIGURATION
//
// Edit this file for routine updates: pricing, service descriptions,
// contact info, UEI/SAM status, industries, and nav links. You should not
// need to touch component files to change content.
// =============================================================================

// -----------------------------------------------------------------------------
// GOOGLE FORM URL
// Every "Download Capability Statement" button opens this link in a new tab.
// -----------------------------------------------------------------------------
export const GOOGLE_CAPABILITIES_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfb8M_b4PVvQmkhc4LbRdz3REYv1GuB-ayfEfHETHN8tYa88A/viewform?usp=header";

export const siteConfig = {
  companyName: "Bridgepoint Contracting LLC",
  shortName: "Bridgepoint",
  motto: "Unlocking Opportunities, Securing Success.",
  domain: "bpointcontracting.com",
  url: "https://bpointcontracting.com",
  metaTitle: "Bridgepoint Contracting | Federal Contracting, Built for Execution",
  metaDescription:
    "Bridgepoint connects capable businesses with federal opportunities and brings together the people, partnerships, and resources required to execute.",
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
  linkedin: "https://www.linkedin.com/in/wilmane-fortullien-124a82286/",
};

// -----------------------------------------------------------------------------
// LOGO
// -----------------------------------------------------------------------------
export const logoPaths = {
  dark: "/logo/logo-dark.png", // for light backgrounds
  light: "/logo/logo-light.png", // for navy / dark backgrounds
};

// -----------------------------------------------------------------------------
// IMAGES
// -----------------------------------------------------------------------------
export const imagePaths = {
  hero: "/images/hero-main.jpg",
  construction: "/images/construction-01.jpg",
  facilityMaintenance: "/images/facility-01.jpg",
  realEstate: "/images/real-estate-01.jpg",
  government: "/images/about-main.jpg",
};

// -----------------------------------------------------------------------------
// PRIMARY NAVIGATION
// Solutions, For Contractors, Government Agencies, Team With Us, and
// Resources are standalone routes. About is a homepage section.
// -----------------------------------------------------------------------------
export const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "For Contractors", href: "/for-contractors" },
  { label: "Government Agencies", href: "/government" },
  { label: "Team With Us", href: "/team-with-us" },
  { label: "About", href: "/#about" },
  { label: "Resources", href: "/resources" },
];

// -----------------------------------------------------------------------------
// THE FOUR BUSINESS VERTICALS
// -----------------------------------------------------------------------------
export const verticals = [
  {
    num: "01",
    slug: "federal-contracting-support",
    name: "Federal Contracting Support",
    price: "$5,000/year",
    priceDetail: "Up to 12 qualified federal pursuits",
    description:
      "Opportunity identification, solicitation analysis, go/no-go assessment, compliance matrices, proposal development, proposal review, submission support, and government coordination.",
    postAward: [
      { label: "Award Setup", value: "$1,000" },
      { label: "Contract Administration", value: "~$500–$5,000+/month" },
    ],
    audience: "contractor",
  },
  {
    num: "02",
    slug: "teaming-contract-execution",
    name: "Teaming & Contract Execution",
    price: null,
    priceDetail: "Compensation structured per agreement",
    tagline: "Partner. Pursue. Perform.",
    description:
      "Bridgepoint identifies federal opportunities and forms strategic relationships with capable contractors, suppliers, and industry partners — through prime/subcontract relationships, subcontract arrangements, teaming agreements, strategic partnerships, or other appropriate contract structures.",
    relationshipTypes: [
      "Prime / subcontract relationships",
      "Subcontract arrangements",
      "Teaming agreements",
      "Strategic partnerships",
      "Other appropriate contract structures",
    ],
    audience: "contractor",
  },
  {
    num: "03",
    slug: "federal-contractor-setup-training",
    name: "Federal Contractor Setup & Training",
    price: "$2,000",
    priceDetail: "One-time",
    description:
      "A comprehensive contractor setup, positioning, and training package for established companies that want to become federal-contracting ready — SAM.gov registration assistance, UEI setup, NAICS selection, federal contractor profile guidance, capability statement development, agency targeting, federal contracting fundamentals, a Federal Contractor Starter guide, training materials, and an initial strategy session.",
    audience: "contractor",
  },
  {
    num: "04",
    slug: "prime-contracting",
    name: "Prime Contracting",
    price: null,
    priceDetail: "Bridgepoint as the prime",
    description:
      "Bridgepoint pursues federal contracts directly as the prime contractor — identifying opportunities, building qualified teams, sourcing subcontractors and suppliers, developing proposals, winning contracts, coordinating execution, managing compliance, and delivering results.",
    audience: "both",
  },
];

// -----------------------------------------------------------------------------
// THE BRIDGEPOINT MODEL — process
// -----------------------------------------------------------------------------
export const modelSteps = [
  "Identify",
  "Qualify",
  "Partner",
  "Pursue",
  "Win",
  "Execute",
  "Grow",
];

// -----------------------------------------------------------------------------
// INDUSTRIES
// -----------------------------------------------------------------------------
export const industries = [
  {
    name: "Construction",
    image: imagePaths.construction,
    description: "Federal construction and specialty trade requirements.",
  },
  {
    name: "Facility Maintenance",
    image: imagePaths.facilityMaintenance,
    description: "Facility operations, maintenance, repair, and support.",
  },
  {
    name: "Real Estate",
    image: imagePaths.realEstate,
    description: "Federal real estate and property-related opportunities.",
  },
];

// -----------------------------------------------------------------------------
// GOVERNMENT CREDENTIALS
// -----------------------------------------------------------------------------
export const govCredentials = [
  { label: "UEI", value: "ZK3KPNUE36H1" },
  { label: "SAM Status", value: "Active" },
];

// -----------------------------------------------------------------------------
// RESOURCES
// -----------------------------------------------------------------------------
export const resources = [
  {
    title: "Federal Contractor Starter Guide",
    description:
      "A practical starting point for companies preparing to enter the federal marketplace — covering registration, positioning, and what to expect from your first pursuits.",
    cta: "Request the Starter Guide",
  },
];
