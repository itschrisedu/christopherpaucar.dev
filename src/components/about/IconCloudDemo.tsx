"use client";

import { IconCloud } from "@/registry/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "python",
  "react",
  "flutter",
  "android",
  "html5",
  "tailwindcss",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "angular",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
] as const;

export function IconCloudDemo() {
  // Simple Icons:
  // - `https://cdn.simpleicons.org/{slug}` keeps the brand color
  // - `https://cdn.simpleicons.org/{slug}/{hex}` forces a single color
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`);

  return (
    <div className="relative flex h-[240px] sm:h-[320px] md:h-[360px] lg:h-[420px] w-full max-w-[620px] mx-auto items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface dark:border-white/10 dark:bg-[#151515]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 dark:to-white/5" />
      <div className="absolute inset-0">
        <IconCloud images={images} radius={120} />
      </div>
    </div>
  );
}

