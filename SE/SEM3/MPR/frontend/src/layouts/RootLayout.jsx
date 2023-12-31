import { Outlet, ScrollRestoration } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function RootLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    //get current route path name from react router dom
    const path = window.location.pathname;
    //check path name has register in end
    if (path.endsWith("/register")) {return}

    const authtoken = localStorage.getItem('authtoken'); // Replace 'yourKey' with the key of the item you want to retrieve

if (authtoken == null) {
  // The item exists in local storage
  navigate("/auth");
} 
  }, []);

  return (
    <div className="root-layout">
      <ScrollRestoration />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
