"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [dis, setDis] = useState(false);
  const [que1, setQue1] = useState(false);
  const [que2, setQue2] = useState(false);
  const [que3, setQue3] = useState(false);
  const [que4, setQue4] = useState(false);
  const [que5, setQue5] = useState(false);
  const [que6, setQue6] = useState(false);
  const [system, setSystem] = useState(false);
  const [impl, setImpl] = useState(false);
  const [patner, setPatner] = useState(false);

  const handleClick = () => {
    return router.push("/book/add_lead");
  };

  const cards = [
    {
      title: "Sales",
      items: [
        "Automate lead generation and scoring based on CRM data",
        "Draft personalized follow-up emails to nurture prospects",
        "Generate sales pitches and prepare meeting notes automatically",
        "Track progress through the pipeline and provide real-time analytics",
        "Schedule reminders to reduce no-shows and increase conversions",
        "Handle outbound sales calls to qualify leads and inbound calls to address queries",
      ],
    },
    {
      title: "Customer Success",
      items: [
        "Automate onboarding workflows for new customers",
        "Send proactive notifications for upselling or renewals",
        "Monitor customer feedback and suggest improvements",
        "Provide tailored recommendations based on user behavior",
        "Track customer health scores to reduce churn risk",
        "Manage inbound customer calls for troubleshooting or relationship building",
      ],
    },
    {
      title: "Human Resources",
      items: [
        "Automate job postings and manage applicant tracking systems (ATS)",
        "Screen resumes and rank candidates based on requirements",
        "Schedule interviews and coordinate with managers seamlessly",
        "Generate onboarding checklists for new employees",
        "Create and share employee engagement and retention strategies",
        "Conduct outbound candidate screening calls and schedule interviews efficiently",
      ],
    },
    {
      title: "Operation",
      items: [
        "Keep workflows and data processes running smoothly with automation",
        "Track project milestones and send real-time status updates",
        "Provide performance summaries for departments and teams",
        "Automate routine tasks like reporting and system backups",
        "Identify inefficiencies and recommend optimized workflows",
        "Handle operational inquiries and facilitate vendor communication",
      ],
    },

    {
      title: "Product Development",
      items: [
        "Research customer needs and market trends to inspire new features",
        "Gather and analyze user feedback to refine existing products",
        "Track development milestones and send regular progress updates",
        "Automate testing workflows to ensure product quality",
        "Prepare go-to-market strategies and documentation for new launches",
        "Conduct outbound calls to gather feedback on prototypes",
      ],
    },
    {
      title: "IT and Support",
      items: [
        "Monitor and maintain system performance and uptime",
        "Automate incident tracking and resolution workflows",
        "Provide real-time assistance for technical issues or inquiries",
        "Schedule security updates and data backups",
        "Streamline integration processes for new tools and software",
        "Manage inbound technical support calls and coordinate follow-ups",
      ],
    },
    {
      title: "Finance and Admin",
      items: [
        "Automate invoice generation and payment reminders",
        "Track expenses, profits, and budget forecasts in real time",
        "Prepare financial reports and provide tax-related summaries",
        "Monitor cash flow and alert for unusual activity",
        "Set up workflows for approvals and expense reimbursements",
        "Conduct outbound calls to follow up on overdue payments",
      ],
    },
    {
      title: "Marketing",
      items: [
        "Conduct in-depth audience and competitor research 24/7",
        "Create, schedule, and post engaging content tailored to your brand",
        "Respond instantly to customer messages on social media or email",
        "Generate innovative campaign ideas to stay ahead of market trends",
        "Provide detailed performance reports with suggestions for improvement",
        "Conduct outbound calls for surveys or campaign promotions",
      ],
    },
  ];
  return (
    <>
      <Navbar />
      <section className="home-solution">
        <h1 className="solution-title">
          Deploy AI Agents to Run Your Business on Autopilot
        </h1>
        <p className="solution-subtitle">
          Scale faster without increasing headcount, work smarter, and eliminate
          repetitive tasks — our custom AI agents handle operations, boost
          sales, and streamline workflows 24/7
        </p>

        <div className="solution-flex">
          <button className="solution-btn" onClick={handleClick}>
            Book a call
          </button>
          <button className="solution-btn">Join Community</button>
          <button className="solution-btn">Solutions</button>
        </div>
      </section>
      <section className="user-section">
        <div className="user-solution">
          <h1 className="solution-support">Use Cases We have Supported</h1>
          <p className="solution-desc">
            Our AI agents can transform every department in your organization
          </p>
        </div>
        <div>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{
              delay: 3000, // 3 seconds delay
              disableOnInteraction: false, // continues autoplay even after interaction
            }}
            spaceBetween={30}
            slidesPerView="auto"
            style={{ padding: "45px 50px" }}
          >
            {cards.map((card, idx) => (
              <SwiperSlide key={idx}>
                <div className="small-card">
                  <h4>{card.title}</h4>
                  <ul>
                    {card.items.map((item, i) => (
                      <>
                        <div
                          className="flex items-start gap-3 card-item"
                          key={i}
                        >
                          <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="24"
                                height="24"
                                rx="12"
                                fill="#E3EEFF"
                                className="hidden"
                              ></rect>
                              <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="#3B82F6"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                          <span className="text-sm text-slate-700">{item}</span>
                        </div>
                      </>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="service-section">
        <div className="user-solution">
          <h1 className="solution-support">Our services</h1>
          <p className="solution-desc">
            Tailored solutions to help your business leverage AI and automation
          </p>
        </div>
        <div className="service-detail">
          <div className="service-box">
            <div className="custom-sol-svg mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-code h-6 w-6 text-slate-700 custom-svg"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <p className="service-title">custom Solutions</p>
            <p className="service-desc">
              Bespoke AI systems designed specifically for your unique business
              challenges and workflows.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="service-list-svg"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-sm text-slate-700">
                  Tailored to your specific requirements
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="service-list-svg"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-sm text-slate-700">
                  One-time project implementation
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="service-list-svg"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-sm text-slate-700">
                  30-60 day delivery timeframe
                </span>
              </li>
            </ul>
            <div className="item-center">
              <button className="quote-btn mb-6" onClick={handleClick}>
                Get a Quote
              </button>
            </div>
          </div>
          <div className="service-box">
            <div className="custom-sol-svg mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-repeat h-6 w-6 text-slate-700 custom-svg"
              >
                <path d="m17 2 4 4-4 4"></path>
                <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                <path d="m7 22-4-4 4-4"></path>
                <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
              </svg>
            </div>
            <p className="service-title">Retainer Partnership Model</p>
            <p className="service-desc">
              Ongoing collaboration with our team to continuously develop and
              optimize your AI systems.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="service-list-svg"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-sm text-slate-700">
                  Dedicated AI development team
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="service-list-svg"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-sm text-slate-700">
                  Regular strategy alignment sessions
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="service-list-svg"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-sm text-slate-700">
                  Continuous improvement and support
                </span>
              </li>
            </ul>
            <div className="item-center">
              <button className="quote-btn mb-6" onClick={handleClick}>
                Get a Quote
              </button>
            </div>
          </div>
          <div className="service-box omni-box">
            <div className="custom-sol-svg mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-clock h-6 w-6 text-blue-600 custom-svg omni-color"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <p className="service-title ">Omni Sales System</p>
            <p className="service-desc">
              Our flagship 24/7 AI sales agent that qualifies leads, nurtures
              prospects, and books appointments automatically.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="service-list-svg"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-sm text-slate-700">
                  Multi-channel engagement (Email, SMS, Chat)
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="service-list-svg"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-sm text-slate-700">
                  Automated lead qualification and nurturing
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="service-list-svg"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-sm text-slate-700">
                  Seamless calendar integration
                </span>
              </li>
            </ul>
            <button className="omni-btn mb-6">Explore omni</button>
          </div>
        </div>
      </section>
      <section className="proven-section">
        <div className="user-solution">
          <h1 className="solution-support">Our Proven Process</h1>
          <p className="solution-desc">
            A systematic approach to transforming your business operations with
            AI
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto p-8">
          <div className="border border-slate-200 rounded-lg bg-white overflow-hidden proven-border">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-search w-5 h-5"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
                <div>
                  <p style={{ marginTop: "4px" }}>phase 1</p>
                  <h1 style={{ marginTop: "-11px" }}>Discovery</h1>
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                The foundation of any successful engagement begins with
                alignment. In this first phase, we focus on understanding your
                business from the inside out and determining if we are the right
                fit to work together. We:
              </p>
              <button
                className="flex items-center justify-between w-full px-4 bg-slate-50 rounded-md border-size"
                onClick={() => setDis(!dis)}
              >
                <span className="font-medium toggle-font">Hide Details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-down w-5 h-5 transition-transform"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              {dis && (
                <>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="service-list-svg"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-sm text-slate-700">
                        Conduct a comprehensive review of your workflows,
                        processes, and operational challenges.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="service-list-svg"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-sm text-slate-700">
                        Identify opportunities for optimization and discuss your
                        goals, constraints, and vision for success.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="service-list-svg"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-sm text-slate-700">
                        Ensure alignment between your needs and our
                        capabilities, building a foundation of transparency and
                        trust.
                      </span>
                    </li>
                  </ul>
                  <p className="text-sm text-slate-600 italic mt-4">
                    This phase is about creating a shared understanding and
                    setting the stage for a successful collaboration.
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="border border-slate-200 rounded-lg bg-white overflow-hidden proven-border">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-lightbulb w-5 h-5"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                  </svg>
                </div>
                <div>
                  <p style={{ marginTop: "4px" }}>phase 2</p>
                  <h1 style={{ marginTop: "-11px" }}>
                    System Design & Concept Validation
                  </h1>
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                After establishing alignment, we shift into a strategic design
                phase. This step is all about creating a clear, actionable
                blueprint for the systems we propose, while also providing
                upfront value to demonstrate feasibility. Here is what we do:
              </p>
              <button
                className="flex items-center justify-between w-full px-4 bg-slate-50 rounded-md border-size"
                onClick={() => setSystem(!system)}
              >
                <span className="font-medium toggle-font">Hide Details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-down w-5 h-5 transition-transform"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              {system && (
                <>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="service-list-svg"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-sm text-slate-700">
                        Map the systems and processes: Gain clarity on the
                        workflows, data integrations needed to build an
                        effective solution.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="service-list-svg"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-sm text-slate-700">
                        Visualize the architecture: Design and refine the
                        structure of the solution, ensuring it aligns with your
                        business goals and constraints.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="service-list-svg"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-sm text-slate-700">
                        Collaborate on the approach: Share visuals, detailed
                        mappings, and workflows to ensure mutual understanding
                        of the proposed design.
                      </span>
                    </li>
                  </ul>
                  <p className="text-sm text-slate-600 italic mt-4">
                    This phase ensures that both parties have a crystal-clear
                    picture of how the solution will be structured and
                    implemented, validating the concept and approach before
                    proceeding to execution.
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="border border-slate-200 rounded-lg bg-white overflow-hidden proven-border">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-zap w-5 h-5"
                  >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                </div>
                <div>
                  <p style={{ marginTop: "4px" }}>phase 3</p>
                  <h1 style={{ marginTop: "-11px" }}>Implementation</h1>
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                With a proven concept in hand, we bring the full solution to
                life. This is where strategy becomes execution, and your custom
                system is integrated seamlessly into your operations. During
                this phase, we:
              </p>
              <button
                className="flex items-center justify-between w-full px-4 bg-slate-50 rounded-md border-size"
                onClick={() => setImpl(!impl)}
              >
                <span className="font-medium toggle-font">Hide Details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-down w-5 h-5 transition-transform"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              {impl && (
                <>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="service-list-svg"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-sm text-slate-700">
                        Build the complete system, ensuring all components are
                        aligned and functioning cohesively.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="service-list-svg"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-sm text-slate-700">
                        Integrate the solution with your existing technology
                        stack to enable smooth and efficient workflows.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="service-list-svg"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-sm text-slate-700">
                        Provide training and resources to empower your team to
                        maximize the solution is potential.
                      </span>
                    </li>
                  </ul>
                  <p className="text-sm text-slate-600 italic mt-4">
                    The outcome is a fully operational, scalable system that
                    drives measurable results and boosts efficiency across your
                    business.
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="border border-slate-200 rounded-lg bg-white overflow-hidden proven-border">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-shield w-5 h-5"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                </div>
                <div>
                  <p style={{ marginTop: "4px" }}>phase 4</p>
                  <h1 style={{ marginTop: "-11px" }}>Continued Partnership</h1>
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                Our work does not stop at implementation. We see this as the
                start of an ongoing partnership, where we work together to
                ensure your systems evolve with your business. This phase
                includes:
              </p>
              <button
                className="flex items-center justify-between w-full px-4 bg-slate-50 rounded-md border-size"
                onClick={() => setPatner(!patner)}
              >
                <span className="font-medium toggle-font">Hide Details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-down w-5 h-5 transition-transform"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              {patner && (
                <>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="service-list-svg"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-sm text-slate-700">
                        Continuous monitoring and performance optimization to
                        meet changing needs.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="service-list-svg"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-sm text-slate-700">
                        Establishing feedback loops to adapt and improve the
                        solution over time.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="service-list-svg"
                        >
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-sm text-slate-700">
                        Proactively identifying and proposing enhancements or
                        additional builds to unlock new opportunities.
                      </span>
                    </li>
                  </ul>
                  <p className="text-sm text-slate-600 italic mt-4">
                    By staying adaptable and innovative, we ensure your business
                    stays ahead of the curve and achieves long-term success.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="partner-section">
        <div className="user-solution">
          <h1 className="solution-support">
            Partner with Us and Invest in Your Business
          </h1>
        </div>
        <div className="service-detail">
          <div className="service-box">
            <p>Retainer Partnership Model</p>
            <h1>$4000/m</h1>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="service-list-svg"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="text-sm text-slate-700 partner-top">
                  <div className="partner-header">
                    Comprehensive AI Systems Development
                  </div>
                  <p className="partner-size">
                    Custom solutions tailored to your business needs
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="service-list-svg"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="text-sm text-slate-700 partner-top">
                  <div className="partner-header">
                    Access to a Dedicated AI Development Team
                  </div>
                  <p className="partner-size">
                    Custom solutions tailored to your business needs
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="service-list-svg"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="text-sm text-slate-700 partner-top">
                  <div className="partner-header">
                    Proactive Strategy Alignment
                  </div>
                  <p className="partner-size">
                    Weekly check-ins to ensure optimal results
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="service-list-svg"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="text-sm text-slate-700 partner-top">
                  <div className="partner-header">Priority Support</div>
                  <p className="partner-size">
                    Custom solutions tailored to your business needs
                  </p>
                </div>
              </li>
            </ul>
            <div className="item-center">
              <button className="partner-btn mb-6" onClick={handleClick}>
                Get a Quote
              </button>
            </div>
          </div>
          <div className="service-box">
            <p>Omni Sales System</p>
            <h1>$700/m</h1>
            <p>+ one-time setup fee</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="service-list-svg"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="text-sm text-slate-700 partner-top">
                  <div className="partner-header">24/7 AI Sales Agent</div>
                  <p className="partner-size">
                    Qualifies and nurtures leads automatically
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="service-list-svg"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="text-sm text-slate-700 partner-top">
                  <div className="partner-header">
                    Multi-Channel Communication
                  </div>
                  <p className="partner-size">Email, SMS, chat, and more</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="service-list-svg"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="text-sm text-slate-700 partner-top">
                  <div className="partner-header">Calendar Integration</div>
                  <p className="partner-size">Automated appointment booking</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="service-list-svg"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="text-sm text-slate-700 partner-top">
                  <div className="partner-header">Performance Analytics</div>
                  <p className="partner-size">
                    Track and optimize your results
                  </p>
                </div>
              </li>
            </ul>
            <div className="item-center">
              <button className="partner-btn mb-6" onClick={handleClick}>
                Explore Omni
              </button>
            </div>
          </div>
          <div className="service-box bg-black">
            <p className="text-gray">Ad-hoc</p>
            <h1 className="text-white text-3xl">One-Off Project Basis</h1>
            <p className="text-gray">
              Designed for businesses that want to start with a single agent or
              system.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <div className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="service-list-svg text-white"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="text-sm text-slate-700 partner-top">
                  <div className="partner-header text-white">
                    30-60 day turnaround
                  </div>
                </div>
              </li>
            </ul>
            <div className="item-center">
              <button
                className="partner-btn mb-6 bg-white text-black"
                onClick={handleClick}
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="frequently-section">
        <div className="frequently-solution">
          <h1 className="solution-support">Frequently Asked Questions</h1>
          <p className="solution-desc">
            Get answers to common questions about our AI solutions
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="border border-slate-200 rounded-lg bg-white overflow-hidden frequent-bg">
            <button
              className="flex items-center justify-between w-full p-6 text-left frequent-btn"
              onClick={() => {
                setQue1(!que1);
              }}
            >
              <span className="font-medium que1-title">
                Do you work on one-off projects?
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-down w-5 h-6 transition-transform rotate-180"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            {que1 && (
              <div className="px-6 pb-6 text-slate-600 border-0 frequent-desc">
                Yes, we do work on one-off projects. Our ad-hoc service is
                designed for businesses that want to start with a single agent
                or system. We typically deliver these projects within a 30-60
                day timeframe, depending on complexity.
              </div>
            )}
          </div>
          <div className="border border-slate-200 rounded-lg bg-white overflow-hidden frequent-bg">
            <button
              className="flex items-center justify-between w-full p-6 text-left frequent-btn"
              onClick={() => {
                setQue2(!que2);
              }}
            >
              <span className="font-medium que1-title">
                How do you price your services?
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-down w-5 h-6 transition-transform rotate-180"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            {que2 && (
              <div className="px-6 pb-6 text-slate-600 border-0 frequent-desc">
                We offer two pricing models: a retainer partnership at
                $4,000/month for comprehensive AI systems development with
                ongoing support, and a one-off project basis with custom pricing
                based on project scope and requirements. We provide detailed
                quotes after understanding your specific needs.
              </div>
            )}
          </div>
          <div className="border border-slate-200 rounded-lg bg-white overflow-hidden frequent-bg">
            <button
              className="flex items-center justify-between w-full p-6 text-left frequent-btn"
              onClick={() => {
                setQue3(!que3);
              }}
            >
              <span className="font-medium que1-title">
                How long does it take to create an AI solution?
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-down w-5 h-6 transition-transform rotate-180"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            {que3 && (
              <div className="px-6 pb-6 text-slate-600 border-0 frequent-desc">
                The timeline varies based on complexity, but typically ranges
                from 30-60 days for initial implementation. Our process includes
                discovery, system design, implementation, and ongoing
                partnership phases to ensure optimal results.
              </div>
            )}
          </div>
          <div className="border border-slate-200 rounded-lg bg-white overflow-hidden frequent-bg">
            <button
              className="flex items-center justify-between w-full p-6 text-left frequent-btn"
              onClick={() => {
                setQue4(!que4);
              }}
            >
              <span className="font-medium que1-title">
                I am not sure where to start—what do you recommend?
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-down w-5 h-6 transition-transform rotate-180"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            {que4 && (
              <div className="px-6 pb-6 text-slate-600 border-0 frequent-desc">
                We recommend starting with a discovery call where we can
                understand your business challenges and goals. This allows us to
                identify the most impactful opportunities for AI automation and
                provide tailored recommendations for your specific situation.
              </div>
            )}
          </div>
          <div className="border border-slate-200 rounded-lg bg-white overflow-hidden frequent-bg">
            <button
              className="flex items-center justify-between w-full p-6 text-left frequent-btn"
              onClick={() => {
                setQue5(!que5);
              }}
            >
              <span className="font-medium que1-title">
                How do your solutions improve business operations?
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-down w-5 h-6 transition-transform rotate-180"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            {que5 && (
              <div className="px-6 pb-6 text-slate-600 border-0 frequent-desc">
                Our AI solutions automate repetitive tasks, streamline
                workflows, and provide data-driven insights. This leads to
                increased efficiency, reduced operational costs, improved
                customer experiences, and allows your team to focus on
                high-value strategic activities rather than manual processes.
              </div>
            )}
          </div>
          <div className="border border-slate-200 rounded-lg bg-white overflow-hidden frequent-bg">
            <button
              className="flex items-center justify-between w-full p-6 text-left frequent-btn"
              onClick={() => {
                setQue6(!que6);
              }}
            >
              <span className="font-medium que1-title">
                What happens if I am not satisfied with the results?
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-down w-5 h-6 transition-transform rotate-180"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            {que6 && (
              <div className="px-6 pb-6 text-slate-600 border-0 frequent-desc">
                Customer satisfaction is our priority. If you are not satisfied
                with the results, we will work with you to address any concerns
                and make necessary adjustments. Our retainer model includes
                ongoing optimization and support to ensure the solution
                continues to meet your evolving needs.
              </div>
            )}
          </div>
        </div>
      </section>
      <footer className="bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-8 md:mb-0">
              <div className="text-xl font-bold mb-4">
                Sales<span className="font-light">done</span>
              </div>
              <p className="text-slate-400 max-w-xs">
                Deploy AI agents to run your business on autopilot and transform
                your operations.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 footer-list">
                  <li>
                    <a href="#" className="text-slate-400 hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-400 hover:text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-400 hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 footer-list">
                  <li>
                    <a href="#" className="text-slate-400 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-400 hover:text-white">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-400 hover:text-white">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 footer-list">
                  <li>
                    <a href="#" className="text-slate-400 hover:text-white">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-400 hover:text-white">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 item-center">
            <p>© 2025 Salesdone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
