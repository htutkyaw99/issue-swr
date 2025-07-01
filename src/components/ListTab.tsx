import { Box, Text } from "@radix-ui/themes";
import { useIssues } from "../lib/queries";
import IssueCard from "./IssueCard";
import useDateSortStore from "../stores/dateStore";
import { useMemo } from "react";
import usePrioritySortStore from "../stores/priorityStore";

const ListTab = () => {
  const { data: issues, error, isLoading } = useIssues();

  const { dateSort: dateOorder } = useDateSortStore();

  const sortedIssues = useMemo(() => {
    if (!issues) return [];

    return [...issues].sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();

      return dateOorder === "asc" ? dateA - dateB : dateB - dateA;
    });
  }, [issues, dateOorder]);

  if (isLoading) return <Text>Loading...</Text>;

  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <Box pt="3">
      {sortedIssues?.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </Box>
  );
};

export default ListTab;
