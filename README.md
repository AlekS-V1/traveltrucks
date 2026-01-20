
# 🚐 TravelTrucks — Camper Catalog with Filters, Details & Booking  
A modern Next.js application for browsing and booking camper vans

**TravelTrucks** is a responsive web application built with the **Next.js App Router** that helps users explore campers across Ukraine, filter them by features, view detailed information, read reviews, and submit booking requests.  
The project focuses on **clean architecture**, **modular design**, **SSR‑friendly patterns**, **TanStack Query**, and **isolated CSS Modules**.

---

## 🌐 Live Demo  
🔗 https://traveltrucks-gamma-five.vercel.app

---

## 🚀 Technologies

- **Next.js 15+ (App Router)**
- **React 18**
- **TypeScript**
- **TanStack Query**
- **Axios**
- **Formik**
- **Yup**
- **Zustand**
- **CSS Modules**
- **React Hot Toast**
- **DatePicker**
- **Next.js API Routes** (mock backend)
- **File‑based routing**
- **SSR + Client Components**
- **GitHub** for version control
- **Vercel** for deployment

---

## 🧩 Architecture Overview

The project follows a **modular, feature‑oriented architecture**:

### **Presentation Layer**
- UI components are **pure and presentation‑only**
- No business logic inside UI components

### **Feature Modules**
- Filtering logic  
- Catalog state  
- Tabs and UI state  
- API interaction  
All isolated in dedicated modules for maintainability.

### **State Management**
- Centralized state for filters and catalog behavior
- React Query handles server state (caching, refetching, loading)

### **SSR‑Safe Implementation**
- Fully compatible with Next.js Server Components
- Client components used only where necessary

### **Strong Typing**
- All entities, filters, and API responses are fully typed with TypeScript

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
Displays a list of campers with support for:
- Vehicle type filtering (Van, Alcove, Fully Integrated)
- Equipment filtering (AC, Automatic, Kitchen, TV, Bathroom)
- City filtering

### 📄 **CamperItem**
A single camper card showing:
- Price  
- Specifications  
- Rating  
- Feature/Review tabs  

### **CampersFilters**
Interactive filtering UI with:
- Vehicle type  
- Equipment  
- City  

### **FeaturesTab / ReviewsTab**
Tabs for:
- Camper features  
- Customer reviews  

### 📅 **Book**
Booking form with:
- DatePicker  
- Validation  
- Success/error notifications  

### ⭐ **FavoriteButton**
Stores favorite campers locally.

### ⚙️ **TanStackProvider**
Global provider for React Query.

---

## 🗂️ Routes Overview

### `/`
Landing page with a hero section.

### `/catalog`
Catalog page with filters and camper list.

### `/catalog/[id]`
Camper detail page:
- Gallery  
- Specifications  
- Reviews  
- Booking form  

---

## ⚙️ Data Logic

### `lib/api.ts`
Utility functions for API requests.

### `lib/useCampersQuery.ts`
React Query hook for:
- Caching  
- Refetching  
- Loading states  

---

## 🎨 Styling

All styles use **CSS Modules**, providing:
- Class name isolation  
- No global conflicts  
- Maintainable structure  

---
