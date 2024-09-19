import SimplePromptURLButton from "../islands/SimplePromptURLButton.tsx";

export interface Props {
  /**
   * @format rich-text
   */
  title?: string;
}

export default function PressMe({
  title = "Teste de prompt simples com link usando app"
}: Props) {

  return (
    <div>
      <h1 class="text-xl font-bold mb-4">{title}</h1>
      <div class="flex items-center justify-center">
        <SimplePromptURLButton />
      </div>
    </div>
  );
}
