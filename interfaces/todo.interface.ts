export type TodoTypeTitle = "All" | "Personal" | "School" | "Trip" | "Work";
export type TodoTypes = {
  title: TodoTypeTitle;
};

export interface TodoItemType {
  todo: string;
  date: Date;
  status: boolean;
  type: TodoTypeTitle;
}
