"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import RcInput from "../shared/FormItems/RcInput";
import RcTextArea from "../shared/FormItems/RcTextArea";
import { Button } from "../ui/button";
import { Form } from "../ui/form";

const formSchema = z.object({
  jobTitle: z.string().min(2, { message: "Job Title is too short." }),
  companyName: z.string().min(2, { message: "Company Name is too short." }),
  jobDescription: z
    .string()
    .min(20, { message: "Job Description is too short." }),
});

const GenerateCoverLetterInputForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobTitle: "",
      companyName: "",
      jobDescription: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("🚀 ~ onSubmit ~ values:", values);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const response = await fetch(
      "http://localhost:5000/api/v1/generate-cover-letter",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    );
    console.log("🚀 ~ onSubmit ~ response:", response);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <RcInput
          placeholder="Ex: Full Stack MERN Developer"
          control={form.control}
          name="jobTitle"
          label="Job Title"
        />
        <RcInput
          control={form.control}
          name="companyName"
          label="Company Name"
          placeholder="Ex: Spring Rain"
        />
        <RcTextArea
          control={form.control}
          name="jobDescription"
          label="Job Description"
          placeholder="Paste the job description here..."
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default GenerateCoverLetterInputForm;
