import "./globals.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Educode",
  description: "Armado en DpUtn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="holder">
            <img src="/images/Logo2.png" width="130" alt="logo" />
            <h1>EduCode</h1>
          </div>
        </header>

        <Nav />

        {children}

        <footer>
          <p>Diseñado por MSG</p>
        </footer>
      </body>
    </html>
  );
}
