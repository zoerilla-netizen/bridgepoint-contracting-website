// =============================================================================
// SITE CONFIGURATION — the one file to edit for routine updates.
// Company identifiers, contact details, NAICS codes, service lists, and
// form settings all live here.
// =============================================================================

export const COMPANY = {
  legalName: "Bridgepoint Contracting LLC",
  shortName: "Bridgepoint Contracting",
  url: "https://www.bpointcontracting.com",
  domain: "www.bpointcontracting.com",
  uei: "ZK3KPNUE36H1",
  cage: "9Y3P8",
  samStatus: "Active",
  samExpiration: "March 18, 2027",
  email: "wilmane@bpointcontracting.com",
  officePhone: "202-840-3434",
  officePhoneHref: "+12028403434",
  addressLine1: "13561 SW 43rd Cir",
  addressLine2: "Ocala, FL 34473-2001",
};

// -----------------------------------------------------------------------------
// FORMS
// Leave FORM_ENDPOINT empty and each form opens the visitor's email app with
// the submission pre-filled and addressed to COMPANY.email.
// To receive submissions directly, create a free endpoint (e.g. Formspree) and
// paste its URL below — the forms will then POST to it instead.
// -----------------------------------------------------------------------------
export const FORM_ENDPOINT = "";

// -----------------------------------------------------------------------------
// NAVIGATION
// -----------------------------------------------------------------------------
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Contracting Information", href: "/contracting-information" },
  { label: "About", href: "/about" },
  { label: "Vendor Network", href: "/vendor-network" },
  { label: "Contact", href: "/contact" },
];

// -----------------------------------------------------------------------------
// SERVICE AREAS
// -----------------------------------------------------------------------------
export const SERVICES: {
  slug: string; name: string; summary: string; image: string; imageAlt: string;
  highlights: string[]; items: string[]; parent?: string; badge?: string;
}[] = [
  {
    slug: "hvac-mechanical",
    name: "HVAC & Mechanical",
    parent: "Facility Maintenance Specialty",
    badge: "EPA 608 Universal Certified",
    summary:
      "Installation, maintenance, repair, and replacement of heating and cooling systems for commercial and government facilities.",
    image: "/images/hvac-mechanical.jpg",
    imageAlt: "Chillers and piping in a commercial mechanical room",
    highlights: [
      "HVAC installation and replacement",
      "Preventive maintenance",
      "Repair and service",
      "Emergency HVAC services",
    ],
    items: [
      "HVAC installation and replacement",
      "Preventive maintenance",
      "HVAC repair and service",
      "Heating and cooling systems",
      "Equipment replacement",
      "Controls and system support",
      "Emergency HVAC services",
      "Commercial/government facility HVAC support",
    ],
  },
  {
    slug: "facility-maintenance",
    name: "Facility Maintenance",
    summary:
      "Scheduled and corrective maintenance for government buildings, including building systems, trades, and multi-site programs.",
    image: "/images/facility-maintenance.jpg",
    imageAlt: "Technician testing electrical equipment in a control cabinet",
    highlights: [
      "Preventive and corrective maintenance",
      "Electrical and plumbing services",
      "Grounds and janitorial support",
      "Multi-site facility services",
    ],
    items: [
      "Preventive facility maintenance",
      "Corrective maintenance and repairs",
      "Building systems maintenance",
      "Electrical services",
      "Plumbing services",
      "General facility repairs",
      "Grounds and exterior maintenance",
      "Janitorial/custodial support",
      "Scheduled maintenance programs",
      "Emergency facility support",
      "Multi-site facility services",
    ],
  },
  {
    slug: "real-estate-solutions",
    name: "Real Estate Solutions",
    summary:
      "Property sourcing, lease support, and site research that help agencies meet facility and location requirements.",
    image: "/images/real-estate.jpg",
    imageAlt: "Open commercial interior space",
    highlights: [
      "Commercial property sourcing",
      "Government lease support",
      "Site identification and research",
      "Property disposition support",
    ],
    items: [
      "Commercial property sourcing",
      "Government lease support",
      "Site identification",
      "Property research",
      "Market surveys",
      "Property inspections/site visits",
      "Lease and occupancy support",
      "Facility/location requirements support",
      "Property disposition support",
      "Broker/local market coordination",
    ],
  },
];

// -----------------------------------------------------------------------------
// NAICS — registered codes, grouped for easy scanning. Real estate NAICS
// codes are intentionally not listed until they are added to the SAM
// registration.
// -----------------------------------------------------------------------------
export const NAICS_GROUPS = [
  {
    group: "HVAC, Mechanical & Building Systems",
    codes: [
      { code: "238220", title: "Plumbing, Heating & Air-Conditioning Contractors" },
      { code: "238210", title: "Electrical Contractors and Other Wiring Installation Contractors" },
      { code: "238290", title: "Other Building Equipment Contractors" },
      { code: "238990", title: "All Other Specialty Trade Contractors" },
    ],
  },
  {
    group: "Facility Support",
    codes: [
      { code: "561210", title: "Facilities Support Services" },
      { code: "561720", title: "Janitorial Services" },
    ],
  },
  {
    group: "Waste & Environmental",
    codes: [
      { code: "562111", title: "Solid Waste Collection" },
      { code: "562112", title: "Hazardous Waste Collection" },
      { code: "562119", title: "Other Waste Collection" },
      { code: "562211", title: "Hazardous Waste Treatment and Disposal" },
      { code: "562212", title: "Solid Waste Landfill" },
      { code: "562213", title: "Solid Waste Combustors and Incinerators" },
      { code: "562219", title: "Other Nonhazardous Waste Treatment and Disposal" },
      { code: "562910", title: "Remediation Services" },
      { code: "562920", title: "Materials Recovery Facilities" },
      { code: "562991", title: "Septic Tank and Related Services" },
      { code: "562998", title: "All Other Miscellaneous Waste Management Services" },
    ],
  },
  {
    group: "Other",
    codes: [{ code: "336611", title: "Ship Building and Repairing" }],
  },
];

export const SERVICE_OPTIONS = [
  "HVAC & Mechanical",
  "Facility Maintenance",
  "Real Estate Solutions",
  "More than one / Not sure",
];
