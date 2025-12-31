-- Seeder for MY PSYCHIATRIST Telepsychiatry Platform Project
-- Run this SQL script in your Supabase SQL Editor to add the MY PSYCHIATRIST project

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
  'MY PSYCHIATRIST',
  'my-psychiatrist',
  'Providing a comprehensive telepsychiatry solution with secure consultations, automated scheduling, pharmacy integration, and seamless patient care management.',
  'Developed a cutting-edge telepsychiatry platform that transforms the mental healthcare experience by offering secure, patient-centered features. The platform enables real-time teleconsultations while ensuring HIPAA-compliant data handling, providing a safe and seamless interaction between doctors and patients through video, chat, and notifications. Designed to improve accessibility and efficiency, it includes key features such as comprehensive patient profiles, medical histories, drug interaction alerts, automated scheduling, online appointment bookings, insurance claims management, pharmacy integration, and Stripe payment processing. The solution empowers healthcare providers to deliver exceptional care while streamlining administrative processes.',
  'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ARRAY[]::TEXT[],
  ARRAY[
    'Nest.js',
    'React',
    'SQL',
    'Socket.io',
    'AWS',
    'Redis',
    'SendGrid',
    'Vonage',
    'Twilio',
    'Stripe',
    'HIPAA Compliance',
    'Video Conferencing',
    'Real-time Communication'
  ],
  NULL,
  NULL,
  'Mental healthcare accessibility remains a significant challenge, with patients facing barriers such as geographical limitations, scheduling difficulties, and privacy concerns. Traditional in-person psychiatric consultations often require extensive travel and long waiting times, limiting access to care. Healthcare providers struggle with administrative burdens, fragmented patient data, and lack of integrated systems for scheduling, billing, and pharmacy coordination. Existing telehealth solutions often lack HIPAA compliance, comprehensive patient management features, and seamless integration with insurance claims and pharmacy systems. The absence of drug interaction alerts and automated scheduling creates additional challenges for both providers and patients.',
  'MY PSYCHIATRIST provides a comprehensive telepsychiatry platform that addresses all aspects of mental healthcare delivery. The solution includes real-time video and chat consultations powered by Vonage and Twilio, enabling immediate access to care regardless of location. HIPAA-compliant data management ensures secure patient information storage and handling, meeting healthcare regulatory requirements. Comprehensive patient profiles with medical histories, treatment plans, and drug interaction alerts help providers make informed decisions and prevent medication conflicts. Automated scheduling and online appointment booking systems streamline the administrative process, reducing wait times and improving accessibility. Insurance claims processing and pharmacy integration create a holistic service experience, connecting all aspects of patient care. Secure Stripe payment integration enables seamless transactions, while SendGrid handles email notifications. The platform features doctor-patient communication tools via video, chat, and push notifications, powered by Socket.io for real-time interactions. AWS cloud infrastructure provides scalable and reliable hosting, while Redis caching enhances performance. Built with Nest.js backend and React frontend, the platform ensures a robust and responsive user experience.',
  'MY PSYCHIATRIST successfully transformed mental healthcare delivery by providing a comprehensive, HIPAA-compliant telepsychiatry platform. The platform significantly improved accessibility to mental health services through real-time video and chat consultations, breaking geographical barriers and reducing wait times. HIPAA-compliant data management ensured secure handling of sensitive patient information, building trust and meeting regulatory requirements. Comprehensive patient profiles with medical histories and drug interaction alerts enhanced care quality and patient safety. Automated scheduling and online appointment booking streamlined administrative processes, improving efficiency for both providers and patients. Insurance claims processing and pharmacy integration created a seamless care experience, connecting all aspects of patient treatment. Secure Stripe payment integration simplified transactions, while real-time communication tools (video, chat, notifications) facilitated effective doctor-patient interactions. The scalable AWS infrastructure ensured reliable performance, while Redis caching optimized system responsiveness. The platform now serves as a trusted solution for telepsychiatry services, empowering healthcare providers to deliver exceptional care while improving accessibility and efficiency in mental healthcare delivery.',
  true
);

