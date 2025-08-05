import dotenvFlow from 'dotenv-flow';
dotenvFlow.config();

function main() {
  console.log("🔍 Checking environment configuration...\n");

  const hasOIDC = !!process.env.VERCEL_OIDC_TOKEN;
  const hasGatewayKey = !!process.env.AI_GATEWAY_API_KEY;

  if (hasOIDC) {
    console.log("✅ VERCEL_OIDC_TOKEN found - Vercel AI Gateway with OIDC auth");
    console.log("   Token preview:", process.env.VERCEL_OIDC_TOKEN?.substring(0, 20) + "...");
  } else {
    console.log("❌ VERCEL_OIDC_TOKEN not found");
  }

  if (hasGatewayKey) {
    console.log("✅ AI_GATEWAY_API_KEY found - Vercel AI Gateway with API key auth");
    console.log("   Key preview:", process.env.AI_GATEWAY_API_KEY?.substring(0, 20) + "...");
  } else {
    console.log("❌ AI_GATEWAY_API_KEY not found");
  }

  console.log("\n📋 Summary:");
  if (hasOIDC || hasGatewayKey) {
    console.log("✅ Environment is configured correctly!");
    if (hasOIDC) {
      console.log("   Using: Vercel AI Gateway (OIDC authentication)");
      console.log("   Note: OIDC tokens expire after 12 hours. Use 'vercel dev' for auto-refresh.");
    } else {
      console.log("   Using: Vercel AI Gateway (API key authentication)");
    }
  } else {
    console.log("❌ No AI Gateway configuration found!");
    console.log("\n📚 Setup Instructions:");
    console.log("\n   Option 1 - Vercel AI Gateway with OIDC (recommended for local dev):");
    console.log("   1. Run: vercel link");
    console.log("   2. Run: vercel deploy");
    console.log("   3. Run: vercel env pull");
    console.log("\n   Option 2 - Vercel AI Gateway with API Key:");
    console.log("   1. Go to https://vercel.com/dashboard");
    console.log("   2. Navigate to AI Gateway → API Keys");
    console.log("   3. Create a new API key");
    console.log("   4. Add to .env.local: AI_GATEWAY_API_KEY=your-key-here");
  }
}

main();