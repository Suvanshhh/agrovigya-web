import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";

const componentMap = {
  agniva: lazy(() => import("../AboutEveryone/Agniva/Agniva")),
  aishwarya: lazy(() => import("../AboutEveryone/Aishwarya/Aishwarya")),
  anuja: lazy(() => import("../AboutEveryone/Anuja/Anuja")),
  ashok: lazy(() => import("../AboutEveryone/Ashok/Ashok")),
  isha: lazy(() => import("../AboutEveryone/Isha/Isha")),
  shivam: lazy(() => import("../AboutEveryone/Shivam/Shivam")),
  shrut: lazy(() => import("../AboutEveryone/Shrut/Shrut")),
  shubhra: lazy(() => import("../AboutEveryone/Shubhra/Shubhra")),
  siya: lazy(() => import("../AboutEveryone/Siya/Siya")),
  sunita: lazy(() => import("../AboutEveryone/Sunita/Sunita")),
  suvansh: lazy(() => import("../AboutEveryone/Suvansh/Suvansh")),
};

const DynamicProfile = () => {
  const { name } = useParams();
  // Extract first name ignoring prefixes like "Dr." and last names
  const firstName = name
    .toLowerCase()
    .replace(/(?:dr|adv)\.?\s*/gi, "") // remove "dr." and "adv." prefixes
    .split(" ")[0]; // take first word as key

  const ProfileComponent = componentMap[firstName];

  if (!ProfileComponent) {
    return <div>Profile not found.</div>;
  }

  return (
    <Suspense fallback={<div>Loading profile...</div>}>
      <ProfileComponent />
    </Suspense>
  );
};

export default DynamicProfile;
