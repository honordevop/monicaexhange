import PageHeader from "@/components/PageHeader";
import TestimonyCard from "@/components/TestimonyCard";
import { testimonials } from "@/utils/store";
import React from "react";

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <PageHeader title="Testimonials" />

      <div className="container my-20">
        <TestimonyCard data={testimonials} />
      </div>
    </div>
  );
};

export default Testimonials;
