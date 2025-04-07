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
import Link from "next/link";

interface BrandCardProps {
  name: string;
  category: string;
  description: string;
  logo?: string;
  slug: string;
}

export function BrandCard({
  name,
  category,
  description,
  logo,
  slug,
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
        <div className="mt-4">
          <Button variant="outline" size="sm" asChild className="w-full">
            <Link href={`/brands/${slug}`}>
              View Details
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
