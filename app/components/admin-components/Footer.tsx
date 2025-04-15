import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";

export default async function Footer() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <>
      <div className={"flex items-center justify-center mb-5"}>
        <p className="text-sm leading-5 text-gray-500 text-center ">
          Logged in as {user.given_name} {user.family_name} - Email:{" "}
          {user.email}
        </p>
      </div>
    </>
  );
}
