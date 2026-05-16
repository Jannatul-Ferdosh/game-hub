import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "./NavBar";
import { Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <NavBar />
      <Heading>Oppss.....</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This page does not exist"
          : "Unexpected Error"}
      </Text>
    </div>
  );
};

export default ErrorPage;
