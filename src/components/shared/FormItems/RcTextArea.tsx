"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";

type TRcTextAreaProps = {
  label: string;
  placeholder?: string;
  name: string;
  control: Control<any>;
};

const RcTextArea = ({
  name,
  label,

  placeholder,
  control,
}: TRcTextAreaProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label ? label : name}</FormLabel>
          <FormControl>
            <Textarea placeholder={placeholder ? placeholder : ""} {...field} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RcTextArea;
