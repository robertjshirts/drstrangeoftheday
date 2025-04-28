import { readdirSync } from "node:fs";

// Get every file from public and return it as a list of uris so we can use the images programmatically
export default function useDrStrangeOfTheDayList() {
  const images = readdirSync("./public")
    .filter((filename) => !filename.includes("reference"))
    .map((filename) => filename.replace("drstrangeoftheday-", "").replace(".jpg", ""))
    .sort((a, b) => {
      const numA = parseInt(a.split('-')[0]);
      const numB = parseInt(b.split('-')[0]);
      if (!isNaN(numA) && !isNaN(numB)) {
        if (numB === numA) {
          return a.localeCompare(b); // Sort by name if numbers are equal
        }
        return numB - numA; // Sort in descending order
      }
      return b.localeCompare(a); // Fallback to string comparison if parsing fails
    })
  return images
}

console.log(useDrStrangeOfTheDayList())
