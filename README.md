# TherapyHub - Social Platform for Mental Health & Wellbeing

A Facebook-like social media platform built on structured therapy workbooks, support communities, and mental health resources.

## Features

- **Social Feed**: Share updates, workbook progress, and support posts
- **Workbooks**: Structured therapy workbooks (CPT-style, multi-session programs)
- **Communities**: Join support groups around specific mental health topics
- **User Profiles**: Showcase your journey and connect with others
- **Trending Topics**: Discover what the community is discussing
- **Messaging**: Connect with facilitators and peers

## Tech Stack

- **Frontend**: Next.js 14 + React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Database**: (To be configured - PostgreSQL recommended)
- **Authentication**: (To be configured)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Top navigation
│   ├── Sidebar.tsx         # Left sidebar menu
│   ├── Feed.tsx            # Main feed
│   ├── CreatePost.tsx      # Create post component
│   ├── PostCard.tsx        # Individual post card
│   └── RightPanel.tsx      # Right sidebar (trending, about)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Next Steps

- [ ] Database schema design (Users, Workbooks, Posts, Comments, Communities)
- [ ] User authentication (sign up, login)
- [ ] API routes for posts, comments, likes
- [ ] Workbook creation and progress tracking
- [ ] Community/group functionality
- [ ] Messaging system
- [ ] User profiles with progress dashboard

## Development

```bash
# Lint code
npm run lint

# Watch for type errors
npx tsc --watch
```

## License

MIT
