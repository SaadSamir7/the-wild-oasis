import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-50);
`;

function ProtectedRoute({ children }) {
  // 1- load authemticated user
  const { isAuthenticated, isPending } = useUser();
  const navigate = useNavigate();

  // 2- if not authenticated, redirect to login page
  useEffect(() => {
    if (!isPending && !isAuthenticated) {
      navigate("/login");
    }
  }, [isPending, isAuthenticated, navigate]);

  // 3- while loading, show a loading spinner
  if (isPending) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  }

  // 4- if authenticated, render the app
  if (isAuthenticated) {
    return children;
  }
}

export default ProtectedRoute;
