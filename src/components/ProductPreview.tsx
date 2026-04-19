"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageSquare, Layout, Database, CheckSquare, Search } from "lucide-react";

export function ProductPreview() {
  return (
    <section id="product" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
          Everything you need in one place.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A flexible workspace that adapts to your workflow, supercharged by AI that understands your context.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden flex flex-col md:flex-row h-[600px]"
        >
          {/* Sidebar */}
          <div className="w-64 bg-sidebar border-r border-sidebar-border hidden lg:flex flex-col p-4">
            <div className="flex items-center gap-2 mb-8 px-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span className="font-bold text-sm">Lotion AI</span>
            </div>
            
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-2">Workspace</span>
                <div className="mt-2 space-y-1">
                  {['Product Wiki', 'Engineering', 'Marketing', 'Q1 Roadmap'].map((item) => (
                    <div key={item} className="flex items-center gap-2 px-2 py-1.5 text-sm text-foreground hover:bg-sidebar-accent rounded cursor-pointer">
                      <Layout className="w-4 h-4 text-muted-foreground" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-2">Shared</span>
                <div className="mt-2 space-y-1">
                  {['Meeting Notes', 'Tasks', 'Project Board'].map((item) => (
                    <div key={item} className="flex items-center gap-2 px-2 py-1.5 text-sm text-foreground hover:bg-sidebar-accent rounded cursor-pointer">
                      {item === 'Tasks' ? <CheckSquare className="w-4 h-4 text-muted-foreground" /> : <Database className="w-4 h-4 text-muted-foreground" />}
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col bg-white overflow-y-auto">
            <div className="h-12 border-b border-border flex items-center px-6 gap-4">
              <span className="text-sm text-muted-foreground">Workspace</span>
              <span className="text-sm text-muted-foreground">/</span>
              <span className="text-sm font-medium">Q1 Roadmap</span>
            </div>
            
            <div className="p-8 md:p-12 max-w-3xl mx-auto w-full">
              <h1 className="text-4xl font-bold mb-8">Q1 Roadmap 🚀</h1>
              <div className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  Our main focus for this quarter is to scale the AI infrastructure and improve the collaborative features.
                </p>
                
                <div className="bg-secondary/50 p-4 rounded-lg border border-border flex items-start gap-4">
                  <div className="mt-1 bg-white p-1 rounded border border-border">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">AI Insight</p>
                    <p className="text-sm text-muted-foreground">Based on current velocity, we should prioritize the API refactor to avoid technical debt in Q2.</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 border border-border rounded-xl hover:border-primary/50 transition-colors cursor-pointer group">
                    <h3 className="font-semibold mb-2">Core Features</h3>
                    <div className="h-2 w-full bg-secondary rounded overflow-hidden">
                      <div className="h-full w-3/4 bg-primary" />
                    </div>
                  </div>
                  <div className="p-4 border border-border rounded-xl hover:border-primary/50 transition-colors cursor-pointer group">
                    <h3 className="font-semibold mb-2">AI Agents</h3>
                    <div className="h-2 w-full bg-secondary rounded overflow-hidden">
                      <div className="h-full w-1/2 bg-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Panel */}
          <div className="w-80 bg-sidebar border-l border-sidebar-border hidden xl:flex flex-col">
            <div className="p-4 border-b border-sidebar-border">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="font-semibold text-sm">Lotion AI Assistant</span>
              </div>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              <div className="bg-white p-3 rounded-lg border border-border text-xs leading-relaxed">
                I've summarized the Roadmap. The top 3 priorities are API refactoring, UI polish, and Agent scaling.
              </div>
              <div className="bg-primary/5 p-3 rounded-lg border border-primary/10 text-xs text-primary leading-relaxed self-end">
                Can you create a task list for the API refactoring?
              </div>
              <div className="bg-white p-3 rounded-lg border border-border text-xs leading-relaxed">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  <span className="font-medium">Generating tasks...</span>
                </div>
                <ul className="space-y-1">
                  <li>• Define new endpoint structure</li>
                  <li>• Migrate existing Auth logic</li>
                  <li>• Implement caching layer</li>
                </ul>
              </div>
            </div>
            <div className="p-4 border-t border-sidebar-border">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Ask anything..." 
                  className="w-full bg-white border border-border rounded-lg py-2 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <div className="absolute right-2 top-2">
                  <Sparkles className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Callouts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { title: "AI writes for you", text: "Draft entire pages in seconds.", icon: Sparkles },
            { title: "Summaries everywhere", text: "Instantly get the gist of any page.", icon: Layout },
            { title: "Projects auto-managed", text: "AI handles tracking and updates.", icon: CheckSquare }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-4 bg-white rounded-xl border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
