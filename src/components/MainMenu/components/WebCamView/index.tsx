/************************************************************************************************************
 *                                                                                                          *
 * File: WebCamView.tsx                                                                                     *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: View with application's data loading progress                                               *
 * Version: 1.0                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { useSelector } from "react-redux";
import { FacialModuleRootState } from "../../../../shared/redux/slices/facialModuleSlice";
import { ReactNode } from "react";

/**
 * Menu properties
 */
interface WebCamViewProps {
  handleNextButtonClick: any;
  handlePreviousButtonClick: any;
}

/**
 * View with application's progress
 *
 * @returns WebCamView
 */
const WebCamView: React.FC<WebCamViewProps> = (props: WebCamViewProps) => {
  let viewContent: ReactNode;

  /* Props of this View  */
  const { handleNextButtonClick, handlePreviousButtonClick } = props;

  const source = useSelector(
    (state: FacialModuleRootState) => state.facialModuleState.variables.source
  );

  console.log("+++ Inside SourceMenuView - source => " + source);

  switch (source) {
    default:
      viewContent = null; // O alguna otra acción por defecto
  }

  return <div>{viewContent}</div>;
};

export default WebCamView;
