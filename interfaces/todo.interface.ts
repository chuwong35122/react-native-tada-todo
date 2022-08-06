export type PriorityTodoKey = "@med" | "@high";
export interface TodoItemType {
  id: string;
  todo: string;
  date: Date;
  status: boolean;
  priority: PriorityTodoKey;
}
