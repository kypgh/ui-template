import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Users, Clock, Star } from "lucide-react";
import Link from "next/link";

interface CourseCardProps {
  title: string;
  level: "beginner" | "intermediate" | "advanced";
  description: string;
  duration: string;
  groupSize: string;
  price: string;
  rating?: number;
  slug: string;
}

export function CourseCard({
  title,
  level,
  description,
  duration,
  groupSize,
  price,
  rating,
  slug,
}: CourseCardProps) {
  const getLevelColor = () => {
    switch (level) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "advanced":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      default:
        return "";
    }
  };

  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <Badge className={getLevelColor()}>
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </Badge>
          {rating && (
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 text-sm font-medium">
                {rating.toFixed(1)}
              </span>
            </div>
          )}
        </div>
        <CardTitle className="mt-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-primary" />
            <span>{duration}</span>
          </li>
          <li className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-primary" />
            <span>{groupSize}</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter className="flex-col items-start pt-4 border-t">
        <div className="flex justify-between w-full items-center mb-3">
          <p className="font-medium text-lg">{price}</p>
          <Badge variant="outline">Popular</Badge>
        </div>
        <Button asChild className="w-full">
          <Link href={`/learn/${slug}`}>
            Book Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
