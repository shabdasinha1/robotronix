import React from "react";
const learningContent = [
  {
    id: "html-fundamentals",
    title: "HTML Fundamentals",
    description:
      "Learn the building blocks of web development with HTML. Understand semantic markup, document structure, and accessibility best practices.",
    image:
      "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=400",
    topics: ["Semantic HTML", "Forms & Input", "Accessibility", "Meta Tags"],
    difficulty: "Beginner",
    category: "markup",
  },
  {
    id: "css-styling",
    title: "CSS Styling & Layout",
    description:
      "Master the art of styling with CSS. From basic properties to advanced layouts using Flexbox and Grid systems.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
    topics: ["Flexbox", "CSS Grid", "Responsive Design", "Animations"],
    difficulty: "Intermediate",
    category: "styling",
  },
  {
    id: "javascript-programming",
    title: "JavaScript Programming",
    description:
      "Dive into dynamic programming with JavaScript. Learn ES6+ features, DOM manipulation, and modern JavaScript concepts.",
    image:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
    topics: ["ES6+ Features", "DOM Manipulation", "Async Programming", "APIs"],
    difficulty: "Intermediate",
    category: "programming",
  },
  {
    id: "react-framework",
    title: "React Framework",
    description:
      "Build modern user interfaces with React. Understand components, state management, and the React ecosystem.",
    image:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400",
    topics: ["Components", "Hooks", "State Management", "Routing"],
    difficulty: "Advanced",
    category: "framework",
  },
  {
    id: "responsive-design",
    title: "Responsive Web Design",
    description:
      "Create websites that work perfectly on all devices. Learn mobile-first design principles and modern layout techniques.",
    image:
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
    topics: [
      "Mobile-First",
      "Breakpoints",
      "Flexible Layouts",
      "Touch Interface",
    ],
    difficulty: "Intermediate",
    category: "design",
  },
  {
    id: "web-performance",
    title: "Web Performance",
    description:
      "Optimize your websites for speed and efficiency. Learn about loading strategies, caching, and performance metrics.",
    image:
      "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400",
    topics: [
      "Core Web Vitals",
      "Lazy Loading",
      "Caching",
      "Bundle Optimization",
    ],
    difficulty: "Advanced",
    category: "optimization",
  },
  {
    id: "nodejs-backend",
    title: "Node.js Backend Development",
    description:
      "Build scalable server-side applications with Node.js. Learn about APIs, databases, authentication, and server architecture.",
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    topics: [
      "Express.js",
      "REST APIs",
      "Database Integration",
      "Authentication",
    ],
    difficulty: "Advanced",
    category: "backend",
  },
  {
    id: "version-control",
    title: "Git & Version Control",
    description:
      "Master version control with Git. Learn branching strategies, collaboration workflows, and best practices for team development.",
    image:
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
    topics: ["Git Commands", "Branching", "Merging", "GitHub Workflow"],
    difficulty: "Intermediate",
    category: "tools",
  },
  {
    id: "database-management",
    title: "Database Management",
    description:
      "Understand database concepts and management. Learn SQL, NoSQL databases, data modeling, and database optimization techniques.",
    image:
      "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400",
    topics: ["SQL Queries", "Database Design", "MongoDB", "Data Relationships"],
    difficulty: "Intermediate",
    category: "database",
  },
  {
    id: "web-security",
    title: "Web Security Fundamentals",
    description:
      "Protect your applications from common vulnerabilities. Learn about HTTPS, authentication, authorization, and security best practices.",
    image:
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400",
    topics: [
      "HTTPS/SSL",
      "Authentication",
      "XSS Prevention",
      "CSRF Protection",
    ],
    difficulty: "Advanced",
    category: "security",
  },
  {
    id: "devops-deployment",
    title: "DevOps & Deployment",
    description:
      "Learn modern deployment strategies and DevOps practices. Understand CI/CD pipelines, containerization, and cloud platforms.",
    image:
      "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400",
    topics: ["CI/CD Pipelines", "Docker", "Cloud Deployment", "Monitoring"],
    difficulty: "Advanced",
    category: "devops",
  },
  {
    id: "python-programming",
    title: "Python Programming",
    description:
      "Learn Python from basics to advanced concepts. Understand data types, control structures, OOP, and file handling.",
    image:
      "https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=400",
    topics: ["Syntax & Data Types", "Functions", "OOP", "File Handling"],
    difficulty: "Beginner",
    category: "programming",
  },
  {
    id: "ml-with-python",
    title: "Machine Learning with Python",
    description:
      "Dive into machine learning using Python. Learn about data preprocessing, supervised and unsupervised learning, and model evaluation.",
    image:
      "https://images.pexels.com/photos/1181315/pexels-photo-1181315.jpeg?auto=compress&cs=tinysrgb&w=400",
    topics: ["NumPy", "Pandas", "Scikit-learn", "Model Evaluation"],
    difficulty: "Advanced",
    category: "machine-learning",
  },
  {
    id: "flutter-development",
    title: "Flutter Development",
    description:
      "Build cross-platform mobile applications using Flutter. Learn about widgets, state management, and app deployment.",
    image:
      "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=400",
    topics: ["Widgets", "Dart Basics", "State Management", "App Deployment"],
    difficulty: "Intermediate",
    category: "mobile",
  },
  {
    id: "bootstrap-framework",
    title: "Bootstrap Framework",
    description:
      "Quickly design responsive websites using Bootstrap. Learn about the grid system, components, utilities, and customization.",
    image:
      "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=400",
    topics: ["Grid System", "Components", "Utilities", "Customization"],
    difficulty: "Beginner",
    category: "framework",
  },
];


const categoryColors = {
  markup: "learning-card-category-markup",
  styling: "learning-card-category-styling",
  programming: "learning-card-category-programming",
  framework: "learning-card-category-framework",
  design: "learning-card-category-design",
  optimization: "learning-card-category-optimization",
  backend: "learning-card-category-backend",
  tools: "learning-card-category-tools",
  database: "learning-card-category-database",
  security: "learning-card-category-security",
  devops: "learning-card-category-devops",
};

const difficultyLevels = {
  Beginner: "learning-difficulty-beginner",
  Intermediate: "learning-difficulty-intermediate",
  Advanced: "learning-difficulty-advanced",
};
const OnlineLearning = () => {
  return (
    <>
      <main className="learning-platform-container">
        <section className="learning-hero-section">
          <div className="learning-hero-content">
            <h1 className="learning-main-title">
              Web Development Learning Hub
            </h1>
            <p className="learning-hero-description">
              Master modern web development with comprehensive guides and
              resources. Build your skills from HTML basics to advanced React
              applications.
            </p>
          </div>
        </section>

        <section className="learning-content-section">
          <div className="learning-content-wrapper">
            <div className="learning-section-header">
              <h2 className="learning-section-title">
                Featured Learning Topics
              </h2>
              <p className="learning-section-subtitle">
                Explore essential web development technologies and concepts
              </p>
            </div>

            <div className="learning-cards-grid">
              {learningContent.map((item) => (
                <article key={item.id} className="learning-content-card">
                  <div className="learning-card-image-container">
                    <img
                      src={item.image}
                      alt={`${item.title} illustration`}
                      className="learning-card-image"
                      loading="lazy"
                    />
                    <div
                      className={`learning-card-category ${
                        categoryColors[item.category]
                      }`}
                    >
                      {item.category}
                    </div>
                  </div>

                  <div className="learning-card-content">
                    <div className="learning-card-header">
                      <h3 className="learning-card-title">{item.title}</h3>

                      <span
                        className={`learning-card-difficulty ${
                          difficultyLevels[item.difficulty]
                        }`}
                      >
                        {item.difficulty}
                      </span>
                    </div>

                    <p className="learning-card-description">
                      {item.description}
                    </p>

                    <div className="learning-card-topics">
                      <h4 className="learning-topics-title">Key Topics:</h4>
                      <ul className="learning-topics-list">
                        {item.topics.map((topic, index) => (
                          <li key={index} className="learning-topic-item">
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tech-timeline-section">
          <div className="timeline-container">
            <div className="timeline-header">
              <h2 className="timeline-main-title">Advanced Web Technologies</h2>
              <p className="timeline-subtitle">
                Explore cutting-edge technologies shaping the future of web
                development
              </p>
            </div>

            <div className="timeline-wrapper">
              <div className="timeline-line"></div>

              <div className="timeline-item timeline-left">
                <div className="timeline-content">
                  <div className="timeline-icon timeline-icon-ai">AI</div>
                  <h3 className="timeline-title">AI & Machine Learning</h3>
                  <p className="timeline-description">
                    Integrate artificial intelligence into web applications.
                    Learn about TensorFlow.js, natural language processing,
                    computer vision, and building intelligent user experiences.
                  </p>
                  <div className="timeline-skills">
                    <span className="timeline-skill">TensorFlow.js</span>
                    <span className="timeline-skill">Neural Networks</span>
                    <span className="timeline-skill">NLP</span>
                    <span className="timeline-skill">Computer Vision</span>
                  </div>
                </div>
              </div>

              <div className="timeline-item timeline-right">
                <div className="timeline-content">
                  <div className="timeline-icon timeline-icon-blockchain">
                    ₿
                  </div>
                  <h3 className="timeline-title">Blockchain & Web3</h3>
                  <p className="timeline-description">
                    Build decentralized applications (dApps) and understand
                    blockchain technology. Learn smart contracts, cryptocurrency
                    integration, and the decentralized web ecosystem.
                  </p>
                  <div className="timeline-skills">
                    <span className="timeline-skill">Smart Contracts</span>
                    <span className="timeline-skill">Ethereum</span>
                    <span className="timeline-skill">DApps</span>
                    <span className="timeline-skill">Web3.js</span>
                  </div>
                </div>
              </div>

              <div className="timeline-item timeline-left">
                <div className="timeline-content">
                  <div className="timeline-icon timeline-icon-pwa">📱</div>
                  <h3 className="timeline-title">Progressive Web Apps</h3>
                  <p className="timeline-description">
                    Create app-like experiences on the web. Master service
                    workers, offline functionality, push notifications, and
                    native device integration for modern web applications.
                  </p>
                  <div className="timeline-skills">
                    <span className="timeline-skill">Service Workers</span>
                    <span className="timeline-skill">Offline Storage</span>
                    <span className="timeline-skill">Push Notifications</span>
                    <span className="timeline-skill">App Manifest</span>
                  </div>
                </div>
              </div>

              <div className="timeline-item timeline-right">
                <div className="timeline-content">
                  <div className="timeline-icon timeline-icon-micro">🔧</div>
                  <h3 className="timeline-title">Microservices Architecture</h3>
                  <p className="timeline-description">
                    Design scalable distributed systems using microservices
                    patterns. Learn about API gateways, service mesh,
                    containerization, and building resilient architectures.
                  </p>
                  <div className="timeline-skills">
                    <span className="timeline-skill">API Gateway</span>
                    <span className="timeline-skill">Service Mesh</span>
                    <span className="timeline-skill">Kubernetes</span>
                    <span className="timeline-skill">Load Balancing</span>
                  </div>
                </div>
              </div>

              <div className="timeline-item timeline-left">
                <div className="timeline-content">
                  <div className="timeline-icon timeline-icon-iot">🌐</div>
                  <h3 className="timeline-title">IoT & Edge Computing</h3>
                  <p className="timeline-description">
                    Connect web applications to Internet of Things devices.
                    Learn about edge computing, real-time data processing,
                    sensor integration, and building connected experiences.
                  </p>
                  <div className="timeline-skills">
                    <span className="timeline-skill">MQTT Protocol</span>
                    <span className="timeline-skill">Edge Computing</span>
                    <span className="timeline-skill">Sensor Data</span>
                    <span className="timeline-skill">Real-time Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="learning-stats-section">
          <div className="learning-stats-container">
            <div className="learning-stat-item">
              <h3 className="learning-stat-number">50+</h3>
              <p className="learning-stat-label">Topics Covered</p>
            </div>
            <div className="learning-stat-item">
              <h3 className="learning-stat-number">100%</h3>
              <p className="learning-stat-label">Free Content</p>
            </div>
            <div className="learning-stat-item">
              <h3 className="learning-stat-number">24/7</h3>
              <p className="learning-stat-label">Available Access</p>
            </div>
          </div>
        </section>
        <section className="advanced-topics-section">
          <div className="advanced-topics-container">
            <div className="advanced-section-header">
              <h2 className="advanced-section-title">
                Specialized Development Areas
              </h2>
              <p className="advanced-section-subtitle">
                Explore specialized fields and emerging technologies in modern
                development
              </p>
            </div>

            <div className="advanced-topics-grid">
              <div className="advanced-topic-card advanced-card-mobile">
                <div className="advanced-card-icon">📱</div>
                <h3 className="advanced-card-title">Mobile Development</h3>
                <p className="advanced-card-description">
                  Build native and cross-platform mobile applications using
                  React Native, Flutter, and native iOS/Android development.
                  Learn mobile-specific design patterns, performance
                  optimization, and app store deployment strategies.
                </p>
                <div className="advanced-card-features">
                  <span className="advanced-feature-tag">React Native</span>
                  <span className="advanced-feature-tag">Flutter</span>
                  <span className="advanced-feature-tag">iOS/Android</span>
                  <span className="advanced-feature-tag">App Store</span>
                </div>
              </div>

              <div className="advanced-topic-card advanced-card-cloud">
                <div className="advanced-card-icon">☁️</div>
                <h3 className="advanced-card-title">Cloud Computing</h3>
                <p className="advanced-card-description">
                  Master cloud platforms like AWS, Azure, and Google Cloud.
                  Learn about serverless architecture, cloud storage, CDNs,
                  auto-scaling, and building resilient cloud-native applications
                  with modern deployment strategies.
                </p>
                <div className="advanced-card-features">
                  <span className="advanced-feature-tag">AWS</span>
                  <span className="advanced-feature-tag">Azure</span>
                  <span className="advanced-feature-tag">Serverless</span>
                  <span className="advanced-feature-tag">Auto-scaling</span>
                </div>
              </div>

              <div className="advanced-topic-card advanced-card-testing">
                <div className="advanced-card-icon">🧪</div>
                <h3 className="advanced-card-title">
                  Testing & Quality Assurance
                </h3>
                <p className="advanced-card-description">
                  Implement comprehensive testing strategies including unit
                  testing, integration testing, end-to-end testing, and
                  test-driven development. Learn popular testing frameworks and
                  automated testing pipelines for reliable software delivery.
                </p>
                <div className="advanced-card-features">
                  <span className="advanced-feature-tag">Jest</span>
                  <span className="advanced-feature-tag">Cypress</span>
                  <span className="advanced-feature-tag">TDD</span>
                  <span className="advanced-feature-tag">Automation</span>
                </div>
              </div>

              <div className="advanced-topic-card advanced-card-data">
                <div className="advanced-card-icon">📊</div>
                <h3 className="advanced-card-title">
                  Data Science & Analytics
                </h3>
                <p className="advanced-card-description">
                  Integrate data science concepts into web applications. Learn
                  data visualization, statistical analysis, machine learning
                  integration, and building data-driven applications with modern
                  analytics tools and frameworks.
                </p>
                <div className="advanced-card-features">
                  <span className="advanced-feature-tag">D3.js</span>
                  <span className="advanced-feature-tag">Python</span>
                  <span className="advanced-feature-tag">Analytics</span>
                  <span className="advanced-feature-tag">Visualization</span>
                </div>
              </div>

              <div className="advanced-topic-card advanced-card-ui">
                <div className="advanced-card-icon">🎨</div>
                <h3 className="advanced-card-title">UI/UX Design Systems</h3>
                <p className="advanced-card-description">
                  Create comprehensive design systems and component libraries.
                  Learn design tokens, accessibility standards, user research
                  methodologies, and tools like Figma, Sketch, and Adobe XD for
                  professional interface design.
                </p>
                <div className="advanced-card-features">
                  <span className="advanced-feature-tag">Design Systems</span>
                  <span className="advanced-feature-tag">Figma</span>
                  <span className="advanced-feature-tag">Accessibility</span>
                  <span className="advanced-feature-tag">User Research</span>
                </div>
              </div>

              <div className="advanced-topic-card advanced-card-performance">
                <div className="advanced-card-icon">⚡</div>
                <h3 className="advanced-card-title">Performance Engineering</h3>
                <p className="advanced-card-description">
                  Optimize application performance at every level. Learn about
                  code splitting, lazy loading, caching strategies, CDN
                  implementation, database optimization, and monitoring tools
                  for high-performance web applications.
                </p>
                <div className="advanced-card-features">
                  <span className="advanced-feature-tag">Code Splitting</span>
                  <span className="advanced-feature-tag">Caching</span>
                  <span className="advanced-feature-tag">CDN</span>
                  <span className="advanced-feature-tag">Monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default OnlineLearning;
