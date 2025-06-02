import dotenvFlow from 'dotenv-flow';
dotenvFlow.config();

function main() {
  console.log("Hello, Conf!");
  console.log(process.env.VERCEL_OIDC_TOKEN);
}

main();