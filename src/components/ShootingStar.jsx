import { useEffect, useState } from "react";

export default function ShootingStar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(true);
      setTimeout(() => setVisible(false), 2000); // Hide after animation
    };

    window.addEventListener("scroll", handleScroll, { once: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return visible ? (
    <div className="pointer-events-none fixed top-0 left-0 w-2 h-2 bg-yellow-500 rounded-full z-30 animate-shooting-star shadow-md shadow-white" />
  ) : null;
}
