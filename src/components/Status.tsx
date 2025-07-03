import { Status as StatusType } from "../types/status";
import { Flex, Text } from "@radix-ui/themes";
import { getStatusColor } from "../lib/getColor";

const Status = ({ status }: { status: StatusType }) => {
  const color = getStatusColor(status);

  // console.log(color);

  return (
    <Flex align="center" gap="2">
      <div
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: color }}
      />
      <Text size={"2"} weight={"medium"} className="uppercase">
        {status}
      </Text>
    </Flex>
  );
};

export default Status;
