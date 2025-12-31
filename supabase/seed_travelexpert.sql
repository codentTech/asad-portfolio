-- Seeder for Travel Expert Platform Project
-- Run this SQL script in your Supabase SQL Editor to add the Travel Expert project

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
  'Travel Expert',
  'travel-expert',
  'Developed a platform connecting travelers and agents with seamless bookings, real-time messaging, and secure payments.',
  'Developed a dynamic platform, Travel-Expert, that bridges the gap between travelers and travel agents, enabling seamless communication, bookings, and ratings. This user-friendly application empowers agents to join for free, create detailed profiles, and sell travel packages and services on their own terms. Travelers benefit from a transparent ecosystem where they can directly connect with agents, browse offerings, and provide feedback through mutual ratings. The platform fosters trust and convenience, revolutionizing the travel booking experience.',
  'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ARRAY[]::TEXT[],
  ARRAY[
    'Node.js',
    'Nest.js',
    'React.js',
    'Next.js',
    'Socket.io',
    'Stripe',
    'PostgreSQL',
    'Azure',
    'CI/CD',
    'RESTful APIs',
    'iOS',
    'Android',
    'Real-time Communication',
    'Payment Integration'
  ],
  NULL,
  NULL,
  'Traditional travel booking processes create barriers between travelers and travel agents, limiting direct communication and transparency. Travelers struggle to find trustworthy agents and compare offerings, while agents lack accessible platforms to showcase their services and build relationships with clients. Existing booking systems often lack real-time communication capabilities, making it difficult for travelers and agents to discuss details and negotiate terms. The absence of mutual rating systems prevents trust building, and fragmented payment processes create friction in transactions. Mobile accessibility is also limited, restricting on-the-go bookings and communication.',
  'Travel Expert provides a comprehensive platform that directly connects travelers with travel agents, revolutionizing the booking experience. The solution includes free agent registration with customizable profiles, allowing agents to showcase their expertise and services. A direct messaging system powered by Socket.io enables real-time communication between travelers and agents, facilitating seamless discussions and negotiations. Integrated booking and payment systems using Stripe streamline transactions, ensuring secure and efficient payments. A mutual rating system promotes transparency and builds trust between both parties. Advanced search and filtering options help travelers find tailored travel packages that match their preferences. Mobile-responsive design ensures accessibility on all devices, while RESTful APIs provide robust backend services. The scalable database architecture ensures optimal performance and data integrity, while Azure cloud infrastructure provides reliable hosting and CI/CD pipelines enable automated deployments. The platform supports both web and mobile platforms (iOS & Android) for comprehensive accessibility.',
  'Travel Expert successfully created a transparent and efficient platform that transformed how travelers connect with travel agents. The direct messaging system with real-time communication (Socket.io) enabled seamless traveler-agent interactions, improving the booking experience. The mutual rating system fostered trust and transparency, helping both travelers and agents make informed decisions. Secure payment integration with Stripe streamlined transactions, reducing friction in the booking process. Advanced search and filtering capabilities helped travelers find personalized travel packages, while mobile-responsive design increased accessibility for on-the-go users. The scalable database architecture ensured optimal performance and data integrity as the platform grew. Azure deployment and CI/CD pipelines enabled reliable hosting and automated deployments, ensuring continuous updates and stability. The platform now serves as a trusted marketplace connecting travelers with travel agents, revolutionizing the travel booking experience through direct communication, transparency, and convenience.',
  true
);

