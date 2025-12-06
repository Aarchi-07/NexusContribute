# NexusContribute Frontend

The frontend component of NexusContribute, built with React and Vite for optimal performance and modern UI.

## 🛠️ Tech Stack

- **React 19**: Latest React version for component-based UI
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **ESLint**: Code linting for quality

## 🚀 Development

### Prerequisites
- Node.js (version specified in package.json)

### Setup
```bash
cd Frontend
npm install
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📱 Features

- Clean, responsive UI optimized for finding open-source issues
- Real-time search with loading states and error handling
- Direct GitHub issue link integration
- Modern design with dark theme and cyan accents

## 🔧 Configuration

- The app connects to an n8n webhook endpoint (configured in `App.jsx`)
- Adjust the webhook URL in `src/App.jsx` for different environments
- API keys are handled on the backend side

## 🤝 Contributing

Make changes within this directory for frontend-specific updates. Ensure linting passes and test thoroughly across different screen sizes.
