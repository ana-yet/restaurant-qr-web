"use client";
import { useTranslation } from "@/lib/language-context";
import { FiHeart, FiAward, FiUsers } from "react-icons/fi";

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
                {t("about.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t("about.description1")}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.description2")}
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-bengali-100 dark:bg-bengali-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiHeart className="w-8 h-8 text-bengali-600 dark:text-bengali-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {t("about.features.love.title")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("about.features.love.description")}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-golden-100 dark:bg-golden-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiAward className="w-8 h-8 text-golden-600 dark:text-golden-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {t("about.features.award.title")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("about.features.award.description")}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-spice-100 dark:bg-spice-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiUsers className="w-8 h-8 text-spice-600 dark:text-spice-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {t("about.features.family.title")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("about.features.family.description")}
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Owner Section */}
          <div className="space-y-8">
            <div className="relative">
              <div
                className="w-full h-96 rounded-2xl bg-gradient-to-br from-bengali-100 to-golden-100 dark:from-bengali-900 dark:to-golden-900 shadow-2xl overflow-hidden"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 left-8 right-8 bg-card rounded-xl p-6 shadow-xl border border-border">
                <h3 className="text-2xl font-bold font-serif text-foreground mb-2">
                  {t("about.owner.name")}
                </h3>
                <p className="text-bengali-600 dark:text-bengali-400 font-medium mb-3">
                  {t("about.owner.title")}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("about.owner.bio")}
                </p>
              </div>
            </div>

            {/* Restaurant Specialty */}
            <div className="mt-16 p-6 bg-gradient-to-r from-bengali-50 to-golden-50 dark:from-bengali-950 dark:to-golden-950 rounded-xl border border-bengali-200 dark:border-bengali-800">
              <h3 className="text-xl font-bold text-foreground mb-3">
                {t("about.specialty.title")}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t("about.specialty.description")}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-bengali-100 dark:bg-bengali-800 text-bengali-700 dark:text-bengali-300 text-sm rounded-full">
                  {t("about.specialty.badges.halal")}
                </span>
                <span className="px-3 py-1 bg-golden-100 dark:bg-golden-800 text-golden-700 dark:text-golden-300 text-sm rounded-full">
                  {t("about.specialty.badges.fresh")}
                </span>
                <span className="px-3 py-1 bg-spice-100 dark:bg-spice-800 text-spice-700 dark:text-spice-300 text-sm rounded-full">
                  {t("about.specialty.badges.traditional")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
