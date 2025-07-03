import { Badge, Box, Flex, Text } from "@radix-ui/themes";
import { Issue } from "../types/issue";
import Status from "./Status";
import { getPriorityColor } from "../lib/getColor";
import { Link } from "react-router-dom";

const IssueCard = ({ issue }: { issue: Issue }) => {
  const { priority, status, title, createdAt } = issue;

  const priorityColor = getPriorityColor(priority);

  return (
    <Link to={`/details/${issue.id}`}>
      <Box mb={"3"} className="border-b-2 pb-2 border-gray-300">
        <Flex align={"center"} justify={"between"} mb={"3"}>
          <Text weight={"bold"}>{title}</Text>
          <Text>{new Date(createdAt).toLocaleDateString("en-GB")}</Text>
        </Flex>
        <Flex align={"center"} gap={"3"}>
          <Status status={status} />
          <Badge size={"2"} className="uppercase" color={priorityColor}>
            {priority}
          </Badge>
        </Flex>
      </Box>
    </Link>
  );
};

export default IssueCard;
