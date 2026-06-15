// Extend HTML script element attributes for Thinkstack chatbot loader
declare module "react" {
  interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
    chatbot_id?: string;
  }
}

export {};
