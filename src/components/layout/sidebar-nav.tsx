
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Camera,
  Video,
  Edit3,
  BarChart3,
  Code,
  Sparkles,
  Menu,
} from "lucide-react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { href: "/", label: "Introduction", icon: Home },
  { href: "/photography", label: "Photography", icon: Camera },
  { href: "/videography", label: "Videography", icon: Video },
  { href: "/editing", label: "Editing Showcase", icon: Edit3 },
  { href: "/power-bi", label: "Power BI", icon: BarChart3 },
  { href: "/development", label: "Development", icon: Code },
  {
    href: "/description-optimizer",
    label: "Desc. Optimizer",
    icon: Sparkles,
  },
];

export function SidebarNav() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [mobileSheetOpen, setMobileSheetOpen] = React.useState(false);

  const navContent = (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <Link href={item.href} passHref>
            <SidebarMenuButton
              asChild
              isActive={pathname === item.href}
              onClick={isMobile ? () => setMobileSheetOpen(false) : undefined}
              tooltip={isMobile ? undefined : item.label}
            >
              <>
                <item.icon />
                <span>{item.label}</span>
              </>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );

  if (isMobile) {
    return (
      <Sheet open={mobileSheetOpen} onOpenChange={setMobileSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="fixed top-4 left-4 z-50">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72 bg-sidebar text-sidebar-foreground">
          <SidebarHeader className="p-4">
            <h2 className="text-xl font-headline font-semibold text-primary">Jacques Obed</h2>
          </SidebarHeader>
          <SidebarContent className="p-2">
            {navContent}
          </SidebarContent>
        </SheetContent>
      </Sheet>
    );
  }
  

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="justify-center p-2">
         <div className="flex items-center gap-2 group-data-[collapsible=icon]:hidden">
            <svg width="24" height="24" viewBox="0 0 100 100" className="text-primary fill-current">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="5" fill="none" />
              <text x="50" y="62" textAnchor="middle" fontSize="40" fontWeight="bold" className="fill-primary group-hover:fill-primary-foreground">JO</text>
            </svg>
            <h2 className="text-xl font-headline font-semibold text-primary">Jacques Obed</h2>
          </div>
          <div className="hidden group-data-[collapsible=icon]:flex items-center justify-center w-full py-2">
             <svg width="24" height="24" viewBox="0 0 100 100" className="text-primary fill-current">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="5" fill="none" />
              <text x="50" y="62" textAnchor="middle" fontSize="40" fontWeight="bold" className="fill-primary">JO</text>
            </svg>
          </div>
      </SidebarHeader>
      <SidebarContent>{navContent}</SidebarContent>
       <div className="p-2 mt-auto group-data-[collapsible=icon]:hidden">
        <p className="text-xs text-center text-muted-foreground">&copy; {new Date().getFullYear()} Jacques Obed</p>
      </div>
    </Sidebar>
  );
}

