import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "@/components/Header"
import { GeneralContextProvider } from "@/contexts/generalContext/GeneralContext"
import { Footer } from "@/components/Footer"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title:
    "CoinGecko Clone - This is a study project and will be used as a portfolio only",
  description: "This is a study project and will be used as a portfolio only",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} p-4 xl:mx-[7%] 2xl:mx-[15%] xl:pt-2`}
      >
        <Analytics />
        <SpeedInsights />
        <GeneralContextProvider>
          <Header />
          {children}
          <Footer />
        </GeneralContextProvider>
      </body>
    </html>
  )
}
