# About Me - Personal Portfolio Website

A modern, interactive portfolio website built with Next.js, featuring 3D animations, smooth transitions, and a beautiful UI. Showcase your projects, experience, and skills with a professional and engaging design.

## ✨ Features

- **Modern Design**: Beautiful UI with liquid glass effects, aurora backgrounds, and smooth animations
- **3D Interactive Elements**: Retro computer 3D model viewer powered by Three.js
- **Performance Optimized**: Code splitting, dynamic imports, and optimized loading strategies
- **Responsive Design**: Fully responsive layout that works on all devices
- **Type-Safe**: Built with TypeScript for better developer experience
- **Data-Driven**: Easy to customize content through JSON configuration
- **Smooth Animations**: GSAP and Motion animations for engaging user experience

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **3D Graphics**: [Three.js](https://threejs.org/) with [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Animations**: [GSAP](https://gsap.com/) & [Motion](https://motion.dev/)
- **UI Components**: Custom components with shadcn/ui patterns
- **Icons**: [Lucide React](https://lucide.dev/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd aboutme
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📁 Project Structure

```
aboutme/
├── public/
│   ├── assets/           # Static assets (images, videos, 3D models)
│   └── *.svg            # SVG icons
├── src/
│   ├── app/             # Next.js app directory
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   └── globals.css  # Global styles
│   ├── components/
│   │   ├── 3d/          # 3D components (Three.js)
│   │   ├── portfolio/   # Portfolio section components
│   │   ├── tech-stack/  # Tech stack icons/components
│   │   └── ui/          # Reusable UI components
│   ├── data/
│   │   └── portfolio.json  # Portfolio content data
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   └── types/
│       └── portfolio.ts # TypeScript type definitions
├── components.json       # shadcn/ui configuration
├── next.config.ts       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Dependencies and scripts
```

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server (after build)
- `npm run lint` - Run ESLint to check code quality

## 🎨 Customization

### Updating Content

Edit the `src/data/portfolio.json` file to update your portfolio content:

- **Hero Section**: Update title, subtitle, tagline, and stats
- **About Section**: Modify your bio and focus areas
- **Skills**: Add or update your technical skills
- **Projects**: Showcase your projects with descriptions and tech stacks
- **Experience**: Add your work experience and achievements
- **Contacts**: Update your contact information and social links

### Styling

- Global styles: `src/app/globals.css`
- Tailwind configuration: `tailwind.config.js`
- Component-specific styles are defined inline using Tailwind classes

### 3D Models

Replace the retro computer model in `public/assets/retro_computer/` with your own 3D models. The viewer component is located in `src/components/3d/retro-computer-viewer.tsx`.

## 🚢 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be live!

### Other Platforms

You can also deploy to other platforms:

- **Netlify**: Connect your GitHub repo and configure build command: `npm run build`
- **AWS Amplify**: Follow [Next.js deployment guide](https://docs.aws.amazon.com/amplify/latest/userguide/deploy-nextjs-app.html)
- **Docker**: Build a Docker image and deploy to any container platform

## 📄 License

This project is private and personal.

## 🤝 Contributing

This is a personal portfolio project. If you'd like to use it as a template for your own portfolio, feel free to fork and customize it!

## 📧 Contact

For questions or suggestions, reach out via:

- Email: catre11032005@gmail.com
- LinkedIn: [Le Hoai Nam](https://www.linkedin.com/in/le-hoai-nam-385580364/)
- GitHub: [@kallo1103](https://github.com/kallo1103)

---

Built with ❤️ using Next.js and modern web technologies.
