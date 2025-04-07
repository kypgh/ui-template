// pages/about.tsx
import { Layout } from "@/components/layout/Layout";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  Award,
  Clock,
  GraduationCap,
  Heart,
  Globe,
  Wind,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Layout>
      <PageHeader
        title="About Kiteflex"
        description="With a wealth of experience dating back to 1998, Kiteflex emerges as the premier choice for your kitesurfing instructor in Cyprus."
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-4">
                Founded in 1998, Kiteflex has grown from a small passion project
                into Cyprus's leading kitesurfing school and equipment provider.
                Our journey began when our founder, Rony, discovered the
                thrilling sport of kitesurfing and became determined to share
                this experience with others in the beautiful waters of Cyprus.
              </p>
              <p className="text-muted-foreground mb-4">
                Over the decades, we've trained thousands of students from
                complete beginners to advanced riders, always staying at the
                forefront of kitesurfing innovation and teaching techniques. Our
                commitment to excellence has established us as the premier
                kitesurfing destination in Cyprus.
              </p>
              <p className="text-muted-foreground">
                Today, Kiteflex operates with the same passion and dedication
                that sparked its founding, providing top-quality instruction,
                the latest equipment, and an unforgettable experience on the
                water. When making your decision, choose wisely, as there is
                simply no better option on this island.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <div className="absolute inset-0 bg-[url('/about-founder.jpg')] bg-cover bg-center" />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/30">
        <Container>
          <div className="mx-auto text-center max-w-3xl mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Team</h2>
            <p className="mt-4 text-muted-foreground">
              Meet the passionate professionals who make Kiteflex the premier
              kitesurfing destination in Cyprus. Our team is fluent in Greek,
              English, French, Russian, Polish, Arabic, Slovakian, and the
              universal language of body communication.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member: Rony */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 mx-auto relative w-32 h-32 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/team-rony.jpg')] bg-cover bg-center" />
                </div>
                <h3 className="text-xl font-bold">Rony</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Founder & CEO
                </p>
                <p className="text-sm">
                  With over 20 years of kitesurfing experience, Rony's passion
                  for the sport and commitment to excellence drives everything
                  we do at Kiteflex.
                </p>
              </CardContent>
            </Card>

            {/* Team Member: Erdogan */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 mx-auto relative w-32 h-32 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/team-erdogan.jpg')] bg-cover bg-center" />
                </div>
                <h3 className="text-xl font-bold">Erdogan Kervanli</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Lead Instructor & Duotone Rider
                </p>
                <p className="text-sm">
                  A Duotone team rider and expert instructor, Erdogan brings
                  professional-level skills and a patient teaching approach to
                  all his sessions.
                </p>
              </CardContent>
            </Card>

            {/* Team Member: Maria */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 mx-auto relative w-32 h-32 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/team-maria.jpg')] bg-cover bg-center" />
                </div>
                <h3 className="text-xl font-bold">Maria</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Senior Instructor
                </p>
                <p className="text-sm">
                  Specializing in beginner and intermediate instruction, Maria's
                  encouraging teaching style helps new kitesurfers build
                  confidence on the water.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Tabs defaultValue="mission" className="w-full">
            <TabsList className="mx-auto flex w-full max-w-md justify-center">
              <TabsTrigger value="mission">Our Mission</TabsTrigger>
              <TabsTrigger value="values">Our Values</TabsTrigger>
              <TabsTrigger value="approach">Our Approach</TabsTrigger>
            </TabsList>

            <TabsContent value="mission" className="mt-6">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-6 flex justify-center">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  At Kiteflex, our mission is to deliver exceptional kitesurfing
                  experiences through expert instruction, premium equipment, and
                  personalized service. We aim to inspire a passion for the
                  sport while fostering a community of responsible water
                  enthusiasts who respect and protect our beautiful marine
                  environment.
                </p>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Card>
                    <CardContent className="pt-6">
                      <GraduationCap className="mb-4 h-8 w-8 text-primary mx-auto" />
                      <h4 className="text-lg font-medium">Education</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Providing comprehensive kitesurfing education that
                        emphasizes safety, skill development, and enjoyment for
                        all levels.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <Heart className="mb-4 h-8 w-8 text-primary mx-auto" />
                      <h4 className="text-lg font-medium">Passion</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Sharing our love for kitesurfing and inspiring others to
                        experience the freedom and joy of riding the wind and
                        waves.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="values" className="mt-6">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-6 flex justify-center">
                  <Wind className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <p className="text-muted-foreground mb-8">
                  Our core values guide everything we do at Kiteflex, from how
                  we teach to how we interact with our students and the
                  environment.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="text-lg font-medium">Safety First</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Safety is our top priority in all aspects of instruction
                        and operation.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="text-lg font-medium">Excellence</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        We strive for excellence in teaching, equipment, and
                        customer service.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="text-lg font-medium">Inclusivity</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        We welcome students of all backgrounds, ages, and skill
                        levels.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="text-lg font-medium">Respect</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        We respect the ocean, the environment, our team, and our
                        clients.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="text-lg font-medium">Innovation</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        We continuously improve our methods and embrace new
                        technologies.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="text-lg font-medium">Community</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        We foster a supportive community of kitesurfing
                        enthusiasts.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="approach" className="mt-6">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-6 flex justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                <p className="text-muted-foreground">
                  Our teaching methodology combines structured progression with
                  personalized attention, ensuring each student develops at
                  their own pace while learning the proper techniques from the
                  start. We believe in creating a supportive, fun environment
                  where students can challenge themselves safely.
                </p>
                <div className="mt-8">
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="text-lg font-medium mb-4">
                        The Kiteflex Method
                      </h4>
                      <ol className="space-y-4 text-left">
                        <li className="flex gap-3">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                            1
                          </div>
                          <div>
                            <h5 className="font-medium">Safety Fundamentals</h5>
                            <p className="text-sm text-muted-foreground">
                              Comprehensive safety instruction before entering
                              the water
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                            2
                          </div>
                          <div>
                            <h5 className="font-medium">Land-Based Skills</h5>
                            <p className="text-sm text-muted-foreground">
                              Mastering kite control on land before progressing
                              to water
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                            3
                          </div>
                          <div>
                            <h5 className="font-medium">
                              Personalized Progression
                            </h5>
                            <p className="text-sm text-muted-foreground">
                              Tailoring instruction to each student's learning
                              style and pace
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                            4
                          </div>
                          <div>
                            <h5 className="font-medium">Continuous Feedback</h5>
                            <p className="text-sm text-muted-foreground">
                              Real-time coaching and video analysis to
                              accelerate improvement
                            </p>
                          </div>
                        </li>
                      </ol>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Container>
      </Section>

      <Section className="bg-primary text-primary-foreground">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to Join the Kiteflex Family?
            </h2>
            <p className="mt-4 text-primary-foreground/90">
              Whether you're looking to learn kitesurfing for the first time or
              enhance your existing skills, we're here to help you achieve your
              goals.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/learn">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Explore Courses
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
