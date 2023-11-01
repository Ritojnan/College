import { useNavigate } from "react-router-dom";
import LoadingScreen from '../components/LoadingScreen'
import { useEffect } from "react";

const Home = () => {

  const navigate = useNavigate();
  useEffect(() => {
    const authtoken = localStorage.getItem('authtoken'); // Replace 'yourKey' with the key of the item you want to retrieve
    console.log(authtoken)

if (authtoken == null) {
  // The item exists in local storage
  navigate("/auth");
} 
else{
  navigate("/chat")
}
  }, []);


  return (<></>
  );
};

export default Home;
