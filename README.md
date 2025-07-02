# 🚀 Portfolio

A modern, animated, and responsive developer portfolio built with **React**, **TypeScript**, **Vite**, and **Framer Motion**.

## ✨ Features

- ⚡️ **Blazing Fast**: Powered by Vite for instant reloads and builds.
- 🎨 **Beautiful Animations**: Smooth section reveals and transitions using Framer Motion.
- 📱 **Responsive Design**: Looks great on all devices.
- 🧑‍💻 **Type Safe**: Built with TypeScript for robust, maintainable code.
- 🧩 **Modular Components**: Easy to extend and customize.
- 🌙 **Glassmorphism UI**: Modern, elegant glass-like effects in the navbar and buttons.
- 🧭 **Accessible Navigation**: Keyboard and screen reader friendly.

## 📸 Preview

![Portfolio Preview](./screenshot.png) <!-- Add a screenshot of your site here -->

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
pnpm install # or npm install or yarn install
```

### Development

```bash
pnpm dev # or npm run dev or yarn dev
```

Visit [http://localhost:5173](http://localhost:5173) to view your portfolio.

### Production Build

```bash
pnpm build # or npm run build or yarn build
```

### Preview Production Build

```bash
pnpm preview # or npm run preview or yarn preview
```

## 🧩 Project Structure

```
src/
  components/    # React components (Navbar, Hero, About, etc.)
  lib/           # Custom hooks (e.g., useInView)
  assets/        # Images and static assets
  App.tsx        # Main app entry
  main.tsx       # Vite entry point
```

## 📝 Customization

- **Content**: Edit your info and sections in the components inside `src/components/`.
- **Styling**: Tailwind CSS classes are used throughout for easy customization.
- **Animations**: Section animations are handled with Framer Motion and a custom `useInView` hook.

## 🧪 Linting & Formatting

This project uses ESLint and Prettier for code quality and formatting.  
You can expand the ESLint configuration for stricter rules or React-specific linting as needed.

## 📦 Dependencies

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📄 License

MIT License.  
Feel free to fork and customize!

---

> _Built and designed by Mbas. Inspired by modern developer portfolio best practices._
