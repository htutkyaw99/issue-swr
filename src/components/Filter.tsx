import {
  Box,
  Button,
  DropdownMenu,
  Flex,
  RadioGroup,
  Text,
} from "@radix-ui/themes";
import { SliderIcon } from "@radix-ui/react-icons";
import { Sort } from "../types/sort";

const Filter = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="outline">
          <SliderIcon /> Filter
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <Box p={"1"}>
          <Text weight={"medium"}>Sort by</Text>
        </Box>
        <DropdownMenu.Separator />
        <DropdownMenu.Label>Date</DropdownMenu.Label>
        <Flex px="3" py="2">
          <RadioGroup.Root
            // onValueChange={(value: Sort) => handleDateSelect(value)}
            defaultValue="asc"
            name="date-sort"
          >
            <Flex direction="column" gap="2">
              <RadioGroup.Item value="asc">Ascending</RadioGroup.Item>
              <RadioGroup.Item value="desc">Descending</RadioGroup.Item>
            </Flex>
          </RadioGroup.Root>
        </Flex>
        <DropdownMenu.Separator />
        <DropdownMenu.Label>Priority</DropdownMenu.Label>
        <Flex px="3" py="2">
          <RadioGroup.Root
            // onValueChange={(value: Sort) => handlePrioritySelect(value)}
            defaultValue="asc"
            name="priority-sort"
          >
            <Flex direction="column" gap="2">
              <RadioGroup.Item value="asc">Ascending</RadioGroup.Item>
              <RadioGroup.Item value="desc">Descending</RadioGroup.Item>
            </Flex>
          </RadioGroup.Root>
        </Flex>
        <DropdownMenu.Separator />
        <Flex align={"center"} gap={"5"} mt={"2"}>
          <Button variant="outline">Reset</Button>
          <Button variant="solid">Apply Now</Button>
        </Flex>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Filter;
