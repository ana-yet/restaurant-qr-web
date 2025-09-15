"use client";

import { useState } from "react";
import { FiStar } from "react-icons/fi";

interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  isPopular?: boolean;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
  icon: string;
}

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("kebab");

  const menuCategories: MenuCategory[] = [
    {
      name: "Kebab",
      icon: "🍖",
      items: [
        {
          name: "Seekh Kebab",
          description: "Spiced ground meat grilled to perfection",
          price: "$14.99",
          isPopular: true,
        },
        {
          name: "Chicken Tikka",
          description: "Marinated chicken pieces with aromatic spices",
          price: "$13.99",
        },
        {
          name: "Lamb Boti Kebab",
          description: "Tender lamb cubes with traditional marinade",
          price: "$16.99",
        },
        {
          name: "Mixed Grill Platter",
          description: "Assortment of our finest kebabs",
          price: "$22.99",
          isPopular: true,
        },
        {
          name: "Fish Tikka",
          description: "Fresh fish marinated with herbs and spices",
          price: "$15.99",
        },
        {
          name: "Vegetable Kebab",
          description: "Grilled seasonal vegetables with spice blend",
          price: "$11.99",
        },
      ],
    },
    {
      name: "Curry",
      icon: "🍛",
      items: [
        {
          name: "Chicken Curry",
          description: "Traditional Bengali-style chicken curry",
          price: "$15.99",
          isPopular: true,
        },
        {
          name: "Beef Rezala",
          description: "Creamy beef curry with aromatic spices",
          price: "$17.99",
        },
        {
          name: "Fish Curry",
          description: "Fresh fish in traditional Bengali gravy",
          price: "$16.99",
          isPopular: true,
        },
        {
          name: "Dal Curry",
          description: "Lentils cooked with turmeric and garlic",
          price: "$9.99",
        },
        {
          name: "Mutton Curry",
          description: "Slow-cooked goat meat in rich spices",
          price: "$18.99",
        },
        {
          name: "Vegetable Curry",
          description: "Mixed vegetables in coconut curry",
          price: "$12.99",
        },
      ],
    },
    {
      name: "Noodles & Rice",
      icon: "🍚",
      items: [
        {
          name: "Spice Garden Biryani",
          description: "Our signature biryani with fragrant basmati rice",
          price: "$19.99",
          isPopular: true,
        },
        {
          name: "Chicken Fried Rice",
          description: "Wok-fried rice with chicken and vegetables",
          price: "$13.99",
        },
        {
          name: "Beef Tehari",
          description: "Traditional rice dish with tender beef",
          price: "$16.99",
        },
        {
          name: "Vegetable Biryani",
          description: "Aromatic rice with mixed vegetables",
          price: "$14.99",
        },
        {
          name: "Chow Mein",
          description: "Stir-fried noodles with choice of protein",
          price: "$12.99",
        },
        {
          name: "Plain Basmati Rice",
          description: "Steamed fragrant basmati rice",
          price: "$4.99",
        },
      ],
    },
  ];

  const activeMenuCategory =
    menuCategories.find((category) =>
      category.name.toLowerCase().includes(activeCategory)
    ) || menuCategories[0];

  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover the authentic flavors of Bangladesh with our carefully
            crafted dishes, prepared using traditional recipes and the finest
            ingredients.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.name}
              onClick={() =>
                setActiveCategory(category.name.toLowerCase().split(" ")[0])
              }
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                category.name.toLowerCase().includes(activeCategory)
                  ? "bg-bengali-600 text-white shadow-lg scale-105"
                  : "bg-background hover:bg-accent text-foreground border border-border hover:border-bengali-300"
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {activeMenuCategory.items.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-4 shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Popular Badge */}
              {item.isPopular && (
                <div className="absolute top-2 right-2">
                  <div className="flex items-center gap-1 bg-golden-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    <FiStar className="w-3 h-3 fill-current" />
                    Popular
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-foreground leading-tight pr-6">
                  {item.name}
                </h3>

                {item.description && (
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                )}

                {item.price && (
                  <div className="pt-1">
                    <span className="text-lg font-bold text-bengali-600 dark:text-bengali-400">
                      {item.price}
                    </span>
                  </div>
                )}
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-bengali-50 dark:from-bengali-950 to-transparent rounded-tl-full opacity-50"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-bengali-50 to-golden-50 dark:from-bengali-950 dark:to-golden-950 rounded-2xl p-8 border border-bengali-200 dark:border-bengali-800">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Can&apos;t decide? Try our Chef&apos;s Special!
            </h3>
            <p className="text-muted-foreground mb-6">
              Let our experienced chef create a perfect meal combination just
              for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-background rounded-lg px-4 py-2 border border-border">
                <span className="text-sm text-muted-foreground">
                  Available:
                </span>
                <span className="ml-2 font-semibold text-foreground">
                  Daily 5PM - 9PM
                </span>
              </div>
              <div className="bg-background rounded-lg px-4 py-2 border border-border">
                <span className="text-sm text-muted-foreground">Price:</span>
                <span className="ml-2 font-semibold text-bengali-600 dark:text-bengali-400">
                  $24.99
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
