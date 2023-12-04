export interface ContextProps {
  names: NameProps[];
  setColumn: React.Dispatch<React.SetStateAction<string>>;
  create: (props: NameProps) => Promise<void>;
  remove: (props: NameProps) => Promise<void>;
}

export interface ResponseProps {
  count: number;
}

export interface NameProps {
  id?: number;
  firstname: string;
  lastname: string;
}
