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
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Professional Journey
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            A timeline of my professional experience and achievements
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col gap-8">
              <div className="flex items-center gap-x-4">
                <div className="h-10 w-10 rounded-full bg-orange-400/10 flex items-center justify-center">
                  <span className="text-orange-400 font-semibold">
                    {item.title}
                  </span>
                </div>
              </div>
              {item.content.map((entry, entryIndex) => (
                <div key={entryIndex} className="relative pl-8">
                  <div className="absolute left-0 top-0 h-full w-px bg-neutral-200 dark:bg-neutral-800" />
                  <div className="relative">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                      {entry.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      {entry.description}
                    </p>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="rounded-lg bg-neutral-50 dark:bg-neutral-900 p-4">
                        <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                          Key Achievements
                        </h4>
                        <ul className="text-sm space-y-2 text-neutral-600 dark:text-neutral-400">
                          {entry.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-lg bg-neutral-50 dark:bg-neutral-900 p-4">
                        <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                          Technologies
                        </h4>
                        <ul className="text-sm space-y-2 text-neutral-600 dark:text-neutral-400">
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
