// pages/brands.tsx
import { Layout } from "@/components/layout/Layout";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

// Brand data structure
interface Brand {
  id: string;
  name: string;
  category: string;
  description: string;
  founded?: string;
  origin?: string;
  specialties: string[];
}

// Sample brand data
const brands: Brand[] = [
  {
    id: "duotone",
    name: "Duotone Kiteboarding",
    category: "Kiteboarding",
    description:
      "Duotone Kiteboarding is a prominent brand in the kiteboarding industry, known for its high-quality kites, boards, and accessories. The brand emerged from the rebranding of North Kiteboarding around 2018 when the North brand underwent changes in distribution and branding rights. Duotone Kiteboarding quickly established itself as a leader in innovation, design, and performance in the kiteboarding world.",
    founded: "2018",
    origin: "Germany",
    specialties: [
      "Kites",
      "Boards",
      "Accessories",
      "Freeride",
      "Freestyle",
      "Wave riding",
      "Foiling",
    ],
  },
  {
    id: "flysurfer",
    name: "Flysurfer Kiteboarding",
    category: "Kiteboarding",
    description:
      "Flysurfer Kiteboarding is another key player in the kiteboarding and kitesurfing industry, renowned for its innovative designs and dedication to the advancement of kite sports. Flysurfer has made a name for itself through its unique approach to kite design, particularly with its emphasis on foil kites and ram-air technology.",
    founded: "2001",
    origin: "Germany",
    specialties: [
      "Foil kites",
      "Ram-air technology",
      "Kiteboarding",
      "Snowkiting",
      "Landkiting",
      "Kitefoiling",
    ],
  },
  {
    id: "core",
    name: "Core Kiteboarding",
    category: "Kiteboarding",
    description:
      "Core Kiteboarding is a highly respected brand within the kiteboarding community, known for its premium-quality kites, boards, and accessories. Originating from Germany, Core has established itself as a leader in the industry, focusing on innovation, performance, and durability.",
    founded: "2001",
    origin: "Germany",
    specialties: [
      "Kites",
      "Boards",
      "Accessories",
      "Freestyle",
      "Freeride",
      "Wave",
      "Foil",
    ],
  },
  {
    id: "slingshot",
    name: "Slingshot Kiteboarding",
    category: "Kiteboarding",
    description:
      "Slingshot Kiteboarding is a well-known and influential brand in the world of kiteboarding, celebrated for its pioneering spirit and innovative products. Founded in 1999 in the Pacific Northwest of the United States, Slingshot quickly rose to prominence by introducing key innovations that have shaped the sport of kiteboarding.",
    founded: "1999",
    origin: "United States",
    specialties: [
      "Kites",
      "Boards",
      "Foils",
      "Accessories",
      "Freestyle",
      "Wakestyle",
      "Freeride",
      "Foiling",
    ],
  },
  {
    id: "ocean-rodeo",
    name: "Ocean Rodeo",
    category: "Kiteboarding",
    description:
      "Ocean Rodeo is a well-respected name in the kiteboarding industry, known for their innovative and durable products that cater to a wide range of kiteboarding styles and conditions. Founded in Canada in the early 2000s, Ocean Rodeo has built a reputation for quality, innovation, and a commitment to pushing the boundaries of the sport.",
    founded: "2001",
    origin: "Canada",
    specialties: [
      "Kites",
      "Boards",
      "Drysuits",
      "Accessories",
      "Performance",
      "Reliability",
    ],
  },
  {
    id: "crazyfly",
    name: "CrazyFly",
    category: "Kiteboarding",
    description:
      "CrazyFly is a well-known brand in the kiteboarding industry, recognized for producing high-quality kites, boards, and accessories for riders of all skill levels. Originating from Europe, specifically from Slovakia, CrazyFly has gained a reputation for its innovative designs, attention to detail, and commitment to providing exceptional performance on the water.",
    founded: "2002",
    origin: "Slovakia",
    specialties: ["Kites", "Boards", "Accessories", "Innovation", "Design"],
  },
  {
    id: "ion",
    name: "ION",
    category: "Watersports Gear",
    description:
      "ION is a prominent brand in the watersports industry, specializing in high-quality gear for activities like kiteboarding, windsurfing, and stand-up paddleboarding. Known for its innovative designs, durable construction, and excellent performance, Ion products are trusted by athletes and enthusiasts worldwide.",
    founded: "2004",
    origin: "Germany",
    specialties: [
      "Harnesses",
      "Wetsuits",
      "Board bags",
      "Accessories",
      "Kiteboarding",
      "Windsurfing",
      "SUP",
    ],
  },
  {
    id: "ride-engine",
    name: "Ride Engine",
    category: "Watersports Gear",
    description:
      "Ride Engine is a leading brand known for its innovative hard-shell harnesses, offering unmatched support and comfort for kiteboarding, windsurfing, and other water sports. Founded by passionate athletes and engineers, Ride Engine's harnesses are designed to reduce fatigue and enhance performance on the water.",
    founded: "2012",
    origin: "United States",
    specialties: [
      "Hard-shell harnesses",
      "Accessories",
      "Apparel",
      "Comfort",
      "Performance",
    ],
  },
  {
    id: "lift-foils",
    name: "Lift Foils",
    category: "Hydrofoil",
    description:
      "Lift Foils, established in 2009, leads the hydrofoil industry with innovative designs and high-performance boards. Specializing in electric hydrofoil surfboards and foil kits for SUP and surfing, their precision-engineered boards offer stability, maneuverability, and speed.",
    founded: "2009",
    origin: "Puerto Rico",
    specialties: [
      "Electric hydrofoil surfboards",
      "Foil kits",
      "SUP",
      "Surfing",
      "Innovation",
    ],
  },
  {
    id: "firewire",
    name: "Firewire Surfboards",
    category: "Surfing",
    description:
      "Firewire Surfboards is a renowned brand recognized for its innovative surfboard design and sustainable practices. Established in 2005, Firewire utilizes advanced materials and technologies to create high-performance boards. With a diverse lineup catering to various surfing styles, Firewire surfboards are trusted by surfers worldwide for their quality and sustainability.",
    founded: "2005",
    origin: "United States",
    specialties: [
      "Surfboards",
      "Sustainable practices",
      "Advanced materials",
      "High-performance",
    ],
  },
  {
    id: "insta360",
    name: "Insta360",
    category: "Cameras",
    description:
      "Insta360 is a leading brand known for its innovative action and 360-degree cameras. With built-in stabilization and advanced editing features, Insta360 cameras empower users to capture stunning photos and videos effortlessly. Whether you're an adventurer or a content creator, Insta360 has the tools to capture your world in stunning detail.",
    founded: "2014",
    origin: "China",
    specialties: [
      "360-degree cameras",
      "Action cameras",
      "Stabilization",
      "Advanced editing",
    ],
  },
  {
    id: "garmin",
    name: "Garmin",
    category: "Wearable Tech",
    description:
      "Garmin watches are known for their advanced features and durability, making them popular among athletes, outdoor enthusiasts, and everyday users. With GPS technology, heart rate monitoring, activity tracking, and more, Garmin offers models for running, cycling, swimming, hiking, and golfing.",
    founded: "1989",
    origin: "United States",
    specialties: [
      "GPS watches",
      "Heart rate monitoring",
      "Activity tracking",
      "Running",
      "Cycling",
      "Swimming",
    ],
  },
];

export default function BrandsPage() {
  // Group brands by category
  const categories = Array.from(new Set(brands.map((brand) => brand.category)));

  return (
    <Layout>
      <PageHeader
        title="Brands We Offer"
        description="Kiteflex strives to provide not just one brand, but a multitude of them. Our goal is to offer you a diverse range of options, ensuring maximum flexibility in your choices."
      />

      <Container>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 flex flex-wrap justify-center">
            <TabsTrigger value="all">All Brands</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {brands.map((brand) => (
                <BrandCard key={brand.id} brand={brand} />
              ))}
            </div>
          </TabsContent>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {brands
                  .filter((brand) => brand.category === category)
                  .map((brand) => (
                    <BrandCard key={brand.id} brand={brand} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>

      <Section className="bg-muted/30 mt-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Looking for a Specific Brand?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Don't see what you're looking for? Contact us and we'll help you
              find the perfect equipment for your needs.
            </p>
            <Button className="mt-6" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

// Brand Card Component
function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{brand.name}</CardTitle>
        <CardDescription>{brand.category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground mb-4">
          {brand.description.length > 200
            ? `${brand.description.substring(0, 200)}...`
            : brand.description}
        </p>

        <div className="space-y-3">
          {brand.founded && (
            <div className="text-sm">
              <span className="font-medium">Founded:</span> {brand.founded}
            </div>
          )}
          {brand.origin && (
            <div className="text-sm">
              <span className="font-medium">Origin:</span> {brand.origin}
            </div>
          )}
          <div className="text-sm">
            <span className="font-medium">Specialties:</span>{" "}
            {brand.specialties.join(", ")}
          </div>
        </div>

        <Separator className="my-4" />

        <Button variant="outline" className="w-full" asChild>
          <Link href={`/brands/${brand.id}`}>
            View Details
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
