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
- Vercel account (free)

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

### 3. Set Up Vercel AI Gateway

This project uses [Vercel AI Gateway](https://vercel.com/docs/ai-gateway) for unified AI model access with built-in reliability, monitoring, and load balancing.

#### Link Your Project to Vercel

```bash
pnpm install -g vercel
vercel link
```

#### Deploy and Pull Environment Variables

```bash
vercel deploy
vercel env pull
```

This will create a `.env.local` file with your `VERCEL_OIDC_TOKEN` which is valid for 12 hours.

#### Configure AI Provider Keys

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to AI Gateway → Integrations
3. Add your AI provider API keys (e.g., OpenAI, Anthropic)
4. Keys are securely stored and scoped to your Vercel team

### 4. Run the Development Server

```bash
# Use Vercel CLI for automatic OIDC token refresh
vercel dev

# Or use standard Next.js dev (manual token refresh required)
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the tutorial navigation page.

## Available Lessons

This starter includes code for all course lessons:

### Command-Line Lessons
Run these lessons using the provided npm scripts:

- **Lesson 1: Extraction** - Extract structured data from text
  ```bash
  pnpm run extraction
  ```

- **Lesson 2: Classification** - Classify support requests
  ```bash
  pnpm run classification
  ```

### Interactive Lessons
Access these through the web interface at [http://localhost:3000](http://localhost:3000):

- **Lesson 3: Summarization** - Summarize message conversations
- **Lesson 4: Extraction (Advanced)** - Extract calendar appointments from emails
- **Lesson 5: Chatbot** - Build an interactive AI chatbot

## Project Structure

```
├── app/
│   ├── (1-extraction)/        # CLI extraction lesson
│   ├── (2-classification)/    # CLI classification lesson
│   ├── (3-summarization)/     # Web summarization lesson
│   ├── (4-extraction)/        # Web extraction lesson
│   ├── (5-chatbot)/          # Web chatbot lesson
│   └── page.tsx              # Navigation homepage
├── components/ui/            # Reusable UI components
└── lib/                      # Utility functions
```

## About Vercel AI Gateway

Vercel AI Gateway provides:
- **Unified API** - Switch between AI providers without code changes
- **High Reliability** - Automatic request retries and failover
- **Monitoring** - Track usage and spending across providers
- **Security** - Securely manage API keys at the team level
- **Load Balancing** - Distribute requests across multiple providers

## Technologies Used

- [Next.js 15](https://nextjs.org) - React framework
- [Vercel AI SDK](https://sdk.vercel.ai) - AI integration library
- [Vercel AI Gateway](https://vercel.com/docs/ai-gateway) - AI proxy service
- [Tailwind CSS v4](https://tailwindcss.com) - Styling
- [shadcn/ui](https://ui.shadcn.com) - UI components
- [TypeScript](https://www.typescriptlang.org) - Type safety

## Learn More

- [Full Tutorial](https://vercel.com/academy/ai-sdk) - Complete the entire AI SDK course
- [AI SDK Documentation](https://sdk.vercel.ai/docs) - Detailed SDK documentation
- [Vercel AI Gateway Docs](https://vercel.com/docs/ai-gateway) - Gateway documentation
- [Vercel AI Playground](https://sdk.vercel.ai/playground) - Experiment with AI models

## Deploy on Vercel

The easiest way to deploy your AI application is using the [Vercel Platform](https://vercel.com).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/build-an-ai-app-starter-aug-25)