import { readdirSync } from "node:fs";
import path from "node:path";

export function getImageList() {
  try {
    const images = readdirSync("./public") 
      .filter((filename) => !filename.includes("reference") && !filename.includes(".DS_Store")) // OSX moment
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
      });
    return images;
  } catch (error) {
    console.error("Error reading public directory:", error);
    return []; 
  }
}
