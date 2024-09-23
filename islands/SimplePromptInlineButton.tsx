import { invoke } from "site/runtime.ts";


const inlinePrompt = {
    name: "inline_prompt",
    provider: "Anthropic",
    model: "claude-3-haiku-20240307", //fazer Dynamic Options
    prompt: "Tell me a funny joke"
}

export default function SimplePromptTextButton() {
    return (
        <div class="p-8"> {/* Adds padding around the button */}
            <button
                class="bg-red-500 hover:bg-red-700 text-white text-2xl font-bold py-4 px-8 rounded-full shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                onClick={async () => {
                    window.alert(
                        JSON.stringify(await invoke["decopilot-app"].actions.prompt.runPrompt(
                            {
                                inlinePrompt: inlinePrompt,
                                attachments: [{
                                    call_text: "Brasileiro",
                                    type: "TextOnly",
                                }],
                            }
                        ))
                    );
                }}
                style={{}}
            >
                Press Me!
            </button>
        </div>
    );
}
