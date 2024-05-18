import { Menu } from "lucide-react";
import { MobileSidebar } from "./MobileSidebar";
import { useSidebarMobile } from "@/hooks/useSidebarMobile";

export const TrainingNavbar = () => {
  const { onOpen } = useSidebarMobile();

  return (
    <div className="p-4 h-full flex items-center bg-white m-2">
      <div onClick={onOpen} className="md:hidden">
        <Menu />
      </div>
      <MobileSidebar />
    </div>
  );
};
