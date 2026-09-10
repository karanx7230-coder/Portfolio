import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "..", "public", "resume.pdf");

const doc = new PDFDocument({ size: "A4", margins: { top: 48, bottom: 48, left: 56, right: 56 } });
doc.pipe(fs.createWriteStream(outPath));

const INK = "#111111";
const MUTED = "#555555";
const RULE = "#999999";

function heading(text) {
  doc.moveDown(1.1);
  doc.font("Helvetica-Bold").fontSize(11).fillColor(INK).text(text.toUpperCase());
  doc.moveDown(0.25);
  doc.strokeColor(RULE).lineWidth(0.75)
    .moveTo(doc.page.margins.left, doc.y)
    .lineTo(doc.page.width - doc.page.margins.right, doc.y)
    .stroke();
  doc.moveDown(0.6);
}

function body(text) {
  doc.font("Helvetica").fontSize(9.5).fillColor(INK).text(text, { align: "justify", lineGap: 3 });
}

function bullets(items) {
  for (const item of items) {
    doc.font("Helvetica").fontSize(9.5).fillColor(INK)
      .text(`\u2022  ${item}`, { indent: 12, lineGap: 3 });
    doc.moveDown(0.2);
  }
}

// Header
doc.font("Helvetica-Bold").fontSize(20).fillColor(INK).text("KARANPREET SINGH", { align: "center" });
doc.moveDown(0.3);
doc.font("Helvetica").fontSize(9.5).fillColor(MUTED).text(
  "Mohali, Punjab  |  +91 9878164914  |  karanx7230@gmail.com", { align: "center" });
doc.moveDown(0.15);
doc.text("LinkedIn: linkedin.com/in/karanpreet-singh-324a83411  |  GitHub: github.com/karanx7230-coder", { align: "center" });

// Summary
heading("Professional Summary");
body("Motivated React Native Developer (Fresher) with 6 months of hands-on practical training in developing cross-platform mobile applications using React Native, JavaScript, and TypeScript. Experienced in building responsive user interfaces, integrating Supabase, Firebase, and REST APIs, and implementing navigation workflows. Strong focus on reusable components, clean UI, and mobile application development.");

// Skills
heading("Technical Skills");
bullets([
  "Mobile Development: React Native (CLI & Expo), JSX/TSX, React Navigation, Expo Router",
  "Languages: JavaScript (ES6+), TypeScript",
  "Backend & APIs: Supabase, Firebase (Authentication & Notifications), REST APIs",
  "UI: Reusable Components, Flexbox, Responsive UI",
  "Developer Tools: Git, GitHub, VS Code, npm, Yarn",
]);

// Training
heading("Training Experience");
doc.font("Helvetica-Bold").fontSize(10).fillColor(INK)
  .text("React Native Trainee  |  Apptechies, Mohali", { continued: true })
  .font("Helvetica-Oblique").text("    March 2026 \u2013 September 2026");
doc.moveDown(0.4);
bullets([
  "Develop responsive and reusable cross-platform mobile UI components using React Native, Expo, and TypeScript.",
  "Implement authentication flows, dynamic product listings, forms, and nested navigation structures.",
  "Work with Supabase, Firebase, and REST APIs for application data and backend integration.",
  "Debug UI issues, improve application performance, and maintain structured component code.",
]);

// Projects
heading("Projects");
doc.font("Helvetica-Bold").fontSize(10).fillColor(INK)
  .text("LAZA \u2014 React Native E-Commerce App", { continued: true })
  .font("Helvetica-Oblique").text("    React Native, TypeScript, React Navigation, Firebase");
doc.moveDown(0.4);
bullets([
  "Built an e-commerce mobile application with authentication, OTP verification, product listings, cart, wishlist, checkout, and address selection.",
  "Implemented nested navigation using Stack, Drawer, and Bottom Tab Navigation.",
  "Integrated maps and geolocation functionality for address selection.",
  "Implemented light/dark mode theming and structured application state across user, cart, and address features.",
]);
doc.moveDown(0.4);
doc.font("Helvetica-Bold").fontSize(10).fillColor(INK)
  .text("Instagram Clone \u2014 Social Media App", { continued: true })
  .font("Helvetica-Oblique").text("    React Native (Expo), TypeScript, Supabase");
doc.moveDown(0.4);
bullets([
  "Developed a social media application with Supabase authentication, posts feed, stories, video reels, and profile features.",
  "Implemented dynamic profile search and direct messaging UI workflows.",
  "Built responsive media layouts with skeleton loaders and haptic feedback.",
  "Implemented smooth UI interactions and animations for an improved mobile experience.",
]);

// Education
heading("Education");
doc.font("Helvetica-Bold").fontSize(10).fillColor(INK)
  .text("Bachelor of Computer Applications (BCA)", { continued: true })
  .font("Helvetica").text("    SMHS College, Mohali  |  First Year \u2014 In Progress");

doc.end();
console.log("Wrote", outPath);
