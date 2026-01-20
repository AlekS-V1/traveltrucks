# 🚐 TravelTrucks  — Camper Catalog with Filters, Details & Booking
A modern Next.js  application for browsing and booking camper vans

**TravelTrucks** is a responsive web application built with the **Next.js App Router** that helps users explore, filter them by features, view detailed information, read reviews, and book campers across Ukraine. The project focuses on clean architecture, modular design, and a smooth user experience.

The project emphasizes **clean architecture**, **modular components**, **SSR‑friendly patterns**, **TanStack Query**, and **isolated CSS Modules**.

---

## 🌐 Live Demo
🔗 https://traveltrucks-gamma-five.vercel.app

---

## 🚀 Technologies

- **Next.js 15+ (App Router)**
- **React 18**
- **TypeScript**
- **TanStack Query**
- **CSS Modules**
- **React Hot Toast**
- **Next.js API Routes** (mock backend)
- **File‑based routing**
- **SSR + Client Components**
- **Vercel** for deployment

---

🧩 **Architecture Overview**
The project follows a modular, feature‑oriented structure:

**UI components are presentation‑only**  
Business logic lives in feature modules.

**Centralized state management**  
Filters, catalog state, and tab logic are isolated in the store.

**SSR‑safe implementation**  
Fully compatible with Next.js  server components.

**Strong typing**  
All entities, filters, and API responses are fully typed.

---


## 📦 Installation & Setup

```bash

# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build
npm start
```

---

## 📁 Project Structure

```
├── app
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.module.css
│   ├── page.tsx
│   │
│   ├── api
│   │   └── campers
│   │       ├── route.ts
│   │       └── [id]
│   │           └── route.ts
│   │
│   └── catalog
│       ├── filter
│       │   ├── layout.tsx
│       │   ├── LayoutCatalog.module.css
│       │   ├── @sidebar
│       │   │   └── default.tsx
│       │   └── all
│       │       └── page.tsx
│       │
│       └── [id]
│           ├── CamperDetail.module.css
│           └── page.tsx
│
├── components
│   ├── Book
│   ├── CamperItem
│   ├── CamperList
│   ├── CamperOptions
│   ├── CampersFilters
│   ├── FavoriteButton
│   ├── FeaturesTab
│   ├── FilterToggleButton
│   ├── Header
│   ├── Hero
│   ├── ReviewItem
│   ├── ReviewsTab
│   ├── StarRating
│   ├── TabsButton
│   ├── TabsContainer
│   ├── TanStackProvider
│   └── VehicleDetails
│
├── data
│   └── campers.json
│
├── lib
│   ├── api.ts
│   └── useCampersQuery.ts
```

---

## 🔌 API Endpoints

The project uses **Next.js API Routes** as a mock backend.

### `GET /campers`
Returns a list of all campers.

### `GET /campers/[id]`
Returns detailed information about a specific camper.

---

## 🧩 Key Components

### 🔎 **CamperList**
Displays a list of campers fetched from the API.
Browse available campers with filters for:
- Vehicle type (Van, Alcove, Fully Integrated)
- Equipment (AC, Automatic, Kitchen, TV, Bathroom)
- City

### 📄 **CamperItem**
A single camper card with price.
Full specifications
User reviews
Feature/Review tabs

### **Campers Filters**
Browse available campers with filters for:
- Vehicle type (Van, Alcove, Fully Integrated)
- Equipment (AC, Automatic, Kitchen, TV, Bathroom)
- City

### **FeaturesTab / ReviewsTab**
Tabs for camper features and customer reviews.

### 📅  **Book**
Booking form.
Date selection with DatePicker
Validation
Success/error notifications

### **FavoriteButton**
Stores favorite campers locally.

### **TanStackProvider**
Global provider for React Query.

⚡ **Fast and responsive UI** 

Optimized rendering, lightweight components, and smooth interactions.

---

🧩 **Architecture Overview**
The project follows a modular, feature‑oriented structure:

**UI components are presentation‑only**  
Business logic lives in feature modules.

**Centralized state management** 
Filters, catalog state, and tab logic are isolated in the store.

**SSR‑safe implementation**  
Fully compatible with Next.js  server components.

**Strong typing** 
All entities, filters, and API responses are fully typed.

---

## 🗂️ Routes Overview

### `/`
Landing page with a hero section.

### `/catalog`
Catalog page with filters and camper list.

### `/catalog/[id]`
Camper detail page:
- gallery  
- specifications  
- reviews  
- booking form  

---

## ⚙️ Data Logic

### `lib/api.ts`
Utility functions for API requests.

### `lib/useCampersQuery.ts`
React Query hook for:
- caching  
- refetching  
- loading states  

---

## 🎨 Styling

All styles are implemented using **CSS Modules**, ensuring:
- class name isolation  
- no global conflicts  
- maintainable structure  

---

## 🧪 Future Improvements

- Real backend integration (Nest.js / Express)
- Database‑backed bookings
- Advanced filtering
- Map with camper locations

---
