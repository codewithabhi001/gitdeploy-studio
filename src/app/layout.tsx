import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "GitDeploy Studio — Ship Code. Not Excuses.",
  description:
    "The one-click deployment engine for developers who value their time. Push to any remote in under a second, right from your system tray.",
  keywords: ["git", "deploy", "developer tools", "one-click push", "devtools"],
  openGraph: {
    title: "GitDeploy Studio",
    description: "Ship Code. Not Excuses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="noise">{children}</body>
    </html>
  );
}
