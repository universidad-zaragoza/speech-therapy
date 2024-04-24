import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setIsOptionChecked } from "../../shared/redux/slices/menuSlice";
import axios from "axios";
import { AlexaContext } from "../../App";
import socketIOClient from "socket.io-client";

const ENDPOINT = "https://192.168.1.109";
const socket = socketIOClient(ENDPOINT);

const useMainMenuController = () => {
  const [menuNumber, setMenuNumber] = useState<number>(1);
  const [data, setData] = useState("");

  const { printDebug } = useContext(AlexaContext);

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

  const tomarFoto = () => {
    socket.emit("tomarFoto", (error: any) => {
      if (error) {
        console.error(
          "Error al emitir el evento 'tomarFoto':",
          JSON.stringify(error)
        );
      } else {
        console.log("Evento 'tomarFoto' emitido correctamente");
      }
    });
  };

  useEffect(() => {
    console.log("Sending image to socket io...");
    printDebug("Sending image to socket io...");
    //tomarFoto();
  }, []);

  useEffect(() => {
    /*
    socket.on("fotoLista", (imageData) => {
      console.log("Received image by socket => " + imageData);
      printDebug("Received image by socket => " + imageData);
    });
    */
  }, []);

  return {
    menuNumber,
    handleNextButtonClick,
    handlePreviousButtonClick,
  };
};

export default useMainMenuController;
