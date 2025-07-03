import useSWR from "swr";
import { Issue } from "../types/issue";

export const useIssues = () => {
  return useSWR<Issue[]>("/issues");
};

export const useIssue = (id: number) => {
  return useSWR<Issue>(`/issues/${id}`);
};
