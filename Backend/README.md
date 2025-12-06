# NexusContribute Backend

The backend component of NexusContribute, implementing the AI-powered GitHub issue analysis using LangGraph and Google Gemini AI.

## 🛠️ Tech Stack

- **LangGraph**: Framework for building complex AI workflows
- **LangChain**: Foundation for LLM integrations and data processing
- **Google Gemini AI**: Advanced language model for issue matching
- **PyGitHub**: Python library for GitHub API interactions
- **Python**: Core programming language for the backend logic

## 🚀 Development

### Prerequisites
- Python 3.7+
- Google AI API key
- GitHub Personal Access Token

### Setup

1. **Install Dependencies**
   ```bash
   pip install langgraph langchain langchain-google-genai PyGithub
   ```

2. **Configure API Keys**
   - Set up `GOOGLE_API_KEY` environment variable
   - Set up `GITHUB_ACCESS_TOKEN` environment variable

3. **Run the Notebook**
   ```bash
   jupyter notebook NexusContribute.ipynb
   ```

## 📋 Workflow Architecture

The backend implements a 4-step LangGraph workflow:

1. **Fetch GitHub Issues**: Retrieves up to 100 open issues from specified repository
2. **Format for AI**: Prepares data and generates prompts for LLM processing
3. **Call Gemini**: Uses Google Gemini AI to analyze and match issues
4. **Parse & Filter**: Extracts relevant issue URLs from AI response

## 🔧 Key Components

- **GraphState**: TypedDict managing workflow state between nodes
- **fetch_github_issues_node**: Handles GitHub API integration
- **format_for_ai_node**: Structures data for AI consumption
- **call_gemini_node**: Manages LLM interaction
- **parse_and_filter_node**: Processes and filters AI results

## 🔒 Security Notes

- API keys should be stored securely (environment variables recommended)
- Keep tokens private and never commit to version control
- Consider rotating tokens regularly for production use

## 🔗 Integration

The backend workflow is designed to integrate with automation tools like n8n. The Colab-style notebook can be adapted for:
- Webhook endpoints
- REST APIs
- Cloud deployment (Google Cloud, AWS, etc.)

## 🎯 AI Prompt Strategy

The system uses a structured prompting approach that:
- Analyzes each GitHub issue individually
- Returns JSON array of matched issues
- Filters out non-matching issues with "null" values
- Ensures consistent output format for frontend consumption

## 🤝 Contributing

Backend changes should focus on:
- Improving AI accuracy and performance
- Adding support for additional Git services
- Optimizing workflow efficiency
- Enhancing error handling and security

Make sure to test thoroughly with different repository types and query patterns.
