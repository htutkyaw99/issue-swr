import { ArrowDownIcon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  DropdownMenu,
  Flex,
  RadioGroup,
  Text,
} from "@radix-ui/themes";

import { Sort } from "../types/sort";
import useDateSortStore from "../stores/dateStore";
import { useState } from "react";

const Sorting = () => {
  const { dateSort, setDateSort, reset: dateReset } = useDateSortStore();

  const [pendingDateSort, setPendingDateSort] = useState<Sort>(dateSort);

  const handleSort = () => {
    setDateSort(pendingDateSort);
  };

  const handleReset = () => {
    setPendingDateSort("asc");
    dateReset();
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="outline">
          <ArrowDownIcon /> Sort by
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <Box p="1">
          <Text weight="medium">Sort by</Text>
        </Box>
        <DropdownMenu.Separator />

        <DropdownMenu.Label>Date</DropdownMenu.Label>
        <Flex px="3" py="2">
          <RadioGroup.Root
            onValueChange={(value: Sort) => setPendingDateSort(value)}
            value={pendingDateSort}
            name="date-sort"
          >
            <Flex direction="column" gap="2">
              <RadioGroup.Item value="asc">Ascending</RadioGroup.Item>
              <RadioGroup.Item value="desc">Descending</RadioGroup.Item>
            </Flex>
          </RadioGroup.Root>
        </Flex>

        <DropdownMenu.Separator />
        <Flex align="center" gap="5" mt="2">
          <Button variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="solid" onClick={handleSort}>
            Apply Now
          </Button>
        </Flex>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Sorting;
