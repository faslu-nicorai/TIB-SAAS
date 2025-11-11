import React from "react";

export const MoreOptionsCard = ({
  icon: Icon,
  title,
  description,
  linkText,
  linkHref,
}) => (
  <div className="flex flex-col items-center text-center px-4 sm:px-0 gap-0">
    {/* Icon */}
    <Icon className="h-8 w-8 text-gray-800" />

    {/* Title */}
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

    {/* Description */}
    <p className="text-sm text-gray-600 leading-relaxed max-w-[250px]">
      {description}
    </p>

    {/* Link */}
    <a
      href={linkHref}
      className="text-sm font-medium text-gray-700 underline underline-offset-4 hover:text-gray-900 transition-colors"
    >
      {linkText}
    </a>
  </div>
);
