-- Seeder for Services
-- Run this SQL script in your Supabase SQL Editor to add the services

-- Service 1: AI-Powered Application Development
INSERT INTO services (
  title,
  slug,
  description,
  icon,
  features,
  content,
  featured
) VALUES (
  'AI-Powered Application Development',
  'ai-powered-application-development',
  'Build intelligent applications powered by LLMs, RAG systems, and AI-driven decision engines.',
  'Rocket',
  ARRAY[
    'LLM-based applications',
    'RAG systems & knowledge assistants',
    'AI-driven decision systems'
  ]::TEXT[],
  'Directly aligns with your AI expertise and attracts modern product teams. I develop intelligent applications that leverage Large Language Models (LLMs) to create sophisticated, context-aware systems. Whether you need RAG (Retrieval-Augmented Generation) systems for knowledge management or AI-driven decision-making tools, I build solutions that transform how your users interact with technology.',
  true
)
ON CONFLICT (slug) DO NOTHING;

-- Service 2: Intelligent Automation & Workflow Optimization
INSERT INTO services (
  title,
  slug,
  description,
  icon,
  features,
  content,
  featured
) VALUES (
  'Intelligent Automation & Workflow Optimization',
  'intelligent-automation-workflow-optimization',
  'Automate business processes with AI agents, task orchestration, and API-based pipelines.',
  'Zap',
  ARRAY[
    'Business process automation',
    'AI agents & task orchestration',
    'API-based automation pipelines'
  ]::TEXT[],
  'Strong business value proposition that non-technical clients understand immediately. I specialize in transforming manual, repetitive processes into intelligent, automated workflows. Using AI agents and sophisticated task orchestration, I create systems that reduce operational overhead, minimize errors, and enable your team to focus on high-value work.',
  true
)
ON CONFLICT (slug) DO NOTHING;

-- Service 3: Backend & API Engineering
INSERT INTO services (
  title,
  slug,
  description,
  icon,
  features,
  content,
  featured
) VALUES (
  'Backend & API Engineering',
  'backend-api-engineering',
  'Build scalable backend architectures, secure high-performance APIs, and microservices.',
  'Code',
  ARRAY[
    'Scalable backend architectures',
    'Secure & high-performance APIs',
    'Microservices & system integration'
  ]::TEXT[],
  'Positions you as a strong system builder, not just an AI integrator. I design and implement robust backend systems that can handle scale, ensure security, and maintain high performance. From RESTful APIs to microservices architectures, I build the foundation that powers reliable, scalable applications.',
  false
)
ON CONFLICT (slug) DO NOTHING;

-- Service 4: Full-Stack Application Development
INSERT INTO services (
  title,
  slug,
  description,
  icon,
  features,
  content,
  featured
) VALUES (
  'Full-Stack Application Development',
  'full-stack-application-development',
  'End-to-end application development with seamless frontend–backend integration.',
  'Settings',
  ARRAY[
    'End-to-end application development',
    'Frontend–backend integration',
    'Performance & UX-focused delivery'
  ]::TEXT[],
  'Covers the full-stack angle without overemphasizing frontend. I deliver complete, production-ready applications from concept to deployment. My approach ensures seamless integration between frontend and backend systems, with a focus on performance, user experience, and maintainability.',
  false
)
ON CONFLICT (slug) DO NOTHING;

-- Service 5: AI Integration for Existing Products
INSERT INTO services (
  title,
  slug,
  description,
  icon,
  features,
  content,
  featured
) VALUES (
  'AI Integration for Existing Products',
  'ai-integration-existing-products',
  'Add AI features to live systems, integrate LLMs/chatbots, and build data + AI pipelines.',
  'Target',
  ARRAY[
    'Adding AI features to live systems',
    'LLM/chatbot integration',
    'Data + AI pipeline integration'
  ]::TEXT[],
  'Many clients don''t want new apps—just smarter ones. I specialize in enhancing existing products with intelligent capabilities. Whether you need to add chatbot functionality, integrate LLM-powered features, or build data pipelines that feed AI systems, I help you modernize your product without disrupting current operations.',
  true
)
ON CONFLICT (slug) DO NOTHING;

-- Service 6: Technical Consulting & Architecture
INSERT INTO services (
  title,
  slug,
  description,
  icon,
  features,
  content,
  featured
) VALUES (
  'Technical Consulting & Architecture',
  'technical-consulting-architecture',
  'System design, scalability planning, AI adoption strategy, and codebase reviews.',
  'Briefcase',
  ARRAY[
    'System design & scalability planning',
    'AI adoption strategy',
    'Codebase & architecture reviews'
  ]::TEXT[],
  'Get expert guidance on system design, scalability planning, and AI adoption strategies. I provide technical consulting to help you make informed decisions about your technology stack, architecture patterns, and development processes. From codebase reviews to strategic planning, I help you build systems that are scalable, maintainable, and future-ready.',
  false
)
ON CONFLICT (slug) DO NOTHING;

