# Scott Mercer — Portfolio

A minimal personal portfolio website built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [TypeScript](https://www.typescriptlang.org/).

This site showcases selected projects, provides quick access to my resume, and includes contact + social links.

---

## ✨ Features

- Simple, responsive single-page layout  
- Project cards with GitHub links and tech stack tags  
- Resume viewer (PDF)  
- Contact via email  
- Clean design with custom favicon and profile image  
- Built with modern web tech (Next.js App Router, Tailwind, Lucide Icons)

---

## 📂 Project Structure

```
app/
├── page.tsx         # Main content (intro + projects)
├── layout.tsx       # Shared layout (HTML wrapper)
public/
├── resume.pdf       # Downloadable resume
├── profile.jpg      # Profile image
├── favicon.ico      # Custom favicon
styles/
└── globals.css      # Tailwind base styles
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 🔧 Customization

- Update your profile info in `page.tsx`
- Add project entries with `title`, `description`, `github`, and `tags`
- Replace `resume.pdf` and `profile.jpg` in `/public`
- Add a favicon by placing `favicon.ico` in `/public`

---

## 📦 Deployment

Deploy instantly to [Vercel](https://vercel.com) (recommended for Next.js):

```bash
# If using Vercel CLI
vercel deploy
```

Or connect your GitHub repo to Vercel and push to deploy.

---

## 📄 License

MIT — use freely, credit appreciated.
