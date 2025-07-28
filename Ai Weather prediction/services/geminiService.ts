
import { GoogleGenAI, Type } from "@google/genai";
import { WeatherData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const getWeatherPrediction = async (city: string): Promise<WeatherData> => {
    const prompt = `Provide a detailed weather forecast for ${city}. I need the current conditions and a 5-day forecast.
    - Current weather: temperature in Celsius and Fahrenheit, feels like temperature in Celsius and Fahrenheit, condition (e.g., Sunny, Cloudy), humidity percentage, and wind speed in kph and mph.
    - 5-day forecast: for each day, provide the day of the week, high and low temperatures in Celsius and Fahrenheit, and the weather condition.
    - Location: The city and country name.
    `;

    const responseSchema = {
        type: Type.OBJECT,
        properties: {
            location: {
                type: Type.OBJECT,
                properties: {
                    city: { type: Type.STRING },
                    country: { type: Type.STRING },
                },
            },
            current: {
                type: Type.OBJECT,
                properties: {
                    temperature_c: { type: Type.NUMBER },
                    temperature_f: { type: Type.NUMBER },
                    condition: { type: Type.STRING },
                    humidity: { type: Type.INTEGER },
                    wind_kph: { type: Type.NUMBER },
                    wind_mph: { type: Type.NUMBER },
                    feels_like_c: { type: Type.NUMBER },
                    feels_like_f: { type: Type.NUMBER },
                },
            },
            forecast: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        day: { type: Type.STRING },
                        high_c: { type: Type.NUMBER },
                        high_f: { type: Type.NUMBER },
                        low_c: { type: Type.NUMBER },
                        low_f: { type: Type.NUMBER },
                        condition: { type: Type.STRING },
                    },
                },
            },
        },
    };

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                temperature: 0.2,
            },
        });

        const jsonText = response.text.trim();
        const weatherData: WeatherData = JSON.parse(jsonText);
        
        if (!weatherData.location || !weatherData.current || !weatherData.forecast || weatherData.forecast.length === 0) {
            throw new Error("AI response was incomplete. Please try a different city or rephrase your request.");
        }

        return weatherData;

    } catch (error) {
        console.error("Error fetching weather data from Gemini API:", error);
        if (error instanceof Error && error.message.includes("JSON")) {
            throw new Error("Could not understand the weather data from the AI. Please try again.");
        } else if (error instanceof Error && error.message.includes("400")) {
            throw new Error(`Could not find weather for "${city}". Please check the spelling or try another city.`);
        }
        throw new Error("Failed to fetch weather data. The AI service may be temporarily unavailable.");
    }
};
