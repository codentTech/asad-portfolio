-- Seeder for Bio Tail eCommerce Platform Project
-- Run this SQL script in your Supabase SQL Editor to add the Bio Tail project

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
  'Bio Tail',
  'bio-tail',
  'Developed an eCommerce platform for livestock feed solutions with secure transactions, inventory management, and a seamless user experience.',
  'Developed an eCommerce platform specializing in premium feed solutions and nutritional supplements for livestock, including cattle, sheep, and goats. The platform offers a comprehensive range of products designed to enhance animal health, growth, and performance. With a user-friendly interface and streamlined purchasing process, it caters to farmers and livestock owners seeking high-quality, science-backed products. Focused on addressing unique dietary requirements, the project ensures exceptional results in livestock productivity and overall well-being.',
  'https://images.pexels.com/photos/175773/pexels-photo-175773.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ARRAY[]::TEXT[],
  ARRAY[
    'Node.js',
    'Express.js',
    'Next.js',
    'React.js',
    'Tailwind CSS',
    'PostgreSQL',
    'AWS EC2',
    'AWS S3',
    'AWS RDS',
    'AWS Lambda',
    'Azure DevOps',
    'Docker',
    'GitHub Actions',
    'Jenkins',
    'Redis',
    'Stripe',
    'PayPal',
    'API Rate Limiting',
    'Load Balancing'
  ],
  NULL,
  NULL,
  'Farmers and livestock owners struggle to find high-quality, science-backed feed solutions and nutritional supplements for their animals. Traditional purchasing methods lack comprehensive product information, secure payment options, and efficient order tracking. The absence of a specialized eCommerce platform makes it difficult to access premium feed products, understand nutritional information, and manage inventory effectively. Existing solutions often lack mobile responsiveness, making it challenging for farmers to place orders on-the-go, while security concerns around online transactions further limit adoption.',
  'Bio Tail provides a comprehensive eCommerce platform that specializes in premium feed solutions and nutritional supplements for livestock. The solution includes a detailed product catalog with comprehensive nutritional information, helping customers make informed decisions. Multiple payment gateway integrations (Stripe, PayPal) ensure secure and seamless transactions. Advanced inventory management and order tracking systems provide real-time visibility into product availability and order status. The platform features easy navigation and a secure checkout process, optimized for user experience. Mobile-responsive design ensures accessibility across all devices, enabling farmers to shop from anywhere. The scalable architecture built with Next.js, Node.js, and PostgreSQL ensures performance, while AWS cloud infrastructure (EC2, S3, RDS, Lambda) provides reliability and scalability. Security measures including API rate limiting, load balancing, and Redis caching enhance performance and protect user data.',
  'Bio Tail successfully created a specialized eCommerce platform that transformed how farmers and livestock owners access premium feed solutions. The platform significantly improved user experience through performance optimizations, reducing loading times and enhancing overall efficiency. The comprehensive product catalog with detailed nutritional information helped customers make informed purchasing decisions. Secure payment integrations and robust inventory management streamlined the purchasing process, while mobile-responsive design increased accessibility for on-the-go users. The scalable architecture and optimized APIs ensured high performance and reliability. Enhanced security measures and efficient CI/CD pipelines enabled automated deployments and continuous improvements. The platform now serves as a trusted resource for livestock owners, providing high-quality, science-backed products that enhance animal health, growth, and productivity.',
  true
);

