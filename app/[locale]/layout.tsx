import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solve It Out",
  description: "Next i18n app with clerk authentication",
  icons: {
    icon: [{ url: "/logo.png" }],
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ClerkProvider>
      <html lang={locale}>
        <body suppressHydrationWarning={true}>{children}</body>
      </html>
      </ClerkProvider>
    </NextIntlClientProvider>
  );
}
