"use client";

import GenerateCoverLetterInputForm from "@/components/Forms/GenerateCoverLetterInputForm";

const GenerateCoverLetter = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Generate your cover letter</h1>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-3 ">
        {/* input section  */}
        <section className="mt-10">
          <GenerateCoverLetterInputForm />
        </section>
        {/* result section  */}
        <section>result section</section>
      </div>
    </div>
  );
};

export default GenerateCoverLetter;
