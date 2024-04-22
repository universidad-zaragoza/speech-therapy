/************************************************************************************************************
 *                                                                                                          *
 * File: ImageSourceMenuView.tsx                                                                            *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: View with application's data loading progress                                               *
 * Version: 1.0                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { NavLinkProps } from "../../../../../shared/components/Navbar";
import MenuView, { ButtonProps } from "../../../../../shared/components/Menu";
import OptionsView, {
  FormCheckItemProps,
} from "../../../../../shared/components/Options";

/**
 * Menu properties
 */
interface ImageSourceMenuViewProps {
  handleNextButtonClick: any;
  handlePreviousButtonClick: any;
}

/**
 * View with application's progress
 *
 * @returns ImageSourceMenuView
 */
const ImageSourceMenuView: React.FC<ImageSourceMenuViewProps> = (
  props: ImageSourceMenuViewProps
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
      label: "Subir imágenes",
    },
    {
      label: "Tomar foto",
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
    <MenuView
      title={"3.- FUENTE IMAGEN"}
      navLinks={navLinks}
      buttons={menuButtons}
    >
      <OptionsView variableId="source-id" items={optionsItems} />
    </MenuView>
  );
};

export default ImageSourceMenuView;
