import { OpenAI } from "openai";
import dotenv from 'dotenv'

dotenv.config()

export const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
    dangerouslyAllowBrowser: true
});

export async function getResult(prompt) {
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.2,
        max_tokens: 4096,
        top_p: 1,
        frequency_penalty: 0.2,
        presence_penalty: 0,
    });

    return response.choices[0].message.content;
}