import SupabaseProvider from "@/providers/SupabaseProvider";
import Sidebar from "../components/Sidebar";

import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import UserProvider from "@/providers/UserProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Spotify Clone",
  description:
    "Built with React, Stripe, Supabase, PostgreSQL, Tailwing, and Vercel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <UserProvider>
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
