import { createContext, useState, useEffect } from "react";
// Create a context
export const NameContxt = createContext();

// Create a provider component
export const NameProvider = ({ children }) => {
  const [name, setName] = useState("Guest");

  useEffect(() => {
    const storedDb = sessionStorage.getItem("currentUser");
    if (storedDb) {
      const db = JSON.parse(storedDb);
      console.log(db);
      console.log(db.email);
      setName(db.email || "Guest");
    }
  }, []);

  return <NameContxt.Provider value={name}>{children}</NameContxt.Provider>;
};
