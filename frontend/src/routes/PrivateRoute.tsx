import { PropsWithChildren } from "react";
import { RouteProps } from "react-router";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
  redirectPath: string;
  children: JSX.Element;
}

export const PrivateRoute = ({
  redirectPath,
  children,
}: PropsWithChildren<PrivateRouteProps>): JSX.Element => {
  const auth = localStorage.getItem("access_token");
  return auth ? children : <Navigate to={redirectPath} />;
};
