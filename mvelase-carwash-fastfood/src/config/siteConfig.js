/**
 * MVELASE'S CAR WASH & FAST FOOD
 * Central Configuration File
 * 
 * All business details, services, menu items, and location information
 * are managed here for easy updates by the owner.
 */

export const siteConfig = {
  businessName: "MVELASE'S CAR WASH & FAST FOOD",
  shortName: "Mvelase's",
  tagline: "Car Wash & Fast Food",
  heroSubtitle: "Quality vehicle care and fresh takeaway food under one roof on Hansdettman Highway, Shallcross.",

  // Contact details
  phoneDisplay: "063 019 1046",
  phoneRaw: "+27630191046",
  whatsappNumber: "27630191046",
  whatsappDefaultMessage: "Hi Mvelase's, I'd like to enquire about your car wash and fast food services.",

  // Address and location
  location: {
    street: "Hansdettman Highway",
    suburb: "Shallcross",
    town: "Chatsworth",
    city: "Durban",
    country: "South Africa",
    fullAddress: "Hansdettman Highway, Shallcross, Chatsworth, Durban, South Africa",
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Hansdettman+Highway,+Shallcross,+Chatsworth,+Durban",
    mapEmbedUrl: "https://maps.google.com/maps?q=Hansdettman%20Highway,%20Shallcross,%20Durban&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },

  // Operating Hours (No invented times)
  openingHoursDisplay: "Contact us for current operating hours",
  openingHoursNote: "Please call 063 019 1046 or send a WhatsApp message to confirm today's opening times and operating schedule.",

  // Car Wash Services
  carWashServices: [
    {
      id: "wash-1",
      name: "Basic Wash & Dry",
      description: "Complete exterior hand foam wash, clear window wipe, wheel rim spray rinse, and microfibre dry.",
      price: "Contact us for pricing",
      duration: "Quick Turnaround",
      badge: "Popular",
      category: "wash"
    },
    {
      id: "wash-2",
      name: "Wash, Vacuum & Tire Shine",
      description: "Thorough exterior foam wash, deep cabin interior vacuuming, dashboard dust wipe, and rich tire gel shine.",
      price: "Contact us for pricing",
      duration: "Standard Care",
      badge: "Recommended",
      category: "wash"
    },
    {
      id: "wash-3",
      name: "Full Interior Valet",
      description: "Deep upholstery & carpet cleaning, seat stain care, roof lining treatment, and dashboard conditioning.",
      price: "Contact us for pricing",
      duration: "Deep Clean",
      badge: "Valet Service",
      category: "valet"
    },
    {
      id: "wash-4",
      name: "Exterior Polish & Paint Protection",
      description: "High-gloss body wax polish, protective paint sealant application, exterior trim restoration, and rim polish.",
      price: "Contact us for pricing",
      duration: "Premium Finish",
      badge: "High Finish",
      category: "valet"
    }
  ],

  // Fast Food Menu Categories
  foodCategories: [
    { id: "all", label: "All Items" },
    { id: "meals", label: "Takeaway Meals" },
    { id: "burgers", label: "Burgers & Rolls" },
    { id: "sides", label: "Chips & Sides" },
    { id: "drinks", label: "Cold Beverages" }
  ],

  // Fast Food Menu Items
  foodMenu: [
    {
      id: "food-1",
      category: "meals",
      name: "Flame-Grilled Chicken Meal",
      description: "Freshly prepared chicken cooked to order, served with hot golden chips and salad.",
      price: "Contact us for pricing",
      tag: "Freshly Prepared",
      waMessage: "Hi Mvelase's, I'd like to order / enquire about the Flame-Grilled Chicken Meal."
    },
    {
      id: "food-2",
      category: "burgers",
      name: "Classic Beef Burger",
      description: "Grilled beef patty topped with fresh lettuce, tomato, onions, and signature house sauce.",
      price: "Contact us for pricing",
      tag: "Popular",
      waMessage: "Hi Mvelase's, I'd like to order / enquire about the Classic Beef Burger."
    },
    {
      id: "food-3",
      category: "burgers",
      name: "Cheeseburger Special",
      description: "Juicy flame-grilled patty topped with melted cheese, pickles, and crispy hot chips.",
      price: "Contact us for pricing",
      tag: "Customer Favorite",
      waMessage: "Hi Mvelase's, I'd like to order / enquire about the Cheeseburger Special."
    },
    {
      id: "food-4",
      category: "sides",
      name: "Fresh Cut Hot Chips",
      description: "Golden crispy cut potato chips seasoned with savory spice.",
      price: "Contact us for pricing",
      tag: "Hot Side",
      waMessage: "Hi Mvelase's, I'd like to order / enquire about Fresh Cut Hot Chips."
    },
    {
      id: "food-5",
      category: "drinks",
      name: "Assorted Cold Beverages",
      description: "Selection of ice-cold soft drinks, canned beverages, mineral waters, and fruit juices.",
      price: "Contact us for pricing",
      tag: "Ice Cold",
      waMessage: "Hi Mvelase's, I'd like to enquire about your available cold beverages."
    }
  ],

  // Benefits / Why Choose Us
  benefits: [
    {
      icon: "map-pin",
      title: "Prime Shallcross Location",
      description: "Situated right on Hansdettman Highway for quick drive-in access from Shallcross and Chatsworth."
    },
    {
      icon: "layers",
      title: "Car Wash & Food in One Stop",
      description: "Get your vehicle washed while enjoying freshly prepared fast food takeaway meals."
    },
    {
      icon: "message-square",
      title: "Direct WhatsApp Ordering",
      description: "Send a quick WhatsApp message to check wash times or place takeaway orders in advance."
    },
    {
      icon: "check-circle",
      title: "Dedicated Local Service",
      description: "Friendly local business committed to quality car care and fresh takeaway food."
    }
  ],

  // Gallery Showcase Placeholders
  galleryItems: [
    {
      id: "gal-1",
      title: "Car Wash Bay & Foam Wash",
      category: "Car Wash",
      icon: "droplet",
      desc: "Exterior foam hand wash and high-pressure rinse facility on Hansdettman Highway."
    },
    {
      id: "gal-2",
      title: "Vehicle Detailing & Rim Polish",
      category: "Car Wash",
      icon: "sparkles",
      desc: "Meticulous wheel rim cleaning and long-lasting tire shine gel application."
    },
    {
      id: "gal-3",
      title: "Full Interior Valet Station",
      category: "Valet Service",
      icon: "shield",
      desc: "Upholstery shampooing, deep carpet vacuuming, and dashboard conditioning."
    },
    {
      id: "gal-4",
      title: "Freshly Prepared Takeaway Meals",
      category: "Fast Food",
      icon: "utensils",
      desc: "Cooked-to-order flame-grilled chicken, beef burgers, and crispy hot chips."
    },
    {
      id: "gal-5",
      title: "Flame Grill & Preparation Area",
      category: "Fast Food",
      icon: "flame",
      desc: "Hygenic meal preparation station for quick takeaway service while you wait."
    },
    {
      id: "gal-6",
      title: "Shallcross Drive-In Facility",
      category: "Location",
      icon: "map-pin",
      desc: "Convenient vehicle access and waiting area located on Hansdettman Highway."
    }
  ]
};
