"use client";

import React, { useState, useEffect } from "react";
import { Trash2, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

function getRelativeTime(timestamp: number) {
  const now = Date.now();
  const diff = Math.floor((now - timestamp) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

export default function Jot() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [blurOn, setBlurOn] = useState(true);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "b") setBlurOn((b) => !b);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          text: newTodo.trim(),
          completed: false,
          createdAt: Date.now(),
        },
      ]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearThoughts = () => setTodos([]);

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#1b1714]">
      <SiteNav />
      <main className="mx-auto max-w-2xl px-5 pb-24 pt-32 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-[#1b1714]/10 bg-[#1b1714]/[0.02] p-6 sm:p-8"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Jot</h1>
              <p className="mt-1 text-sm text-[#857b72]">
                Quick thoughts, stored locally. Press{" "}
                <kbd className="rounded border border-[#1b1714]/15 px-1.5 py-0.5 text-xs">
                  B
                </kbd>{" "}
                to toggle blur.
              </p>
            </div>
            <div className="relative">
              <button
                className="grid h-10 w-10 place-items-center rounded-full border border-[#1b1714]/10 text-[#56504a] transition-colors hover:text-[#1b1714]"
                onClick={() => setIsMenuOpen((v) => !v)}
                aria-label="Open menu"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 z-10 mt-2 w-48 rounded-xl border border-[#1b1714]/10 bg-[#fdfcfa] p-2 text-sm text-[#1b1714] shadow-xl"
                  >
                    <button
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left hover:bg-[#1b1714]/[0.04]"
                      onClick={() => {
                        setBlurOn((b) => !b);
                        setIsMenuOpen(false);
                      }}
                    >
                      Toggle blur
                      <span className="ml-auto text-[#857b72]">B</span>
                    </button>
                    <button
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left hover:bg-[#1b1714]/[0.04]"
                      onClick={() => {
                        clearThoughts();
                        setIsMenuOpen(false);
                      }}
                    >
                      Clear thoughts
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <form onSubmit={addTodo} className="mb-6">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full rounded-xl border border-[#1b1714]/10 bg-[#1b1714]/[0.04] px-4 py-3 text-[#3a342e] placeholder:text-[#857b72] focus:border-[#b2532e]/50 focus:outline-none focus:ring-2 focus:ring-[#b2532e]/30"
            />
          </form>

          <div className="space-y-1">
            {todos.length === 0 && (
              <p className="py-8 text-center text-sm text-[#9a9087]">
                Nothing jotted yet.
              </p>
            )}
            <AnimatePresence>
              {[...todos].reverse().map((todo) => (
                <motion.div
                  key={todo.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="group flex items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-[#1b1714]/[0.03]"
                >
                  <span className="w-16 shrink-0 text-right text-xs text-[#9a9087]">
                    {getRelativeTime(todo.createdAt)}
                  </span>
                  <span
                    className={
                      "flex-1 py-1 text-sm text-[#3a342e] transition-all " +
                      (blurOn && hoveredId !== todo.id
                        ? "cursor-pointer blur-sm"
                        : "")
                    }
                    onMouseEnter={() => setHoveredId(todo.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {todo.text}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    aria-label="Delete"
                    className="text-[#9a9087] opacity-0 transition-all hover:text-red-400 group-hover:opacity-100"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </main>
      <SiteFooter />
    </div>
  );
}
