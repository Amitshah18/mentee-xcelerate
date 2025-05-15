"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Calendar,
  MessageSquare,
  Users,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
  Video,
} from "lucide-react"
import { useState } from "react"

export function DashboardSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "My Sessions",
      href: "/dashboard/sessions",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      title: "Messages",
      href: "/dashboard/messages",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      title: "My Mentors",
      href: "/dashboard/mentors",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Past Recordings",
      href: "/dashboard/recordings",
      icon: <Video className="h-5 w-5" />,
    },
    {
      title: "Resources",
      href: "/dashboard/resources",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-20 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <div
        className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-background border-r transform transition-transform duration-200 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:relative md:translate-x-0
      `}
      >
        <div className="h-full flex flex-col">
          <div className="p-6">
            <Link href="/dashboard" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M7 9h10" />
                <path d="M7 13h10" />
                <path d="M7 17h10" />
              </svg>
              <span className="text-xl font-bold">MenteXcelarate</span>
            </Link>
          </div>

          <nav className="flex-1 px-4 space-y-1">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                <Button variant={pathname === item.href ? "secondary" : "ghost"} className="w-full justify-start mb-1">
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                </Button>
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
