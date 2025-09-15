"use client";

import { useTranslation } from "@/lib/language-context";
import Link from "next/link";
import {
  FiFacebook,
  FiInstagram,
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
} from "react-icons/fi";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-bengali-900 dark:bg-gray-900 text-white dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold font-serif text-golden-400 mb-4">
              {t("hero.title")}
            </h3>
            <p className="text-bengali-100 dark:text-gray-300 mb-6 leading-relaxed">
              {t("footer.description")}
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-bengali-800 dark:bg-gray-800 hover:bg-golden-600 dark:hover:bg-golden-500 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-bengali-800 dark:bg-gray-800 hover:bg-golden-600 dark:hover:bg-golden-500 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-xl font-bold text-golden-400 dark:text-golden-300 mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 text-golden-400 dark:text-golden-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-bengali-100 dark:text-gray-300 text-sm">
                    {t("location.address")}
                  </p>
                  <p className="text-bengali-100 dark:text-gray-300 text-sm">
                    {t("location.addressLine2")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="w-5 h-5 text-golden-400 dark:text-golden-300 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-bengali-100 dark:text-gray-300 text-sm hover:text-golden-400 dark:hover:text-golden-300 transition-colors"
                >
                  +1 (234) 567-8900
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FiMail className="w-5 h-5 text-golden-400 dark:text-golden-300 flex-shrink-0" />
                <a
                  href="mailto:info@spicegarden.com"
                  className="text-bengali-100 dark:text-gray-300 text-sm hover:text-golden-400 dark:hover:text-golden-300 transition-colors"
                >
                  info@spicegarden.com
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xl font-bold text-golden-400 dark:text-golden-300 mb-4">
              Hours
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3 mb-3">
                <FiClock className="w-5 h-5 text-golden-400 dark:text-golden-300 flex-shrink-0" />
                <span className="text-bengali-100 dark:text-gray-300 text-sm font-medium">
                  {t("footer.openingHours")}
                </span>
              </div>

              <div className="space-y-1 text-sm text-bengali-200 dark:text-gray-400">
                <div className="flex justify-between">
                  <span>Mon - Thu</span>
                  <span>11AM - 10PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Fri - Sat</span>
                  <span>11AM - 11PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>12PM - 9PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-bengali-800 dark:border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-bengali-300 dark:text-gray-400 text-sm">
              © {currentYear} Spice Garden Restaurant. All rights reserved.
            </p>
            <p className="text-bengali-400 dark:text-gray-500 text-xs mt-1">
              Authentic Bangladeshi cuisine since 1999
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="#about"
              className="text-bengali-300 dark:text-gray-400 hover:text-golden-400 dark:hover:text-golden-300 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#menu"
              className="text-bengali-300 dark:text-gray-400 hover:text-golden-400 dark:hover:text-golden-300 transition-colors"
            >
              Menu
            </Link>
            <Link
              href="#location"
              className="text-bengali-300 dark:text-gray-400 hover:text-golden-400 dark:hover:text-golden-300 transition-colors"
            >
              Location
            </Link>
            <a
              href="tel:+1234567890"
              className="text-bengali-300 dark:text-gray-400 hover:text-golden-400 dark:hover:text-golden-300 transition-colors"
            >
              Reservations
            </a>
          </div>
        </div>

        {/* Special Notice */}
        <div className="mt-8 p-4 bg-bengali-800/50 dark:bg-gray-800/50 rounded-lg border border-bengali-700 dark:border-gray-600">
          <p className="text-center text-bengali-200 dark:text-gray-300 text-sm">
            🌟 <strong>Now accepting online reservations!</strong> Call us or
            visit in person to book your table. We also offer catering services
            for special events.
          </p>
        </div>
      </div>
    </footer>
  );
}
