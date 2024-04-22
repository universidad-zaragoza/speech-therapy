/************************************************************************************************************
 *                                                                                                          *
 * File: AlgorithmMenuView.tsx                                                                              *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: View with application's data loading progress                                               *
 * Version: 1.0                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { NavLinkProps } from "../../../../shared/components/Navbar";
import MenuView, { ButtonProps } from "../../../../shared/components/Menu";
import OptionsView, {
  FormCheckItemProps,
} from "../../../../shared/components/Options";

/**
 * Menu properties
 */
interface AlgorithmMenuViewProps {
  handleNextButtonClick: any;
  handlePreviousButtonClick: any;
}

/**
 * View with application's progress
 *
 * @returns AlgorithmMenuView
 */
const AlgorithmMenuView: React.FC<AlgorithmMenuViewProps> = (
  props: AlgorithmMenuViewProps
) => {
  /* Props of this View  */
  const { handleNextButtonClick, handlePreviousButtonClick } = props;

  const navLinks: NavLinkProps[] = [
    {
      label: "Salir",
      href: "/",
    },
  ];

  const optionsItems: FormCheckItemProps[] = [
    {
      label: "YOLOv8",
    },
    {
      label: "InsightFace",
    },
  ];

  const menuButtons: ButtonProps[] = [
    {
      id: "previous",
      path: "/mainMenu",
      label: "Anterior",
      onClick: handlePreviousButtonClick,
    },
    {
      id: "finish",
      path: "/mainMenu",
      label: "Acabar",
      onClick: handleNextButtonClick,
    },
  ];

  return (
    <MenuView title={"5.- ALGORITMO"} navLinks={navLinks} buttons={menuButtons}>
      <OptionsView variableId="response-id" items={optionsItems} />
    </MenuView>
  );
};

export default AlgorithmMenuView;
