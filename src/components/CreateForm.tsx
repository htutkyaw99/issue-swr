import axios from "axios";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  Button,
  Dialog,
  Flex,
  Select,
  Text,
  TextField,
} from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const formSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().min(3, "Description is required"),
  priority: z.enum(["low", "medium", "high"], {
    required_error: "Priority is required",
  }),
});

type FormInputs = z.infer<typeof formSchema>;

const CreateForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      priority: "medium",
    },
  });

  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormInputs) => {
    setIsSubmitting(true);
    try {
      await axios.post("http://localhost:3000/issues", {
        ...data,
        status: "open",
        createdAt: new Date().toISOString(),
      });

      reset();
      setOpen(false);
    } catch (error) {
      console.error("Error creating task:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button color="indigo" variant="soft">
          <PlusIcon height="16" width="16" />
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Add new task</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Enter the title and description carefully.
        </Dialog.Description>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Title
            </Text>
            <TextField.Root
              mb="2"
              placeholder="Enter your title"
              {...register("title")}
            />
            {errors.title && (
              <Text color="red" size="1">
                {errors.title.message}
              </Text>
            )}
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Description
            </Text>
            <TextField.Root
              placeholder="Enter your description"
              {...register("description")}
            />
            {errors.description && (
              <Text color="red" size="1">
                {errors.description.message}
              </Text>
            )}
          </label>

          <label>
            <Text as="div" size="2" mb="1" mt="3" weight="bold">
              Priority
            </Text>
            <Controller
              control={control}
              name="priority"
              render={({ field }) => (
                <Select.Root onValueChange={field.onChange} value={field.value}>
                  <Select.Trigger />
                  <Select.Content>
                    <Select.Item value="low">Low</Select.Item>
                    <Select.Item value="medium">Medium</Select.Item>
                    <Select.Item value="high">High</Select.Item>
                  </Select.Content>
                </Select.Root>
              )}
            />
            {errors.priority && (
              <Text color="red" size="1">
                {errors.priority.message}
              </Text>
            )}
          </label>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray" type="button">
                Cancel
              </Button>
            </Dialog.Close>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create"}
            </Button>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CreateForm;
