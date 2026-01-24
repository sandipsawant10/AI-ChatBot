# AI ChatBot

A modern, real-time AI chatbot application built with React and Vite, supporting multiple AI providers with streaming responses and multi-chat management.

## Features

- 🤖 **Multiple AI Providers**: Supports Google Gemini AI, OpenAI, Anthropic Claude, DeepSeek AI, and X AI
- 💬 **Real-time Streaming**: See AI responses as they're being generated
- 📝 **Multi-Chat Management**: Create and switch between multiple chat sessions
- 🎨 **Markdown Support**: Rich text formatting in chat messages
- 📱 **Responsive Design**: Clean, modern UI with modular CSS
- 🎨 **Theme Support**: Light/Dark mode theme switching
- 📂 **Sidebar Navigation**: Easy navigation between chat sessions
- ⌨️ **Auto-resizing Input**: Textarea automatically adjusts to content
- 🔄 **Chat History**: Maintains conversation context across sessions
- ⚡ **Fast Development**: Built with Vite for lightning-fast HMR

## Tech Stack

- **Frontend**: React 19.2
- **Build Tool**: Vite
- **AI Services**:
  - Google Generative AI (Gemini 2.0 Flash)
  - OpenAI (GPT-4o-mini and other models)
  - Anthropic Claude
  - DeepSeek AI
  - X AI (Grok)
- **UI Libraries**:
  - react-markdown v10.1 (for rendering formatted responses)
  - react-textarea-autosize (for dynamic input)
  - uuid (for unique chat session IDs)
- **Styling**: CSS Modules

## Prerequisites

Before you begin, ensure you have:

- Node.js (v18 or higher)
- An API key from one or more providers:
  - [Google AI Studio](https://makersuite.google.com/app/apikey) (for Gemini)
  - [OpenAI Platform](https://platform.openai.com/api-keys) (for GPT)
  - [Anthropic Console](https://console.anthropic.com/) (for Claude)
  - [DeepSeek Platform](https://platform.deepseek.com/) (for DeepSeek)
  - [X AI](https://x.ai/) (for Grok)

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd AI-ChatBot
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory with your API keys:

   ```env
   VITE_GOOGLE_AI_API_KEY=your_google_ai_api_key_here
   VITE_OPEN_AI_API_KEY=your_openai_api_key_here
   VITE_DEEPSEEK_AI_API_KEY=your_deepseek_api_key_here
   VITE_ANTHROPIC_AI_API_KEY=your_anthropic_api_key_here
   VITE_X_AI_API_KEY=your_xai_api_key_here
   ```

   **Note**: You only need API keys for the providers you plan to use. The app will dynamically show available providers based on which API keys are configured.

## Usage

### Development Mode

```bash
npm run dev
```

Opens the app at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run supports multiple AI providers. You can switch between them using the Assistant selector in the UI. Each provider requires its corresponding API key to be configured in the `.env` file.

### Available Providers:

- **Google Gemini AI** - Fast, efficient responses with Gemini 2.0 Flash
- **OpenAI** - GPT-4o-mini and other OpenAI models
- **Anthropic Claude** - Advanced reasoning and analysis
- **DeepSeek AI** - Cost-effective alternative
- **X AI (Grok)** - Latest model from X.AIFrom:
   import { Assistant } from "./assistants/googleai.js";

   // To:
   import { Assistant } from "./assistants/openai.js";
```

## Project Structure

```
AI-ChatBot/
├── public/
│   └── chat-bot.png         # App logo
├── src/
│   ├── assistants/
│   │   ├── googleai.js      # Google Gemini AI integration
│   │   ├── openai.js        # OpenAI integration
│   │   ├── anthropicai.js   # Anthropic Claude integration
│   │   ├── deepseekai.js    # DeepSeek AI integration
│   │   └── xai.js           # X AI (Grok) integration
│   ├── components/
│   │   ├── Assistant/       # AI provider selector component
│   │   ├── Chat/            # Main chat display component
│   │   ├── Controls/        # Input controls component
│   │   ├── Loader/          # Loading indicator
│   │   ├── Messages/        # Message display with markdown
│   │   ├── Sidebar/         # Chat history sidebar
│   │   └── Theme/           # Theme switcher component
│   ├── assets/              # Static assets
│   ├── App.jsx              # Main app component
│   ├── App.module.css       # App styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── .env                     # Environment variables (create this)
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## AI Assistant API

All assistant modules expose a consistent interface:

### Constructor

```javascript
const assistant = new Assistant(model);
```

### Properties

- `name`: String identifier for the assistant provider

### Methods

#### `createChat(history)`

Create a new chat session with existing history.

```javascript
assistant.createChat(previousMessages);
```

#### `chat(content)`

Send a message and get a complete response.

```javascript
const response = await assistant.chat("Hello!");
```

#### `chatStream(content)`

Send a message and receive a streaming response.

```javascript
const stream = await assistant.chatStream("Tell me a story");
for await (const chunk of stream) {
  console.log(chunk);
}
```

## Features in Detail

### Multi-Chat Sessions

Create and manage multiple chat sessions simultaneously. Each chat maintains its own conversation history and can be accessed through the sidebar.

### Streaming Responses

The app uses async generators to stream AI responses in real-time, providing a better user experience with immediate feedback.

### Message Rendering

Messages support full Markdown formatting including:

- **Bold** and _italic_ text
- Code blocks with syntax highlighting
- Lists and tables
- Links and images

### Sidebar Navigation

- Toggle sidebar with the menu button
- View all active chat sessions
- Create new chats
- Switch between conversations
- Each chat displays a preview of the first message

### Theme Switching

Toggle between light and dark modes to match your preference.

### Auto-scroll

The chat automatically scrolls to the latest message when the user sends a new message.

### Input States

The input is disabled during loading and streaming to prevent multiple simultaneous requests.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Vite](https://vite.dev/)
- AI by [Google Gemini](https://ai.google.dev/), [OpenAI](https://openai.com/), [Anthropic](https://www.anthropic.com/), [DeepSeek](https://www.deepseek.com/), and [X AI](https://x.ai/)
- Markdown rendering by [react-markdown](https://github.com/remarkjs/react-markdown)
