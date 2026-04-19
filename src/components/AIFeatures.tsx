"use client";

import { motion } from "framer-motion";
import { 
  PenTool, 
  FileText, 
  Calendar, 
  Search, 
  Cpu, 
  CheckCircle2, 
  Users, 
  Globe, 
  Clock 
} from "lucide-react";

const focusFeatures = [
  {
    title: "AI Writing",
    description: "Draft, edit, and brainstorm without leaving your page.",
    icon: PenTool,
  },
  {
    title: "AI Summaries",
    description: "Distill long pages and meeting notes into key takeaways.",
    icon: FileText,
  },
  {
    title: "AI Task Planning",
    description: "Automatically turn notes into actionable project tasks.",
    icon: Calendar,
  },
  {
    title: "AI Research",
    description: "Ask questions about your workspace and get instant answers.",
    icon: Search,
  },
  {
    title: "AI Automation",
    description: "Connect workflows and automate repetitive busywork.",
    icon: Cpu,
  },
];

const agents = [
  {
    title: "Task Agent",
    description: "Updates progress and status automatically based on your work.",
    icon: CheckCircle2,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Meeting Agent",
    description: "Joins your calls, takes notes, and handles follow-up summaries.",
    icon: Users,
    color: "bg-green-500/10 text-green-600",
  },
  {
    title: "Research Agent",
    description: "Finds answers across your workspace, files, and integrations.",
    icon: Globe,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Daily Agent",
    description: "Prepares your daily brief and prioritizes your schedule.",
    icon: Clock,
    color: "bg-orange-500/10 text-orange-600",
  },
];

export function AIFeatures() {
  return (
    <div className="space-y-32 py-24 px-4 sm:px-6 lg:px-8">
      {/* AI Focus Section */}
      <section id="solutions" className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Meet your AI workspace assistant
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful AI features integrated directly into your workflow, not just bolted on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-sm transition-all group"
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let AI handle the busywork
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our specialized agents work in the background so you can focus on what matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white rounded-2xl border border-border flex flex-col items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className={`w-10 h-10 ${agent.color} rounded-lg flex items-center justify-center`}>
                <agent.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{agent.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {agent.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
