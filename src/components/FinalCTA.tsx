"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-secondary/20 p-12 md:p-20 rounded-[3rem] border border-border"
        >
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary/20">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            Start working smarter with Lotion AI
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of teams using AI to simplify their workflow and focus on what truly matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-xl hover:opacity-90 transition-all shadow-xl shadow-primary/10">
              Get started free
            </button>
            <button className="px-10 py-5 bg-white border border-border text-foreground rounded-2xl font-bold text-xl hover:bg-secondary transition-all">
              Talk to sales
            </button>
          </div>
          <p className="mt-8 text-sm text-muted-foreground italic">
            "The closest thing to having a personal chief of staff for your workspace."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
