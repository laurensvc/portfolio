export interface NavItem {
  name: string;
  href: string;
  number: string;
}

export const navItems: NavItem[] = [
  { name: "Over", href: "#about", number: "01" },
  { name: "Ervaring", href: "#experience", number: "02" },
  { name: "Vaardigheden", href: "#skills", number: "03" },
  { name: "Projecten", href: "#projects", number: "04" },
  { name: "Contact", href: "#contact", number: "05" },
];
