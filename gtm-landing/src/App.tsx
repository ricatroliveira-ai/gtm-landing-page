import React from "react";
import {
  Calendar, ExternalLink, TrendingUp, Users, Zap, Target,
  CheckCircle, ArrowRight, BarChart3, Clock, Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";

export type GTMPageConfig = {
  "company": {
    "name": "GoodRx",
    "role": "Director HCP GTM Strategy"
  },
  "challenges": [
    {
      "title": "Scaling and Monetizing HCP Platform",
      "approach": [
        "Design GTM architecture for platform scaling",
        "Implement AI-first execution for HCP engagement",
        "Increase AI-driven voice cycles for ROI"
      ]
    },
    {
      "title": "Developing Innovative Commercialization Strategies",
      "approach": [
        "Craft persona-based dynamic copy for innovative messaging",
        "Deploy agentic revenue systems for quick signal capture",
        "Use intro and preview line strategy for high meeting conversion"
      ]
    },
    {
      "title": "Aligning Teams for Revenue Growth",
      "approach": [
        "Orchestrate GTM workflows for team alignment",
        "Implement trigger-based sequencing for reply rate lift",
        "Track and optimize KPIs for structured qualification"
      ]
    }
  ],
  "skills": [
    "GTM architecture and playbook design",
    "AI-first execution across phone, email, and LinkedIn",
    "Forecast, pipeline hygiene, and RevOps automation"
  ],
  "trackRecord": [
    "14% -> 31% reply-to-meeting conversion"
  ],
  "icp": {
    "demographics": "Upper mid-market healthcare company focused on providing affordable prescription solutions to consumers and businesses",
    "messagePillars": "Revenue efficiency; Speed to value and time to first outcome; Personalization and AI leverage",
    "channelFocus": "Outbound POC to prove value fast; Partner co-sell and marketplace attach",
    "riskMitigation": "Legal or compliance objections; Adoption risk"
  },
  "theme": {
    "primary": "#000000",
    "secondary": "#000000",
    "accent": "#000000"
  },
  "loomUrl": "https://www.loom.com/share/899a62182079465aa0757a58b1d46dd9?sid=1e2fe052-b2bf-454a-beb4-b95d09bafc85"
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
const calUrl = "[https://calendly.com/ricatroliveira](https://calendly.com/ricatroliveira)";

// Reusable styles (no double braces in JSX)
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

return ( <div className="min-h-screen bg-background">
{/* ===== HERO ===== */}
<section className="py-20 px-4 text-center" style={heroStyle}>
<div className="max-w-6xl mx-auto">                      <h1 className="text-5xl font-black leading-tight tracking-tight mb-6">
A GTM leader who ships <span style={revenueSpanStyle}>revenue</span>, not decks. </h1>

      <p className="text-xl leading-relaxed mb-12 max-w-3xl mx-auto font-medium" style={heroTextStyle}>
        Tailored for {company.role} at {company.name} — here's how I'd move the numbers in 90 days.
      </p>

      {company.logoUrl && (
        <img src={company.logoUrl} alt={`${company.name} logo`} className="h-10 mx-auto mb-6 opacity-90" />
      )}

      <div className="rounded-2xl p-8 max-w-4xl mx-auto mb-12" style={overlay25}>
        <div className="aspect-video rounded-xl flex items-center justify-center shadow-2xl" style={overlay20}>
          <div className="text-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={overlayWhite30}>
              <div className="w-0 h-0 ml-1 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent" />
            </div>
            <p className="font-medium text-lg" style={heroTextStyle}>Personal Video Message</p>
            <p className="text-sm mt-2" style={heroMuted}>Click to play</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <Button
          variant="hero"
          size="lg"
          onClick={() => window.open(calUrl)}
          className="px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3"
          style={whiteBtn}
        >
          <Calendar className="w-5 h-5" />
          Let's talk GTM? I'm available
        </Button>
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
{ Icon: Zap, stat: "120%", label: "AI Expertise", sub: "using AI to surpass quota" },
{ Icon: Users, stat: "16", label: "Leadership Experience", sub: "led teams of up to" }
].map(({ Icon, stat, label, sub }, i) => (
<div key={i} className="text-center p-8 bg-card rounded-xl shadow-sm hover:shadow-lg transition-shadow">
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
<section className="py-20 px-4 bg-background">
<div className="max-w-4xl mx-auto">
<h2 className="text-4xl font-black text-center mb-8" style={textNearBlack}>
The Real Reason You're Hiring This Role
</h2>
<p className="text-xl text-center mb-16 leading-relaxed" style={textSlate85}>

It's not just about finding a GTM leader. You need someone who can solve{" "} <strong style={primaryColorStyle}>{challenges[0]?.title}</strong>,{" "} <strong style={primaryColorStyle}>{challenges[1]?.title}</strong> and{" "} <strong style={primaryColorStyle}>{challenges[2]?.title}</strong> fast. <span className="block mt-2">Here's exactly how I'd approach each.</span>

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
<section className="py-20 px-4 text-secondary-foreground" style={secondaryBg}>
<div className="max-w-6xl mx-auto">
<h2 className="text-4xl font-black text-center mb-4" style={onSecondary}>30-60-90 Day Plan</h2>
<p className="text-xl leading-relaxed mb-12 max-w-3xl mx-auto font-medium text-center" style={white85}>
The road to incrementing gains.
</p>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-xl" style={darkCard}>
<div className="text-6xl font-black mb-6" style={primaryColorStyle}>30 days</div>
<h3 className="text-2xl font-bold mb-6" style={#FFFFFF}>Foundation</h3>
<div className="space-y-3" style={white85}>
<p className="flex items-center gap-2"><Clock className="w-4 h-4" style={primaryColorStyle} /> Revisit ICP and Identify Buying Triggers</p>
<p className="flex items-center gap-2"><BarChart3 className="w-4 h-4" style={primaryColorStyle} /> Create 3 to 5 different playbooks</p>
<p className="flex items-center gap-2"><Target className="w-4 h-4" style={primaryColorStyle} /> Run multichannel campaigns targeting companies with high intent as POC</p>
<p className="flex items-center gap-2"><TrendingUp className="w-4 h-4" style={primaryColorStyle} /> Track playbook results on dashboard</p>
</div>
</div>

<div className="p-8 rounded-xl" style={darkCard}>
<div className="text-6xl font-black mb-6" style={primaryColorStyle}>60 days</div>
<h3 className="text-2xl font-bold mb-6" style={#FFFFFF}>Scale</h3>
<div className="space-y-3" style={white85}>
<p className="flex items-center gap-2"><Zap className="w-4 h-4" style={primaryColorStyle} /> Scale winning playbook and channel by going fully AI automated</p>
<p className="flex items-center gap-2"><Shield className="w-4 h-4" style={primaryColorStyle} /> Improve and automate pipeline and CRM hygiene</p>
<p className="flex items-center gap-2"><Users className="w-4 h-4" style={primaryColorStyle} /> Implement automated scoring and routing</p>
</div>
</div>

<div className="p-8 rounded-xl" style={darkCard}>
<div className="text-6xl font-black mb-6" style={primaryColorStyle}>90 days</div>
<h3 className="text-2xl font-bold mb-6" style={#FFFFFF}>Optimize</h3>
<div className="space-y-3" style={white85}>
<p className="flex items-center gap-2"><CheckCircle className="w-4 h-4" style={primaryColorStyle} /> Lock forecast accuracy</p>
<p className="flex items-center gap-2"><Zap className="w-4 h-4" style={primaryColorStyle} /> Automate admin work</p>
<p className="flex items-center gap-2"><ExternalLink className="w-4 h-4" style={primaryColorStyle} /> Publish GTM SOP V1</p>
</div>
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
<h3 className="text-xl font-medium text-center mt-2 mb-16" style={rgba(15,23,42,0.75)}>
A quick brainstorm on starting points
</h3>

<div className="grid md:grid-cols-2 gap-8">
<div className="bg-card p-8 rounded-xl shadow-sm">
<h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={primaryColorStyle}>
<Target className="w-5 h-5" /> Researched ICP
</h3>
<p className="text-lg" style={textSlate90}>{icp.demographics}</p>
</div>

<div className="bg-card p-8 rounded-xl shadow-sm">
<h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={primaryColorStyle}>
<Zap className="w-5 h-5" /> Message Pillars
</h3>
<p className="text-lg" style={textSlate90}>{icp.messagePillars}</p>
</div>

<div className="bg-card p-8 rounded-xl shadow-sm">
<h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={primaryColorStyle}>
<BarChart3 className="w-5 h-5" /> Channel Focus
</h3>
<p className="text-lg" style={textSlate90}>{icp.channelFocus}</p>
</div>

<div className="bg-card p-8 rounded-xl shadow-sm">
<h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={primaryColorStyle}>
<Shield className="w-5 h-5" /> Risks & Mitigations
</h3>
<p className="text-lg" style={textSlate90}>{icp.riskMitigation}</p>
</div>
</div>
</div>
</section>

{/* ===== GET TO KNOW ME ===== */}
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
onClick={() => window.open('https://www.linkedin.com/in/ricatroliveira')}
className="px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
style=#0077B5white
>
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-
