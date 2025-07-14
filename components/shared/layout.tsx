import type React from "react"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>{children}</div>
}
