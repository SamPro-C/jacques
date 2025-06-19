
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { SidebarNav } from "./sidebar-nav";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <SidebarProvider>
      <SidebarNav />
      <SidebarInset>
        <div className="min-h-screen p-4 md:p-8 max-w-screen-xl mx-auto">
         {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
