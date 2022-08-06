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
  | "Green"
  | "Amber"
  | "Rose"
  | "Violet"
  | "Black";

export type PriorityTodoKey = "@med" | "@high";
export interface TodoItemType {
  id: string;
  todo: string;
  date: Date;
  status: boolean;
  priority: PriorityTodoKey;
  color: TodoColorName;
}
