import OpenAI from "openai";
import { Assistant as openAIAssistant } from "../assistants/openai.js";

const openai = new OpenAI({
  baseURL: "https://api.x.ai/v1",
  apiKey: import.meta.env.VITE_X_AI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export class Assistant extends openAIAssistant {
  constructor(model = "grok-3-mini", client = openai) {
    super(model, client);
  }
}
