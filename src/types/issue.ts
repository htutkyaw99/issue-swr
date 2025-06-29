import { Priority } from "./priority";
import { Status } from "./status";

export interface Issue {
  id: number;
  title: string;
  description: string;
  status: Status;
  createdAt: Date;
  priority: Priority;
}
