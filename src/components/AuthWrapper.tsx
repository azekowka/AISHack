import { useRouter } from "next/router";
import { useEffect } from "react";
import { useBoundStore } from "~/hooks/useBoundStore";

interface AuthWrapperProps {
  children: React.ReactNode;
}

const publicRoutes = ["/", "/register", "/forgot-password"];

export const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const router = useRouter();
  const loggedIn = useBoundStore((x) => x.loggedIn);

  useEffect(() => {
    const isPublicRoute = publicRoutes.includes(router.pathname);
    
    if (!loggedIn && !isPublicRoute) {
      void router.push("/");
    } else if (loggedIn && isPublicRoute) {
      void router.push("/learn");
    }
  }, [loggedIn, router]);

  if (!loggedIn && !publicRoutes.includes(router.pathname)) {
    return null;
  }

  return <>{children}</>;
}; 