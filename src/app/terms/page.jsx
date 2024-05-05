import PageHeader from "@/components/PageHeader";
import TermsCard from "@/components/TermsCard";
import { terms } from "@/utils/store";
import React from "react";

const Terms = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <PageHeader title="Terms and Conditions" />

      <div className="container my-20">
        <TermsCard data={terms[0]} />
        <TermsCard data={terms[1]} />
        <TermsCard data={terms[2]} />
        <TermsCard data={terms[3]} />
        <TermsCard data={terms[4]} />
        <TermsCard data={terms[5]} />
        <TermsCard data={terms[6]} />
        <TermsCard data={terms[7]} />
        <TermsCard data={terms[8]} />
      </div>
    </div>
  );
};

export default Terms;
