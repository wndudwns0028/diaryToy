import { UserInfoType } from "@/types/userType";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSession } from "next-auth/react";

interface UserContextProps {
  user?: UserInfoType;
  setUser: Dispatch<SetStateAction<UserInfoType>>;
}

const UserContext = createContext<UserContextProps>(undefined!);
export function UserProvider({ children }: any) {
  const [currentUser, setUser] = useState<UserInfoType>();
  const { data: session } = useSession();

  async function fetchUserInfo() {
    if (session && session.user) {
      const res = await fetch(`/api/auth/userInfo/${session.user.email}`);
      const data = await res.json();
      const userInfo = {
        _id: data._id,
        email: data.email,
        password: data.password,
        rule: data.rule,
      };
      setUser(userInfo);
    }
  }
  useEffect(() => {
    if (session && session.user) {
      fetchUserInfo();
    }
  }, [session]);

  return (
    <UserContext.Provider
      value={{
        user: currentUser,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext(): UserContextProps {
  const context = useContext(UserContext);

  if (typeof context === "undefined") {
    throw new Error(
      "useUserContext should be used within the UserContext provider!"
    );
  }

  return context;
}
