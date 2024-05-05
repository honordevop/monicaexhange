import PageHeader from "@/components/PageHeader";
import PrivacyCard from "@/components/PrivacyCard";
import { policies } from "@/utils/store";
import React from "react";

const Privacy = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <PageHeader title="Privacy" />

      <div className="container my-20">
        <PrivacyCard data={policies[0]} />
        <PrivacyCard data={policies[1]} />
        <PrivacyCard data={policies[2]} />
        <PrivacyCard data={policies[3]} />
        <PrivacyCard data={policies[4]} />
        <PrivacyCard data={policies[5]} />
        {/* <PrivacyCard data={policies[7]} /> */}
      </div>
    </div>
  );
};

export default Privacy;
