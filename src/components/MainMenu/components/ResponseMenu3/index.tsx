/************************************************************************************************************
 *                                                                                                          *
 * File: ResponseMenuView.tsx                                                                               *
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
interface ResponseMenuViewProps {
  handleNextButtonClick: any;
  handlePreviousButtonClick: any;
}

/**
 * View with application's progress
 *
 * @returns ResponseMenuView
 */
const ResponseMenuView: React.FC<ResponseMenuViewProps> = (
  props: ResponseMenuViewProps
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
      label: "Respuesta en texto",
    },
    {
      label: "Respuesta sobre imagen",
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
    <MenuView title={"3.- RESPUESTA"} navLinks={navLinks} buttons={menuButtons}>
      <OptionsView variableId="algorithm-id" items={optionsItems} />
    </MenuView>
  );
};

export default ResponseMenuView;
