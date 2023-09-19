"use client";
import { useState, useEffect } from "react";

export default function SplashScreen({ duration = 100 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50">
      <img src="/HolobeatLogo(web02).png" alt="Logo" className="w-36" />
    </div>
  );
}
