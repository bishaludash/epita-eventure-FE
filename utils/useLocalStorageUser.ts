import { useState, useEffect } from "react";

const useLocalStorageUser = () => {
  // State to store the user data
  const [user, setUser] = useState(() => {
    // Get the initial value from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser !== "undefined" && storedUser !== null) {
      return JSON.parse(storedUser);
    } else {
      return null;
    }
  });

  // Function to update the user data in both state and localStorage
  const updateUser = (newUser: any) => {
    setUser(newUser);
    if (newUser) {
      localStorage.setItem("user", JSON.stringify(newUser));
    } else {
      localStorage.removeItem("user");
    }
  };

  // Listen for changes to localStorage (e.g., across tabs)
  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return [user, updateUser] as const;
};

export default useLocalStorageUser;
