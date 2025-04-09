# 📦 Item Management App

A simple item management system with CRUD operations, real-time search, filtering, sorting, and optional document/image upload.

---

## 🧑‍💻 Technologies Used

### Frontend
- **Angular (Standalone Components)**
- **Angular Material**: Provides modern and easy-to-use UI components.
- **TailwindCSS**: Fast and responsive UI styling with utility-first classes.

➡️ **Why Angular Standalone Components?**
- Removes dependency on AppModule, simpler configuration.
- Encourages component reusability and lazy loading.
- Improves performance and aligns with Angular’s future direction.

### Backend (Mock)
- **Node.js + Express** (Mock API without database)
- Data is stored temporarily in memory or mock JSON.

---

## ✨ Features
- [x] Add new item
- [x] Update existing item
- [x] Soft delete item
- [x] View item list
- [x] Real-time search by name
- [x] Filter items
- [x] Sort items

---

## 🚀 How to Run

### Frontend (Angular)
```bash
npm install
npm run start
```
Runs at: `http://localhost:4200`

### Backend (NodeJS Mock)
```bash
cd mock-api
npm install
npm start
```
API runs at: `http://localhost:3000`

> Note: API base URL is configured via `environment.ts`

---

## 📁 Project Structure
```
src/
├── app/
│   ├── pages/
│   │   ├── item-list/
│   ├── models/
│   │   └── item.model.ts
│   ├── services/
│   │   ├── base.service.ts
│   │   └── item.service.ts
│   └── componentscomponents/
│       └── item-form/
└── environments/
    └── environment.ts
```

---

## 📌 Notes
- This project uses standalone components only (no AppModule).

---

> Built with ❤️ using Angular and NodeJS.
