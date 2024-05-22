import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Sidebar } from "./Sidebar";
import { useSidebarMobile } from "@/hooks/useSidebarMobile";

export const MobileSidebar = () => {
  const { isOpen, onClose } = useSidebarMobile();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side={"left"} className="w-full">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
