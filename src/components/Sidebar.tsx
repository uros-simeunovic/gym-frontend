import { SidebarRoutes } from "./SidebarRoutes";

export const Sidebar = () => {
  return (
    <div className="h-full flex flex-col overflow-y-auto bg-white p-4 md:border-r">
      <div className="relative mt-[80px] font-bold text-6xl flex flex-row items-center">
        <h1 className="z-10">Treninzi</h1>
        <span className="absolute -left-[3px] top-[3px] text-pink-500">
          Treninzi
        </span>
      </div>
      <div className="mt-8">
        <SidebarRoutes />
      </div>
    </div>
  );
};
