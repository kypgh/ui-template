import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";

export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Cookie Notice</DialogTitle>
          <DialogDescription>
            This website uses cookies to ensure you get the best experience on
            our website.
          </DialogDescription>
        </DialogHeader>
        <div className="text-sm text-muted-foreground">
          <p>
            We use cookies to analyze site traffic, personalize content, and
            provide social media features. By continuing to use our site, you
            consent to our use of cookies.
          </p>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between sm:space-x-0">
          <Button variant="outline" asChild>
            <Link href="/cookies">Learn more</Link>
          </Button>
          <Button onClick={handleAccept}>Got it!</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
