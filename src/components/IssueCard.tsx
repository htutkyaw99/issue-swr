import { Badge, Box, Flex, Text } from "@radix-ui/themes";
import { Issue } from "../types/issue";
import Status from "./Status";
import { getPriorityColor } from "../lib/getColor";

const IssueCard = ({ issue }: { issue: Issue }) => {
  const { priority, status, title } = issue;

  const priorityColor = getPriorityColor(priority);

  return (
    <Box mb={"3"} className="border-b-2 pb-2 border-gray-300">
      <Text weight={"bold"}>{title}</Text>
      <Flex gap={"3"} align={"center"} mt={"3"}>
        <Status status={status} />
        <Badge size={"2"} className="uppercase" color={priorityColor}>
          {priority}
        </Badge>
      </Flex>
    </Box>
  );
};

export default IssueCard;
