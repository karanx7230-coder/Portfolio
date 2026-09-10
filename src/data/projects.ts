import lazaCover from "../assets/projects/laza-cover.png";
import instagramCover from "../assets/projects/instagram-cover.png";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  github: string;
  subtitle?: string;
  architectureHighlights?: string[];
}

export interface Contribution {
  id: string;
  app: string;
  role: string;
  points: string[];
}

export const CONTRIBUTIONS: Contribution[] = [
  {
    id: "gentlehold",
    app: "GentleHold",
    role: "Feature contributor — posts & journal",
    points: [
      "Built post create/get features with API fetching",
      "Built journal create/get/edit flows with API integration",
    ],
  },
  {
    id: "truck-compliance",
    app: "Truck Compliance",
    role: "Release & build support",
    points: [
      "Assisted with TestFlight uploads",
      "Resolved App Store review/upload errors and re-uploaded builds after fixes",
    ],
  },
  {
    id: "datepalop",
    app: "DatePalop",
    role: "UI contributor",
    points: ["Handled UI changes and client-requested adjustments"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "laza",
    title: "LAZA",
    category: "React Native E-Commerce App",
    description:
      "E-commerce mobile app built with React Native and TypeScript, featuring Firebase authentication, product discovery, cart and wishlist flows, checkout, address selection, and structured navigation.",
    image: lazaCover,
    technologies: [
      "React Native",
      "TypeScript",
      "React Navigation",
      "Firebase",
    ],
    features: [
      "Authentication & Phone OTP verification flow",
      "Interactive Product discovery & filterable listings",
      "Cart management & persistent wishlist sync",
      "Multi-step checkout with address selection",
      "Nested Navigation: Stack, Drawer, and Bottom Tabs",
      "Maps integration & Geolocation address picker",
      "Theme engine supporting Light and Dark mode",
      "Structured state architecture & clean component hierarchy",
    ],
    github: "https://github.com/karanx7230-coder/LAZA",
    subtitle: "Cross-Platform Mobile Shopping Solution",
    architectureHighlights: [
      "Clean Architecture pattern with modularized feature directories",
      "Custom React hooks for cart calculations and persistent state",
      "Optimized FlatList image caching and lazy rendering",
      "Firebase Auth & Firestore database integration",
    ],
  },
  {
    id: "instagram-clone",
    title: "Instagram Clone",
    category: "Social Media App",
    description:
      "Social media app built with React Native, Expo, TypeScript, and Supabase, featuring feeds, stories, profiles, search, likes, and real-time chat workflows.",
    image: instagramCover,
    technologies: ["React Native", "Expo", "TypeScript", "Supabase"],
    features: [
      "Supabase Auth with secure session management",
      "Interactive Posts feed with gesture controls & double-tap like",
      "Story circles with animated gradient borders & timeout progress",
      "Full-screen video Reels feed player",
      "Comprehensive user Profile features & bio editor",
      "Global Search & Explore grid with dynamic query filters",
      "Direct Messaging (DM) real-time interface",
      "Responsive media handling, Skeleton loaders, Haptic feedback & UI animations",
    ],
    github: "https://github.com/karanx7230-coder/Instagram",
    subtitle: "Feature-Rich Social Media Application",
    architectureHighlights: [
      "Expo Router file-based navigation architecture",
      "Supabase Realtime subscriptions for instant direct messaging",
      "Custom Reanimated gesture handlers & haptic feedback hooks",
      "Skeleton loading states & performance-tuned video feeds",
    ],
  },
];
