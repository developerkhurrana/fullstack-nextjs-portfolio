"use client";
import React from "react";

interface TimelineEntry {
  title: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface TimelineProps {
  data: {
    title: string;
    content: TimelineEntry[];
  }[];
}

export function Timeline({ data }: TimelineProps) {
  return (
    <div className="relative w-full overflow-visible py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-normal tracking-tight text-[#1b1714] sm:text-4xl">
            Professional journey
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#56504a]">
            A timeline of my experience and what I shipped along the way.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col gap-8">
              <div className="flex items-center gap-x-4">
                <div className="rounded-full bg-[#b2532e]/10 px-3 py-1.5 flex items-center justify-center">
                  <span className="font-mono text-sm text-[#b2532e] font-medium tracking-tight">
                    {item.title}
                  </span>
                </div>
              </div>
              {item.content.map((entry, entryIndex) => (
                <div key={entryIndex} className="relative pl-8">
                  <div className="absolute left-0 top-0 h-full w-px bg-[#1b1714]/12" />
                  <div className="relative">
                    <h3 className="text-lg font-semibold text-[#1b1714]">
                      {entry.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#6b635a]">
                      {entry.description}
                    </p>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="rounded-lg bg-[#1b1714]/[0.03] p-4">
                        <h4 className="text-sm font-semibold text-[#1b1714] mb-2">
                          Key achievements
                        </h4>
                        <ul className="text-sm space-y-2 text-[#56504a]">
                          {entry.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-lg bg-[#1b1714]/[0.03] p-4">
                        <h4 className="text-sm font-semibold text-[#1b1714] mb-2">
                          Technologies
                        </h4>
                        <ul className="text-sm space-y-2 text-[#56504a]">
                          {entry.technologies.map((tech, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2">•</span>
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
