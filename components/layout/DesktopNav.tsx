"use client";

import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { navigation, type NavItem } from "@/lib/navigation";

function NavLink({ item }: { item: NavItem }) {
  return (
    <Link
      href={item.href}
      className="text-text-primary hover:text-primary font-medium transition-colors px-3 py-2"
    >
      {item.name}
    </Link>
  );
}

function NavDropdown({ item }: { item: NavItem }) {
  return (
    <Menu as="div" className="relative">
      <MenuButton className="inline-flex items-center gap-1 text-text-primary hover:text-primary font-medium transition-colors px-3 py-2">
        {item.name}
        <ChevronDownIcon className="w-4 h-4" aria-hidden="true" />
      </MenuButton>

      <MenuItems
        transition
        className="absolute left-0 top-full z-50 mt-2 w-56 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none transition duration-100 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <div className="py-1">
          {/* Link to parent page */}
          <MenuItem>
            <Link
              href={item.href}
              className="block px-4 py-2 text-sm text-text-primary font-semibold data-[focus]:bg-background-alt data-[focus]:text-primary"
            >
              {item.name} Overview
            </Link>
          </MenuItem>
          <div className="my-1 h-px bg-gray-100" />
          {/* Children links */}
          {item.children?.map((child) => (
            <MenuItem key={child.href}>
              <Link
                href={child.href}
                className="block px-4 py-2 text-sm text-text-primary data-[focus]:bg-background-alt data-[focus]:text-primary"
              >
                {child.name}
              </Link>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}

export default function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center gap-1">
      {navigation.map((item) =>
        item.children ? (
          <NavDropdown key={item.href} item={item} />
        ) : (
          <NavLink key={item.href} item={item} />
        )
      )}
    </nav>
  );
}
