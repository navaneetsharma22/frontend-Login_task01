import { useMemo, useState } from "react";

const quickReplies = ["Top briefing", "Watchlist summary", "Risk signals"];

const buildBotReply = (text) => {
  const normalized = text.trim().toLowerCase();

  if (normalized.includes("briefing")) {
    return "Top briefing: energy and infrastructure desks are trending defensive this week.";
  }

  if (normalized.includes("watchlist")) {
    return "Watchlist summary: Intel Memos, CEO Calendar, and Market Signals are active.";
  }

  if (normalized.includes("risk")) {
    return "Risk signals: logistics premiums and policy timing remain the key short-term watchpoints.";
  }

  if (normalized.includes("hello") || normalized.includes("hi")) {
    return "Hello. I can help with briefing, watchlist, or risk signals.";
  }

  return "I can answer dashboard topics like briefing, watchlist, and risk signals.";
};

export default function StaticChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "bot",
      text: "Welcome to your dashboard assistant. Ask about briefing, watchlist, or risk.",
    },
  ]);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  const sendMessage = (rawText) => {
    const text = rawText.trim();
    if (!text) return;

    const userMessage = { id: Date.now(), role: "user", text };
    const botMessage = {
      id: Date.now() + 1,
      role: "bot",
      text: buildBotReply(text),
    };

    setMessages((current) => [...current, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <section className="mb-3 w-[min(24rem,calc(100vw-2rem))] rounded-[1.25rem] border border-slate-200/70 bg-white/95 p-4 shadow-2xl shadow-slate-900/20 backdrop-blur">
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-700">
                Chat Bot
              </p>
              <p className="text-sm font-bold text-slate-900">Dashboard Assistant</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-100"
            >
              Close
            </button>
          </div>

          <div className="mt-3 max-h-64 space-y-2 overflow-y-auto pr-1">
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.role === "user"
                    ? "ml-10 rounded-2xl bg-slate-900 px-3 py-2 text-sm text-white"
                    : "mr-10 rounded-2xl bg-slate-100 px-3 py-2 text-sm text-slate-700"
                }
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-2">
            <div className="grid grid-cols-3 gap-2">
              {quickReplies.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => sendMessage(item)}
                  className="rounded-xl border border-slate-200 bg-white px-2 py-2 text-xs font-semibold text-slate-700 hover:border-teal-300 hover:text-teal-800"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    sendMessage(input);
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 outline-none focus:border-teal-500 focus:bg-white"
              />
              <button
                type="button"
                onClick={() => sendMessage(input)}
                disabled={!canSend}
                className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Send
              </button>
            </div>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="w-full rounded-full bg-teal-600 px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-xl shadow-teal-700/25 transition hover:bg-teal-700"
      >
        {isOpen ? "Hide Chat" : "Open Chat"}
      </button>
    </div>
  );
}
