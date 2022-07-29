export type TodoTypeTitle =
  | "All"
  | "Personal"
  | "Study"
  | "Trip"
  | "Work"
  | "Hobby"
  | "Friends"
  | "Love"
  | "Grocery";
export type TodoTypes = {
  title: TodoTypeTitle;
  icon: string;
};

export interface TodoItemType {
  todo: string;
  date: Date;
  status: boolean;
  type: TodoTypeTitle;
}
