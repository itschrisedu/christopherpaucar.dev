"use client";

import { IconCloud } from "@/registry/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
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
    <div className="relative flex h-[320px] w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface dark:border-white/10 dark:bg-[#151515]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 dark:to-white/5" />
      <div className="absolute inset-0">
        <IconCloud images={images} />
      </div>
    </div>
  );
}

