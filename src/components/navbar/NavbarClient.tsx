"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";

export default function NavbarClient() {
  const [mounted] = useState(() => typeof window !== "undefined");

  if (!mounted) return null;

  return <Navbar />;
}

