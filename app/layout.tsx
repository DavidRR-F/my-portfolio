import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/navigation/Navbar";
import Sidebar from "@/components/navigation/Sidebar";

export const metadata = {
  title: "David Rose-Franklin",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/logo.svg"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <Providers>
          <Navbar />
          <Sidebar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
