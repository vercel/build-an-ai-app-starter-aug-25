import "dotenv/config";

function main() {
  console.log("Hello, Conf!");
  console.log(process.env.OPENAI_API_KEY);
}

main();