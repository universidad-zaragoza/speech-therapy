/************************************************************************************************************
 *                                                                                                          *
 * File: MainMenuView.tsx                                                                                   *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: View with application's data loading progress                                               *
 * Version: 1.0                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import useMainMenuController from "./useMainMenuController";
import TaskMenuView from "./components/TaskMenu1";
import ModeMenuView from "./components/ModeMenu2";
import ResponseMenuView from "./components/ResponseMenu4";
import React, { ReactNode } from "react";
import SourceMenuView from "./components/SourceMenu3";
import AlgorithmMenuView from "./components/AlgorithmMenu5";

/**
 * View with application's progress
 *
 * @returns MainMenuView
 */
const MainMenuView: React.FC = () => {
  let viewContent: ReactNode;

  // Controller of this view
  const { menuNumber, handleNextButtonClick, handlePreviousButtonClick } =
    useMainMenuController();

  switch (menuNumber) {
    case 1:
      viewContent = (
        <TaskMenuView handleNextButtonClick={handleNextButtonClick} />
      );
      break;
    case 2:
      viewContent = (
        <ModeMenuView
          handleNextButtonClick={handleNextButtonClick}
          handlePreviousButtonClick={handlePreviousButtonClick}
        />
      );
      break;
    case 3:
      viewContent = (
        <SourceMenuView
          handleNextButtonClick={handleNextButtonClick}
          handlePreviousButtonClick={handlePreviousButtonClick}
        />
      );
      break;
    case 4:
      viewContent = (
        <ResponseMenuView
          handleNextButtonClick={handleNextButtonClick}
          handlePreviousButtonClick={handlePreviousButtonClick}
        />
      );
      break;
    case 5:
      viewContent = (
        <AlgorithmMenuView
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

export default MainMenuView;
