import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { title: "Home", href: "/" },
  { title: "Brands", href: "/brands" },
  { title: "Shop", href: "/shop" },
  { title: "About", href: "/about" },
  { title: "Learn", href: "/learn" },
  { title: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-primary font-bold text-xl">KITEFLEX</span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-gray-800 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            asChild
            className="hidden md:flex"
          >
            <Link href="/shop">
              <ShoppingBag className="h-4 w-4" />
              <span className="sr-only">Shopping bag</span>
            </Link>
          </Button>

          <Button
            variant="outline"
            size="sm"
            asChild
            className="hidden md:flex"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 flex flex-col bg-background p-6 md:hidden">
          <nav className="flex flex-col space-y-6">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-lg font-medium text-gray-800 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="/shop"
              className="flex items-center gap-2 text-lg font-medium text-gray-800 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ShoppingBag className="h-5 w-5" />
              Shop
            </Link>
          </nav>
          <div className="mt-auto">
            <Button className="w-full" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
