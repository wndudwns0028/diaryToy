"use client";
import Link from "next/link";
import CustomButton from "../BootStrap/CustomButton";
import { useSession } from "next-auth/react";
import UserLoggedIn from "./UserLoggedIn";
import { useEffect, useState } from "react";

export default function AccountBox() {
  const { data: session } = useSession();

  async function fetchUserInfo(email: string) {
    if (email !== undefined) {
      const res = await fetch(`/api/auth/userInfo/${email}`);
      console.log(res);
    }
  }
  useEffect(() => {
    if (session) {
      fetchUserInfo(session.user.email);
    }
  }, [session]);
  return (
    <>
      {session ? (
        <UserLoggedIn name={`${session?.user?.name}`} />
      ) : (
        <Link href={"/login"}>
          <CustomButton variant={"dark"} btnText={"로그인"} />
        </Link>
      )}
    </>
  );
}
