import { readdirSync } from "node:fs";
import path from "node:path";

export function getImageList() {
  try {
    const images = readdirSync("./public") 
      .filter((filename) => !filename.includes("reference") && !filename.includes(".DS_Store")) // OSX moment
      .map((filename) => filename.replace("drstrangeoftheday-", "").replace(".jpg", ""))
      .sort((a, b) => a > b ? -1 : 1); 
    return images;
  } catch (error) {
    console.error("Error reading public directory:", error);
    return []; 
  }
}
