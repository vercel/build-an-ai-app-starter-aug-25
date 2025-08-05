import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Vercel AI SDK Tutorial</h1>
        
        <p className="text-lg text-gray-600 mb-12">
          Learn how to build AI applications with the Vercel AI SDK. Navigate to the lessons below to get started.
        </p>

        <div className="grid gap-6">
          <Link
            href="/summarization"
            className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-400 transition-colors shadow-sm hover:shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">Lesson 3: Summarization</h2>
            <p className="text-gray-600">
              Learn how to use AI to summarize text content and messages.
            </p>
          </Link>

          <Link
            href="/extraction"
            className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-400 transition-colors shadow-sm hover:shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">Lesson 4: Extraction</h2>
            <p className="text-gray-600">
              Extract structured data from unstructured text using AI.
            </p>
          </Link>

          <Link
            href="/chat"
            className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-400 transition-colors shadow-sm hover:shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">Lesson 5: Chatbot</h2>
            <p className="text-gray-600">
              Build an interactive chatbot with the Vercel AI SDK.
            </p>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Follow the full tutorial at{" "}
            <a 
              href="https://vercel.com/academy/ai-sdk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              vercel.com/academy/ai-sdk
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
