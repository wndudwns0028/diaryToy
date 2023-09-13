"use client";
import { useEffect } from "react";
import { useUserContext } from "../context/userContext";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const { user } = useUserContext();
  const router = useRouter();
  if (user && user.rule !== "admin") {
    alert("접근할 수 없는 경로입니다.");
    router.push("/");
  }
  return (
    user &&
    user.rule === "admin" && (
      <div style={{ width: "100%", height: "80vh", marginTop: "5%" }}>
        어드민 페이지
      </div>
    )
  );
}
