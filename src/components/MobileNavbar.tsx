import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useSidebarMobile } from "@/hooks/useSidebarMobile";
import { NavmenuSidebar } from "./NavmenuSidebar";
import { useEffect } from "react";

export const MobileNavbar = () => {
  const { isOpen, onClose } = useSidebarMobile();

  useEffect(() => {
    onClose();
  }, []);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side={"left"} className="w-full">
        <NavmenuSidebar />
      </SheetContent>
    </Sheet>
  );
};
