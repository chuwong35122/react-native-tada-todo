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

export interface TodoItemType {
  id: string;
  todo: string;
  date: Date;
  status: boolean;
  color: TodoColor;
}
