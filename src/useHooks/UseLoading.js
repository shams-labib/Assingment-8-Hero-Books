import { useEffect, useState } from "react";
import { useNavigation } from "react-router";


const useLoading = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (navigation.state === "loading") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [navigation.state]);

  return loading;
};

export default useLoading;
