import { useState } from "react";
import { Assistant as AssistantClass } from "./assistants/deepseekai.js";
import { Chat } from "./components/Chat/Chat.jsx";
import { Assistant } from "./components/Assistant/Assistant.jsx";
import { Controls } from "./components/Controls/Controls.jsx";
import { Loader } from "./components/Loader/Loader.jsx";
import { Theme } from "./components/Theme/Theme.jsx";
import styles from "./App.module.css";

  let assistant;

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  function updateLastMessageContent(content) {
    setMessages((prevMessages) =>
      prevMessages.map((messages, index) =>
        index === prevMessages.length - 1
          ? { ...messages, content: `${messages.content}${content}` }
          : messages,
      ),
    );
  }

  async function handleContentSend(content) {
    addMessage({ role: "user", content });
    setIsLoading(true);
    try {
      const result = await assistant.chatStream(
        content,
        messages.filter(({ role }) => role !== "system"),
      );
      let isFirstChunk = false;

      for await (const chunk of result) {
        if (!isFirstChunk) {
          isFirstChunk = true;
          addMessage({ role: "assistant", content: "" });
          setIsLoading(false);
          setIsStreaming(true);
        }
        updateLastMessageContent(chunk);
      }
      setIsStreaming(false);
    } catch (error) {
      addMessage({
        role: "system",
        content:
          error?.message ?? "Error occurred while processing your request.",
      });
      setIsLoading(false);
      setIsStreaming(false);
    }
  }

  function handleAssistantChange(newAssistant) {
    assistant = newAssistant;
  }

  return (
    <div className={styles.App}>
      {isLoading && <Loader />}
      <header className={styles.Header}>
        <img className={styles.Logo} src="/chat-bot.png" alt="logo" />
        <h2 className={styles.Title}>AI ChatBot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls
        isDisabled={isLoading || isStreaming}
        onSend={handleContentSend}
      />
      <div className={styles.Configuration}>
      <Assistant onAssistantChange={handleAssistantChange} />
      <Theme />
      </div>
    </div>
  );
}

export default App;
