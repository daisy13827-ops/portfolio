export type CaseStudySection = {
  heading: string;
  variant: "text" | "bullets";
  content: string | string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  shortDescription: string;
  year: string;
  roles: string[];
  tags: string[];
  metrics: string[];
  overview: string;
  cover: {
    from: string;
    to: string;
  };
  sections: CaseStudySection[];
  featured?: boolean;
};

export type Company = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  cover: { from: string; to: string };
  caseStudies: CaseStudy[];
};

export const profile = {
  name: "Ignatova Evgenia",
  title: "Product Designer",
  location: "Remote",
  email: "hello@example.com",
  intro:
    "Product designer with a focus on clarity, accessibility, and measurable outcomes.",
};

export const companies: Company[] = [
  {
    id: "aurora-health",
    name: "Aurora Health",
    tagline: "Healthcare experiences designed for clarity.",
    description:
      "I led UX and product design for patient-facing workflows, focusing on accessibility, trust, and measurable outcomes.",
    cover: { from: "#7C3AED", to: "#06B6D4" },
    caseStudies: [
      {
        slug: "patient-onboarding",
        title: "Patient Onboarding Redesign",
        shortDescription:
          "Rebuilt the onboarding journey to reduce friction and improve activation.",
        year: "2025",
        roles: ["Product Design", "UX Research"],
        tags: ["Onboarding", "Accessibility", "UX"],
        metrics: ["Reduced drop-off by 18%", "Improved activation by 12%"],
        overview:
          "Patients were abandoning the onboarding flow due to unclear steps and inconsistent validation. I mapped the journey, tested assumptions with usability sessions, and redesigned the flow around plain language and progressive disclosure.",
        cover: { from: "#7C3AED", to: "#06B6D4" },
        featured: true,
        sections: [
          {
            heading: "Challenge",
            variant: "text",
            content:
              "The onboarding flow felt complex and \"form-first,\" especially for users with limited health-literacy and mobile constraints.",
          },
          {
            heading: "Approach",
            variant: "bullets",
            content: [
              "Created a step-by-step journey map and identified friction clusters.",
              "Introduced progressive disclosure (only ask what's needed next).",
              "Standardized validation language with accessible error patterns.",
            ],
          },
          {
            heading: "Outcome",
            variant: "text",
            content:
              "The redesigned flow improved completion and reduced support tickets while maintaining compliance requirements.",
          },
        ],
      },
      {
        slug: "care-plan-builder",
        title: "Care Plan Builder",
        shortDescription:
          "Designed a guided tool that helps patients understand and build care plans.",
        year: "2024",
        roles: ["Interaction Design", "Design Systems"],
        tags: ["Guided Flows", "Content Design", "IA"],
        metrics: ["+24% plan completion", "-31% time-to-understanding"],
        overview:
          "Clinicians needed a consistent way to communicate care plans. Patients needed clarity without information overload. I designed an adaptable structure that balances medical precision with conversational content.",
        cover: { from: "#0EA5E9", to: "#10B981" },
        featured: true,
        sections: [
          {
            heading: "Challenge",
            variant: "text",
            content:
              "Care plan information was fragmented across tools and documentation, leading to confusion and inconsistent updates.",
          },
          {
            heading: "Approach",
            variant: "bullets",
            content: [
              "Designed a reusable content model for plan components.",
              "Prototyped interaction patterns for editing and confirmations.",
              "Aligned components with the existing UI kit and tokens.",
            ],
          },
          {
            heading: "Outcome",
            variant: "text",
            content:
              "The tool created a reliable clinician workflow and a more understandable patient experience.",
          },
        ],
      },
      {
        slug: "clinic-scheduling",
        title: "Clinic Scheduling Experience",
        shortDescription:
          "Improved scheduling clarity with better defaults and transparent availability.",
        year: "2023",
        roles: ["Product Design", "Prototyping"],
        tags: ["Scheduling", "Mobile UX", "Information Design"],
        metrics: ["-22% reschedule rate", "+16% successful bookings"],
        overview:
          "Availability and booking policies were buried, causing confusion and leading to reschedules. I redesigned the booking experience with clearer availability cues, policy summaries, and better error recovery.",
        cover: { from: "#F97316", to: "#EF4444" },
        featured: false,
        sections: [
          {
            heading: "Challenge",
            variant: "text",
            content:
              "Users struggled to understand why certain appointments were unavailable and what to expect after selecting a slot.",
          },
          {
            heading: "Approach",
            variant: "bullets",
            content: [
              "Designed availability states and transparent policy messaging.",
              "Created a consistent calendar interaction model for mobile.",
              "Updated empty/error states to reduce dead ends.",
            ],
          },
          {
            heading: "Outcome",
            variant: "text",
            content:
              "Bookings became more predictable, decreasing reschedules and improving perceived reliability.",
          },
        ],
      },
    ],
  },
  {
    id: "finch-commerce",
    name: "Finch Commerce",
    tagline: "Commerce workflows that scale with merchants.",
    description:
      "I designed complex admin and customer-facing product experiences with an emphasis on speed, consistency, and measurable conversion improvements.",
    cover: { from: "#111827", to: "#3B82F6" },
    caseStudies: [
      {
        slug: "checkout-speed",
        title: "Checkout Speed Initiative",
        shortDescription:
          "Reduced latency and friction in checkout with better UX feedback.",
        year: "2025",
        roles: ["UX Design", "Experiment Design"],
        tags: ["Conversion", "Checkout", "Performance UX"],
        metrics: ["+9% checkout completion", "-28% perceived wait time"],
        overview:
          "Checkout performance issues were amplified by uncertain UI states. I designed an experience that makes progress obvious with clear confirmations, skeletons, and resilient error recovery.",
        cover: { from: "#3B82F6", to: "#22C55E" },
        featured: true,
        sections: [
          {
            heading: "Challenge",
            variant: "text",
            content:
              "Customers experienced uncertainty during payment and address validation leading to abandonment and repeated attempts.",
          },
          {
            heading: "Approach",
            variant: "bullets",
            content: [
              "Redesigned loading states with meaningful progress cues.",
              "Created consistent success/error patterns for each step.",
              "Aligned microcopy with reduced cognitive load.",
            ],
          },
          {
            heading: "Outcome",
            variant: "text",
            content:
              "Checkout completion increased and the flow felt significantly faster without changing core performance constraints.",
          },
        ],
      },
      {
        slug: "merchant-analytics",
        title: "Merchant Analytics Redesign",
        shortDescription:
          "Turned noisy reporting into clear, actionable insights.",
        year: "2024",
        roles: ["Information Architecture", "Product Design"],
        tags: ["Dashboards", "IA", "Data UX"],
        metrics: ["+31% weekly active usage", "-19% task time"],
        overview:
          "Merchant analytics pages were hard to interpret and required too many clicks to reach conclusions. I reorganized information, introduced progressive levels of detail, and validated it with task-based usability testing.",
        cover: { from: "#06B6D4", to: "#111827" },
        featured: false,
        sections: [
          {
            heading: "Challenge",
            variant: "text",
            content:
              "Key insights were buried behind complex filters and ambiguous chart labeling.",
          },
          {
            heading: "Approach",
            variant: "bullets",
            content: [
              "Rebuilt the IA around merchant tasks and questions.",
              "Introduced \"insight cards\" as entry points to data.",
              "Standardized chart semantics and labeling rules.",
            ],
          },
          {
            heading: "Outcome",
            variant: "text",
            content:
              "Merchants found answers faster and used analytics more consistently week-to-week.",
          },
        ],
      },
      {
        slug: "design-system-foundations",
        title: "Design System Foundations",
        shortDescription:
          "Created a lightweight system of tokens and components for faster delivery.",
        year: "2023",
        roles: ["Design Systems", "Component Design"],
        tags: ["Tokens", "UI Kit", "Consistency"],
        metrics: ["-35% UI implementation time", "+Consistency across teams"],
        overview:
          "Multiple teams were implementing UI patterns differently. I established a token framework, defined component boundaries, and documented usage guidelines.",
        cover: { from: "#F59E0B", to: "#EF4444" },
        featured: true,
        sections: [
          {
            heading: "Challenge",
            variant: "text",
            content:
              "Inconsistent spacing, typography, and interaction patterns made product changes harder and slower.",
          },
          {
            heading: "Approach",
            variant: "bullets",
            content: [
              "Defined typography, spacing, and color tokens with real UI coverage.",
              "Built core components with accessibility and interaction states.",
              "Created documentation templates for adoption and governance.",
            ],
          },
          {
            heading: "Outcome",
            variant: "text",
            content:
              "Teams shipped faster with fewer regressions and a more cohesive product feel.",
          },
        ],
      },
    ],
  },
  {
    id: "nimbus-travel",
    name: "Nimbus Travel",
    tagline: "Travel booking with trust, not surprises.",
    description:
      "I designed mobile booking experiences that communicate tradeoffs clearly and reduce uncertainty across the journey.",
    cover: { from: "#22C55E", to: "#8B5CF6" },
    caseStudies: [
      {
        slug: "itinerary-mobile",
        title: "Itinerary Mobile Re-architecture",
        shortDescription:
          "Designed a mobile itinerary that's easy to scan and easy to act on.",
        year: "2025",
        roles: ["Product Design", "UX Research"],
        tags: ["Mobile UX", "Content Strategy", "Journey Design"],
        metrics: ["+27% itinerary engagement", "-24% support questions"],
        overview:
          "Travelers needed quick answers about times, changes, and next steps without digging through details. I restructured the itinerary layout around \"what's next\" and built clear visual hierarchy.",
        cover: { from: "#22C55E", to: "#8B5CF6" },
        featured: true,
        sections: [
          {
            heading: "Challenge",
            variant: "text",
            content:
              "The itinerary was information-dense, and critical changes were easy to miss on mobile.",
          },
          {
            heading: "Approach",
            variant: "bullets",
            content: [
              "Designed a scanning-first layout with \"next action\" emphasis.",
              "Created change indicators and consistent notification patterns.",
              "Validated hierarchy through usability tests and iterative prototypes.",
            ],
          },
          {
            heading: "Outcome",
            variant: "text",
            content:
              "Travelers interacted more with their itinerary and contacted support less often.",
          },
        ],
      },
      {
        slug: "booking-trust",
        title: "Booking Trust & Transparency",
        shortDescription:
          "Improved clarity for fees, policies, and seat/room tradeoffs.",
        year: "2024",
        roles: ["UX Writing", "Interaction Design"],
        tags: ["Trust", "Payments", "Clarity"],
        metrics: ["+12% conversion", "-17% refund requests"],
        overview:
          "Many customers encountered unexpected fees or policy constraints late in the flow. I redesigned the presentation of tradeoffs so people understand them earlier, reducing surprises and building confidence.",
        cover: { from: "#0EA5E9", to: "#F59E0B" },
        featured: false,
        sections: [
          {
            heading: "Challenge",
            variant: "text",
            content:
              "Customers reported confusion about what they were buying and what would happen after purchase.",
          },
          {
            heading: "Approach",
            variant: "bullets",
            content: [
              "Introduced layered disclosure for fees and policies.",
              "Created comparison-friendly UI for options and tradeoffs.",
              "Refined microcopy to emphasize user impact and next steps.",
            ],
          },
          {
            heading: "Outcome",
            variant: "text",
            content:
              "Clearer decisions improved conversion quality and reduced refund requests.",
          },
        ],
      },
      {
        slug: "service-inside-app",
        title: "Service Inside the App",
        shortDescription:
          "Designed an in-app support and change-flow to reduce drop-off.",
        year: "2023",
        roles: ["Service Design", "Prototyping"],
        tags: ["Service Design", "Support UX", "Retention"],
        metrics: ["+18% successful changes", "+Higher CSAT"],
        overview:
          "When travelers needed changes, they were often bounced between tools. I consolidated key support interactions into the app with clear steps, confirmations, and resilient recovery flows.",
        cover: { from: "#111827", to: "#22C55E" },
        featured: true,
        sections: [
          {
            heading: "Challenge",
            variant: "text",
            content:
              "Change requests were confusing and fragmented, causing delays and user frustration.",
          },
          {
            heading: "Approach",
            variant: "bullets",
            content: [
              "Mapped service touchpoints and user intent signals.",
              "Designed step-based change flows with confirmation checkpoints.",
              "Created UI patterns for resilient error recovery.",
            ],
          },
          {
            heading: "Outcome",
            variant: "text",
            content:
              "Travelers completed changes more successfully and reached support with clearer context.",
          },
        ],
      },
    ],
  },
];

export function getCompanyById(id: string): Company | undefined {
  return companies.find((c) => c.id === id);
}

export function getCaseStudyBySlug(
  companyId: string,
  slug: string,
): { company: Company; caseStudy: CaseStudy } | undefined {
  const company = getCompanyById(companyId);
  if (!company) return undefined;
  const caseStudy = company.caseStudies.find((cs) => cs.slug === slug);
  if (!caseStudy) return undefined;
  return { company, caseStudy };
}

