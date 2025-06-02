import "dotenv/config";
import fs from "fs";

// import essay
const essay = fs.readFileSync("app/(1-extraction)/essay.txt", "utf-8");

async function main() {
  console.log(essay.slice(0, 100) + "...");
}

main().catch(console.error);
