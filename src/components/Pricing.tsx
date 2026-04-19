"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For individuals looking to organize their work.",
    features: ["Unlimited pages & blocks", "Basic AI writing (100 runs/mo)", "Mobile & desktop apps", "5 integrations"],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$10",
    period: "per user / month",
    description: "For power users who want more AI and history.",
    features: ["Everything in Free", "Unlimited AI writing", "Unlimited file uploads", "30-day page history"],
    cta: "Start free trial",
    popular: false,
  },
  {
    name: "Business",
    price: "$15",
    period: "per user / month",
    description: "For teams to collaborate with advanced AI agents.",
    features: ["Everything in Pro", "AI Task & Meeting Agents", "Advanced AI Research", "Private team spaces"],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Advanced security and control for your organization.",
    features: ["Everything in Business", "Single Sign-On (SSO)", "Unlimited page history", "Dedicated support"],
    cta: "Talk to sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Choose the plan that's right for you.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lotion AI scales with you. Start for free and upgrade as your team grows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col p-8 bg-white rounded-2xl border ${
                plan.popular ? 'border-primary ring-1 ring-primary shadow-xl scale-105 z-10' : 'border-border shadow-sm'
              } relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black">{plan.price}</span>
                  {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-0.5" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                plan.popular 
                ? 'bg-primary text-primary-foreground hover:opacity-90' 
                : 'bg-secondary text-foreground hover:bg-border'
              }`}>
                {plan.cta}
              </button>
              
              {plan.name === "Business" && (
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-primary font-medium">
                  <Sparkles className="w-3 h-3" />
                  Full AI Agent access included
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
