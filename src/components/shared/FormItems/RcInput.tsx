"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";

type TRcInputProps = {
  label: string;
  placeholder?: string;
  name: string;
  type?: string;
  control: Control<any>;
};

const RcInput = ({
  name,
  label,
  type,
  placeholder,
  control,
}: TRcInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label ? label : name}</FormLabel>
          <FormControl>
            <Input
              type={type ? type : "text"}
              placeholder={placeholder ? placeholder : ""}
              {...field}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RcInput;
