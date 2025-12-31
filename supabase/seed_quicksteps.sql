-- Seeder for Quick Steps Inventory Management Project
-- Run this SQL script in your Supabase SQL Editor to add the Quick Steps project

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
  'Quick Steps',
  'quick-steps',
  'Developed an inventory management system with invoicing, warehouse tracking, OAuth-based access control, and AWS SES integration using Next.js, Nest.js, and Postgres.',
  'Inventory management is a comprehensive system designed to streamline the invoice completion and warehouse stocking process. It manages workflows like sending and receiving emails, creating and revising agreements, and implementing role-based authorization for secure access. The system is built with a modern tech stack, incorporating Next.js for the front-end, Nest.js for the back-end, and Postgres for data storage, ensuring performance, security, and scalability. The platform uses Next.js to render the UI efficiently, handle routing, and enable server-side rendering for improved performance. Nest.js serves as the backend framework, organizing application logic into scalable modules following a modular repository pattern. Postgres efficiently manages complex data involved in invoices, warehouse inventory, and user roles with strong transactional capabilities. OAuth implements secure user authentication and authorization, enabling single sign-on (SSO) and third-party authentication services. AWS services like AWS SES (Simple Email Service) are used for sending and receiving emails related to invoices and agreements.',
  'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ARRAY[]::TEXT[],
  ARRAY[
    'Next.js',
    'Nest.js',
    'PostgreSQL',
    'OAuth',
    'AWS SES',
    'AWS',
    'TypeScript',
    'Server-Side Rendering',
    'Modular Repository Pattern'
  ],
  NULL,
  NULL,
  'Traditional inventory and invoicing processes rely heavily on manual work, leading to inefficiencies and errors. Businesses struggle with managing invoices, tracking warehouse inventory in real-time, handling email communications, and ensuring secure access control. The lack of integrated systems makes it challenging to streamline workflows, reduce manual effort, and maintain data security. Organizations need a comprehensive solution that automates invoice completion, warehouse stocking, email communications, and provides role-based access control to protect sensitive business data.',
  'Quick Steps provides a comprehensive inventory management system that integrates invoicing, warehouse tracking, email communications, and secure access control. The solution includes invoice management for creating, updating, and completing invoices with a smooth Next.js interface. Warehouse stocking features track items, quantities, and locations in real-time using Postgres. AWS SES integration handles sending and receiving emails for invoice completion, status updates, and notifications. Agreement creation and revision capabilities enable users to create, revise, and finalize agreements related to invoicing and warehouse operations. OAuth-based role-based authorization ensures secure authentication, allowing only authorized users to access features based on their roles (admin, manager, employee). The system follows a modular repository pattern, organizing the codebase into independently manageable modules for improved maintainability and scalability.',
  'Quick Steps successfully automated invoicing, email, and warehouse management processes, significantly enhancing operational efficiency. The platform reduced manual work by automating email communication and invoice handling, minimizing human errors. Real-time inventory tracking provides insights into stock levels, usage, and requirements, streamlining the stocking process. OAuth authentication and role-based access control ensured system security and data integrity, allowing only authorized users to make critical changes. The modular repository pattern made the system scalable, maintainable, and easy to extend. The comprehensive solution streamlined business operations, improved efficiency, and enhanced security, making Quick Steps a powerful tool for managing invoices and warehouse processes.',
  true
);

