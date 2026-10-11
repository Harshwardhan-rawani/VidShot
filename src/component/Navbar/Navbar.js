import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import AnimatedButton from "../Button/AnimatedButton";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:px-4 lg:px-6 backdrop-blur-md backdrop-saturate-150 bg-white">
      <div className="mx-auto max-w-9xl rounded-[28px] border border-white/30 bg-white/10 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-2xl backdrop-saturate-150">
        <div className="flex items-center justify-between gap-3 px-3 py-3 sm:px-5 lg:px-6">
           <Link
                        to="/"
                        className="
                          group
                          inline-flex
                          items-center
                          gap-3
                        "
                      >
                        {/* Logo mark */}
          
                        <span
                          className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            bg-[#F8CC10]
                            text-xl
                            font-black
                            text-[#5428B0]
                            shadow-[0_10px_30px_rgba(248,204,16,0.15)]
                            transition-transform
                            duration-300
                            group-hover:rotate-3
                          "
                        >
                          V
                        </span>
          
                        {/* Logo text */}
          
                        <span
                          className="
                            text-2xl
                            font-black
                            tracking-[-0.06em]
                          "
                        >
                          VID<span className="text-[#F8CC10]">SHOT</span>
                        </span>
                      </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2.5 text-sm font-medium tracking-[-0.02em] transition-all  hover:bg-white/25 hover:text-yellow-500 active:scale-[0.98] ${
                    isActive
                      ? "bg-white/40 text-purple-500 shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-white/50"
                      : "text-slate-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center lg:flex">
        <AnimatedButton
  text="Let's Talk"
  to="/contact"
/>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/20 text-slate-900 shadow-sm transition-all duration-300 hover:bg-white/35 active:scale-95 lg:hidden"
          >
            <span className={`absolute h-0.5 w-5 rounded-full bg-slate-900 transition-all ${menuOpen ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`absolute h-0.5 w-5 rounded-full bg-slate-900 transition-all ${menuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute h-0.5 w-5 rounded-full bg-slate-900 transition-all ${menuOpen ? "-rotate-45" : "translate-y-1.5"}`} />
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-white/20 bg-white/10 transition-all duration-300 ease-out lg:hidden ${
            menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-2 p-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white/40 text-slate-900 shadow-inner"
                      : "text-slate-700 hover:bg-white/20 hover:text-slate-900"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-3 rounded-2xl bg-[#121821] px-4 py-3 text-base font-semibold text-white shadow-[0_18px_35px_rgba(18,21,33,0.2)] transition hover:bg-[#f15b38]"
            >
              Let&apos;s Talk
              <span className="text-base">↗</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}