import { AppContext } from "../apps/local/decopilot-app.ts";

interface Props {
  /**
   * @description echo this
   */
  echo: string;
}

/**
 * @title Return parameter
 * @description returns the input as echo
 */
export default function loader(
    {echo}: Props,
    _req: Request,
    _ctx: AppContext,
): string {
    return `The user wants to tell you ${echo}`
}