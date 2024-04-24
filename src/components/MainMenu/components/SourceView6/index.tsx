/************************************************************************************************************
 *                                                                                                          *
 * File: SourceView.tsx                                                                                     *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: View with application's data loading progress                                               *
 * Version: 1.0                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { useSelector } from "react-redux";
import { FacialModuleRootState } from "../../../../shared/redux/slices/facialModuleSlice";
import { ReactNode } from "react";
import UploadImagesView from "./Image/components/UploadImages";
import UploadVideoView from "./Video/components/UploadVideo";
import TakeImageView from "./Image/components/TakeImage";

/**
 * Menu properties
 */
interface SourceViewProps {
  handleNextButtonClick: any;
  handlePreviousButtonClick: any;
}

/**
 * View with application's progress
 *
 * @returns SourceView
 */
const SourceView: React.FC<SourceViewProps> = (props: SourceViewProps) => {
  let viewContent: ReactNode;

  /* Props of this View  */
  const { handleNextButtonClick, handlePreviousButtonClick } = props;

  const source = useSelector(
    (state: FacialModuleRootState) => state.facialModuleState.variables.source
  );

  console.log("+++ Inside SourceMenuView - source => " + source);

  switch (source) {
    case "Subir imágenes":
      viewContent = (
        <UploadImagesView
          handleNextButtonClick={handleNextButtonClick}
          handlePreviousButtonClick={handlePreviousButtonClick}
        />
      );
      break;
    case "Tomar foto":
      viewContent = (
        <TakeImageView
          handleNextButtonClick={handleNextButtonClick}
          handlePreviousButtonClick={handlePreviousButtonClick}
        />
      );
      break;
    case "Subir vídeo":
      viewContent = (
        <UploadVideoView
          handleNextButtonClick={handleNextButtonClick}
          handlePreviousButtonClick={handlePreviousButtonClick}
        />
      );
      break;
    case "Grabar vídeo":
      viewContent = (
        <UploadVideoView
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

export default SourceView;
