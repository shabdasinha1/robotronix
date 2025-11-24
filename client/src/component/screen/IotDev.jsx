import React, { useState, useEffect,useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  Cpu,
  Wifi,
  Shield,
  Code,
  Zap,
  Database,
  Settings,
  Play,
  Download,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

const IotDev = () => {
  const { digitalType } = useParams();

 const tabMap = useMemo(
   () => ({
     "android-iot": "androidIot",
     "low-code-development": "lowCodeDevelopment",
     "rpa-consulting-service": "rpaConsultingService",
     "digital-commerce": "digitalCommerce",
   }),
   []
 );
  const [activeTab, setActiveTab] = useState("androidIot");
  useEffect(() => {
    setActiveTab(tabMap[digitalType] || "androidIot");
  }, [digitalType, tabMap]);

  const content = {
    androidIot: {
      banner: {
        badge: { icon: <Cpu />, text: "Android Things OS" },
        title: "Build the Future with",
        highlight: "Android IoT",
        subtitle:
          "Develop powerful Internet of Things applications with Android's robust ecosystem. Create connected devices that transform how we interact with the world around us.",
        ctas: [
          { text: "Start Building", icon: <Play />, type: "primary" },
          { text: "Download SDK", icon: <Download />, type: "secondary" },
        ],
      },
      tiles: [
        { icon: <Wifi />, label: "Smart Home" },
        { icon: <Shield />, label: "Security" },
        { icon: <Zap />, label: "Energy" },
        { icon: <Database />, label: "Analytics" },
      ],
      capabilities: {
        title: "Why Choose Android IoT?",
        description:
          "Leverage the power of Android's mature ecosystem for your IoT projects",
        items: [
          {
            icon: <Code />,
            title: "Familiar Development",
            description:
              "Use existing Android development skills and tools to build IoT applications rapidly.",
          },
          {
            icon: <Shield />,
            title: "Enterprise Security",
            description:
              "Built-in security features and regular updates keep your IoT devices protected.",
          },
          {
            icon: <Wifi />,
            title: "Seamless Connectivity",
            description:
              "Native support for WiFi, Bluetooth, and cellular connectivity options.",
          },
          {
            icon: <Settings />,
            title: "Rich Hardware APIs",
            description:
              "Access GPIO, I2C, SPI, and other hardware interfaces with simple APIs.",
          },
        ],
      },
      demo: {
        title: "Simple. Powerful. Scalable.",
        description:
          "Get started with just a few lines of code. Android IoT makes hardware interaction intuitive.",
        features: [
          { icon: <Zap />, label: "GPIO Control" },
          { icon: <Database />, label: "Sensor Data" },
          { icon: <Wifi />, label: "Cloud Integration" },
        ],
        code: `public class MainActivity extends Activity {
  private Gpio ledGpio;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    PeripheralManager manager = PeripheralManager.getInstance();

    try {
      ledGpio = manager.openGpio("BCM18");
      ledGpio.setDirection(Gpio.DIRECTION_OUT_INITIALLY_LOW);

      Handler handler = new Handler();
      handler.postDelayed(new Runnable() {
        boolean ledState = false;

        @Override
        public void run() {
          try {
            ledGpio.setValue(ledState);
            ledState = !ledState;
          } catch (IOException e) {
            Log.e(TAG, "Error toggling LED", e);
          }
          handler.postDelayed(this, 1000);
        }
      }, 1000);

    } catch (IOException e) {
      Log.e(TAG, "Error initializing GPIO", e);
    }
  }
}`,
      },
      resources: {
        title: "Development Tools & Resources",
        description:
          "Everything you need to build, test, and deploy your IoT solutions",
        cards: [
          {
            title: "Android Studio",
            badge: "Free",
            description:
              "Full-featured IDE with IoT project templates and device emulation.",
            actions: [
              { label: "Download", icon: <Download /> },
              { label: "Learn More", icon: <ExternalLink />, outline: true },
            ],
          },
          {
            title: "IoT Developer Console",
            badge: "Cloud",
            description:
              "Manage device fleets, monitor performance, and deploy updates remotely.",
            actions: [{ label: "Open Console", icon: <ExternalLink /> }],
          },
          {
            title: "Hardware Abstraction Layer",
            badge: "Library",
            description:
              "Simplified APIs for common IoT hardware components and sensors.",
            actions: [{ label: "View Docs", icon: <Code /> }],
          },
        ],
      },
      cta: {
        title: "Ready to Start Building?",
        description:
          "Join thousands of developers creating the next generation of connected devices.",
        metrics: [
          { value: "50K+", label: "Active Developers" },
          { value: "1M+", label: "Devices Deployed" },
          { value: "99.9%", label: "Uptime" },
        ],
        actions: [
          {
            label: "Get Started",
            type: "primary",
            link: "/contact-us",
          },
        ],
      },
    },

    lowCodeDevelopment: {
      banner: {
        badge: { icon: <Settings />, text: "Low Code Platform" },
        title: "Accelerate Innovation with",
        highlight: "Low Code Development",
        subtitle:
          "Quickly build and deploy applications with minimal hand-coding. Empower business users and developers to create scalable solutions together.",
        ctas: [
          { text: "Try Builder", icon: <Play />, type: "primary" },
          { text: "Request Demo", icon: <ExternalLink />, type: "secondary" },
        ],
      },
      tiles: [
        { icon: <Settings />, label: "Drag & Drop Builder" },
        { icon: <Code />, label: "Custom Code Support" },
        { icon: <Shield />, label: "Enterprise Security" },
        { icon: <Database />, label: "Data Integration" },
      ],
      capabilities: {
        title: "Why Choose Low Code?",
        description:
          "Deliver digital solutions faster while maintaining flexibility and governance.",
        items: [
          {
            icon: <Zap />,
            title: "Rapid Prototyping",
            description:
              "Turn ideas into interactive prototypes in hours, not weeks.",
          },
          {
            icon: <Code />,
            title: "Developer Extensibility",
            description:
              "Integrate custom components and code for unique business logic.",
          },
          {
            icon: <Database />,
            title: "Seamless Data Connectivity",
            description:
              "Connect to APIs, databases, and cloud systems with ease.",
          },
          {
            icon: <Shield />,
            title: "Security & Compliance",
            description:
              "Maintain enterprise-grade security, user access, and audit controls.",
          },
        ],
      },
      demo: {
        title: "From Idea to App — Fast.",
        description:
          "Start building functional apps through a visual interface. Customize where needed using built-in scripting support.",
        features: [
          { icon: <Settings />, label: "Workflow Automation" },
          { icon: <Wifi />, label: "Live Previews" },
          { icon: <Code />, label: "Reusable Components" },
        ],
        code: `function handleFormSubmit(data) {
  if (data.email && data.name) {
    sendToCRM(data);
    notifyUser("Form submitted successfully!");
  } else {
    showError("Please fill all required fields.");
  }
}`,
      },
      resources: {
        title: "Low Code Tools & Resources",
        description:
          "Everything you need to empower your team with visual development tools.",
        cards: [
          {
            title: "Visual App Designer",
            badge: "Builder",
            description:
              "Create interfaces and workflows using intuitive drag-and-drop tools.",
            actions: [
              { label: "Launch Builder", icon: <Play /> },
              { label: "See Templates", icon: <ExternalLink />, outline: true },
            ],
          },
          {
            title: "App Analytics Dashboard",
            badge: "Analytics",
            description:
              "Track user interactions, performance metrics, and KPIs in real-time.",
            actions: [{ label: "Open Dashboard", icon: <ExternalLink /> }],
          },
          {
            title: "Integration Hub",
            badge: "Library",
            description:
              "Access ready-to-use connectors for 3rd-party apps and APIs.",
            actions: [{ label: "Browse Hub", icon: <Download /> }],
          },
        ],
      },
      cta: {
        title: "Empower Your Team with Low Code",
        description:
          "Start building impactful apps today—no heavy coding required.",
        metrics: [
          { value: "80%", label: "Faster Time to Market" },
          { value: "60%", label: "Reduced Development Cost" },
          { value: "100+", label: "Prebuilt Components" },
        ],
        actions: [
          {
            label: "Get Started",
            type: "primary",
            link: "/contact-us",
          },
        ],
      },
    },

    rpaConsultingService: {
      banner: {
        badge: { icon: <Settings />, text: "RPA Consulting" },
        title: "Automate Smartly with",
        highlight: "RPA Consulting Service",
        subtitle:
          "Streamline repetitive tasks and enhance productivity with Robotic Process Automation. Our consulting helps identify, build, and scale RPA solutions tailored to your business.",
        ctas: [
          { text: "Get a Consultation", icon: <Play />, type: "primary" },
          { text: "See Use Cases", icon: <ExternalLink />, type: "secondary" },
        ],
      },
      tiles: [
        { icon: <Zap />, label: "Process Automation" },
        { icon: <Code />, label: "Custom Bots" },
        { icon: <Shield />, label: "Compliance Ready" },
        { icon: <Database />, label: "Data Accuracy" },
      ],
      capabilities: {
        title: "Why RPA Consulting?",
        description:
          "Accelerate business efficiency with intelligent automation strategies and tools.",
        items: [
          {
            icon: <Settings />,
            title: "Tailored Workflows",
            description:
              "Design automation specific to your industry, tools, and team operations.",
          },
          {
            icon: <Code />,
            title: "Bot Development",
            description:
              "Develop bots for rule-based tasks and integrate them with your existing systems.",
          },
          {
            icon: <Zap />,
            title: "Increased Productivity",
            description:
              "Automate mundane processes and allow teams to focus on higher-value work.",
          },
          {
            icon: <Shield />,
            title: "Governance & Security",
            description:
              "Ensure data protection and audit trails throughout all automation workflows.",
          },
        ],
      },
      demo: {
        title: "Smarter Processes, Less Effort.",
        description:
          "Visualize, simulate, and implement robotic automation using best-in-class tools.",
        features: [
          { icon: <Wifi />, label: "Workflow Orchestration" },
          { icon: <Code />, label: "Custom Scripting" },
          { icon: <Database />, label: "Reporting & Logs" },
        ],
        code: `bot.on('invoice_received', (data) => {
  if (data.isValid) {
    generateApprovalTask(data);
    notifyTeam(data.invoiceId);
  }
});`,
      },
      resources: {
        title: "RPA Tools & Resources",
        description:
          "From discovery to deployment—everything needed for automation success.",
        cards: [
          {
            title: "Process Discovery Toolkit",
            badge: "Toolkit",
            description:
              "Map processes and identify automation candidates using visual tools.",
            actions: [
              { label: "Download Toolkit", icon: <Download /> },
              { label: "Learn More", icon: <ExternalLink />, outline: true },
            ],
          },
          {
            title: "Bot Builder Studio",
            badge: "Studio",
            description:
              "Drag-and-drop bot creation with scripting for advanced workflows.",
            actions: [{ label: "Try Studio", icon: <Play /> }],
          },
          {
            title: "Analytics Center",
            badge: "Analytics",
            description:
              "Monitor bot performance, task volume, and ROI from a single dashboard.",
            actions: [{ label: "View Dashboard", icon: <ExternalLink /> }],
          },
        ],
      },
      cta: {
        title: "Let’s Automate Together",
        description:
          "Start small, scale fast—let our experts help you automate for growth.",
        metrics: [
          { value: "500+", label: "Processes Automated" },
          { value: "85%", label: "Efficiency Boost" },
          { value: "0%", label: "Human Error" },
        ],
        actions: [
          {
            label: "Get Started",
            type: "primary",
            link: "/contact-us",
          },
        ],
      },
    },
    digitalCommerce: {
      banner: {
        badge: { icon: <Database />, text: "Digital Commerce" },
        title: "Transform Retail with",
        highlight: "Digital Commerce Solutions",
        subtitle:
          "Deliver seamless online shopping experiences through robust commerce platforms, integrations, and user journeys tailored to your audience.",
        ctas: [
          { text: "View Demo Store", icon: <Play />, type: "primary" },
          { text: "Contact Sales", icon: <ExternalLink />, type: "secondary" },
        ],
      },
      tiles: [
        { icon: <Wifi />, label: "Omnichannel Sync" },
        { icon: <Code />, label: "Custom Checkout" },
        { icon: <Shield />, label: "Secure Payments" },
        { icon: <Settings />, label: "Inventory Automation" },
      ],
      capabilities: {
        title: "Why Digital Commerce?",
        description:
          "Boost conversions, expand reach, and deliver exceptional digital storefronts.",
        items: [
          {
            icon: <Zap />,
            title: "Fast Go-To-Market",
            description:
              "Launch new storefronts quickly with scalable infrastructure.",
          },
          {
            icon: <Wifi />,
            title: "Integrated Channels",
            description:
              "Sync with marketplaces, POS, and CRMs for unified operations.",
          },
          {
            icon: <Shield />,
            title: "PCI-Compliant Payments",
            description:
              "Ensure safe and secure checkout experiences for your customers.",
          },
          {
            icon: <Settings />,
            title: "Customizable Workflows",
            description:
              "Tailor the buyer journey to match your brand and product complexity.",
          },
        ],
      },
      demo: {
        title: "From Cart to Checkout — Seamlessly.",
        description:
          "Experience blazing-fast storefronts with secure, mobile-optimized UX.",
        features: [
          { icon: <Play />, label: "Live Preview" },
          { icon: <Code />, label: "API-Based Checkout" },
          { icon: <Database />, label: "Order Management" },
        ],
        code: `const handleAddToCart = (productId) => {
  cart.add(productId);
  updateCartUI();
  notify("Product added to cart!");
};`,
      },
      resources: {
        title: "Commerce Resources",
        description:
          "All the tools and docs you need to succeed in digital commerce.",
        cards: [
          {
            title: "Commerce Platform Guide",
            badge: "Docs",
            description:
              "Learn best practices and architecture tips for scalable commerce systems.",
            actions: [{ label: "Read Docs", icon: <ExternalLink /> }],
          },
          {
            title: "Marketing Integrations",
            badge: "Tools",
            description:
              "Connect email, SMS, CRM, and analytics tools easily with your store.",
            actions: [
              { label: "Explore Tools", icon: <Download /> },
              {
                label: "Integration Docs",
                icon: <ExternalLink />,
                outline: true,
              },
            ],
          },
          {
            title: "Developer SDKs",
            badge: "SDK",
            description:
              "Use prebuilt SDKs for React, Vue, or native mobile to accelerate builds.",
            actions: [{ label: "Download SDK", icon: <Download /> }],
          },
        ],
      },
      cta: {
        title: "Start Selling Smarter",
        description:
          "Build high-converting digital experiences with our powerful commerce toolkit.",
        metrics: [
          { value: "99.99%", label: "Uptime Guarantee" },
          { value: "24/7", label: "Support Access" },
          { value: "500K+", label: "Orders Processed" },
        ],
        actions: [
          {
            label: "Get Started",
            type: "primary",
            link: "/contact-us",
          },
        ],
      },
    },
  };
  const currentContent = content[activeTab];

  if (!currentContent) return null;

  return (
    <div className="iot-page">
      {/* Banner */}
      <section className="iot-banner">
        <div className="iot-banner__wrapper">
          <div className="iot-banner__content">
            <div className="android-badge">
              <span className="android-badge__icon">
                {currentContent.banner.badge.icon}
              </span>
              <span>{currentContent.banner.badge.text}</span>
            </div>
            <h1 className="iot-banner__headline">
              {currentContent.banner.title}
              <span className="iot-banner__headline--accent">
                {" "}
                {currentContent.banner.highlight}
              </span>
            </h1>
            <p className="iot-banner__subtitle">
              {currentContent.banner.subtitle}
            </p>
            <div className="iot-banner__cta-group">
              {/* {currentContent.banner.ctas.map((cta, idx) => (
                <button key={idx} className={`iot-btn iot-btn--${cta.type}`}>
                  {cta.icon} {cta.text}
                </button>
              ))} */}
            </div>
          </div>
          <div className="iot-banner__showcase">
            <div className="device-showcase">
              {currentContent.tiles.map((tile, idx) => (
                <div className="device-tile" key={idx}>
                  <span className="device-tile__icon">{tile.icon}</span>
                  <span>{tile.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="iot-capabilities">
        <div className="iot-capabilities__container">
          <div className="content-header">
            <h2 className="content-header__title">
              {currentContent.capabilities.title}
            </h2>
            <p className="content-header__description">
              {currentContent.capabilities.description}
            </p>
          </div>
          <div className="iot-capabilities__grid">
            {currentContent.capabilities.items.map((item, idx) => (
              <div className="capability-card" key={idx}>
                <div className="capability-card__icon-container">
                  {item.icon}
                </div>
                <h3 className="capability-card__title">{item.title}</h3>
                <p className="capability-card__description">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="development-demo">
        <div className="development-demo__container">
          <div className="development-demo__content">
            <h2 className="development-demo__title">
              {currentContent.demo.title}
            </h2>
            <p className="development-demo__description">
              {currentContent.demo.description}
            </p>
            <div className="demo-features">
              {currentContent.demo.features.map((feat, idx) => (
                <div className="demo-feature" key={idx}>
                  <div className="demo-feature__icon">{feat.icon}</div>
                  <span>{feat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="development-demo__example">
            <div className="code-showcase">
              <div className="code-showcase__header">
                <div className="code-showcase__dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="code-showcase__title">MainActivity.java</span>
              </div>
              <pre className="code-showcase__content">
                {currentContent.demo.code}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="developer-resources">
        <div className="developer-resources__container">
          <div className="content-header">
            <h2 className="content-header__title">
              {currentContent.resources.title}
            </h2>
            <p className="content-header__description">
              {currentContent.resources.description}
            </p>
          </div>
          <div className="developer-resources__grid">
            {currentContent.resources.cards.map((card, idx) => (
              <div className="resource-card" key={idx}>
                <div className="resource-card__header">
                  <h3 className="resource-card__title">{card.title}</h3>
                  <div className={`resource-card__badge`}>{card.badge}</div>
                </div>
                <p className="resource-card__description">{card.description}</p>
                <div className="resource-card__actions"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="final-cta__container">
          <div className="final-cta__content">
            <h2 className="final-cta__title">{currentContent.cta.title}</h2>
            <p className="final-cta__description">
              {currentContent.cta.description}
            </p>
            <div className="final-cta__metrics">
              {currentContent.cta.metrics.map((m, idx) => (
                <div className="metric" key={idx}>
                  <div className="metric__value">{m.value}</div>
                  <div className="metric__label">{m.label}</div>
                </div>
              ))}
            </div>
            <div className="final-cta__actions">
              {currentContent.cta.actions.map((a, idx) => (
                <Link key={idx} to={a.link || "#"}>
                  <button
                    className={`iot-btn iot-btn--${a.type} iot-btn--large`}
                  >
                    {a.icon} {a.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IotDev;
