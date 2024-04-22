import { useDispatch } from "react-redux";
import {
  setTask,
  setMode,
  setSource,
  setResponseMode,
  setAlgorithm,
} from "../../redux/slices/facialModuleSlice";
import { setIsOptionChecked } from "../../redux/slices/menuSlice";

const useOptionsController = () => {
  // Custom and React Hooks
  const dispatch = useDispatch();

  const handleOptionChange = (event: any, id: any) => {
    setOptionIsChecked();

    switch (id) {
      case "task-id":
        setTaskVariable(event.target.value);
        break;
      case "mode-id":
        setModeVariable(event.target.value);
        break;
      case "source-id":
        setSourceVariable(event.target.value);
        break;
      case "response-id":
        setResponseVariable(event.target.value);
        break;
      case "algorithm-id":
        setAlgorithmVariable(event.target.value);
        break;
    }
  };

  const setTaskVariable = (_task: string) => {
    dispatch(setTask(_task));
  };

  const setModeVariable = (_mode: string) => {
    dispatch(setMode(_mode));
  };

  const setSourceVariable = (_source: string) => {
    dispatch(setSource(_source));
  };

  const setResponseVariable = (_response: string) => {
    dispatch(setResponseMode(_response));
  };

  const setAlgorithmVariable = (_algorithm: string) => {
    dispatch(setAlgorithm(_algorithm));
  };

  const setOptionIsChecked = () => {
    dispatch(setIsOptionChecked(true));
  };

  const setOptionIsNotChecked = () => {
    dispatch(setIsOptionChecked(false));
  };

  return { handleOptionChange };
};

export default useOptionsController;
