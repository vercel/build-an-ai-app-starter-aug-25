import "dotenv/config";
import supportRequests from "./support_requests.json";

async function main() {
  console.log(supportRequests.slice(0, 2));
}

main().catch(console.error);
