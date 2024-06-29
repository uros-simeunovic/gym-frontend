import { useTheme } from "@/Providers/ThemeProvider";
import { Switch } from "./ui/switch";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [isChecked, setIsChecked] = useState<boolean>(
    theme == "dark" ? true : false
  );

  const onSwitchChange = () => {
    setIsChecked(!isChecked);
    isChecked ? setTheme("light") : setTheme("dark");
  };

  return (
    <div className="flex flex-row items-center relative space-x-2">
      <AnimatePresence>
        {isChecked ? (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 60 }}
            exit={{ rotate: 0 }}
            transition={{
              duration: 0.3,
              ease: "circOut",
            }}
          >
            <Moon />
          </motion.div>
        ) : (
          <motion.div
            initial={{ rotate: 60 }}
            animate={{ rotate: 0 }}
            exit={{ rotate: 0 }}
            transition={{
              duration: 0.3,
              ease: "circOut",
            }}
          >
            <Sun />
          </motion.div>
        )}
      </AnimatePresence>
      <Switch checked={isChecked} onCheckedChange={onSwitchChange} />
    </div>
  );
}
