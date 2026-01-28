import { Activity, Bell, Languages, Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AppNavbar() {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Type to search..."
            className="w-full min-w-[200px] appearance-none bg-transparent pl-8 shadow-none md:w-[300px]"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="h-9 w-9 shadow-xs">
            <Languages className="h-4 w-4" />
            <span className="sr-only">Toggle language</span>
          </Button>
          <Button variant="outline" size="icon" className="h-9 w-9 shadow-xs">
            <Activity className="h-4 w-4" />
            <span className="sr-only">Activity</span>
          </Button>
          <Button variant="outline" size="icon" className="relative h-9 w-9 shadow-xs">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-red-500" />
            <span className="sr-only">Notifications</span>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-md p-0 overflow-hidden">
          <Avatar className="h-full w-full rounded-md">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="rounded-md">CN</AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </header>
  )
}
