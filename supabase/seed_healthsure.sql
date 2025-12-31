-- Seeder for Health Sure Health Insurance Platform Project
-- Run this SQL script in your Supabase SQL Editor to add the Health Sure project

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
  'Health Sure',
  'health-sure',
  'Offering a full range of medical services designed to enhance patient care and improve health outcomes.',
  'The platform offers comprehensive health insurance using a microservices architecture, where each service is independently deployable and scalable. Angular is used for the front-end, and Node.js with Nest.js handles the back-end services. SQL Server securely stores user data, including health records and insurance details. The system complies with CCHI and SAMA regulations to ensure secure operations. The Telehealth Project improves healthcare access with Zoom for remote consultations and Angular for a user-friendly interface. Node.js and Nest.js enable backend services for appointment scheduling and data management, while SQL Server handles electronic health records (EHRs). Azure provides cloud infrastructure, ensuring secure and scalable data storage and access. By utilizing Azure for scalable cloud services and Zoom for virtual consultations, the platform breaks geographical and mobility barriers to healthcare, making services accessible anywhere. The platform leverages microservices to isolate functionality and improve scalability, while Jenkins automates deployment and testing, ensuring continuous updates and stability.',
  'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ARRAY[]::TEXT[],
  ARRAY[
    'Angular',
    'Node.js',
    'Nest.js',
    'SQL Server',
    'Azure',
    'Zoom',
    'Jenkins',
    'API Gateway',
    'Microservices',
    'CCHI Compliance',
    'SAMA Compliance'
  ],
  NULL,
  NULL,
  'Healthcare access faces significant barriers including geographical limitations, mobility constraints, and fragmented services. Traditional health insurance platforms lack the scalability and flexibility needed to serve diverse populations efficiently. Patients in remote areas struggle to access quality healthcare services, while healthcare providers need better tools for appointment scheduling, patient record management, and regulatory compliance. Existing systems often fail to provide seamless integration between insurance services and telehealth capabilities, making it challenging to deliver comprehensive care. The lack of regulatory compliance (CCHI and SAMA) and scalable architecture limits the ability to serve large populations effectively.',
  'Health Sure provides a comprehensive health insurance platform with integrated telehealth capabilities using a modern microservices architecture. The solution includes a scalable microservices architecture where each service is independently deployable and scalable, enabling better resource management and system reliability. Angular powers the front-end, delivering dynamic and responsive user interfaces across all devices. Node.js with Nest.js handles backend services, organizing application logic with a modular architecture for appointment scheduling, data management, and API services. SQL Server securely stores user data, health records, and insurance details with strong transactional capabilities. Zoom integration enables remote consultations, breaking geographical and mobility barriers to healthcare access. Azure cloud infrastructure provides secure, scalable data storage and real-time data processing. The platform ensures compliance with CCHI and SAMA regulations, meeting Saudi Arabia''s healthcare regulatory requirements. Jenkins automates deployment and testing processes, ensuring continuous updates and system stability. API Gateway handles incoming requests and routes them efficiently across microservices.',
  'Health Sure successfully delivered a comprehensive health insurance and telehealth platform that transformed healthcare access across Saudi Arabia. The microservices architecture enabled scalable, independent services that improved system reliability and performance. The platform broke geographical and mobility barriers by providing remote consultations through Zoom integration, making healthcare services accessible anywhere. Angular''s responsive interface ensured a smooth user experience across all devices. The integrated telehealth project improved healthcare access, allowing patients to schedule appointments and access consultations remotely. Regulatory compliance with CCHI and SAMA regulations ensured secure operations and adherence to Saudi Arabia''s healthcare standards. Azure cloud infrastructure provided scalable, secure data storage and real-time processing capabilities. Jenkins automation streamlined deployment and testing, ensuring continuous updates and system stability. The platform now serves as a comprehensive solution for health insurance and telehealth services, enhancing patient outcomes and improving healthcare delivery efficiency across the region.',
  true
);

