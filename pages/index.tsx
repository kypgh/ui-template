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
  Waves,
  Users,
  ShoppingBag,
  Award,
  Compass,
  BookOpen,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

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
              Experience the Thrill of Kitesurfing in Cyprus
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              With a wealth of experience dating back to 1998, Kiteflex emerges
              as the premier choice for your kitesurfing instructor in Cyprus.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/learn">Start Learning</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/brands">Explore Brands</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Expert Instruction</h3>
                <p className="mt-2 text-muted-foreground">
                  Our team of multilingual instructors provides personalized
                  guidance for all skill levels.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Premium Equipment</h3>
                <p className="mt-2 text-muted-foreground">
                  Access to the latest and best kitesurfing gear from top global
                  brands.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Perfect Location</h3>
                <p className="mt-2 text-muted-foreground">
                  Limassol's ideal conditions make it a premier destination for
                  kitesurfing year-round.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* About Section */}
      <Section className="bg-muted/30">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                The Premier Kitesurfing Experience in Cyprus
              </h2>
              <p className="mt-4 text-muted-foreground">
                When making your decision, choose wisely, as there is simply no
                better option on this island. Our team is fluent in Greek,
                English, French, Russian, Polish, Arabic, Slovakian, and the
                universal language of body communication.
              </p>
              <p className="mt-4 text-muted-foreground">
                Your kitesurfing journey begins with the expertise and
                versatility of Kiteflex. We've been teaching and perfecting our
                craft since 1998, making us the most experienced kitesurfing
                school in Cyprus.
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

      {/* Courses Section */}
      <Section
        title="Learn to Kitesurf"
        description="From beginners to advanced riders, we offer courses for all levels with personalized instruction."
      >
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <Badge>Beginner</Badge>
                <h3 className="mt-4 text-xl font-bold">
                  Introduction to Kitesurfing
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Learn the basics of kitesurfing safety, equipment handling,
                  and fundamental techniques.
                </p>
                <Separator className="my-4" />
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Small group lessons (2-4 people)</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>6 hours of instruction</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <ShoppingBag className="h-4 w-4 text-primary" />
                    <span>All equipment included</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full" asChild>
                  <Link href="/learn/beginner">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Badge>Intermediate</Badge>
                <h3 className="mt-4 text-xl font-bold">Riding & Maneuvering</h3>
                <p className="mt-2 text-muted-foreground">
                  Master water starts, improve your riding skills, and learn
                  basic jumps and turns.
                </p>
                <Separator className="my-4" />
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Small group lessons (2-4 people)</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>8 hours of instruction</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <ShoppingBag className="h-4 w-4 text-primary" />
                    <span>All equipment included</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full" asChild>
                  <Link href="/learn/intermediate">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Badge>Advanced</Badge>
                <h3 className="mt-4 text-xl font-bold">Advanced Techniques</h3>
                <p className="mt-2 text-muted-foreground">
                  Perfect your jumps, learn advanced tricks, and develop your
                  personal riding style.
                </p>
                <Separator className="my-4" />
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Private or small group lessons</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>Customized instruction hours</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <ShoppingBag className="h-4 w-4 text-primary" />
                    <span>Equipment rental available</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full" asChild>
                  <Link href="/learn/advanced">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Brand Section */}
      <Section
        className="bg-muted/30"
        title="Top Brands We Offer"
        description="We partner with the best kitesurfing brands to provide you with high-quality equipment."
      >
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {[
              "Duotone",
              "Flysurfer",
              "Core",
              "Slingshot",
              "Ocean Rodeo",
              "CrazyFly",
              "Nobile",
              "Airush",
              "ION",
              "Ride Engine",
              "Prolimit",
              "Firewire",
            ].map((brand) => (
              <Card
                key={brand}
                className="flex items-center justify-center p-6 hover:border-primary transition-colors"
              >
                <span className="font-medium">{brand}</span>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="/brands">
                View All Brands
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Gallery Section */}
      <Section
        title="Fun Moments @Kiteflex"
        description="Capture the excitement and joy of kitesurfing with Kiteflex."
      >
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-lg"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105"
                  style={{ backgroundImage: `url('/gallery-${i + 1}.jpg')` }}
                />
              </div>
            ))}
          </div>
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

      {/* CTA Section */}
      <Section className="bg-primary text-primary-foreground">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to Ride the Waves?
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Join us for an unforgettable kitesurfing experience in the
              beautiful waters of Cyprus.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/learn">Book a Lesson</Link>
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
