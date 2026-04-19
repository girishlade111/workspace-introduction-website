"use client";

import { motion } from "framer-motion";
import { 
  Trello, 
  Table as TableIcon, 
  GanttChartSquare, 
  Sparkles,
  AlertTriangle
} from "lucide-react";
import { useState } from "react";

const views = [
  { id: 'kanban', name: 'Kanban Board', icon: Trello },
  { id: 'table', name: 'Table View', icon: TableIcon },
  { id: 'gantt', name: 'Gantt Timeline', icon: GanttChartSquare },
];

export function Projects() {
  const [activeView, setActiveView] = useState('kanban');

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Plan projects your way.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Boards, tables, timelines — all powered by AI insights. Lotion AI helps you spot risks and summarize progress automatically.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {views.map((view) => (
                <button
                  key={view.id}
                  onClick={() => setActiveView(view.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeView === view.id 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <view.icon className="w-4 h-4" />
                  {view.name}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-100 rounded-lg">
                <div className="p-1.5 bg-white rounded shadow-sm">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-blue-900">AI summary: "Sprint 4 is on track for delivery."</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-orange-50 border border-orange-100 rounded-lg">
                <div className="p-1.5 bg-white rounded shadow-sm">
                  <AlertTriangle className="w-4 h-4 text-orange-500" />
                </div>
                <span className="text-sm font-medium text-orange-900">AI risk detection: "Potential delay in Frontend tasks."</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-secondary/30 rounded-2xl border border-border p-6 aspect-video overflow-hidden relative"
            >
              {activeView === 'kanban' && (
                <div className="flex gap-4 h-full">
                  {['To Do', 'In Progress', 'Done'].map((col, i) => (
                    <div key={col} className="flex-1 flex flex-col gap-3">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider px-1">{col}</span>
                      {[1, 2].map((card) => (
                        <div key={card} className="bg-white p-3 rounded-lg border border-border shadow-sm flex flex-col gap-2">
                          <div className="h-2 w-12 bg-secondary rounded" />
                          <div className="h-3 w-full bg-secondary rounded" />
                          <div className="flex justify-between items-center mt-2">
                            <div className="w-6 h-6 bg-secondary rounded-full" />
                            {card === 1 && i === 1 && (
                              <div className="flex items-center gap-1 px-1.5 py-0.5 bg-primary/10 text-primary rounded text-[10px] font-bold">
                                <Sparkles className="w-2.5 h-2.5" />
                                AI
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {activeView === 'table' && (
                <div className="bg-white rounded-lg border border-border h-full overflow-hidden">
                  <div className="grid grid-cols-4 border-b border-border bg-secondary/50 p-2">
                    {['Task', 'Owner', 'Status', 'Priority'].map((h) => (
                      <span key={h} className="text-[10px] font-bold text-muted-foreground uppercase">{h}</span>
                    ))}
                  </div>
                  {[1, 2, 3, 4, 5].map((row) => (
                    <div key={row} className="grid grid-cols-4 p-2 border-b border-border last:border-0 items-center">
                      <div className="h-3 w-20 bg-secondary rounded" />
                      <div className="w-6 h-6 bg-secondary rounded-full" />
                      <div className="h-4 w-12 bg-green-100 rounded" />
                      <div className="h-3 w-8 bg-secondary rounded" />
                    </div>
                  ))}
                </div>
              )}

              {activeView === 'gantt' && (
                <div className="h-full flex flex-col gap-6 pt-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-24 h-3 bg-secondary rounded" />
                      <div className="flex-1 relative h-6 bg-secondary/50 rounded-full overflow-hidden">
                        <div 
                          className="absolute h-full bg-primary rounded-full shadow-sm"
                          style={{ 
                            left: `${i * 15}%`, 
                            width: `${30 + (i * 5)}%`,
                            opacity: 0.6 + (i * 0.1)
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
