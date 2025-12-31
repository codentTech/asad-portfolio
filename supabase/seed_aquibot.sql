-- Seeder for AQUIBOT Project
-- Run this SQL script in your Supabase SQL Editor to add the AQUIBOT project

INSERT INTO projects (
  title,
  slug,
  description,
  long_description,
  image,
  images,
  tech_stack,
  live_url,
  github_url,
  problem,
  solution,
  result,
  featured
) VALUES (
  'AQUIBOT',
  'aquibot',
  'Unified AI Chat Platform - A multi-model conversational AI platform that gives users a single interface to interact with major LLM providers without switching apps.',
  'Aquibot is a multi-model conversational AI platform that gives users a single interface to interact with major LLM providers—OpenAI GPT, Anthropic Claude, Google Gemini, Meta Llama, and Hugging Face models like BERT, DistilBERT, and MiniLM—without switching apps. The platform features real-time chat experience with anonymous and authenticated flows, live streaming with "AI is thinking..." indicator, guest message limits with sign-in prompts, and immediate navigation to chat conversations. Built with Next.js 15, React 19, Redux Toolkit, FastAPI, LangChain, and Hugging Face integration, Aquibot provides a production-ready, guest-friendly AI chat platform with best-practice architecture, multi-chatbot management, and streaming reliability tuned for real deployments. The platform includes robust conversation state management, backend resilience, multi-chatbot library with categories and search, conversation management with star, delete, and search functionality, and a unified web app interface with persistent header and sidebar. Ready for RAG integration via Pinecone/S3, file uploads, and enterprise workflows.',
  'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ARRAY[]::TEXT[],
  ARRAY[
    'Next.js 15',
    'React 19',
    'Redux Toolkit',
    'FastAPI',
    'LangChain',
    'OpenAI GPT',
    'Anthropic Claude',
    'Google Gemini',
    'Meta Llama',
    'Hugging Face',
    'BERT',
    'DistilBERT',
    'MiniLM',
    'PostgreSQL',
    'Alembic',
    'SQLAlchemy',
    'UUID',
    'JWT',
    'Pinecone',
    'AWS S3',
    'TypeScript',
    'Clean Architecture',
    'Repository Pattern',
    'WebSockets',
    'Streaming',
    'Real-time',
    'Multi-Model AI',
    'Conversational AI'
  ]::TEXT[],
  NULL,
  NULL,
  'Users want a single conversational AI interface that works instantly without forcing sign-up, keeps conversations organized by chatbot/persona, streams AI responses smoothly and reliably, lets logged-in users manage many chat threads quickly, and handles intermittent latency on production deployments. Traditional solutions require switching between multiple apps to access different LLM providers, creating friction and inefficiency. Users face challenges with onboarding friction, conversation management across different platforms, reliable response streaming, and production deployment latency issues. Organizations need a unified platform that integrates multiple AI models seamlessly while providing a smooth user experience for both guests and authenticated users.',
  'Aquibot solves this with guest-first UX, robust conversation state management, and backend resilience tuned for production. The platform provides a unified interface to interact with major LLM providers (OpenAI GPT, Anthropic Claude, Google Gemini, Meta Llama, and Hugging Face models) without switching apps. Real-time chat experience includes anonymous and authenticated flows, live streaming with "AI is thinking..." indicator, guest message limits with sign-in prompts (5-message prompt, 10-message disable), and immediate navigation to /chat/{id} after the first message. Polling and watchdog logic guarantee first AI replies render even on slower deployments. Backend reliability is ensured through FastAPI with Clean Architecture and repository pattern, SQLAlchemy models using UUIDs, unified AI service orchestrating multiple model providers via LangChain, Alembic migrations, and Pinecone-ready vector search with S3-ready storage layer. Multi-chatbot management includes a chatbot library with categories, stats, and search, conversation click navigation, star, delete, clear, and search conversations, with sidebar and header present on every page for consistent UX. The frontend uses Next.js 15, React 19, Redux Toolkit, custom hooks per component, snackbar provider, streaming message queue, memoized selectors, and separation of JSX and logic. Authentication features JWT-based login/sign-up flows, Redux-managed state, and global error handling.',
  'Aquibot successfully delivered a production-ready, guest-friendly AI chat platform with best-practice architecture. The unified interface eliminated the need to switch between multiple apps, providing seamless access to major LLM providers in a single platform. Guest-first UX reduced onboarding friction, allowing users to start chatting immediately without sign-up. Real-time streaming with reliable response handling ensured smooth user experience even on slower deployments. Multi-chatbot management enabled users to organize conversations effectively with search, star, and delete functionality. The robust conversation state management and backend resilience ensured reliable performance in production environments. Clean architecture and repository pattern provided maintainable and scalable codebase. The platform is ready for RAG integration via Pinecone/S3, file uploads, document ingestion UI, and enterprise workflows. With streaming reliability tuned for real deployments, clean UI, and resilient backend, Aquibot serves users evaluating AI chat without onboarding friction, power users managing many conversations, product teams needing branded chatbot experiences, and organizations exploring multi-chatbot workflows.',
  true
)
ON CONFLICT (slug) DO NOTHING;

