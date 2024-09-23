import SimplePromptTextButton from "../islands/SimplePromptTextButton.tsx";

export interface Props {
  /**
   * @format rich-text
   */
  title?: string;
}

export default function PressMe({
  title = "Teste de prompt simples usando app"
}: Props) {

  return (
    <div>
      <div class="mb-8"></div>
      <h4 class="text-xl font-bold mb-4 text-center">{title}</h4>
      <div class="flex items-center justify-center">
        <SimplePromptTextButton />
      </div>
      <div class="mb-8"></div>
    </div>
  );
}
