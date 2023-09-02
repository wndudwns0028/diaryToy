"use client";
import Link from "next/link";
import CustomButton from "../BootStrap/CustomButton";
import UserLoggedIn from "./UserLoggedIn";
import { useSession } from "next-auth/react";

export default function AccountBox() {
  const { data: session } = useSession();
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
