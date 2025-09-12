// file: app/page.tsx
"use client";

import React from "react";
import {
  Calendar,
  ExternalLink,
  TrendingUp,
  Users,
  Target,
  ArrowRight,
  BarChart3,
  DollarSign,
  Bot,
  Webhook,
  Timer,
  Settings,
  Lock,
  Mic
} from "lucide-react";

export type GTMPageConfig = {
  company: { name: string; role: string; logoUrl?: string };
  challenges: { title: string; approach: string[] }[];
  skills: string[];
  trackRecord: string[];
  icp: {
    demographics: string[]; // V2: arrays for bullet lists
    messagePillars: string[]; // V2
    channelFocus: string[]; // V2
    riskMitigation: string[]; // V2
  };
  theme: { primary: string; secondary: string; accent: string };
  sendsparkUrl: string;
};

function pickTextFor(bgHex: string): "#000000" | "#FFFFFF" {
  const hex = bgHex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "#000000" : "#FFFFFF";
}

// Optional safety: accept strings OR arrays in incoming JSON
const toList = (v: string | string[] | undefined): string[] =>
  Array.isArray(v) ? v : (typeof v === "string" ? v.split(/[\n;]+/).map(s => s.trim()).filter(Boolean) : []);

// ✅ Make.com: replace the token below with your raw JSON (object, not a quoted string)
const RAW_CONFIG = {
  "company": {
    "name": "Splunk",
    "role": "Leader, Global Platform Specialists, GTM Strategy & Programs"
  },
  "challenges": [
    {
      "title": "Developing Long-Term Platform GTM Strategy",
      "approach": [
        "Design GTM architecture and playbook for platform expansion",
        "Implement AI-first execution across multiple channels",
        "Focus on forecasting and pipeline hygiene for long-term success"
      ]
    },
    {
      "title": "Driving Synergy with Cisco's Sales Force",
      "approach": [
        "Develop joint GTM strategies for synergy with Cisco",
        "Implement AI-driven voice cycles for effective collaboration",
        "Enhance RevOps automation for streamlined processes"
      ]
    },
    {
      "title": "Scaling Growth Through Joint GTM Strategies",
      "approach": [
        "Operationalize repeatable outbound motions to increase meetings per week",
        "Establish guardrails for increased efficiency and reduced opt-outs",
        "Deliver operator-grade visibility through dashboards and playbooks"
      ]
    }
  ],
  "skills": [
    "GTM architecture and playbook design",
    "AI-first execution across phone, email, and LinkedIn",
    "Forecast, pipeline hygiene, and RevOps automation"
  ],
  "trackRecord": [
    "38% meeting-to-client conversion rate sustained",
    "$431K in early pipeline generated"
  ],
  "icp": {
    "demographics": [
      "Enterprise, across security, IT, and engineering functions"
    ],
    "messagePillars": [
      "Risk reduction and compliance",
      "Scalability and reliability",
      "Integration fit and data quality"
    ],
    "channelFocus": [
      "ABM with executive outreach",
      "Partner co-sell and marketplace attach"
    ],
    "riskMitigation": [
      "Legal or compliance objections",
      "Data access and integration risk"
    ]
  },
  "theme": {
    "primary": "#ED0080",
    "secondary": "#F16122",
    "accent": "#F99E1C"
  },
  "sendsparkUrl": "https://sendspark.com/share/mr0cs3yt1hw20x5khyfbr45p60fyg2vs"
} as unknown as GTMPageConfig;

const CONFIG: GTMPageConfig = {
  ...RAW_CONFIG,
  icp: {
    demographics: toList((RAW_CONFIG as any)?.icp?.demographics),
    messagePillars: toList((RAW_CONFIG as any)?.icp?.messagePillars),
    channelFocus: toList((RAW_CONFIG as any)?.icp?.channelFocus),
    riskMitigation: toList((RAW_CONFIG as any)?.icp?.riskMitigation)
  }
} as GTMPageConfig;

export default function Page() {
  const { company, challenges, icp, theme, sendsparkUrl } = CONFIG;

  const heroTextColor = pickTextFor(theme.primary);
  const gradient = `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`;
  const calUrl = "https://calendly.com/checkaipulse/30min";

  const heroStyle: React.CSSProperties = { background: gradient, color: heroTextColor };
  const heroTextStyle: React.CSSProperties = { color: heroTextColor };
  const whiteBtn: React.CSSProperties = {
    background: "#ffffff",
    color: "#000000",
    padding: "1rem 2rem",
    borderRadius: "9999px",
    fontWeight: 700
  };

  const overlay25: React.CSSProperties = { background: "rgba(0,0,0,0.25)" };
  const overlay20: React.CSSProperties = { background: "rgba(0,0,0,0.2)" };

  const textNearBlack: React.CSSProperties = { color: "#0F172A" };
  const textSlate70: React.CSSProperties = { color: "rgba(15,23,42,0.7)" };
  const textSlate85: React.CSSProperties = { color: "rgba(15,23,42,0.85)" };
  const textSlate90: React.CSSProperties = { color: "rgba(15,23,42,0.9)" };

  const primaryColorStyle: React.CSSProperties = { color: theme.primary };
  const primaryBgStyle: React.CSSProperties = { background: theme.primary, color: pickTextFor(theme.primary) };
  const challengeCardStyle: React.CSSProperties = {
    borderLeft: `4px solid ${theme.primary}`,
    background: "linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.00))",
    borderRadius: "0.75rem",
    padding: "2rem"
  };

  const white85: React.CSSProperties = { color: "rgba(255,255,255,0.85)" };

  // Accent-driven styles for requested tweaks
  const accentColorStyle: React.CSSProperties = { color: theme.accent };
  const accentBgStyle: React.CSSProperties = { background: theme.accent, color: pickTextFor(theme.accent) };
  const onAccent: React.CSSProperties = { color: pickTextFor(theme.accent) };
  const whiteBg: React.CSSProperties = { background: "#FFFFFF" };
  const blackText: React.CSSProperties = { color: "#000000" };
  const planCard: React.CSSProperties = { background: "#FFFFFF", color: "#000000", borderRadius: "0.75rem", padding: "2rem" };

  const revenueSpanStyle: React.CSSProperties = {
    color: theme.primary === "#FFFFFF" ? "#000" : "#fff",
    mixBlendMode: "overlay"
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 px-4 text-center" style={heroStyle}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-black leading-tight tracking-tight mb-6">
  A GTM leader who ships revenue, not decks.
</h1>

          <p className="text-xl leading-relaxed mb-12 max-w-3xl mx-auto font-medium" style={heroTextStyle}>
            Tailored for {company.role} at {company.name} — here's how I'd move the numbers in 90 days.
          </p>

          {company.logoUrl && (
            <img src={company.logoUrl} alt={`${company.name} logo`} className="h-10 mx-auto mb-6 opacity-90" />
          )}

          <div className="rounded-2xl p-8 max-w-4xl mx-auto mb-12" style={overlay25}>
            {sendsparkUrl ? (
              <div className="aspect-video rounded-xl shadow-2xl overflow-hidden">
                <iframe
                  src={sendsparkUrl.replace("/share/", "/embed/")}
                  className="w-full h-full"
                  frameBorder="0"
                  title="Personal intro video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="aspect-video rounded-xl flex items-center justify-center shadow-2xl" style={overlay20}>
                <p className="font-medium text-lg" style={heroTextStyle}>Personal Video Message</p>
              </div>
            )}
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => window.open(calUrl)}
              style={whiteBtn}
              className="flex items-center gap-3 text-lg font-bold shadow"
            >
              <Calendar className="w-5 h-5" />
              Let's talk GTM? I'm available
            </button>
          </div>
        </div>
      </section>

      {/* 2) White background; subheader+icons+stats in accent */}
      <section className="py-20 px-4" style={whiteBg}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4" style={textNearBlack}>
            The Numbers Speak For Themselves
          </h2>
          <h3 className="text-xl font-medium text-center mb-16" style={accentColorStyle}>
            Some Career Highlights
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { Icon: DollarSign, stat: "$10M+", label: "Revenue Impact", sub: "in sales closed" },
              { Icon: ArrowRight, stat: "$1.2M", label: "Pipeline Growth", sub: "created in Q2 2025 alone" },
              { Icon: Bot, stat: "120%", label: "Exceed Quota W/ AI", sub: "avg quota attained" },
              { Icon: Users, stat: "16", label: "Leadership Experience", sub: "led teams of up to" }
            ].map(({ Icon, stat, label, sub }, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 mx-auto mb-6" style={accentColorStyle} />
                <div className="text-4xl font-black mb-2" style={accentColorStyle}>{stat}</div>
                <div className="font-medium" style={primaryColorStyle}>{label}</div>
                <div className="text-sm mt-2" style={textSlate70}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3) Accent highlight in sentence; card titles accent */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-8" style={textNearBlack}>
            The Real Reason You're Hiring This Role
          </h2>
          <p className="text-xl text-center mb-16 leading-relaxed" style={textSlate85}>
            It's not just about finding a GTM leader. <span style={primaryColorStyle}>You need someone who can solve</span>{" "}
            <strong style={accentColorStyle}>{challenges[0]?.title}</strong>,{" "}
            <strong style={accentColorStyle}>{challenges[1]?.title}</strong> and{" "}
            <strong style={accentColorStyle}>{challenges[2]?.title}</strong> fast.
            <span className="block mt-2">Here's exactly how I'd approach each.</span>
          </p>

          <div className="space-y-8">
            {challenges.map((c, idx) => (
              <div key={idx} style={challengeCardStyle}>
                <div className="flex items-start gap-4">
                  <div className="rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1" style={primaryBgStyle}>
                    {(idx + 1).toString().padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3" style={accentColorStyle}>{c.title}</h3>
                    <ul className="list-disc pl-6 space-y-1" style={textSlate90}>
                      {c.approach.map((bullet, i) => <li key={i}>{bullet}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) Section BG accent, cards white, text black, icons accent, day titles accent */}
      <section className="py-20 px-4" style={accentBgStyle}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4" style={onAccent}>30-60-90 Day Plan</h2>
          <p className="text-xl leading-relaxed mb-12 max-w-3xl mx-auto font-medium text-center" style={white85}>
            The road to incrementing gains.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div style={planCard}>
              <div className="text-6xl font-black mb-6" style={accentColorStyle}>30 days</div>
              <h3 className="text-2xl font-bold mb-6" style={primaryColorStyle}>Foundation</h3>
              <div className="space-y-3" style={blackText}>
                <p className="flex items-center gap-2"><Users className="w-4 h-4" style={accentColorStyle} /> Revisit ICP and Identify Buying Triggers</p>
                <p className="flex items-center gap-2"><BarChart3 className="w-4 h-4" style={accentColorStyle} /> Create 3 to 5 different playbooks</p>
                <p className="flex items-center gap-2"><Target className="w-4 h-4" style={accentColorStyle} /> Run multichannel campaigns targeting companies with high intent as POC</p>
                <p className="flex items-center gap-2"><Timer className="w-4 h-4" style={accentColorStyle} /> Track playbook results on dashboard</p>
              </div>
            </div>

            <div style={planCard}>
              <div className="text-6xl font-black mb-6" style={accentColorStyle}>60 days</div>
              <h3 className="text-2xl font-bold mb-6" style={primaryColorStyle}>Scale</h3>
              <div className="space-y-3" style={blackText}>
                <p className="flex items-center gap-2"><TrendingUp className="w-4 h-4" style={accentColorStyle} /> Scale winning playbook and channel by going fully AI automated</p>
                <p className="flex items-center gap-2"><Settings className="w-4 h-4" style={accentColorStyle} /> Improve and automate pipeline and CRM hygiene</p>
                <p className="flex items-center gap-2"><Webhook className="w-4 h-4" style={accentColorStyle} /> Implement automated scoring and routing</p>
              </div>
            </div>

            <div style={planCard}>
              <div className="text-6xl font-black mb-6" style={accentColorStyle}>90 days</div>
              <h3 className="text-2xl font-bold mb-6" style={primaryColorStyle}>Optimize</h3>
              <div className="space-y-3" style={blackText}>
                <p className="flex items-center gap-2"><Lock className="w-4 h-4" style={accentColorStyle} /> Lock forecast accuracy</p>
                <p className="flex items-center gap-2"><Bot className="w-4 h-4" style={accentColorStyle} /> Automate admin work</p>
                <p className="flex items-center gap-2"><ExternalLink className="w-4 h-4" style={accentColorStyle} /> Publish GTM SOP V1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) Hypothesis section: BG white; card titles/icons accent; text black */}
      <section className="py-20 px-4" style={whiteBg}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center" style={textNearBlack}>
            My GTM Hypothesis
            <span className="block">for {company.name}</span>
          </h2>
          <h3 className="text-xl font-medium text-center mt-2 mb-16" style={textSlate70}>
            A quick brainstorm on starting points
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={accentColorStyle}>
                <Target className="w-5 h-5" style={accentColorStyle} /> Researched ICP
              </h3>
              <ul className="list-disc pl-6 space-y-1" style={blackText}>
                {icp.demographics.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={accentColorStyle}>
                <Mic className="w-5 h-5" style={accentColorStyle} /> Message Pillars
              </h3>
              <ul className="list-disc pl-6 space-y-1" style={blackText}>
                {icp.messagePillars.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={accentColorStyle}>
                <Target className="w-5 h-5" style={accentColorStyle} /> Channel Focus
              </h3>
              <ul className="list-disc pl-6 space-y-1" style={blackText}>
                {icp.channelFocus.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={accentColorStyle}>
                <Lock className="w-5 h-5" style={accentColorStyle} /> Risks & Mitigations
              </h3>
              <ul className="list-disc pl-6 space-y-1" style={blackText}>
                {icp.riskMitigation.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

{/* LinkedIn section */}
<section className="py-20 px-4 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-black mb-4" style={textNearBlack}>
      Get To Know Me
    </h2>
    <h3 className="text-xl font-medium mb-12" style={textSlate85}>
      Here's My LinkedIn
    </h3>

    <div className="flex flex-col items-center">
      <div className="mb-8">
        <img
          src="https://raw.githubusercontent.com/ricatroliveira-ai/gtm-landing-page/main/profile_li.png"
          alt="Ricardo Oliveira LinkedIn Profile"
          className="w-32 h-32 rounded-full shadow-lg mx-auto mb-6"
        />
        <h4 className="text-2xl font-bold mb-2" style={textNearBlack}>
          Ricardo Oliveira
        </h4>
        <p className="text-lg" style={textSlate85}>
          GTM Strategy & Revenue Operations Leader
        </p>
      </div>

      <button
        onClick={() => window.open("https://www.linkedin.com/in/ricatroliveira")}
        className="px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-[#0077B5] text-white"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.46c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        Connect on LinkedIn
      </button>
    </div>
  </div>
</section>

      <section className="py-20 px-4 text-center" style={heroStyle}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-6">Worth exploring how I could bring these results to {company.name}?</h2>
          <p className="text-xl mb-12 font-medium">I'm available to meet</p>
          <button
            onClick={() => window.open(calUrl)}
            style={whiteBtn}
            className="flex items-center gap-3 text-lg font-bold shadow mx-auto"
          >
            Book Your Strategy Session
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <footer className="py-8 px-4 text-center bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm opacity-80">
            Contact: ricatroliveira@gmail.com • linkedin.com/in/ricatroliveira/ • São Paulo
          </p>
        </div>
      </footer>
    </div>
  );
}
