import React from "react";
import {
  Calendar, ExternalLink, TrendingUp, Users, Zap, Target,
  CheckCircle, ArrowRight, BarChart3, Clock, Shield
} from "lucide-react";

export type GTMPageConfig = {
  "company": {
    "name": "Splunk",
    "role": "Leader, Global Platform Specialists, GTM Strategy & Programs"
  },
  "challenges": [
    {
      "title": "Build and Scale Long-Term GTM Strategy",
      "approach": [
        "Design GTM architecture and playbook",
        "Execute AI-first strategies for phone, email, and LinkedIn",
        "Implement forecast and pipeline hygiene practices"
      ]
    },
    {
      "title": "Drive Synergy with Cisco's Sales Force",
      "approach": [
        "Built AI-first execution strategies",
        "Established guardrails for consent, QA, and opt-ins",
        "Orchestrated GTM workflows across multiple platforms"
      ]
    },
    {
      "title": "Align Platform Motions with Account Priorities",
      "approach": [
        "Craft persona-based dynamic copy",
        "Develop voice-led scripts and email frameworks",
        "Implement structured forecasting and sequenced outreach"
      ]
    }
  ],
  "skills": [
    "GTM architecture and playbook design",
    "AI-first execution across phone, email, and LinkedIn",
    "Forecast, pipeline hygiene, and RevOps automation"
  ],
  "trackRecord": [
    "$1.2M qualified pipeline in 4 months",
    "4 months to build and deploy GTM stack",
    "31% reply-to-meeting conversion (up from 14%)"
  ],
  "icp": {
    "demographics": "Upper mid-market and enterprise organizations in need of a unified security and observability platform for SecOps, ITOps, and Engineering teams",
    "messagePillars": "Risk reduction and compliance; Scalability and reliability; Speed to value and time to first outcome",
    "channelFocus": "Outbound POC to prove value fast; ABM with executive outreach",
    "riskMitigation": "Data access and integration risk; Adoption risk"
  },
  "theme": {
    "primary": "#FF468C",
    "secondary": "#FF8C1A",
    "accent": "#FFD447"
  },
  "loomUrl": "https://www.loom.com/share/8982d8076873442e8455f8e42e101f2b?sid=72cf51b2-0f54-4e08-a4ca-e2074e7645f2"
}

function pickTextFor(bgHex: string): "#000000" | "#FFFFFF" {
  const hex = bgHex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "#000000" : "#FFFFFF";
}

const GTMLandingPage = ({ config }: { config: GTMPageConfig }) => {
  const { company, challenges, icp, theme } = config;

  const heroTextColor = pickTextFor(theme.primary);
  const gradient = `linear-gradient(135deg, ${theme.primary}, ${theme.secondary}, ${theme.accent})`;
  const calUrl = "https://calendly.com/ricatroliveira";

  // Reusable styles
  const heroStyle = { background: gradient, color: heroTextColor };
  const heroTextStyle = { color: heroTextColor };
  const heroMuted = {
    color: heroTextColor === "#FFFFFF" ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.7)",
  };
  const whiteBtn = { background: "#ffffff", color: "#000000" };

  const overlay25 = { background: "rgba(0,0,0,0.25)" };
  const overlay20 = { background: "rgba(0,0,0,0.2)" };
  const overlayWhite30 = { background: "rgba(255,255,255,0.3)" };

  const lightBg = { background: "#FFF7F3" };
  const textNearBlack = { color: "#0F172A" };
  const textBlack = { color: "#0A0A0A" };
  const textSlate70 = { color: "rgba(15,23,42,0.7)" };
  const textSlate85 = { color: "rgba(15,23,42,0.85)" };
  const textSlate90 = { color: "rgba(15,23,42,0.9)" };

  const primaryColorStyle = { color: theme.primary };
  const primaryBgStyle = { background: theme.primary, color: pickTextFor(theme.primary) };
  const challengeCardStyle = {
    borderColor: theme.primary,
    background: "linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.00))",
  };

  const secondaryBg = { background: theme.secondary };
  const onSecondary = { color: pickTextFor(theme.secondary) };
  const white85 = { color: "rgba(255,255,255,0.85)" };
  const darkCard = { background: "#334155" };

  const revenueSpanStyle = {
    color: theme.primary === "#FFFFFF" ? "#000" : "#fff",
    mixBlendMode: "overlay" as const,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ===== HERO ===== */}
      <section className="py-20 px-4 text-center" style={heroStyle}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-black leading-tight tracking-tight mb-6">
            A GTM leader who ships <span style={revenueSpanStyle}>revenue</span>, not decks.
          </h1>

          <p className="text-xl leading-relaxed mb-12 max-w-3xl mx-auto font-medium" style={heroTextStyle}>
            Tailored for {company.role} at {company.name} — here's how I'd move the numbers in 90 days.
          </p>

          {company.logoUrl && (
            <img src={company.logoUrl} alt={`${company.name} logo`} className="h-10 mx-auto mb-6 opacity-90" />
          )}

          <div className="rounded-2xl p-8 max-w-4xl mx-auto mb-12" style={overlay25}>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                src="https://www.loom.com/embed/8982d8076873442e8455f8e42e101f2b?sid=72cf51b2-0f54-4e08-a4ca-e2074e7645f2"
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl"
                frameBorder="0" 
                allowFullScreen
                style={{ border: 'none' }}
              />
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => window.open(calUrl)}
              className="px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:shadow-xl transition-shadow"
              style={whiteBtn}
            >
              <Calendar className="w-5 h-5" />
              Let's talk GTM? I'm available
            </button>
          </div>
        </div>
      </section>

      {/* ===== THE NUMBERS ===== */}
      <section className="py-20 px-4" style={lightBg}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4" style={textNearBlack}>
            The Numbers Speak For Themselves
          </h2>
          <h3 className="text-xl font-medium text-center mb-16" style={textSlate85}>
            Some Career Highlights
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { Icon: TrendingUp, stat: "$10M+", label: "Revenue Impact", sub: "in sales closed" },
              { Icon: Target, stat: "$1.2M", label: "Pipeline Growth", sub: "created in Q2 2025 alone" },
              { Icon: Zap, stat: "120%", label: "AI Expertise", sub: "to hit avg quota w/ inbound + outbound" },
              { Icon: Users, stat: "16", label: "Leadership Experience", sub: "led teams of up to" }
            ].map(({ Icon, stat, label, sub }, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 mx-auto mb-6" style={primaryColorStyle} />
                <div className="text-4xl font-black mb-2" style={textBlack}>{stat}</div>
                <div className="font-medium" style={primaryColorStyle}>{label}</div>
                <div className="text-sm mt-2" style={textSlate70}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CHALLENGES ===== */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-8" style={textNearBlack}>
            The Real Reason You're Hiring This Role
          </h2>
          <p className="text-xl text-center mb-16 leading-relaxed" style={textSlate85}>
            It's not just about finding a GTM leader. You need someone who can solve{" "}
            <strong style={primaryColorStyle}>{challenges[0]?.title}</strong>,{" "}
            <strong style={primaryColorStyle}>{challenges[1]?.title}</strong> and{" "}
            <strong style={primaryColorStyle}>{challenges[2]?.title}</strong> fast.
            <span className="block mt-2">Here's exactly how I'd approach each.</span>
          </p>

          <div className="space-y-8">
            {challenges.map((c, idx) => (
              <div key={idx} className="p-8 rounded-xl border-l-4" style={challengeCardStyle}>
                <div className="flex items-start gap-4">
                  <div className="rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1" style={primaryBgStyle}>
                    {(idx + 1).toString().padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3" style={primaryColorStyle}>{c.title}</h3>
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

      {/* ===== 30/60/90 ===== */}
      <section className="py-20 px-4 text-white" style={secondaryBg}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4" style={onSecondary}>30-60-90 Day Plan</h2>
          <p className="text-xl leading-relaxed mb-12 max-w-3xl mx-auto font-medium text-center" style={white85}>
            The road to incrementing gains.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl" style={darkCard}>
              <div className="text-6xl font-black mb-6" style={primaryColorStyle}>30</div>
              <div className="text-lg mb-2 opacity-75">days</div>
              <h3 className="text-2xl font-bold mb-6 text-white">Foundation</h3>
              <div className="space-y-3" style={white85}>
                <p className="flex items-center gap-2"><Clock className="w-4 h-4" style={primaryColorStyle} /> Revisit ICP and Identify Buying Triggers</p>
                <p className="flex items-center gap-2"><BarChart3 className="w-4 h-4" style={primaryColorStyle} /> Create 3 to 5 different playbooks</p>
                <p className="flex items-center gap-2"><Target className="w-4 h-4" style={primaryColorStyle} /> Run multichannel campaigns targeting companies with high intent as POC</p>
                <p className="flex items-center gap-2"><TrendingUp className="w-4 h-4" style={primaryColorStyle} /> Track playbook results on dashboard</p>
              </div>
            </div>

            <div className="p-8 rounded-xl" style={darkCard}>
              <div className="text-6xl font-black mb-6" style={primaryColorStyle}>60</div>
              <div className="text-lg mb-2 opacity-75">days</div>
              <h3 className="text-2xl font-bold mb-6 text-white">Scale</h3>
              <div className="space-y-3" style={white85}>
                <p className="flex items-center gap-2"><Zap className="w-4 h-4" style={primaryColorStyle} /> Scale winning playbook and channel by going fully AI automated</p>
                <p className="flex items-center gap-2"><Shield className="w-4 h-4" style={primaryColorStyle} /> Improve and automate pipeline and CRM hygiene</p>
                <p className="flex items-center gap-2"><Users className="w-4 h-4" style={primaryColorStyle} /> Implement automated scoring and routing</p>
              </div>
            </div>

            <div className="p-8 rounded-xl" style={darkCard}>
              <div className="text-6xl font-black mb-6" style={primaryColorStyle}>90</div>
              <div className="text-lg mb-2 opacity-75">days</div>
              <h3 className="text-2xl font-bold mb-6 text-white">Optimize</h3>
              <div className="space-y-3" style={white85}>
                <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4" style={primaryColorStyle} /> Lock forecast accuracy</p>
                <p className="flex items-center gap-2"><Zap className="w-4 h-4" style={primaryColorStyle} /> Automate admin work</p>
                <p className="flex items-center gap-2"><ExternalLink className="w-4 h-4" style={primaryColorStyle} /> Publish GTM SOP V1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GTM HYPOTHESIS ===== */}
      <section className="py-20 px-4" style={lightBg}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center" style={textNearBlack}>
            My GTM Hypothesis
            <span className="block">for {company.name}</span>
          </h2>
          <h3 className="text-xl font-medium text-center mt-2 mb-16" style={{ color: "rgba(15,23,42,0.75)" }}>
            A quick brainstorm on starting points
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={primaryColorStyle}>
                <Target className="w-5 h-5" /> Researched ICP
              </h3>
              <p className="text-lg" style={textSlate90}>{icp.demographics}</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={primaryColorStyle}>
                <Zap className="w-5 h-5" /> Message Pillars
              </h3>
              <p className="text-lg" style={textSlate90}>{icp.messagePillars}</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={primaryColorStyle}>
                <BarChart3 className="w-5 h-5" /> Channel Focus
              </h3>
              <p className="text-lg" style={textSlate90}>{icp.channelFocus}</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={primaryColorStyle}>
                <Shield className="w-5 h-5" /> Risks & Mitigations
              </h3>
              <p className="text-lg" style={textSlate90}>{icp.riskMitigation}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 px-4 text-center" style={heroStyle}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-6" style={heroTextStyle}>Worth exploring how I could bring these results to {company.name}?</h2>
          <p className="text-xl mb-12 font-medium" style={heroTextStyle}>I'm available to meet</p>
          <button
            onClick={() => window.open(calUrl)}
            className="px-12 py-4 rounded-full font-bold text-lg flex items-center gap-3 mx-auto shadow-xl hover:shadow-2xl transition-shadow"
            style={whiteBtn}
          >
            Book Your Strategy Session
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

// Initialize with the config
const config: GTMPageConfig = {
  "company": {
    "name": "Splunk",
    "role": "Leader, Global Platform Specialists, GTM Strategy & Programs"
  },
  "challenges": [
    {
      "title": "Build and Scale Long-Term GTM Strategy",
      "approach": [
        "Design GTM architecture and playbook",
        "Execute AI-first strategies for phone, email, and LinkedIn",
        "Implement forecast and pipeline hygiene practices"
      ]
    },
    {
      "title": "Drive Synergy with Cisco's Sales Force",
      "approach": [
        "Built AI-first execution strategies",
        "Established guardrails for consent, QA, and opt-ins",
        "Orchestrated GTM workflows across multiple platforms"
      ]
    },
    {
      "title": "Align Platform Motions with Account Priorities",
      "approach": [
        "Craft persona-based dynamic copy",
        "Develop voice-led scripts and email frameworks",
        "Implement structured forecasting and sequenced outreach"
      ]
    }
  ],
  "skills": [
    "GTM architecture and playbook design",
    "AI-first execution across phone, email, and LinkedIn",
    "Forecast, pipeline hygiene, and RevOps automation"
  ],
  "trackRecord": [
    "$1.2M qualified pipeline in 4 months",
    "4 months to build and deploy GTM stack",
    "31% reply-to-meeting conversion (up from 14%)"
  ],
  "icp": {
    "demographics": "Upper mid-market and enterprise organizations in need of a unified security and observability platform for SecOps, ITOps, and Engineering teams",
    "messagePillars": "Risk reduction and compliance; Scalability and reliability; Speed to value and time to first outcome",
    "channelFocus": "Outbound POC to prove value fast; ABM with executive outreach",
    "riskMitigation": "Data access and integration risk; Adoption risk"
  },
  "theme": {
    "primary": "#FF468C",
    "secondary": "#FF8C1A",
    "accent": "#FFD447"
  },
  "loomUrl": "https://www.loom.com/share/8982d8076873442e8455f8e42e101f2b?sid=72cf51b2-0f54-4e08-a4ca-e2074e7645f2"
};

export default function App() {
  return <GTMLandingPage config={config} />;
}
