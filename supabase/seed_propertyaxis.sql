-- Seeder for PropertyAxis Project
-- Run this SQL script in your Supabase SQL Editor to add the PropertyAxis project

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
  'PropertyAxis',
  'propertyaxis',
  'Developed an AI-driven real estate platform for secure, direct property transactions with real-time updates.',
  'Created PropertyAxis, an innovative online platform that empowers real estate owners and entrepreneurs to conduct property transactions directly, bypassing brokers for a more transparent, efficient, and cost-effective process. The platform offers a user-friendly interface for listing, buying, and selling properties, ensuring secure and seamless transactions. By eliminating the intermediary, PropertyAxis provides a modern solution that maximizes value for all parties involved while maintaining full transparency throughout the process.',
  'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ARRAY[]::TEXT[],
  ARRAY[
    'Node.js',
    '.NET 6',
    'Express.js',
    'React.js',
    'Redux',
    'Tailwind CSS',
    'PostgreSQL',
    'Redis',
    'WebSockets',
    'Socket.io',
    'AWS EC2',
    'AWS S3',
    'AWS Lambda',
    'Azure App Services',
    'Azure Functions',
    'CI/CD Pipelines',
    'Stripe',
    'PayPal',
    'Google APIs',
    'Travel & Booking APIs',
    'iOS',
    'Android'
  ],
  NULL,
  NULL,
  'Traditional real estate transactions rely heavily on intermediaries and brokers, which increases costs for both buyers and sellers while reducing transparency. Property owners and potential buyers often face challenges in finding direct connections, negotiating fair prices, and ensuring secure transactions without paying excessive brokerage fees.',
  'PropertyAxis solves these challenges by providing a direct-to-consumer platform that eliminates the need for brokers. The platform features user-friendly property listing and search functionalities, secure transaction systems with integrated payment gateways, transparent pricing and negotiation tools, rating and feedback systems for trust building, and real-time notifications. Advanced filters enable quick property searches and matches, while WebSocket technology ensures instant communication between parties.',
  'PropertyAxis successfully created a transparent, cost-effective real estate marketplace that empowers users to conduct direct transactions. The platform reduced transaction costs by eliminating broker fees, improved transparency through direct communication and transparent pricing, enhanced user trust through rating systems, and provided real-time updates for seamless transaction management. The scalable architecture built on AWS and Azure ensures high availability and performance for users across iOS and Android platforms.',
  true
);

