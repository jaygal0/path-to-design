"use client";

import { Heading } from "../../../../components/global/Heading";
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [answers, setAnswers] = useState([{ answer: "" }]);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index].answer = value;
    setAnswers(newAnswers);
  };

  const addAnswerField = () => {
    setAnswers([...answers, { answer: "" }]);
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/designers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        designerData: formData,
        answersData: answers,
      }),
    });

    if (res.ok) alert("Form submitted successfully!");
  };

  return (
    <div className="col-span-full col-start-1 row-span-full row-start-1 flex min-h-screen flex-col justify-start py-64 md:col-span-6 md:col-start-2 xl:col-span-6 xl:col-start-4 xl:pt-72">
      <Heading
        heading="Get featured on Path to Design"
        desc="Submit your story to get featured in front of potential employers, professionals and aspiring designers."
      />
      <form className="flex flex-col gap-8"></form>
    </div>
  );
}
