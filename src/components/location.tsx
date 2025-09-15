import { FiMapPin, FiClock, FiPhone, FiMail } from "react-icons/fi";

export function Location() {
  const openingHours = [
    { day: "Monday - Thursday", hours: "11:00 AM - 10:00 PM" },
    { day: "Friday - Saturday", hours: "11:00 AM - 11:00 PM" },
    { day: "Sunday", hours: "12:00 PM - 9:00 PM" },
  ];

  return (
    <section id="location" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
            Visit Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Find us in the heart of the city and experience authentic
            Bangladeshi cuisine in our warm and welcoming restaurant.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Map Section */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
              {/* Google Maps Embed */}
              <div className="aspect-[4/3] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937586!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1625574394729!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Spice Garden Restaurant Location"
                  className="absolute inset-0"
                ></iframe>
              </div>

              {/* Map Overlay Info */}
              <div className="p-6 bg-gradient-to-r from-bengali-50 to-golden-50 dark:from-bengali-950 dark:to-golden-950">
                <div className="flex items-center gap-3 text-foreground">
                  <FiMapPin className="w-5 h-5 text-bengali-600 dark:text-bengali-400" />
                  <div>
                    <p className="font-semibold">123 Flavor Street</p>
                    <p className="text-muted-foreground text-sm">
                      Spice District, Food City 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-bengali-600 hover:bg-bengali-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <FiMapPin className="w-4 h-4" />
                Get Directions
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center gap-2 bg-golden-600 hover:bg-golden-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <FiPhone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>

          {/* Information Section */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-bengali-100 dark:bg-bengali-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-5 h-5 text-bengali-600 dark:text-bengali-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-muted-foreground">
                      123 Flavor Street
                      <br />
                      Spice District, Food City 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-golden-100 dark:bg-golden-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiPhone className="w-5 h-5 text-golden-600 dark:text-golden-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-muted-foreground hover:text-bengali-600 dark:hover:text-bengali-400 transition-colors"
                    >
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-spice-100 dark:bg-spice-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMail className="w-5 h-5 text-spice-600 dark:text-spice-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:info@spicegarden.com"
                      className="text-muted-foreground hover:text-bengali-600 dark:hover:text-bengali-400 transition-colors"
                    >
                      info@spicegarden.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-6">
                <FiClock className="w-6 h-6 text-bengali-600 dark:text-bengali-400" />
                <h3 className="text-2xl font-bold text-foreground">
                  Opening Hours
                </h3>
              </div>
              <div className="space-y-3">
                {openingHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
                  >
                    <span className="font-medium text-foreground">
                      {schedule.day}
                    </span>
                    <span className="text-muted-foreground">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>

              {/* Special Notice */}
              <div className="mt-6 p-4 bg-golden-50 dark:bg-golden-950 rounded-lg border border-golden-200 dark:border-golden-800">
                <p className="text-sm text-golden-800 dark:text-golden-200">
                  <strong>Note:</strong> Last orders taken 30 minutes before
                  closing time. We recommend making reservations for dinner
                  during weekends.
                </p>
              </div>
            </div>

            {/* Special Features */}
            <div className="bg-gradient-to-r from-bengali-50 to-golden-50 dark:from-bengali-950 dark:to-golden-950 rounded-xl p-6 border border-bengali-200 dark:border-bengali-800">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Restaurant Features
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-bengali-500 rounded-full"></div>
                  <span className="text-muted-foreground">
                    Dine-in Available
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-golden-500 rounded-full"></div>
                  <span className="text-muted-foreground">
                    Takeaway Service
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-spice-500 rounded-full"></div>
                  <span className="text-muted-foreground">Free Parking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-bengali-500 rounded-full"></div>
                  <span className="text-muted-foreground">Family Friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-golden-500 rounded-full"></div>
                  <span className="text-muted-foreground">Halal Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-spice-500 rounded-full"></div>
                  <span className="text-muted-foreground">
                    Wheelchair Access
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
