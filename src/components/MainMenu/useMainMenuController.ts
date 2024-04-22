import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setIsOptionChecked } from "../../shared/redux/slices/menuSlice";
import axios from "axios";

const useMainMenuController = () => {
  const [menuNumber, setMenuNumber] = useState<number>(1);
  const [data, setData] = useState("");

  // Custom and React Hooks
  const dispatch = useDispatch();

  const handleNextButtonClick = () => {
    setMenuNumber((prevMenuNumber) => prevMenuNumber + 1);
    setOptionIsNotChecked();
  };

  const handlePreviousButtonClick = () => {
    setMenuNumber((prevMenuNumber) => prevMenuNumber - 1);
    setOptionIsNotChecked();
  };

  const setOptionIsNotChecked = () => {
    dispatch(setIsOptionChecked(false));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://speech-therapy-server.onrender.com/api/data"
        );
        setData(response.data.message);
        console.log(
          "Inside useEffect received data => " + response.data.message
        );
      } catch (error) {
        console.error("Error al obtener datos del servidor:", error);
      }
    };

    fetchData();
  }, []);

  return {
    menuNumber,
    handleNextButtonClick,
    handlePreviousButtonClick,
  };
};

export default useMainMenuController;
