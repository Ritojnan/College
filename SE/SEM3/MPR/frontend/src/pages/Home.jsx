import { useNavigate } from "react-router-dom";
import LoadingScreen from '../components/LoadingScreen'
import { useEffect } from "react";

const Home = () => {

  const navigate = useNavigate();
  useEffect(() => {
    if (false) {
      navigate("/auth");
    }
    else{
      navigate("/chat")
    }
  }, []);
  return (
<></>  );
};

export default Home;
