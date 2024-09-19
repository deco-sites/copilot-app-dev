import { invoke } from "site/runtime.ts";

export default function SimplePromptTextButton() {
    return (
        <div class="pb-8"> {/* Adds padding-bottom to the button container */}
            <button
                class="bg-red-500 hover:bg-red-700 text-white text-2xl font-bold py-4 px-8 rounded-full shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                onClick={async () => {
                    window.alert(
                        JSON.stringify(await invoke["decopilot-app"].actions.prompt.runPrompt(
                            {
                                called_prompt: "Single Prompt Test",
                                attachments: [{
                                    call_text: "Brasileiro",
                                    type: "TextOnly",
                                }],
                            }
                        ))
                    );
                }}
            >
                Press Me!
            </button>
        </div>
    );
}
