import NavBar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "HContainers",
  description: "Containers do seu jeito",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
