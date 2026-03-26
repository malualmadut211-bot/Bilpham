import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Why Choose Us", path: "/why-choose-us" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-[1000] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]",
          isScrolled
            ? "bg-white h-[80px] shadow-[0_2px_20px_rgba(44,71,138,0.1)]"
            : "bg-transparent h-[80px] lg:h-[100px]"
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Shield
                size={32}
                className={cn(
                  "transition-colors duration-400",
                  isScrolled ? "text-primary" : "text-white"
                )}
              />
            </motion.div>
            <span
              className={cn(
                "font-display text-xl font-bold tracking-tight transition-colors duration-400",
                isScrolled ? "text-primary" : "text-white"
              )}
            >
              BILPAM SHIELD
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "group relative text-[15px] font-semibold uppercase tracking-[1.5px] transition-colors",
                    isScrolled ? "text-text-dark hover:text-primary" : "text-white/90 hover:text-white",
                    isActive && (isScrolled ? "text-primary" : "text-white")
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-secondary transition-transform duration-300 ease-out group-hover:scale-x-100",
                      isActive && "scale-x-100 bg-secondary"
                    )}
                  />
                </Link>
              );
            })}
            <Link
              to="/contact"
              className={cn(
                "relative overflow-hidden rounded-lg px-7 py-3 font-bold transition-all duration-300 hover:-translate-y-[2px] hover:shadow-lg",
                isScrolled
                  ? "bg-primary text-white hover:bg-secondary"
                  : "bg-white text-primary hover:bg-background-base"
              )}
            >
              <span className="relative z-10">Get Protected</span>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu
              size={28}
              className={cn(
                "transition-colors",
                isScrolled ? "text-primary" : "text-white"
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[2000] flex flex-col bg-primary px-6 py-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} className="text-white" />
              </button>
            </div>
            <nav className="mt-12 flex flex-col gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="text-2xl font-bold text-white"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto pb-8">
              <p className="text-white/80">bilpamshield@gmail.com</p>
              <p className="text-white/80">+211 927 776 151</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
