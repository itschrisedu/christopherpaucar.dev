"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";

export default function NavbarClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <Navbar />;
}

