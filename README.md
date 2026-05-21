# IdeaVault

A community-driven platform where entrepreneurs share, discover, and validate startup ideas.

**Live Site:** https://idea-vault-tau.vercel.app

---

## Project Description

IdeaVault is a full-stack web application built for entrepreneurs, startup enthusiasts, and innovators who want to share their business concepts with a wider community. The platform allows users to publish detailed startup ideas — complete with category, tags, estimated budget, target audience, problem statement, and proposed solution — and receive real feedback through upvotes and comments from fellow community members.

The application features a fully searchable and filterable ideas listing page, a trending section on the home page that highlights the most engaged ideas, and a personal dashboard where users can manage their own submissions and track every interaction they have made across the platform. Authentication is handled securely with support for email and password login as well as Google and GitHub social sign-in, and all private routes are protected by middleware that redirects unauthenticated visitors back to the intended page after sign-in.

IdeaVault is built with Next.js App Router, styled with Tailwind CSS, and designed to be fully responsive across all screen sizes with consistent dark and light mode support throughout.

---

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Better Auth
- MongoDB
- HeroUI

---

## Key Features

- **Idea Publishing** — Users can submit a detailed startup idea including title, category, tags, estimated budget, target audience, problem statement, proposed solution, and a cover image through a structured form.
- **Community Discovery & Search** — The ideas listing page supports keyword search, category filtering, and a clear-all reset so visitors can quickly find ideas relevant to their interests.
- **Trending Ideas on Homepage** — The home page features a dedicated trending section that pulls the most-engaged ideas from the community and displays them in a responsive card grid.
- **Upvote & Comment Interactions** — Signed-in users can upvote ideas they find promising and leave comments to give feedback, ask questions, or spark collaboration.
- **My Interactions Dashboard** — Each user has a personal interactions page showing every idea they have upvoted and every idea they have commented on, along with live counts for their community activity.
- **Protected Routes with Redirect** — Private pages (profile, add idea, my ideas, my interactions) are guarded by middleware. Unauthenticated visitors are redirected to the sign-in page and returned to their intended destination after login.
- **Authentication System** — Supports email and password registration and login as well as Google and GitHub social sign-in, with profile viewing and editing available after sign-in.
- **Dark Mode** — A full dark and light theme toggle is available in the navbar and persists across the session.

---

## npm Packages Used

- next
- react
- react-dom
- tailwindcss
- better-auth
- @better-auth/mongo-adapter
- mongodb
- @heroui/react
- @heroui/styles
- @lottiefiles/dotlottie-react
- react-icons
- swiper
- date-fns
- styled-components
