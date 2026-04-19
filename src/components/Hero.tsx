"use client";

import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                One workspace. <br />
                <span className="text-primary">Zero busywork.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                Lotion AI is your AI-powered workspace to write, plan, organize, and automate work — all in one place.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 group">
                  Get Lotion AI free
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white border border-border text-foreground rounded-xl font-semibold text-lg hover:bg-secondary transition-all">
                  Request a demo
                </button>
              </div>
              <p className="text-sm text-muted-foreground pl-1">
                No credit card required
              </p>
            </motion.div>
          </div>

          <div className="flex-1 w-full lg:w-auto">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden aspect-[4/3] relative group">
                {/* Sidebar Mock */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-sidebar border-r border-sidebar-border hidden md:block p-4">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="font-bold text-sm">Lotion AI</span>
                  </div>
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-3 w-full bg-sidebar-accent rounded" />
                    ))}
                  </div>
                </div>
                
                {/* Content Mock */}
                <div className="md:ml-48 p-8 h-full">
                  <div className="h-8 w-48 bg-secondary rounded mb-8" />
                  <div className="space-y-4">
                    <div className="h-4 w-full bg-secondary rounded" />
                    <div className="h-4 w-5/6 bg-secondary rounded" />
                    <div className="h-4 w-4/6 bg-secondary rounded" />
                    <div className="h-32 w-full border border-dashed border-border rounded-xl mt-8 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                        <span className="text-xs text-muted-foreground">AI is writing...</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Labels */}
                <div className="absolute top-1/4 -right-4 bg-white p-3 rounded-lg shadow-lg border border-border flex items-center gap-2 scale-90 md:scale-100">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-xs font-medium">AI writes for you</span>
                </div>
                <div className="absolute bottom-1/3 -left-4 bg-white p-3 rounded-lg shadow-lg border border-border flex items-center gap-2 scale-90 md:scale-100">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-xs font-medium">Summaries everywhere</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
