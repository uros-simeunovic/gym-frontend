import { compareLinksAndPathname } from "@/lib/utils";
import { Links } from "@/types";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const LinkItem = ({ to, text }: { to: Links; text: string }) => {
  const [hovered, setHovered] = useState(false);
  const { pathname } = useLocation();

  return (
    <motion.div
      className="relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{ translateY: pathname == to ? -4 : hovered ? -4 : 0 }}
        transition={{
          duration: 0.2,
          delay: 0.1,
          ease: [0.45, 0, 0.55, 1],
        }}
      >
        <Link to={to} className="font-thin text-3xl">
          {text}
        </Link>
      </motion.div>
      <motion.div
        className="absolute left-0 right-0 bg-pink-600 h-4 rounded-md"
        animate={{
          translateY: compareLinksAndPathname(pathname, to)
            ? -4
            : hovered
            ? -4
            : 0,
        }}
      />
    </motion.div>
  );
};
