import { useMemo, useState } from "react";
import { Chat } from "./components/Chat/Chat.jsx";
import { Assistant } from "./components/Assistant/Assistant.jsx";
import { v4 as uuidv4 } from "uuid";
import { Sidebar } from "./components/Sidebar/Sidebar.jsx";
import { Theme } from "./components/Theme/Theme.jsx";
import styles from "./App.module.css";

const CHATS = [
  {
    id: 1,
    title: "General Chat",
    messages: [
      {
        role: "assistant",
        content: "Hello! I am your AI ChatBot. How can I assist you today?",
      },
    ],
  },
  { id: 2, title: "Tech Support" },
  { id: 3, title: "Random Talk" },
];

function App() {
  const [assistant, setAssistant] = useState();
  const [chats, setChats] = useState(CHATS);
  const [activeChatId, setActiveChatId] = useState(2);
  const activeChatMessages = useMemo(
    () => chats.find(({ id }) => id === activeChatId)?.messages ?? [],
    [activeChatId, chats],
  );

  function handleAssistantChange(newAssistant) {
    setAssistant(newAssistant);
  }

  function handleChatMessagesUpdate(messages) {
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === activeChatId ? { ...chat, messages } : chat,
      ),
    );
  }

  function handleNewChatCreate() {
    const id = uuidv4();

    setActiveChatId(id);
    setChats((prevChats) => [
      ...prevChats,
      {
        id,
        title: `New Chat`,
        messages: [],
      },
    ]);
  }

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="/chat-bot.png" alt="logo" />
        <h2 className={styles.Title}>AI ChatBot</h2>
      </header>
      <div className={styles.Content}>
        <Sidebar
          chats={chats}
          activeChatId={activeChatId}
          onActiveChatIdChange={setActiveChatId}
          onNewChatCreate={handleNewChatCreate}
        />

        <main className={styles.Main}>
          <Chat
            assistant={assistant}
            chatId={activeChatId}
            chatMessages={activeChatMessages}
            onChatMessagesUpdate={handleChatMessagesUpdate}
          />
          <div className={styles.Configuration}>
            <Assistant onAssistantChange={handleAssistantChange} />
            <Theme />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
