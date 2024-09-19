import { invoke } from "site/runtime.ts";

export default function SimplePromptURLButton() {
    return (
        <div class="pb-8"> {/* Adds padding to the bottom */}
            <button
                class="bg-red-500 hover:bg-red-700 text-white text-2xl font-bold py-4 px-8 rounded-full shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                onClick={async () => {
                    window.alert(
                        JSON.stringify(await invoke["decopilot-app"].actions.prompt.runPrompt(
                            {
                                called_prompt: "json explainer",
                                attachments: [{
                                    call_text: "This json file contains two people and their favorite foods",
                                    fileUrl: "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/copilot-app-dev/5af57aaf-a17e-4d03-bdca-0cb0edce1a6c/favorite_food.json",
                                    fileType: ".json",
                                    type: "URL",
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
