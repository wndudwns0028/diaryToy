"use client";
import Link from "next/link";
import CustomButton from "../BootStrap/CustomButton";
import { useSession } from "next-auth/react";
import UserLoggedIn from "./UserLoggedIn";
import { useEffect, useState } from "react";
import { UserInfoType } from "@/types/userType";

export default function AccountBox() {
  const { data: session } = useSession();

  return (
    <>
      {session && session.user ? (
        <UserLoggedIn name={`${session.user.name}`} />
      ) : (
        <Link href={"/login"}>
          <CustomButton variant={"dark"} btnText={"로그인"} />
        </Link>
      )}
    </>
  );
}
