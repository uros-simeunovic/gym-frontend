import { Sheet, SheetContent } from "@/components/ui/sheet";
import { NavmenuSidebar } from "./NavmenuSidebar";
import { useMainSidebarMobile } from "@/hooks/useMainSidebarMobile";

export const MobileNavbar = () => {
  const { isOpen, onClose } = useMainSidebarMobile();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side={"left"} className="w-full">
        <NavmenuSidebar />
      </SheetContent>
    </Sheet>
  );
};
