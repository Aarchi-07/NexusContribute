# NexusContribute

NexusContribute is an AI-powered web application that helps developers find the perfect open-source issues to contribute to. By analyzing GitHub repository issues with Google Gemini AI, it matches user queries to relevant contributions based on natural language descriptions.

## ✨ Features

- **Smart Issue Matching**: Uses advanced AI to understand and match your contribution interests
- **Natural Language Queries**: Describe what you're looking for in plain English
- **GitHub Integration**: Directly analyzes issues from any public GitHub repository
- **Real-time Results**: Fast processing with immediate feedback
- **Modern UI**: Clean, responsive interface built with React and Tailwind CSS

## 🏗️ Architecture

### Frontend (React + Vite)
- Built with React 19 and Vite for optimal performance
- Styled with Tailwind CSS for modern, responsive design
- Features Lucide React icons for enhanced UX
- Includes ESLint configuration for code quality

### Backend (LangGraph + AI)
- LangGraph workflow for orchestrating AI-powered issue analysis
- Google Gemini 2.5 Pro for intelligent issue matching
- PyGitHub integration for GitHub API access
- JSON-based data processing pipeline

## 🚀 Quick Start

### Prerequisites

- Node.js (for frontend development)
- Python (for backend experimentation)
- Google API Key (for Gemini AI)
- GitHub Personal Access Token

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Development

1. Install required Python packages:
   ```bash
   pip install langgraph langchain langchain-google-genai PyGithub
   ```

2. Configure API keys in your environment:
   - `GOOGLE_API_KEY`: Your Google AI API key
   - `GITHUB_ACCESS_TOKEN`: Your GitHub personal access token

3. Run the Jupyter notebook: `Backend/NexusContribute.ipynb`

## 🔧 Integration

The application integrates with n8n automation workflows via webhooks for production deployment. The frontend sends requests to:
```
http://localhost:5678/webhook-test/bcb9816f-b9ca-4224-a9ba-c27657a13938
```

## 📋 Workflow

1. User enters a GitHub repository URL and describes desired issues
2. Application fetches the 100 most recent open issues from the repository
3. AI analyzes each issue against the user's natural language query
4. Returns filtered list of matching issues with direct links

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- Lucide React
- ESLint

### Backend
- LangGraph
- LangChain
- Google Gemini AI
- PyGitHub
- Python (Jupyter notebooks)

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Google AI for Gemini model integration
- n8n for automation workflow capabilities
- The open-source community for inspiration and tools
