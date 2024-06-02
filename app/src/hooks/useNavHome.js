import { useNavigate } from "react-router-dom";

// Custom hook to navigate to home page
const useNavigateHome = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  return navigateHome;
};

export default useNavigateHome;
