"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { motion } from "framer-motion";
import { Loader2, SendIcon } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Icons } from "./icons";
import { Message } from "./message";
import { useScrollToBottom } from "./use-scroll-to-bottom";

const suggestedQuestions = [
  {
    title: "What should I post",
    label: "on my social media?",
    action: "What should I post on my social media?",
  },
  {
    title: "What time should I",
    label: "post on my social media?",
    action: "What time should I post on my social media?",
  },
];

const socials = [
  {
    title: "View source",
    icon: Icons.Github,
    link: process.env.NEXT_PUBLIC_GITHUB_REPO,
  },
  {
    title: "Live Demo",
    icon: Icons.Vercel,
    link: process.env.NEXT_PUBLIC_APP_URL,
  },
  {
    title: "Watch Demo",
    icon: Icons.Youtube,
    link: process.env.NEXT_PUBLIC_YOUTUBE_VIDEO,
  },
];

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const queryClient = useQueryClient();
  const formRef = useRef<HTMLFormElement>(null);
  const [messagesContainerRef, messagesEndRef] =
    useScrollToBottom<HTMLDivElement>();
  const { mutate, isPending } = useMutation({
    mutationFn: async (message: string) => {
      const { data } = await axios.post<{ message: string }>("/api/chat", {
        message,
      });

      return data.message;
    },
    onSuccess: (data) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          content: data,
        },
      ]);

      queryClient.invalidateQueries({ queryKey: ["limits"] });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.error);
      } else {
        toast.error("Something went wrong");
      }
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const message = formData.get("message") as string;
    formRef.current?.reset();

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        role: "user",
        content: message,
      },
    ]);

    mutate(message);
  };

  return (
    <div className="flex flex-row justify-center pb-20 h-dvh bg-white dark:bg-zinc-900">
      <div className="flex flex-col justify-between items-center gap-4">
        <div
          ref={messagesContainerRef}
          className="flex flex-col gap-4 h-full w-dvw items-center overflow-y-scroll"
        >
          {messages.map((message, index) => (
            <Message
              key={`${index}`}
              role={message.role}
              content={message.content}
            />
          ))}
          {isPending && (
            <div className="flex items-center justify-center p-4">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          )}
          <div
            ref={messagesEndRef}
            className="flex-shrink-0 min-w-[24px] min-h-[24px]"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-2 w-full px-4 md:px-0 mx-auto md:max-w-xl">
          {messages.length === 0 &&
            suggestedQuestions.map((question, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                key={index}
                className={index > 1 ? "hidden sm:block" : "block"}
              >
                <button
                  onClick={() => {
                    setMessages((prevMessages) => [
                      ...prevMessages,
                      {
                        role: "user",
                        content: question.action,
                      },
                    ]);
                    mutate(question.action);
                  }}
                  className="w-full text-left border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 rounded-lg p-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex flex-col"
                >
                  <span className="font-medium">{question.title}</span>
                  <span className="text-zinc-500 dark:text-zinc-400">
                    {question.label}
                  </span>
                </button>
              </motion.div>
            ))}
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-row gap-2 relative items-center w-full md:max-w-xl max-w-[calc(100dvw-32px) px-4 md:px-0"
        >
          <input
            className="bg-zinc-100 rounded-md px-2 py-1.5 flex-1 outline-none dark:bg-zinc-700 text-zinc-800 dark:text-zinc-300"
            placeholder="Send a message..."
            name="message"
            required
          />
          <button className="bg-blue-500 text-white rounded-md px-2 py-1.5">
            <SendIcon />
          </button>
        </form>
        <div className="grid grid-cols-3 gap-2 w-full px-4 md:px-0 mx-auto md:max-w-xl">
          {socials.map((social, index) => (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.09 * index }}
              key={index}
            >
              <button className="w-full text-left border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 rounded-lg p-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex flex-col">
                <a
                  target="_blank"
                  href={social.link}
                  className="flex w-full text-xs md:text-sm justify-between flex-row items-center gap-2"
                >
                  {social.title}
                  <social.icon className=" size-3.5 md:size-4" />
                </a>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
