import { Status as StatusType } from "../types/status";
import { Box, Flex, Text } from "@radix-ui/themes";
import { getStatusColor } from "../lib/getColor";

const Status = ({ status }: { status: StatusType }) => {
  const color = getStatusColor(status);

  return (
    <Flex align="center" gap="2">
      <div className={`w-3 h-3 bg-${color}-500 rounded-full`}></div>
      <Text size={"2"}>{status}</Text>
    </Flex>
  );
};

export default Status;
