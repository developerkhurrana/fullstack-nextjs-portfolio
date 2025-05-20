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
      "Hi! I'm Kshitij's AI assistant. How can I help you learn more about him?",
  },
];

const knowledgeBase = {
  about: {
    experience:
      "Kshitij is a Full-Stack Developer with 3+ years of experience building high-impact web applications. He's proficient in React.js, Node.js, and UI/UX design tools like Figma.",
    education:
      "He holds a B.Sc. in Media Technology from ICAT Design and Media College, completed in 2020.",
    skills:
      "His key skills include UI/UX Design, Team Leadership, Project Management, MERN Stack, REST APIs, and Database Management.",
  },
  work: {
    current:
      "Currently, he works as a Web Designer and Team Leader at TSSS Infotech and Infra, where he leads a team of 3 designers and has delivered 10+ client projects with a 95% on-time delivery rate.",
    projects:
      "He has worked on various projects including LinkedIn Clone, Travel App, Nike Web, Amazon Deploy, Netflix Clone, and several MERN stack applications.",
    achievements:
      "He has achieved multiple professional certifications in Back-End Development, Front-End Development, and Full-Stack Development.",
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
        className={`fixed right-8 bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 ${
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
              className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-lg border-2 border-red-500"
            >
              <Bell className="w-3 h-3 text-red-500" />
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
            className={`fixed right-8 w-96 h-[600px] bg-neutral-900 rounded-lg shadow-2xl border border-neutral-800 flex flex-col z-50 ${
              isScrolled ? "bottom-24" : "bottom-10"
            }`}
          >
            <div className="p-4 border-b border-neutral-800 flex justify-between items-center">
              <h3 className="text-white font-semibold">
                Chat with Kshitij&apos;s AI
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
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
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
              className="p-4 border-t border-neutral-800"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-neutral-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-2 rounded-lg hover:opacity-90 transition-opacity"
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
