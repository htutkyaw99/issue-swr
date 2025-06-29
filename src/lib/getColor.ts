import { Priority } from "../types/priority";
import { Status } from "../types/status";

export const getStatusColor = (status: Status) => {
  switch (status.toLowerCase()) {
    case "open":
      return "blue";
    case "in-progress":
      return "orange";
    case "closed":
      return "green";
    default:
      return "blue";
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
