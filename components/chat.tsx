"use client";

import { AnimatePresence, motion } from "framer-motion";
import { SendIcon } from "lucide-react";
import { Icons } from "./icons";

const suggestedQuestions = [
  {
    title: "What should I post",
    label: "on my social media?",
    action: "what's the summary of these documents?",
  },
  {
    title: "What time should I",
    label: "post on my social media?",
    action: "who is the author of these documents?",
  },
];

const socials = [
  {
    title: "View source",
    icon: Icons.Github,
    link: "https://github.com/aakash19here",
  },
  {
    title: "Live Demo",
    icon: Icons.Vercel,
    link: "https://github.com/aakash19here",
  },
  {
    title: "Watch Demo",
    icon: Icons.Youtube,
    link: "https://youtube.com",
  },
];

export default function Chat() {
  return (
    <div className="flex flex-row justify-center pb-20 h-dvh bg-white dark:bg-zinc-900">
      <div className="flex flex-col justify-between items-center gap-4">
        <div
          // ref={messagesContainerRef}
          className="flex flex-col gap-4 h-full w-dvw items-center overflow-y-scroll"
        >
          <div
            //   ref={messagesEndRef}
            className="flex-shrink-0 min-w-[24px] min-h-[24px]"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-2 w-full px-4 md:px-0 mx-auto md:max-w-[500px]">
          {suggestedQuestions.map((question, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              key={index}
              className={index > 1 ? "hidden sm:block" : "block"}
            >
              <button className="w-full text-left border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 rounded-lg p-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex flex-col">
                <span className="font-medium">{question.title}</span>
                <span className="text-zinc-500 dark:text-zinc-400">
                  {question.label}
                </span>
              </button>
            </motion.div>
          ))}
        </div>

        <form className="flex flex-row gap-2 relative items-center w-full md:max-w-[500px] max-w-[calc(100dvw-32px) px-4 md:px-0">
          <input
            className="bg-zinc-100 rounded-md px-2 py-1.5 flex-1 outline-none dark:bg-zinc-700 text-zinc-800 dark:text-zinc-300"
            placeholder="Send a message..."
          />
          <button className="bg-blue-500 text-white rounded-md px-2 py-1.5">
            <SendIcon />
          </button>
        </form>
        <div className="grid sm:grid-cols-3 gap-2 w-full px-4 md:px-0 mx-auto md:max-w-[500px]">
          {socials.map((social, index) => (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.09 * index }}
              key={index}
            >
              <button className="w-full text-left border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 rounded-lg p-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex flex-col">
                <div className="flex w-full justify-between flex-row items-center gap-2">
                  {social.title}
                  <social.icon className="w-4 h-4" />
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
