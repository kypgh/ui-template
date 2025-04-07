// pages/contact.tsx
import { Layout } from "@/components/layout/Layout";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  BookOpen,
  ShoppingBag,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, handle form submission to backend
    setSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setSubmitted(false);
      // Reset form fields if needed
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 3000);
  };

  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        description="Have questions or need assistance? Reach out to us today and our team will get back to you as soon as possible."
      />

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Tabs defaultValue="general" className="w-full">
              <TabsList>
                <TabsTrigger value="general">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  General Inquiry
                </TabsTrigger>
                <TabsTrigger value="lessons">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Lessons
                </TabsTrigger>
                <TabsTrigger value="shop">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Shop
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general">
                <Card>
                  <CardHeader>
                    <CardTitle>General Inquiry</CardTitle>
                    <CardDescription>
                      Have a question or feedback? Fill out the form below to
                      get in touch with us.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First name</Label>
                          <Input id="first-name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last name</Label>
                          <Input id="last-name" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (optional)</Label>
                        <Input id="phone" type="tel" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" rows={5} required />
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="newsletter" />
                        <Label htmlFor="newsletter">
                          Subscribe to our newsletter
                        </Label>
                      </div>
                      <Button type="submit" className="w-full">
                        {submitted ? "Message Sent!" : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="lessons">
                <Card>
                  <CardHeader>
                    <CardTitle>Lessons Inquiry</CardTitle>
                    <CardDescription>
                      Interested in kitesurfing lessons? Let us know what you're
                      looking for.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name-lessons">First name</Label>
                          <Input id="first-name-lessons" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name-lessons">Last name</Label>
                          <Input id="last-name-lessons" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email-lessons">Email</Label>
                        <Input id="email-lessons" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone-lessons">Phone</Label>
                        <Input id="phone-lessons" type="tel" required />
                      </div>
                      <div className="space-y-2">
                        <Label>Experience Level</Label>
                        <RadioGroup defaultValue="beginner">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="beginner" id="beginner" />
                            <Label htmlFor="beginner">
                              Beginner (No experience)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="intermediate"
                              id="intermediate"
                            />
                            <Label htmlFor="intermediate">Intermediate</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="advanced" id="advanced" />
                            <Label htmlFor="advanced">Advanced</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferred-dates">Preferred Dates</Label>
                        <Input
                          id="preferred-dates"
                          type="text"
                          placeholder="e.g., May 15-20, 2025"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message-lessons">
                          Additional Information
                        </Label>
                        <Textarea
                          id="message-lessons"
                          rows={4}
                          placeholder="Tell us about your goals, number of people in your group, etc."
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        {submitted ? "Inquiry Sent!" : "Submit Inquiry"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="shop">
                <Card>
                  <CardHeader>
                    <CardTitle>Shop Inquiry</CardTitle>
                    <CardDescription>
                      Looking for specific kitesurfing equipment? Let us know
                      what you need.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name-shop">First name</Label>
                          <Input id="first-name-shop" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name-shop">Last name</Label>
                          <Input id="last-name-shop" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email-shop">Email</Label>
                        <Input id="email-shop" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone-shop">Phone (optional)</Label>
                        <Input id="phone-shop" type="tel" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="product-interest">
                          Product Interest
                        </Label>
                        <Input
                          id="product-interest"
                          placeholder="e.g., Duotone Neo kite, Core XR6 12m, etc."
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message-shop">Additional Details</Label>
                        <Textarea
                          id="message-shop"
                          rows={4}
                          placeholder="Please provide any specific requirements or questions about the product."
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        {submitted ? "Inquiry Sent!" : "Submit Inquiry"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Find us at our Limassol location or reach out through any of
                  our contact channels.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <address className="text-muted-foreground not-italic">
                        Kiteflex Beach Center
                        <br />
                        Limassol, Cyprus
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+357 123 456 789</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">info@kiteflex.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Sunday: 9:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    {/* Embed a Google Map here */}
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <p className="text-muted-foreground text-sm">
                        Map Loading...
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>

      <Section className="bg-muted/30 mt-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Follow Us on Social Media
            </h2>
            <p className="mt-4 text-muted-foreground">
              Stay updated with our latest news, events, and kitesurfing
              adventures by following us on social media.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Button variant="outline" size="lg">
                Facebook
              </Button>
              <Button variant="outline" size="lg">
                Instagram
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
