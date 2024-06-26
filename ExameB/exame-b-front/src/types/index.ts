export interface ContextProps {
  words: WordProps[];
  create: (name: string) => Promise<void>;
  remove: (id: number) => Promise<void>;
}

export interface ResponseProps {
  count: number;
}

export interface WordProps {
  id: number;
  name: string;
  chars: string[];
}
