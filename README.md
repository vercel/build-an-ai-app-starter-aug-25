# Vercel AI SDK Tutorial - Starter Project

This is the starter project for the [Vercel AI SDK Academy Course](https://vercel.com/academy/ai-sdk), a comprehensive tutorial for building AI-powered applications using the Vercel AI SDK.

## About the Course

The Vercel AI SDK is a free, open-source library for building AI-powered products. Created by Vercel, it enables developers to quickly integrate AI features into their projects.

### What You'll Learn

This 12-hour course is divided into three sections:

- **Foundations**: Understand LLMs, prompting techniques, and basic AI SDK usage
- **Invisible AI**: Build seamless AI features like classification and summarization
- **Conversational AI**: Create interactive chatbots with advanced features

## Prerequisites

- JavaScript/TypeScript knowledge
- React familiarity
- Node.js v20 or later (LTS recommended)
- pnpm package manager
- OpenAI account with API key

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/vercel/build-an-ai-app-starter-aug-25.git
cd build-an-ai-app-starter-aug-25
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Environment Variables

For local development with OpenAI:
```bash
cp .env.example .env.local
```

Then add your OpenAI API key to `.env.local`:
```
OPENAI_API_KEY=your-api-key-here
```

For Vercel AI Gateway (recommended for production):
```bash
pnpm install -g vercel
vc deploy
vc env pull
```

### 4. Run the Development Server

```bash
pnpm dev
# or with Vercel CLI for automatic OIDC token refresh
vc dev
```

Open [http://localhost:3000](http://localhost:3000) to see the tutorial navigation page.

## Available Lessons

This starter includes code for the following lessons:

- **Lesson 3: Summarization** - Learn to summarize text content using AI
- **Lesson 4: Extraction** - Extract structured data from unstructured text
- **Lesson 5: Chatbot** - Build an interactive conversational interface

## Project Structure

```
├── app/
│   ├── (3-summarization)/     # Summarization lesson
│   ├── (4-extraction)/        # Data extraction lesson
│   ├── (5-chatbot)/          # Chatbot lesson
│   └── page.tsx              # Navigation homepage
├── components/ui/            # Reusable UI components
└── lib/                      # Utility functions
```

## Technologies Used

- [Next.js 15](https://nextjs.org) - React framework
- [Vercel AI SDK](https://sdk.vercel.ai) - AI integration library
- [Tailwind CSS v4](https://tailwindcss.com) - Styling
- [shadcn/ui](https://ui.shadcn.com) - UI components
- [TypeScript](https://www.typescriptlang.org) - Type safety

## Learn More

- [Full Tutorial](https://vercel.com/academy/ai-sdk) - Complete the entire AI SDK course
- [AI SDK Documentation](https://sdk.vercel.ai/docs) - Detailed SDK documentation
- [Vercel AI Playground](https://sdk.vercel.ai/playground) - Experiment with AI models

## Deploy on Vercel

The easiest way to deploy your AI application is using the [Vercel Platform](https://vercel.com).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/build-an-ai-app-starter-aug-25)