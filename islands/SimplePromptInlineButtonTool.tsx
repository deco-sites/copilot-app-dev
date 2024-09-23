import { invoke } from "site/runtime.ts";

const inlinePrompt = {
    name: "inline_prompt",
    provider: "Anthropic",
    model: "claude-3-haiku-20240307", //fazer Dynamic Options
    prompt: "Tell me a funny joke",
    advanced:{
        availableFunctions: ["site/loaders/toolCalingTest.ts"]
    }
    
}

export default function SimplePromptTextButton() {
    return (
        <div class="p-8"> {/* Adds padding around the button */}
            <button
                class="bg-red-500 hover:bg-red-700 text-white text-2xl font-bold py-4 px-8 rounded-full shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                onClick={async () => {
                    const res = await invoke["decopilot-app"].actions.prompt.runPrompt(
                        {
                            inlinePrompt: inlinePrompt,
                            attachments: [{
                                call_text: "Echo the punchline in the function",
                                type: "TextOnly",
                            }],
                        }
                    )
                    window.alert(
                        JSON.stringify(res)
                    )
                    console.log(res);
                }}
                style={{}}
            >
                Press Me!
            </button>
        </div>
    );
}
