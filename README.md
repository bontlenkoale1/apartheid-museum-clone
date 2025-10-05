# Apartheid Museum Clone 🎨

This is a **React + Bootstrap clone project** of the Apartheid Museum website, built to practice and showcase frontend development skills. The goal is to replicate the look and feel of the official site while applying **React Router**, **Bootstrap components**, and responsive design.

---

## 🚀 Features

* **React Router v6** navigation (Home, About, Exhibitions, Visit, Events, Resources, Contact)
* **Bootstrap 5** for responsive grid, utilities, and UI components
* Home page sections: Hero, About, Open Days, Exhibitions, Permanent Exhibitions, Newsletter
* Modular and reusable React components
* Optimized for desktop, tablet, and mobile devices

---

## 🛠️ Technologies Used

* **React 18** – component-based UI
* **React Router DOM v6** – routing and navigation
* **Bootstrap 5** – responsive styling and components
* **Vite** – development server and build tool

---

## 📂 Project Structure

```
apartheid-museum-clone/
├── public/
│   └── index.html
├── src/
│   ├── layout/
│   │   └── home/
│   │       ├── Main.jsx
│   │       └── sections/
│   │           ├── Hero.jsx
│   │           ├── AboutSection.jsx
│   │           ├── OpenDays.jsx
│   │           ├── Exhibitions.jsx
│   │           ├── PermanentExhibitions.jsx
│   │           └── NewsLetter.jsx
│   ├── pages/
│   │   └── home/
│   │       ├── Home.jsx
│   │       ├── AboutPage.jsx
│   │       ├── Exhibitions.jsx
│   │       ├── Visit.jsx
│   │       ├── Events.jsx
│   │       ├── Resources.jsx
│   │       └── Contact.jsx
│   ├── router/
│   │   └── Router.jsx
│   ├── main.jsx
│   └── App.css
├── vite.config.js
└── package.json
```

---

## ⚡ Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/bontlenkoale1/apartheid-museum-clone.git
   cd apartheid-museum-clone
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build for production:

   ```bash
   npm run build
   ```

---

## 🌍 Deployment (GitHub Pages)

This project is deployed on **GitHub Pages** under the `/apartheid-museum-clone/` subdirectory.

### Steps:

1. Ensure `basename: "/apartheid-museum-clone/"` is set in your router.
2. In `vite.config.js`, add:

   ```js
   export default defineConfig({
     base: "/apartheid-museum-clone/",
   });
   ```
3. Build project:

   ```bash
   npm run build
   ```
4. Deploy the `dist/` folder to GitHub Pages.

👉 Final URL:

```
https://bontlenkoale1.github.io/apartheid-museum-clone/
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit a pull request.

---

## 📜 License

This project is for **educational purposes only**. It is not affiliated with or endorsed by the official Apartheid Museum.

---

### 👩🏽‍💻 Author

**Bridgette Nkoale**

* GitHub: [@bontlenkoale1](https://github.com/bontlenkoale1)
