import { Priority } from "../types/priority";
import { Status } from "../types/status";

export const getStatusColor = (status: Status) => {
  switch (status.toLowerCase()) {
    case "open":
      return "#3b82f6";
    case "in-progress":
      return "#f97316";
    case "closed":
      return "#22c55e";
    default:
      return "#3b82f6";
  }
};
export const getPriorityColor = (priority: Priority) => {
  switch (priority.toLowerCase()) {
    case "high":
      return "red";
    case "medium":
      return "orange";
    case "low":
      return "green";
    default:
      return "blue";
  }
};
