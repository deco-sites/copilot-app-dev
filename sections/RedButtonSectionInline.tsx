import SimplePromptInlineButtom from "../islands/SimplePromptInlineButtom.tsx";

export interface Props {
  /**
   * @format rich-text
   */
  title?: string;
}

export default function PressMe({
  title = "Teste de prompt simples usando app com prompt inline"
}: Props) {

  return (
    <div>
      <h1 class="text-xl font-bold mb-4">{title}</h1>
      <div class="flex items-center justify-center">
        <SimplePromptInlineButtom />
      </div>
    </div>
  );
}
