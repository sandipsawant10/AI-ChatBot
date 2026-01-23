import Markdown from "react-markdown";
import styles from "./Messages.module.css";
import { useEffect, useMemo, useRef } from "react";

const WELCOME_MESSAGE_GROUP = [
  {
    role: "assistant",
    content: "Hello! I am your AI ChatBot. How can I assist you today?",
  },
];

export function Messages({ messages }) {
  const messagesEndRef = useRef(null);
  const messageGroups = useMemo(
    () =>
      messages.reduce((groups, message) => {
        if (message.role === "user") groups.push([]);
        groups[groups.length - 1].push(message);
        return groups;
      }, []),
    [messages],
  );

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];

    if (lastMessage?.role === "user") {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <div className={styles.Chat}>
      {[WELCOME_MESSAGE_GROUP, ...messageGroups].map((group, groupIndex) => (
        //Group
        <div key={groupIndex} className={styles.Group}>
          {messages.map(({ role, content }, index) => (
            //Message
            <div key={index} className={styles.Message} data-role={role}>
              <Markdown>{content}</Markdown>
            </div>
          ))}
        </div>
      ))}

      <div ref={messagesEndRef} />
    </div>
  );
}
