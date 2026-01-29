import Link from "next/link";
import Image from "next/image";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 md:h-36">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Diamond Oasis Cleaning"
              width={300}
              height={100}
              className="h-24 md:h-32 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
