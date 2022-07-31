export type TodoColor =
  | "blue"
  | "cyan"
  | "green"
  | "amber"
  | "orange"
  | "rose"
  | "violet"
  | "indigo"
  | "gray"
  | "black";

export type TodoColorName =
  | "All"
  | "Blue"
  | "Cyan"
  | "Green"
  | "Amber"
  | "Orange"
  | "Rose"
  | "Violet"
  | "Indigo"
  | "Gray"
  | "Black";

export interface TodoItemType {
  id: string;
  todo: string;
  date: Date;
  status: boolean;
  color: TodoColorName;
}
