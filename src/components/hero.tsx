"use client";

import { FiArrowDown } from "react-icons/fi";
import { useTranslation } from "@/lib/language-context";

export function Hero() {
  const { t } = useTranslation();
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=2047&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-6 leading-tight">
            <span className="text-golden-400">
              {t("hero.title").split(" ")[0]}
            </span>{" "}
            <span className="text-white">
              {t("hero.title").split(" ")[1] || ""}
            </span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-gray-200 leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t("hero.description")}
          </p>

          <button
            onClick={scrollToMenu}
            className="group inline-flex items-center gap-3 bg-bengali-600 hover:bg-bengali-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {t("hero.viewMenu")}
            <FiArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-golden-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-16 h-16 bg-spice-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-bengali-400/20 rounded-full blur-md animate-pulse delay-500"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
