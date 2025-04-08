// pages/brands.tsx
import { Layout } from "@/components/layout/Layout";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/layout/PageHeader";
import { BrandCard } from "@/components/BrandCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Brand data structure
interface Brand {
  name: string;
  category: string;
  description: string;
  logo?: string;
  slug: string;
}

const brands: Brand[] = [
  {
    name: "Duotone Kiteboarding",
    category: "Kiteboarding",
    description:
      "Duotone Kiteboarding is a prominent brand in the kiteboarding industry, known for its high-quality kites, boards, and accessories. The brand emerged from the rebranding of North Kiteboarding around 2018 when the North brand underwent changes in distribution and branding rights. Duotone Kiteboarding quickly established itself as a leader in innovation, design, and performance in the kiteboarding world.",
    logo: "/brands/duotone.png",
    slug: "duotone",
  },
  {
    name: "Flysurfer Kiteboarding",
    category: "Kiteboarding",
    description:
      "Flysurfer Kiteboarding is another key player in the kiteboarding and kitesurfing industry, renowned for its innovative designs and dedication to the advancement of kite sports. Flysurfer has made a name for itself through its unique approach to kite design, particularly with its emphasis on foil kites and ram-air technology.",
    logo: "/brands/flysurfer.png",
    slug: "flysurfer",
  },
  {
    name: "Core Kiteboarding",
    category: "Kiteboarding",
    description:
      "Core Kiteboarding is a highly respected brand within the kiteboarding community, known for its premium-quality kites, boards, and accessories. Originating from Germany, Core has established itself as a leader in the industry, focusing on innovation, performance, and durability.",
    logo: "/brands/core.png",
    slug: "core",
  },
  {
    name: "Slingshot Kiteboarding",
    category: "Kiteboarding",
    description:
      "Slingshot Kiteboarding is a well-known and influential brand in the world of kiteboarding, celebrated for its pioneering spirit and innovative products. Founded in 1999 in the Pacific Northwest of the United States, Slingshot quickly rose to prominence by introducing key innovations that have shaped the sport of kiteboarding.",
    logo: "/brands/slingshot.png",
    slug: "slingshot",
  },
  {
    name: "Ocean Rodeo",
    category: "Kiteboarding",
    description:
      "Ocean Rodeo is a well-respected name in the kiteboarding industry, known for their innovative and durable products that cater to a wide range of kiteboarding styles and conditions. Founded in Canada in the early 2000s, Ocean Rodeo has built a reputation for quality, innovation, and a commitment to pushing the boundaries of the sport.",
    logo: "/brands/ocean-rodeo.png",
    slug: "ocean-rodeo",
  },
  {
    name: "CrazyFly",
    category: "Kiteboarding",
    description:
      "CrazyFly is a well-known brand in the kiteboarding industry, recognized for producing high-quality kites, boards, and accessories for riders of all skill levels. Originating from Europe, specifically from Slovakia, CrazyFly has gained a reputation for its innovative designs, attention to detail, and commitment to providing exceptional performance on the water.",
    logo: "/brands/crazyfly.png",
    slug: "crazyfly",
  },
  {
    name: "Nobile Kiteboarding",
    category: "Kiteboarding",
    description:
      "Nobile Kiteboarding is a well-respected brand in the kiteboarding industry, known for its premium-quality kites, boards, and accessories. Founded in Poland, Nobile has established itself as a leader in the market, particularly in the realm of kiteboard construction and design innovation.",
    logo: "/brands/nobile.png",
    slug: "nobile",
  },
  {
    name: "ION",
    category: "Watersports Gear",
    description:
      "ION is a prominent brand in the watersports industry, specializing in high-quality gear for activities like kiteboarding, windsurfing, and stand-up paddleboarding. Known for its innovative designs, durable construction, and excellent performance, Ion products are trusted by athletes and enthusiasts worldwide.",
    logo: "/brands/ion.png",
    slug: "ion",
  },
  {
    name: "Ride Engine",
    category: "Watersports Gear",
    description:
      "Ride Engine is a leading brand known for its innovative hard-shell harnesses, offering unmatched support and comfort for kiteboarding, windsurfing, and other water sports. Founded by passionate athletes and engineers, Ride Engine's harnesses are designed to reduce fatigue and enhance performance on the water.",
    logo: "/brands/ride-engine.png",
    slug: "ride-engine",
  },
  {
    name: "Prolimit",
    category: "Watersports Gear",
    description:
      "Prolimit is a renowned brand in watersports, offering top-quality gear for kiteboarding, windsurfing, surfing, and SUP. Established in 1989, Prolimit is known for its durable, high-performance wetsuits, harnesses, board bags, and accessories.",
    logo: "/brands/prolimit.png",
    slug: "prolimit",
  },
  {
    name: "Firewire Surfboards",
    category: "Surfing",
    description:
      "Firewire Surfboards is a renowned brand recognized for its innovative surfboard design and sustainable practices. Established in 2005, Firewire utilizes advanced materials and technologies to create high-performance boards.",
    logo: "/brands/firewire.png",
    slug: "firewire",
  },
  {
    name: "Cohete Surfboards",
    category: "Surfing",
    description:
      "Cohete Surfboards, founded by master shaper Ryan Engle, is known for its high-performance designs crafted in San Diego, California. Offering premium quality and a range of shapes, Cohete caters to surfers of all levels with precision and innovation.",
    logo: "/brands/cohete.png",
    slug: "cohete",
  },
  {
    name: "Garmin",
    category: "Wearable Tech",
    description:
      "Garmin watches are known for their advanced features and durability, making them popular among athletes, outdoor enthusiasts, and everyday users. With GPS technology, heart rate monitoring, activity tracking, and more, Garmin offers models for running, cycling, swimming, hiking, and golfing.",
    logo: "/brands/garmin.png",
    slug: "garmin",
  },
  {
    name: "Nitro Snowboards",
    category: "Snowboarding",
    description:
      "Nitro Snowboards is a leading brand known for its high-quality snowboards, bindings, boots, and outerwear. Established in 1990, Nitro offers a diverse range of snowboard shapes and models catering to riders of all styles and abilities.",
    logo: "/brands/nitro.png",
    slug: "nitro",
  },
  {
    name: "Woo",
    category: "Kiteboarding",
    description:
      "Woo is a top brand in kiteboarding, offering innovative gear for riders of all levels. Their high-performance equipment, including boards, kites, harnesses, and accessories, is designed to enhance the kiteboarding experience with precision and durability.",
    logo: "/brands/woo.png",
    slug: "woo",
  },
  {
    name: "Lift Foils",
    category: "Hydrofoil",
    description:
      "Lift Foils, established in 2009, leads the hydrofoil industry with innovative designs and high-performance boards. Specializing in electric hydrofoil surfboards and foil kits for SUP and surfing, their precision-engineered boards offer stability, maneuverability, and speed.",
    logo: "/brands/lift-foils.png",
    slug: "lift-foils",
  },
  {
    name: "SAB Foils",
    category: "Hydrofoil",
    description:
      "SAB Foils is a top brand known for high-quality foils and innovative designs. Their range caters to riders of all levels, offering foil wings, mast systems, and complete packages for various foiling disciplines.",
    logo: "/brands/sab-foils.png",
    slug: "sab-foils",
  },
  {
    name: "Levitaz Hydrofoils",
    category: "Hydrofoil",
    description:
      "Levitaz Hydrofoils is a respected brand known for its high-performance hydrofoil equipment. Specializing in foil wings, mast systems, and complete packages, Levitaz offers top-quality gear for various foiling disciplines.",
    logo: "/brands/levitaz.png",
    slug: "levitaz",
  },
  {
    name: "Sifly Global",
    category: "Hydrofoil",
    description:
      "Sifly Global specializes in electric hydrofoils, offering cutting-edge technology for an enhanced water sports experience. With a focus on innovation, their electric foils provide riders with precision control and effortless gliding over the water.",
    logo: "/brands/sifly.png",
    slug: "sifly",
  },
  {
    name: "Insta360",
    category: "Cameras",
    description:
      "Insta360 is a leading brand known for its innovative action and 360-degree cameras. With built-in stabilization and advanced editing features, Insta360 cameras empower users to capture stunning photos and videos effortlessly.",
    logo: "/brands/insta360.png",
    slug: "insta360",
  },
  {
    name: "DJI",
    category: "Cameras",
    description:
      "DJI is a leading brand in drones and aerial photography, known for its high-quality products and user-friendly design. From consumer drones like the Mavic series to professional-grade platforms like the Inspire series, DJI offers a wide range of drones with advanced features for stunning aerial imagery.",
    logo: "/brands/dji.png",
    slug: "dji",
  },
  {
    name: "Yow Skates",
    category: "Skateboarding",
    description:
      "Yow Skates is a leading brand in surfskateboards, offering innovative designs for an authentic surfing experience on land. With advanced technology and premium materials, Yow Skates provides smooth rides and responsive turns for surfers of all levels.",
    logo: "/brands/yow.png",
    slug: "yow",
  },
  {
    name: "Landyachtz Skateboards",
    category: "Skateboarding",
    description:
      "Landyachtz Skateboards, established in 1997, is renowned for its high-quality and innovative designs. Offering a diverse range of boards including longboards, cruisers, and street decks, Landyachtz provides top-quality options for riders of all styles and preferences.",
    logo: "/brands/landyachtz.png",
    slug: "landyachtz",
  },
];

// Group brands by category
const categories = Array.from(new Set(brands.map((brand) => brand.category)));

export default function BrandsPage() {
  return (
    <Layout>
      <PageHeader
        title="Brands We Offer"
        description="KITEFLEX STRIVES TO PROVIDE NOT JUST ONE BRAND, BUT A MULTITUDE OF THEM. OUR GOAL IS TO OFFER YOU A DIVERSE RANGE OF OPTIONS, ENSURING MAXIMUM FLEXIBILITY IN YOUR CHOICES."
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
                <BrandCard
                  key={brand.slug}
                  name={brand.name}
                  category={brand.category}
                  description={brand.description}
                  logo={brand.logo}
                  slug={brand.slug}
                />
              ))}
            </div>
          </TabsContent>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {brands
                  .filter((brand) => brand.category === category)
                  .map((brand) => (
                    <BrandCard
                      key={brand.slug}
                      name={brand.name}
                      category={brand.category}
                      description={brand.description}
                      logo={brand.logo}
                      slug={brand.slug}
                    />
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
