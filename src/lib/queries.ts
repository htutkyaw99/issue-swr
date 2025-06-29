import useSWR from "swr";
import { Issue } from "../types/issue";

export const useIssues = () => {
  return useSWR<Issue[]>("/issues");
};
