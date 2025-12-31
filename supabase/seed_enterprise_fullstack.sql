-- Seeder for Full Stack Enterprise Application Development Service
-- Run this SQL script in your Supabase SQL Editor to add the service

-- Service: Full Stack Enterprise Application Development
INSERT INTO services (
  title,
  slug,
  description,
  icon,
  features,
  content,
  featured
) VALUES (
  'Full Stack Enterprise Application Development',
  'full-stack-enterprise-application-development',
  'Build scalable, enterprise-grade applications with robust architecture, security, and performance optimization.',
  'Briefcase',
  ARRAY[
    'Enterprise-grade architecture',
    'Scalable & secure applications',
    'Microservices & cloud-native solutions',
    'API integrations & third-party services',
    'Performance optimization & monitoring',
    'DevOps & CI/CD pipelines'
  ]::TEXT[],
  'I specialize in building enterprise-level applications that are scalable, secure, and performant. From designing robust architectures to implementing microservices and cloud-native solutions, I deliver full-stack applications that meet enterprise requirements. My approach includes seamless API integrations, comprehensive security measures, performance optimization, and complete DevOps setup with CI/CD pipelines. Whether you need a new enterprise application or modernization of existing systems, I provide end-to-end solutions that drive business growth.',
  true
)
ON CONFLICT (slug) DO NOTHING;

