import OpenAI from "openai";
import { Assistant as openAIAssistant } from "../assistants/openai.js";

const openai = new OpenAI({
  baseURL: "https://api.deepseekai.com/v1",
  apiKey: import.meta.env.VITE_DEEPSEEK_AI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export class Assistant extends openAIAssistant {
 
  constructor(model = "deepseek-chat", client = openai) {
    super(model, client);
  }

  

}