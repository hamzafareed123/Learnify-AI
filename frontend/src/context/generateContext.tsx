import { createContext } from "react";

interface AppContextType {
  topic: string;
  setTopic: (topic: string) => void;
  output: string;
  setOutput: (output: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string;
  setError: (error: string) => void;
}

const AppContext = createContext<AppContextType>({
  topic: "",
  setTopic: () => {},
  output: "",
  setOutput: () => {},
  loading: false,
  setLoading: () => {},
  error: "",
  setError: () => {},
});

export default AppContext;
