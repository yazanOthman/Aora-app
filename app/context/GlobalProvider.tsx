import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { getCurrentUser } from "@/lib/appwrite";

interface Props {
  children?: ReactNode;
}

const GlobalContext = createContext({});

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [use, setUser] = useState<any>(null); // replace any with actual user type
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((resp) => {
        if (resp) {
          setIsLoggedIn(true);
          setUser(resp);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => [setIsLoading(false)]);
  }, []);

  const contextValue = {
    isLoggedIn,
    setIsLoggedIn,
    use,
    setUser,
    isLoading,
    setIsLoading,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
