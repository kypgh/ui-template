// pages/contact.tsx
import { Layout } from "@/components/layout/Layout";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Facebook, Instagram } from "lucide-react";
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
        description="Get in touch with Kiteflex - your premier kitesurfing instructor in Cyprus."
      />

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
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
                  <Button type="submit" className="w-full">
                    {submitted ? "Message Sent!" : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <address className="text-muted-foreground not-italic">
                        Limassol, Cyprus
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">
                        <a
                          href="mailto:info@kiteflex.com"
                          className="hover:underline"
                        >
                          info@kiteflex.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" asChild>
                      <a
                        href="https://www.facebook.com/griffeskiteflex"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Facebook className="mr-2 h-4 w-4" />
                        Facebook
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a
                        href="https://www.instagram.com/kiteflex/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Instagram className="mr-2 h-4 w-4" />
                        Instagram
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
