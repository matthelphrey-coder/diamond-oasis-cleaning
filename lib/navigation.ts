/**
 * Navigation structure for Diamond Oasis Cleaning website
 * Used by Header, DesktopNav, and MobileMenu components
 */

export interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "Why Choose Us", href: "/why-choose-us" },
      { name: "Our Process", href: "/process" },
      { name: "Cleaning Tips", href: "/cleaning-tips" },
      { name: "FAQ's", href: "/faqs" },
      { name: "Join Our Team", href: "/survey" },
    ],
  },
  { name: "Contact Us", href: "/contact-us" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Residential Cleaning", href: "/residential-cleaning" },
      { name: "Commercial Cleaning", href: "/commercial-cleaning" },
      { name: "Deep Cleaning", href: "/deep-cleaning" },
      { name: "Move-In/Move-Out Cleaning", href: "/move-in-move-out-cleaning" },
      { name: "Additional Services", href: "/additional-services" },
    ],
  },
  { name: "Locations", href: "/locations" },
  { name: "Booking", href: "/booking" },
];

/**
 * Flatten navigation for mobile menu (no nested dropdowns)
 * Returns all items including children as a flat array
 */
export function getFlatNavigation(): NavItem[] {
  const flat: NavItem[] = [];
  for (const item of navigation) {
    flat.push({ name: item.name, href: item.href });
    if (item.children) {
      for (const child of item.children) {
        flat.push(child);
      }
    }
  }
  return flat;
}
