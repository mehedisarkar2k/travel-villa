import { useHistory, useLocation } from "react-router-dom";
import useFirebase from "./useFirebase";

const useSingInMethod = () => {
  const { googleSignIn, setIsLoading, user } = useFirebase();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const history = useHistory();

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    googleSignIn()
      .then(() => {
        history.push(redirect_uri);
      })
      .catch((error) => {
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
        user?.email
          ? history.push(redirect_uri)
          : history.push(location.state?.from);
      });
  };

  return { handleGoogleSignIn };
};

export default useSingInMethod;
