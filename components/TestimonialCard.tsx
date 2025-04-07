import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location?: string;
  avatar?: string;
  rating: number;
  content: string;
  date?: string;
}

export function TestimonialCard({
  name,
  location,
  avatar,
  rating,
  content,
  date,
}: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Avatar>
              {avatar ? (
                <AvatarImage src={avatar} alt={name} />
              ) : (
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
              )}
            </Avatar>
            <div>
              <CardTitle className="text-base">{name}</CardTitle>
              {location && <CardDescription>{location}</CardDescription>}
            </div>
          </div>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">"{content}"</p>
        {date && <p className="text-xs text-muted-foreground mt-2">{date}</p>}
      </CardContent>
    </Card>
  );
}
