import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface BrandCardProps {
  name: string;
  category: string;
  description: string;
  logo?: string;
  externalLink?: string;
}

export function BrandCard({
  name,
  category,
  description,
  logo,
  externalLink,
}: BrandCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="pb-3">
        {logo ? (
          <div className="flex justify-center mb-3">
            <div className="h-12 w-auto relative">
              <img
                src={logo}
                alt={`${name} logo`}
                className="object-contain h-full w-auto"
              />
            </div>
          </div>
        ) : null}
        <div className="space-y-1">
          <CardTitle className="text-xl">{name}</CardTitle>
          <CardDescription>
            <Badge variant="secondary">{category}</Badge>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-1">
        <p className="text-muted-foreground text-sm flex-1">
          {description.length > 150
            ? `${description.slice(0, 150)}...`
            : description}
        </p>
        {externalLink && (
          <div className="mt-4">
            <Button variant="outline" size="sm" asChild className="w-full">
              <a href={externalLink} target="_blank" rel="noopener noreferrer">
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
