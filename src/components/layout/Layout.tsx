import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Preloader } from "../ui/Preloader";
import { CustomCursor } from "../ui/CustomCursor";
import { ScrollToTop } from "../ui/ScrollToTop";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { ProgressBar } from "../ui/ProgressBar";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Preloader />
      <CustomCursor />
      <ProgressBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}
