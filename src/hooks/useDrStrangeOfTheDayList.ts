import { readdirSync } from "node:fs";

// Get every file from public and return it as a list of uris so we can use the images programmatically
export default function useDrStrangeOfTheDayList() {
  const images = readdirSync("./public")
    .filter((filename) => !filename.includes("reference"))
    .map((filename) => filename.replace("drstrangeoftheday-", "").replace(".jpg", ""))
    .sort((a, b) => a > b ? -1 : 1)
  return images
}

console.log(useDrStrangeOfTheDayList())