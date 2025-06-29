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
    <Tabs.Root defaultValue="issues">
      <Tabs.List size={"2"}>
        <Tabs.Trigger value="issues">All</Tabs.Trigger>
        <Tabs.Trigger value="inprogress">Pending</Tabs.Trigger>
        <Tabs.Trigger value="closed">Closed</Tabs.Trigger>
      </Tabs.List>

      <Box pt="3">
        <Tabs.Content value="issues">
          {issues?.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </Tabs.Content>

        <Tabs.Content value="inprogress">
          {inprogress?.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </Tabs.Content>

        <Tabs.Content value="closed">
          {closed?.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
};

export default ListTab;
