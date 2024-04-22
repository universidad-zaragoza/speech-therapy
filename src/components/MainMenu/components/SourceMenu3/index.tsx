/************************************************************************************************************
 *                                                                                                          *
 * File: SourceMenuView.tsx                                                                                 *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: View with application's data loading progress                                               *
 * Version: 1.0                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { useSelector } from "react-redux";
import { FacialModuleRootState } from "../../../../shared/redux/slices/facialModuleSlice";
import { ReactNode } from "react";
import ImageSourceMenuView from "./Image";
import VideoSourceMenuView from "./Video";

/**
 * Menu properties
 */
interface SourceMenuViewProps {
  handleNextButtonClick: any;
  handlePreviousButtonClick: any;
}

/**
 * View with application's progress
 *
 * @returns SourceMenuView
 */
const SourceMenuView: React.FC<SourceMenuViewProps> = (
  props: SourceMenuViewProps
) => {
  let viewContent: ReactNode;

  /* Props of this View  */
  const { handleNextButtonClick, handlePreviousButtonClick } = props;

  const facialModuleMode = useSelector(
    (state: FacialModuleRootState) => state.facialModuleState.variables.mode
  );

  console.log(
    "+++ Inside SourceMenuView - facialModuleMode => " + facialModuleMode
  );

  switch (facialModuleMode) {
    case "Modo imagen":
      viewContent = (
        <ImageSourceMenuView
          handleNextButtonClick={handleNextButtonClick}
          handlePreviousButtonClick={handlePreviousButtonClick}
        />
      );
      break;
    case "Modo vídeo":
      viewContent = (
        <VideoSourceMenuView
          handleNextButtonClick={handleNextButtonClick}
          handlePreviousButtonClick={handlePreviousButtonClick}
        />
      );
      break;
    default:
      viewContent = null; // O alguna otra acción por defecto
  }

  return <div>{viewContent}</div>;
};

export default SourceMenuView;
