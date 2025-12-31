-- Seeder for OGOW Health Project
-- Run this SQL script in your Supabase SQL Editor to add the OGOW Health project

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
  'OGOW Health',
  'ogow-health',
  'Developed an award-winning m-health platform for digitizing medical records, immunization tracking, and real-time healthcare access in underserved communities.',
  'OGOW Health is an award-winning platform that delivers customized m-health solutions to healthcare providers, caregivers, and governments in underserved communities. The platform focuses on digitizing medical records, enhancing maternal and infant health interventions, and ensuring timely access to patient information. It is designed to work offline, supporting low-resource communities while also allowing real-time data collection for vaccination tracking.',
  'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ARRAY[]::TEXT[],
  ARRAY[
    'Nest.js',
    'Express.js',
    'React.js',
    'Tailwind CSS',
    'SQL',
    'Digital Ocean',
    'Azure DevOps',
    'Docker',
    'GitHub Actions',
    'Jenkins',
    'Redis',
    'API Rate Limiting',
    'Load Balancing',
    'IVR Systems',
    'Government APIs'
  ],
  NULL,
  NULL,
  'Underserved communities face significant challenges in healthcare access and record management. Traditional paper-based medical records are difficult to maintain, prone to loss, and inaccessible in real-time. Healthcare providers struggle with tracking immunizations, managing maternal and infant health data, and ensuring timely interventions. The lack of digital infrastructure in low-resource areas makes it even more challenging to provide quality healthcare services and meet government reporting requirements for vaccination programs.',
  'OGOW Health provides a comprehensive m-health platform that digitizes medical records and enables real-time healthcare access. The solution includes offline functionality for low-resource communities, real-time data collection for vaccination tracking, IVR (Interactive Voice Response) system integration for accessible communication, government portal API integration for immunization data submission, and a modern architecture built with React and NestJS for scalability and performance. The platform ensures secure, efficient healthcare data management with features like API rate limiting, load balancing, and Redis caching for optimal performance.',
  'OGOW Health successfully delivered an award-winning platform that transformed healthcare delivery in underserved communities. The platform digitized medical records, improving data accessibility and reducing loss. It enabled real-time immunization tracking and government reporting, enhancing public health monitoring. The offline functionality ensured access in low-resource areas, while the modern architecture (React + NestJS) improved performance, security, and scalability. The codebase revamp and mentorship of junior developers established a robust foundation for future growth. The platform now serves healthcare providers, caregivers, and governments, making quality healthcare more accessible to underserved populations.',
  true
);

