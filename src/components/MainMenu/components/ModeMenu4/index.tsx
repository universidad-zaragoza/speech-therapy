/************************************************************************************************************
 *                                                                                                          *
 * File: ModeMenuView.tsx                                                                                   *
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
interface ModeMenuViewProps {
  handleNextButtonClick: any;
  handlePreviousButtonClick: any;
}

/**
 * View with application's progress
 *
 * @returns ModeMenuView
 */
const ModeMenuView: React.FC<ModeMenuViewProps> = (
  props: ModeMenuViewProps
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
      label: "Modo imagen",
    },
    {
      label: "Modo vídeo",
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
      id: "next",
      path: "/mainMenu",
      label: "Siguiente",
      onClick: handleNextButtonClick,
    },
  ];

  return (
    <MenuView title={"4.- MODO"} navLinks={navLinks} buttons={menuButtons}>
      <OptionsView variableId="mode-id" items={optionsItems} />
    </MenuView>
  );
};

export default ModeMenuView;
