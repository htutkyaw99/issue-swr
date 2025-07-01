import { Box, Tabs, Text } from "@radix-ui/themes";
import { useIssues } from "../lib/queries";
import IssueCard from "./IssueCard";

const ListTab = () => {
  const { data, error, isLoading } = useIssues();

  if (isLoading) return <Text>Loading...</Text>;

  if (error) return <Text>Error: {error.message}</Text>;

  const issues = data;

  const inprogress = issues?.filter((issue) => issue.status === "in-progress");

  const closed = issues?.filter((issue) => issue.status === "closed");

  return (
    <Box pt="3">
      {issues?.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </Box>
  );
};

export default ListTab;
