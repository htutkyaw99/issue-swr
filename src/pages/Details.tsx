import { Badge, Box, Button, Flex, IconButton, Text } from "@radix-ui/themes";
import { useNavigate, useParams } from "react-router-dom";
import { useIssue } from "../lib/queries";
import Status from "../components/Status";
import { getPriorityColor } from "../lib/getColor";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

const Details = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data: issue, isLoading, error } = useIssue(Number(id));

  const priorityColor = getPriorityColor(issue?.priority || "low");

  const handleGoBack = () => {
    navigate(-1);
  };

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred</div>;

  return (
    <Flex direction={"column"} gap={"4"}>
      <IconButton onClick={handleGoBack} variant="soft" mb={"3"}>
        <ArrowLeftIcon width="18" height="18" />
      </IconButton>

      <Flex align={"center"} justify={"between"}>
        <Flex align={"center"} gap={"3"}>
          <Badge size={"2"} className="uppercase" color={priorityColor}>
            {issue?.priority}
          </Badge>
          <Status status={issue?.status || "open"} />
        </Flex>
        <Text>
          {new Date(issue?.createdAt || "").toLocaleDateString("en-GB")}
        </Text>
      </Flex>

      <Text weight={"bold"} size={"5"}>
        {issue?.title}
      </Text>

      <Text size={"3"}>{issue?.description}</Text>
      <Flex mt={"5"} justify={"end"} align={"center"} gap={"3"}>
        <Button variant="soft">Edit</Button>
        <Button variant="soft" color="red">
          Delete
        </Button>
      </Flex>
    </Flex>
  );
};

export default Details;
