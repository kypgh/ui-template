import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-brand mb-2">
          Welcome to My Business
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          We help local businesses grow with clean websites, modern design, and
          simple branding.
        </p>
        <div className="mt-6">
          <Button>Get Started</Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-brand">
              Contact Us
            </h2>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your full name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
