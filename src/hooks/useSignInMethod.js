import { useHistory, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import useFirebase from "./useFirebase";

const useSingInMethod = () => {
  const { googleSignIn, setIsLoading, user } = useFirebase();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const history = useHistory();

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    googleSignIn()
      .then((result) => {
        Swal.fire("Sign In successfully", result.user.email);
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
