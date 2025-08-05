import { generateText } from "ai";
import dotenvFlow from "dotenv-flow";
import fs from "fs";
import { encoding_for_model } from "tiktoken";
dotenvFlow.config();

function countTokens(text: string, model: string = "openai/gpt-4o-mini") {
	try {
		// Note: Specify the model used in generateText for accuracy
		const enc = encoding_for_model(model as any); // Use 'as any' for broader model compatibility if needed
		const tokens = enc.encode(text);
		enc.free(); // Free up memory
		return tokens.length;
	} catch (e) {
		console.warn("Tiktoken error, using approximation:", e);
		return Math.ceil(text.length / 4); // Fallback approximation
	}
}

// import essay
const essay = fs.readFileSync("app/(1-extraction)/essay.txt", "utf-8");
async function main() {
	const result = await generateText({
		model: "openai/gpt-4o",
		prompt: `What is the key takeaway of this piece in 50 words?

Essay:
${essay}`,
	});
	// Access the AI's generated text response
	console.log("\n--- AI Response ---");
	console.log(result.text);
	console.log("-------------------");

	const promptForTokenCount = `Extract all the names mentioned in this essay. List them separated by commas.
---
Essay:
${essay}`;
	console.log(`\n--- Token Usage (Approx.) ---`);
	console.log(
		`Prompt tokens: ${countTokens(promptForTokenCount, "gpt-4o-mini")}`,
	);
	console.log(`Response tokens: ${countTokens(result.text, "gpt-4o-mini")}`);
	console.log("---------------------------");
}
main().catch(console.error);
