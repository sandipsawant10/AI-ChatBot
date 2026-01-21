# AI ChatBot

A modern, real-time AI chatbot application built with React and Vite, supporting both Google Gemini AI and OpenAI models with streaming responses.

## Features

- 🤖 **Multiple AI Providers**: Supports both Google Gemini AI and OpenAI
- 💬 **Real-time Streaming**: See AI responses as they're being generated
- 📱 **Responsive Design**: Clean, modern UI with modular CSS
- 🎨 **Markdown Support**: Rich text formatting in chat messages
- ⌨️ **Auto-resizing Input**: Textarea automatically adjusts to content
- 🔄 **Chat History**: Maintains conversation context
- ⚡ **Fast Development**: Built with Vite for lightning-fast HMR

## Tech Stack

- **Frontend**: React 19.2
- **Build Tool**: Vite (Rolldown)
- **AI Services**:
  - Google Generative AI (Gemini 2.0 Flash)
  - OpenAI (GPT-4o-mini)
- **UI Libraries**:
  - react-markdown (for rendering formatted responses)
  - react-textarea-autosize (for dynamic input)
- **Styling**: CSS Modules

## Prerequisites

Before you begin, ensure you have:

- Node.js (v18 or higher)
- An API key from either:
  - [Google AI Studio](https://makersuite.google.com/app/apikey) (for Gemini)
  - [OpenAI Platform](https://platform.openai.com/api-keys) (for GPT)

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

   Create a `.env` file in the root directory:

   ```env
   VITE_GOOGLE_AI_API_KEY=your_google_ai_api_key_here
   VITE_OPEN_AI_API_KEY=your_openai_api_key_here
   ```

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
npm run lint
```

## Switching AI Providers

The app is configured to use **Google Gemini AI** by default. To switch to OpenAI:

1. Open [App.jsx](src/App.jsx)
2. Change the import on line 2:

   ```javascript
   // From:
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
│   │   └── openai.js        # OpenAI integration
│   ├── components/
│   │   ├── Chat/            # Chat message display component
│   │   ├── Controls/        # Input controls component
│   │   └── Loader/          # Loading indicator
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

Both assistant modules (`googleai.js` and `openai.js`) expose the same interface:

### Constructor

```javascript
const assistant = new Assistant(model);
```

### Methods

#### `chat(content, history?)`

Send a message and get a complete response.

```javascript
const response = await assistant.chat("Hello!");
```

#### `chatStream(content, history?)`

Send a message and receive a streaming response.

```javascript
const stream = await assistant.chatStream("Tell me a story");
for await (const chunk of stream) {
  console.log(chunk);
}
```

## Known Issues

⚠️ **Important Fix Required**: There's a typo in [googleai.js](src/assistants/googleai.js#L22). The method is named `chatSteam` but should be `chatStream`. Change line 22 from:

```javascript
async *chatSteam(content) {
```

to:

```javascript
async *chatStream(content) {
```

## Features in Detail

### Streaming Responses

The app uses async generators to stream AI responses in real-time, providing a better user experience with immediate feedback.

### Message Grouping

Messages are grouped by user/assistant pairs for better conversation flow visualization.

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
- AI by [Google Gemini](https://ai.google.dev/) and [OpenAI](https://openai.com/)
