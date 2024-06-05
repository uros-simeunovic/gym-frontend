import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Sidebar } from "./Sidebar";
import { useWorkoutSidebarMobile } from "@/hooks/useWorkoutSidebarMobile";

export const MobileSidebar = () => {
  const { isOpen, onClose } = useWorkoutSidebarMobile();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side={"right"} className="w-full">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
