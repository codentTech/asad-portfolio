-- Seeder for ITWestStore Project
-- Run this SQL script in your Supabase SQL Editor to add the ITWestStore project

INSERT INTO projects (
  title,
  slug,
  description,
  long_description,
  image,
  images,
  gallery,
  tech_stack,
  live_url,
  github_url,
  problem,
  solution,
  result,
  featured
) VALUES (
  'ITWestStore',
  'itweststore',
  'AI-powered e-commerce platform for technology products with intelligent product discovery, personalized recommendations, and instant customer assistance via natural language AI assistant.',
  'ITWestStore is an AI-powered e-commerce platform for technology products, combining artificial intelligence with modern web technologies to deliver intelligent, personalized shopping through a natural language AI assistant. The platform provides a complete technology product retail solution including product catalog management, order processing, inventory management, customer accounts, and AI-powered customer support. The system features a three-level product structure (Categories, Subcategories, Product Types) for easy navigation and organized inventory management. The AI-powered shopping assistant enables natural language queries, context-aware product matching, instant personalized recommendations, and 24/7 conversational interface. The platform includes comprehensive administrative features with role-based access control (Super Admin, Admin, Employee, User), dashboard analytics, product management, order processing, and blog management. Customer features include account management, order history and tracking, wishlist, coupon management, shopping cart with real-time updates, and multiple payment methods. Built with Next.js, React, Redux, NestJS, PostgreSQL, and integrated with Brevo for email communications, the platform provides enterprise-grade security with token-based authentication, RBAC, data validation, and secure sessions.',
  'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ARRAY[]::TEXT[],
  ARRAY[]::TEXT[],
  ARRAY[
    'Next.js',
    'React',
    'Redux',
    'TypeScript',
    'NestJS',
    'Node.js',
    'PostgreSQL',
    'AI/ML',
    'Natural Language Processing',
    'Brevo',
    'OAuth',
    'JWT',
    'Role-Based Access Control (RBAC)',
    'Email Integration',
    'Payment Processing',
    'Shopping Cart',
    'Inventory Management',
    'Order Management',
    'Search & Filtering',
    'Product Catalog',
    'User Management',
    'Analytics Dashboard',
    'Blog Management',
    'Responsive Design',
    'RESTful API',
    'Data Validation',
    'Authentication',
    'Authorization'
  ]::TEXT[],
  NULL,
  NULL,
  'Businesses need a comprehensive e-commerce platform for technology products that provides intelligent product discovery, personalized shopping experiences, and efficient inventory management. Traditional e-commerce platforms lack AI-powered assistance for product discovery, making it difficult for customers to find the right technology products. Organizations struggle with managing complex product catalogs with multiple categories and subcategories, requiring better organization and navigation. The absence of role-based access control limits administrative flexibility, while the lack of integrated AI assistants reduces customer support efficiency. Businesses need a scalable platform that combines modern web technologies with AI capabilities to deliver personalized shopping experiences, efficient order processing, comprehensive inventory management, and intelligent customer assistance.',
  'ITWestStore provides an AI-powered e-commerce platform that combines artificial intelligence with modern web technologies to deliver intelligent, personalized shopping experiences. The platform features a natural language AI assistant that enables customers to search using conversational queries, receive instant personalized recommendations, and access 24/7 customer support. The three-level product structure (Categories, Subcategories, Product Types) ensures organized inventory management and easy navigation. Role-based access control (Super Admin, Admin, Employee, User) provides flexible administrative capabilities with appropriate permissions for different user roles. The platform includes comprehensive product catalog management with multiple images, specifications, pricing, stock management, SKU tracking, and brand details. Advanced search and filtering capabilities allow customers to find products using search bar, category navigation, advanced filters, sorting options, and URL-friendly links. Customer account features include dashboard, profile management, order history and tracking, wishlist, coupon management, and payment methods. Administrative features provide dashboard analytics, product management, category management, user management, order processing, and blog management. Email communication system integrates with Brevo for automated emails including verification, password reset, order confirmations, transaction notifications, and delivery status updates. Built with Next.js, React, Redux for frontend, NestJS, PostgreSQL for backend, the platform ensures enterprise-grade security with token-based authentication, RBAC, data validation, password encryption, and secure sessions.',
  'ITWestStore successfully delivered an AI-powered e-commerce platform that transformed technology product retail operations. The natural language AI assistant significantly improved product discovery, enabling customers to find products through conversational queries and receive personalized recommendations instantly. The three-level product structure improved inventory organization and navigation, making it easier for both customers and administrators to manage products. Role-based access control provided flexible administrative capabilities, allowing businesses to assign appropriate permissions to different team members. The comprehensive product catalog management system enabled efficient inventory tracking with SKU, barcodes, part numbers, and stock management. Advanced search and filtering capabilities improved customer experience, while the shopping cart with real-time updates and persistent sessions enhanced the shopping process. Customer account features including order history, tracking, wishlist, and coupon management increased customer engagement and retention. The administrative dashboard analytics provided valuable insights for business decision-making. Email communication integration with Brevo ensured reliable delivery of transactional emails. The platform successfully serves 10,000+ businesses with 99.9% uptime guarantee, providing enterprise-grade solutions for technology product retail with cutting-edge AI capabilities, comprehensive management tools, and exceptional customer experience.',
  true
)
ON CONFLICT (slug) DO NOTHING;


