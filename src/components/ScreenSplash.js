"use client";
import { useState, useEffect } from "react";

export default function SplashScreen({ duration = 1000 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <img src="/hblogo20262.jpeg" alt="Logo" className="w-36 animate-splash" />
    </div>
  );
}
