import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const TestimonialCard = ({ name, role, quote, imgSrc }) => {
  // Get initials for the avatar fallback
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    // `break-inside-avoid` is key for a clean masonry layout
    <Card className="break-inside-avoid shadow-none border-gray-200">
      <CardHeader className="flex flex-row items-center gap-3 pb-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src={imgSrc} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-sm font-semibold">{name}</CardTitle>
          <CardDescription className="text-sm">{role}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-medium text-gray-800">
          {quote}
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;