import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Next + Clerk + Intl",
  description: "Showcase",
};

const inter = Inter({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <ClerkProvider>
      <html lang={locale}>
        <body className={inter.className}>
          <NextIntlClientProvider messages={messages}>
            <main className="flex flex-col items-center justify-between p-24">
              {children}
            </main>
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
