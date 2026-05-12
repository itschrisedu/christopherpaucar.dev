"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

/* ────────────────────────────────────────────────────────────────
   TERMINAL DATA
   ──────────────────────────────────────────────────────────────── */

interface TerminalLine {
  command: string;
  outputs: string[];
}

const TERMINAL_LINES: TerminalLine[] = [
  {
    command: "cpaucar.init()",
    outputs: ["✔ Environment loaded successfully"],
  },
  {
    command: 'profile.load("Christopher Paucar")',
    outputs: [
      "✔ Full Stack Developer",
      "✔ Building modern web & AI-powered solutions",
    ],
  },
  {
    command: "skills.scan()",
    outputs: [
      "✔ React · Next.js · Node · NestJS · TypeScript · TailwindCSS · AI",
    ],
  },
  {
    command: "status.check()",
    outputs: ["✔ Available for work — Let's build something great 🚀"],
  },
];

/* ── Timing ───────────────────────────────────────────────────── */
const TYPING_SPEED = 30;
const OUTPUT_DELAY = 120;
const LINE_OUTPUT_DELAY = 60;
const NEXT_COMMAND_DELAY = 300;
const ACCESS_TYPING_SPEED = 25;
const WAIT_BEFORE_TRANSITION = 1200;

/* ────────────────────────────────────────────────────────────────
   COMPONENT
   ──────────────────────────────────────────────────────────────── */

interface TerminalIntroProps {
  onComplete: () => void;
}

export default function TerminalIntro({ onComplete }: TerminalIntroProps) {
  const [displayedLines, setDisplayedLines] = useState<
    { type: "command" | "output" | "access"; text: string; lineIndex: number }[]
  >([]);
  const [currentTyping, setCurrentTyping] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [accessDots, setAccessDots] = useState("");

  const scrollRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayedLines, currentTyping]);

  // ESC to skip
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onComplete();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onComplete]);

  /* ── Typing engine ──────────────────────────────────────────── */
  const typeCommand = useCallback(
    (text: string, speed: number = TYPING_SPEED): Promise<void> => {
      return new Promise((resolve) => {
        setIsTyping(true);
        let i = 0;
        const interval = setInterval(() => {
          i++;
          setCurrentTyping(text.slice(0, i));
          if (i >= text.length) {
            clearInterval(interval);
            setIsTyping(false);
            resolve();
          }
        }, speed);
      });
    },
    []
  );

  const showOutputs = useCallback(
    (outputs: string[], lineIndex: number): Promise<void> => {
      return new Promise((resolve) => {
        let i = 0;
        const interval = setInterval(() => {
          setDisplayedLines((prev) => [
            ...prev,
            { type: "output", text: outputs[i], lineIndex },
          ]);
          i++;
          if (i >= outputs.length) {
            clearInterval(interval);
            resolve();
          }
        }, LINE_OUTPUT_DELAY);
      });
    },
    []
  );

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  /* ── Dot animation ──────────────────────────────────────────── */
  const animateDots = useCallback((duration: number): Promise<void> => {
    return new Promise((resolve) => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setAccessDots(".".repeat((count % 3) + 1));
      }, 500);
      setTimeout(() => {
        clearInterval(interval);
        setAccessDots("...");
        resolve();
      }, duration);
    });
  }, []);

  /* ── Main sequence (starts immediately) ─────────────────────── */
  const runSequence = useCallback(async () => {
    for (let i = 0; i < TERMINAL_LINES.length; i++) {
      const { command, outputs } = TERMINAL_LINES[i];

      await typeCommand(command);
      setDisplayedLines((prev) => [
        ...prev,
        { type: "command", text: command, lineIndex: i },
      ]);
      setCurrentTyping("");

      await sleep(OUTPUT_DELAY);
      await showOutputs(outputs, i);

      if (i < TERMINAL_LINES.length - 1) {
        await sleep(NEXT_COMMAND_DELAY);
      }
    }

    // ── Final command ──
    await sleep(600);
    const accessMsg = 'portfolio.access("christopherpaucar.dev")';
    await typeCommand(accessMsg, ACCESS_TYPING_SPEED);

    setDisplayedLines((prev) => [
      ...prev,
      { type: "command", text: accessMsg, lineIndex: TERMINAL_LINES.length },
    ]);
    setCurrentTyping("");

    await sleep(300);
    setDisplayedLines((prev) => [
      ...prev,
      {
        type: "access",
        text: "⚡ Launching portfolio",
        lineIndex: TERMINAL_LINES.length,
      },
    ]);

    setIsComplete(true);
    await animateDots(WAIT_BEFORE_TRANSITION);
    onComplete();
  }, [typeCommand, showOutputs, animateDots, onComplete]);

  // Start immediately
  useEffect(() => {
    if (!hasStarted.current) {
      hasStarted.current = true;
      const timer = setTimeout(() => runSequence(), 600);
      return () => clearTimeout(timer);
    }
  }, [runSequence]);

  /* ── Render helpers ─────────────────────────────────────────── */
  const renderPrompt = () => (
    <span className="text-azure font-medium select-none">
      <span className="text-[#34c759] dark:text-[#30d158]">❯</span>{" "}
    </span>
  );

  const renderLine = (
    line: { type: "command" | "output" | "access"; text: string; lineIndex: number },
    idx: number
  ) => {
    if (line.type === "command") {
      return (
        <motion.div
          key={`cmd-${idx}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-start"
        >
          {renderPrompt()}
          <span className="text-ink dark:text-[var(--color-terminal-text)]">{line.text}</span>
        </motion.div>
      );
    }

    if (line.type === "access") {
      return (
        <motion.div
          key={`access-${idx}`}
          initial={{ opacity: 0, x: -4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="pl-5 text-[#34c759] dark:text-[#30d158] text-sm font-medium"
        >
          {line.text}
          {isComplete && <span>{accessDots}</span>}
        </motion.div>
      );
    }

    return (
      <motion.div
        key={`out-${idx}`}
        initial={{ opacity: 0, x: -4 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.15 }}
        className="pl-5 text-graphite dark:text-[var(--color-terminal-muted)] text-sm"
      >
        {line.text}
      </motion.div>
    );
  };

  /* ── UI — Light Apple-style terminal ────────────────────────── */
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-fog dark:bg-[#0a0a0a] p-4 sm:p-8"
    >
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #d2d2d7 0.5px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Terminal window — Apple frosted card */}
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
        className="relative w-full max-w-2xl rounded-[28px]
          bg-snow dark:bg-[#1c1c1e]
          border border-silver-mist/70 dark:border-[#38383a]
          shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
          overflow-hidden"
      >
        <div className="terminal-scanline" />

        {/* Title bar — macOS style */}
        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-silver-mist/50 dark:border-[#38383a]">
          <div className="flex items-center gap-2">
            <span className="block h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="block h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="block h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 text-center">
            <span suppressHydrationWarning className="text-xs font-mono text-graphite dark:text-[var(--color-terminal-muted)] tracking-wide">
              christopher@dev ~ portfolio
            </span>
          </div>
          <div className="w-[52px]" />
        </div>

        {/* Terminal body */}
        <div
          ref={scrollRef}
          className="terminal-scroll p-6 font-mono text-sm leading-7 min-h-[300px] max-h-[450px] overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-graphite dark:text-[var(--color-terminal-muted)] mb-4 text-xs select-none"
          >
            <span className="text-azure">christopherpaucar.dev</span>{" "}
            — v1.0.0
          </motion.div>

          {/* Lines */}
          <div className="space-y-1">
            {displayedLines.map((line, idx) => renderLine(line, idx))}
          </div>

          {/* Currently typing */}
          {currentTyping && (
            <div className="flex items-start mt-1">
              {renderPrompt()}
              <span className="text-ink dark:text-[var(--color-terminal-text)]">{currentTyping}</span>
              {isTyping && <span className="terminal-cursor" />}
            </div>
          )}

          {/* Idle cursor */}
          {!currentTyping && !isComplete && !isTyping && (
            <div className="flex items-start mt-1">
              {renderPrompt()}
              <span className="terminal-cursor" />
            </div>
          )}
        </div>
      </motion.div>

      {/* Skip button — Apple frosted pill */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={onComplete}
        className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 
                   flex items-center gap-2 px-4 py-2 rounded-full
                   text-xs font-mono text-graphite dark:text-[var(--color-terminal-muted)]
                   border border-silver-mist dark:border-[#38383a]
                   bg-snow/80 dark:bg-[#1c1c1e]/80 backdrop-blur-[20px]
                   hover:text-ink dark:hover:text-snow hover:border-graphite dark:hover:border-[#636366]
                   transition-colors duration-200 cursor-pointer"
      >
        Skip
        <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded-md bg-fog dark:bg-[#38383a] text-[10px] text-graphite dark:text-[var(--color-terminal-muted)]">
          ESC
        </kbd>
      </motion.button>
    </motion.div>
  );
}
