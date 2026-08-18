"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bell } from "lucide-react";
import { usePathname } from "next/navigation";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const initialMessages: Message[] = [
  {
    role: "assistant",
    content:
      "Hi! Ask me anything about Kshitij's work, skills, and experience — projects, e-commerce, or how to get in touch.",
  },
];

const knowledgeBase = {
  about: {
    experience:
      "Kshitij is a Full-Stack Developer who designs and ships production e-commerce end to end, building with Next.js, React, TypeScript, Node.js, and MongoDB — owning both the design and the build so projects ship without a handoff.",
    education:
      "He holds a B.Sc. in Media Technology from ICAT Design and Media College (2018–2021), where he won 1st Prize in the Indywood Poster Design Competition.",
    skills:
      "His skills span UI/UX design (Figma, Adobe XD), full-stack development (Next.js, React, TypeScript, Node.js, Express, MongoDB, REST APIs, Google Sheets API), Shopify, SEO, and social media marketing.",
  },
  work: {
    current:
      "He works at Aravalli Designs, an ethnic-wear e-commerce company, as a Full-Stack Developer & UI/UX Designer. There he built Ethnics by Aravalli — a custom Next.js/MongoDB B2B platform for 50+ retailers with automated order processing and PDF invoicing — and designs, builds, and markets Ekohum, its Shopify D2C brand.",
    projects:
      "Highlights: Ethnics by Aravalli — a custom Next.js 14 / TypeScript / MongoDB B2B platform for 50+ retailers with a Google Sheets automation pipeline that cut order processing time 70% (20+ hrs/week); Ekohum — a Shopify D2C storefront he designs, builds, and markets (+45% Instagram engagement, +200 followers); plus a TSSS real estate platform (+80% traffic, +30% leads) and various React apps.",
    achievements:
      "He improved order processing efficiency by 70%, grew web traffic 80% on a real estate platform, and holds Front-End, Back-End, and Python developer certificates from Mimo.",
  },
  contact: {
    resume:
      "You can download his resume from the 'Resume' button in the navigation bar.",
    portfolio:
      "This website serves as his portfolio, showcasing his work and experience.",
    email: "You can reach him via email at thekshitijkhurrana@gmail.com",
    social:
      "You can connect with him on LinkedIn (linkedin.com/in/kshitij-khurrana) or GitHub (github.com/developerkhurrana)",
    general:
      "You can contact Kshitij through email at thekshitijkhurrana@gmail.com, connect on LinkedIn, or check out his GitHub profile. You can also download his resume from the navigation bar.",
  },
};

export function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [hasNotification, setHasNotification] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Set notification to true only on client side
    setHasNotification(true);

    // Show notification for 5 seconds
    const timer = setTimeout(() => {
      setHasNotification(false);
    }, 5000);

    // Handle scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);

    // Simple response logic based on keywords
    const response = generateResponse(userMessage.toLowerCase());
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response },
      ]);
    }, 500);
  };

  const generateResponse = (message: string): string => {
    if (message.includes("experience") || message.includes("work")) {
      return knowledgeBase.about.experience;
    }
    if (message.includes("education") || message.includes("degree")) {
      return knowledgeBase.about.education;
    }
    if (message.includes("skill") || message.includes("proficient")) {
      return knowledgeBase.about.skills;
    }
    if (message.includes("current") || message.includes("job")) {
      return knowledgeBase.work.current;
    }
    if (message.includes("project")) {
      return knowledgeBase.work.projects;
    }
    if (message.includes("achievement") || message.includes("certification")) {
      return knowledgeBase.work.achievements;
    }
    if (message.includes("resume") || message.includes("cv")) {
      return knowledgeBase.contact.resume;
    }
    if (message.includes("portfolio") || message.includes("website")) {
      return knowledgeBase.contact.portfolio;
    }
    if (
      message.includes("contact") ||
      message.includes("reach") ||
      message.includes("email") ||
      message.includes("linkedin") ||
      message.includes("github")
    ) {
      return knowledgeBase.contact.general;
    }
    return "I'm not sure about that. You can ask me about Kshitij's experience, education, skills, current work, projects, achievements, or how to contact him.";
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => {
          setIsOpen(true);
          setHasNotification(false);
        }}
        className={`fixed right-6 sm:right-8 grid place-items-center h-14 w-14 bg-amber-400 text-black rounded-full shadow-lg shadow-amber-400/20 hover:shadow-xl transition-all duration-300 z-50 ${
          isScrolled ? "bottom-20" : "bottom-6"
        } ${pathname === "/projects" && isScrolled ? "mb-4" : ""}`}
        aria-label="Open chat"
      >
        <div className="relative">
          <MessageSquare className="w-6 h-6" />
          {hasNotification && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 bg-neutral-900 rounded-full p-1 shadow-lg border border-amber-400"
            >
              <Bell className="w-3 h-3 text-amber-400" />
            </motion.div>
          )}
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed right-4 sm:right-8 w-[calc(100vw-2rem)] sm:w-96 h-[600px] max-h-[80vh] bg-neutral-900 rounded-2xl shadow-2xl border border-white/10 flex flex-col z-50 ${
              isScrolled ? "bottom-24" : "bottom-10"
            }`}
          >
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                Ask about Kshitij
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-white"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed ${
                      message.role === "user"
                        ? "bg-amber-400 text-black"
                        : "bg-neutral-800 text-neutral-200"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-white/10"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-neutral-800 text-white rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button
                  type="submit"
                  className="grid place-items-center bg-amber-400 text-black px-3 rounded-xl hover:bg-amber-300 transition-colors"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
