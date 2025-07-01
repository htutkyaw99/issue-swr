import { Box, Text } from "@radix-ui/themes";
import { useIssues } from "../lib/queries";
import IssueCard from "./IssueCard";
import useDateSortStore from "../stores/dateStore";
import { useMemo } from "react";

import useSearchStore from "../stores/searchStore";

const ListTab = () => {
  const { data: issues, error, isLoading } = useIssues();

  const { dateSort: dateOorder } = useDateSortStore();

  const { search } = useSearchStore();

  const sortedIssues = useMemo(() => {
    if (!issues) return [];

    const filtered = issues.filter((issue) =>
      issue.title.toLowerCase().includes(search.toLowerCase())
    );

    return filtered.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();

      return dateOorder === "asc" ? dateA - dateB : dateB - dateA;
    });
  }, [issues, dateOorder, search]);

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
