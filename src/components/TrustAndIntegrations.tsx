"use client";

import { motion } from "framer-motion";
import { Search, Globe, Slack, Github, Calendar, Mail, FileText, Quote } from "lucide-react";

const integrations = [
  { name: "Google Drive", icon: Globe },
  { name: "Slack", icon: Slack },
  { name: "GitHub", icon: Github },
  { name: "Calendar", icon: Calendar },
  { name: "Email", icon: Mail },
  { name: "Docs", icon: FileText },
];

export function TrustAndIntegrations() {
  return (
    <div className="space-y-32 py-24 bg-secondary/20">
      {/* Search & Knowledge Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-border p-6 shadow-xl relative overflow-hidden"
            >
              <div className="flex items-center gap-3 bg-secondary/50 rounded-lg px-4 py-3 mb-6">
                <Search className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">What was the decision on the API refactor?</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded flex-shrink-0 flex items-center justify-center mt-1">
                    <Search className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-3 text-sm leading-relaxed">
                    Based on the meeting notes from Jan 15 and the Q1 Roadmap page, the team decided to proceed with the API refactor starting in week 4. The primary goal is to reduce technical debt before scaling the Agent infrastructure.
                  </div>
                </div>
                <div className="flex gap-2 ml-9">
                  <div className="px-2 py-1 bg-white border border-border rounded text-[10px] text-muted-foreground">Meeting Notes Jan 15</div>
                  <div className="px-2 py-1 bg-white border border-border rounded text-[10px] text-muted-foreground">Q1 Roadmap</div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Search everything. Ask anything.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Find answers across pages, databases, meetings, and files — instantly. Lotion AI connects the dots across your entire workspace.
            </p>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-12">Connect the tools you already use.</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {integrations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 cursor-pointer"
            >
              <div className="w-12 h-12 bg-white rounded-xl border border-border flex items-center justify-center shadow-sm">
                <item.icon className="w-6 h-6 text-foreground" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust & Social Proof */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-muted-foreground/60 mb-12 uppercase tracking-[0.2em] text-sm">Built for teams that think clearly</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12 mb-20 opacity-40 grayscale">
          <span className="text-2xl font-black italic">STARTUP</span>
          <span className="text-2xl font-bold tracking-tighter">TECHCORE</span>
          <span className="text-2xl font-light tracking-[0.3em]">CREATORS</span>
          <span className="text-2xl font-serif italic">Visionary</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-3xl border border-border shadow-sm relative"
        >
          <Quote className="w-10 h-10 text-primary/10 absolute top-8 left-8" />
          <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8 relative z-10">
            “Lotion AI replaced 5 tools for our team. It's the first time our documentation, tasks, and AI assistants actually feel like they're in the same world.”
          </p>
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 bg-secondary rounded-full" />
            <span className="font-bold text-sm">Sarah Chen</span>
            <span className="text-xs text-muted-foreground">Head of Product, TechCore</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
