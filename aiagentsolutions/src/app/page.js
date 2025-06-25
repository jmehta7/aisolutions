"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const router = useRouter();
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
          <h1 className="solution-support">Use Cases We've Supported</h1>
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
                        <div class="flex items-start gap-3 card-item" key={i}>
                          <div class="bg-blue-100 rounded-full p-2 flex-shrink-0">
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
                                class="hidden"
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
                          <span class="text-sm text-slate-700">{item}</span>
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
      {/* <section className="service-section">
        <div className="user-solution">
          <h1 className="solution-support">Our services</h1>
          <p className="solution-desc">
            Tailored solutions to help your business leverage AI and automation
          </p>
        </div>
        <div className="service-detail">
          <div className="service-box">
            <p>customer solution</p>
          </div>
          <div className="service-box">
            <p>Retainer Partnership Model</p>
          </div>
          <div className="service-box">
            <p>Omni Sales System</p>
          </div>
        </div>
      </section> */}
    </>
  );
}
