// pages/gallery.tsx
import { Layout } from "@/components/layout/Layout";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/layout/PageHeader";
import { Gallery } from "@/components/Gallery";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GalleryPage() {
  // Sample gallery images - replace with your actual images
  const kitesurfingImages = Array.from(
    { length: 0 },
    (_, i) => `/gallery/kitesurfing-${i + 1}.jpg`
  );
  const locationImages = Array.from(
    { length: 0 },
    (_, i) => `/gallery/location-${i + 1}.jpg`
  );
  const teamImages = Array.from(
    { length: 0 },
    (_, i) => `/gallery/team-${i + 1}.jpg`
  );
  const galleryImages = Array.from(
    { length: 11 },
    (_, i) => `/gallery/gallery-${i + 1}.jpg`
  );

  return (
    <Layout>
      <PageHeader
        title="Gallery"
        description="Explore our collection of kitesurfing moments, beautiful locations, and team activities."
      />

      <Container>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mx-auto flex justify-center mb-8">
            <TabsTrigger value="all">All Photos</TabsTrigger>
            <TabsTrigger value="kitesurfing">Kitesurfing</TabsTrigger>
            <TabsTrigger value="location">Locations</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <Section>
              <Gallery
                title="Fun Moments @Kiteflex"
                description="A collection of our favorite kitesurfing memories"
                images={[
                  ...kitesurfingImages,
                  ...locationImages,
                  ...teamImages,
                  ...galleryImages,
                ]}
              />
            </Section>
          </TabsContent>

          <TabsContent value="kitesurfing">
            <Section>
              <Gallery
                title="Kitesurfing Action"
                description="Capturing the thrill and excitement of kitesurfing in Cyprus"
                images={kitesurfingImages}
              />
            </Section>
          </TabsContent>

          <TabsContent value="location">
            <Section>
              <Gallery
                title="Beautiful Locations"
                description="Explore the stunning beaches and kitesurfing spots in Limassol"
                images={locationImages}
              />
            </Section>
          </TabsContent>

          <TabsContent value="team">
            <Section>
              <Gallery
                title="Our Team"
                description="Meet the passionate team behind Kiteflex"
                images={teamImages}
              />
            </Section>
          </TabsContent>
        </Tabs>
      </Container>
    </Layout>
  );
}
