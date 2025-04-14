'use client';

import Image from "next/image";
import * as React from "react";

export default function RefImage() {
  const [imageError, setImageError] = React.useState(false);

  const handleError = () => setImageError(true);

  const imageUrl = `/drstrangeoftheday-reference.jpg`; // Adjusted to point to a reference image

  if (imageError) {
    // Adjust error message if needed
    return <p className="text-xl text-gray-500">Reference image not found</p>;
  }

  return (
    <Image
      src={imageUrl}
      alt={"Reference Dr. Strange"}
      width={500}
      height={500}
      className={`rounded-lg shadow-lg`}
      priority
      title="Reference Image"
      onError={handleError}
    />
  );
}
