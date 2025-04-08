import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/40 w-full py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-primary font-bold text-xl">KITEFLEX</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              With a wealth of experience dating back to 1998, Kiteflex emerges
              as the premier choice for your kitesurfing instructor in Cyprus.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.facebook.com/griffeskiteflex"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.instagram.com/kiteflex/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:info@kiteflex.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/brands"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Brands
                </Link>
              </li>
              <li>
                <a
                  href="https://shop.kitesurfingcyprus.org/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Shop
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Limassol, Cyprus</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">info@kiteflex.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Kiteflex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
