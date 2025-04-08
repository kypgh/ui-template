// pages/index.tsx
import { Layout } from "@/components/layout/Layout";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Wind,
  Users,
  Award,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Gallery } from "@/components/Gallery";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent">
          <div className="absolute inset-0 bg-[url('/hero-kitesurfing.jpg')] bg-cover bg-center mix-blend-overlay" />
        </div>
        <Container className="relative py-16 md:py-32">
          <div className="max-w-2xl">
            <Badge className="mb-4">Since 1998</Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Welcome to Kiteflex
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              With a wealth of experience dating back to 1998, Kiteflex emerges
              as the premier choice for your kitesurfing instructor in Cyprus.
              When making your decision, choose wisely, as there is simply no
              better option on this island.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/brands">Explore Brands</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <Section className="bg-muted/30">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                The Premier Kitesurfing Experience in Cyprus
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our team is fluent in Greek, English, French, Russian, Polish,
                Arabic, Slovakian, and the universal language of body
                communication. Your kitesurfing journey begins with the
                expertise and versatility of Kiteflex.
              </p>
              <div className="mt-6">
                <Button variant="outline" asChild>
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-[url('/about-kiteflex.jpg')] bg-cover bg-center" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section
        title="Meet Our Team"
        description="Experienced instructors leading the way in kitesurfing instruction in Cyprus."
      >
        <Container>
          <div className="flex justify-center">
            {/* Rony Card */}
            <Card className="text-center max-w-md">
              <CardContent className="pt-6">
                <div className="mb-4 mx-auto relative w-32 h-32 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/team-rony.jpg')] bg-cover bg-center" />
                </div>
                <h3 className="text-xl font-bold">Rony</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Kiteflex Founder & CEO
                </p>
                <p className="text-sm">
                  With over 20 years of kitesurfing experience, Rony's passion
                  for the sport and commitment to excellence drives everything
                  we do at Kiteflex.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Gallery Section */}
      <Section
        title="Fun Moments @Kiteflex"
        description="Capture the excitement and joy of kitesurfing with Kiteflex."
      >
        <Container>
          <Gallery
            images={[
              "/gallery/gallery-1.jpg",
              "/gallery/gallery-2.jpg",
              "/gallery/gallery-3.jpg",
              "/gallery/gallery-4.jpg",
              "/gallery/gallery-5.jpg",
              "/gallery/gallery-6.jpg",
              "/gallery/gallery-7.jpg",
              "/gallery/gallery-8.jpg",
            ]}
          />
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Social Media Section */}
      <Section className="bg-muted/30" title="Social Media">
        <Container>
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="flex space-x-6">
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://www.facebook.com/griffeskiteflex"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook className="mr-2 h-5 w-5" />
                  Facebook
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://www.instagram.com/kiteflex/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section className="bg-primary text-primary-foreground">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8">
              <div className="flex justify-center">
                <MapPin className="h-8 w-8" />
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                LIMASSOL, CYPRUS
              </h2>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-primary transition-colors"
                asChild
              >
                <a href="mailto:info@kiteflex.com">
                  <Mail className="mr-2 h-5 w-5" />
                  info@kiteflex.com
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
      {/* Cookie Consent */}
      <CookieConsent />
    </Layout>
  );
}
