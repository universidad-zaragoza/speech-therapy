/************************************************************************************************************
 *                                                                                                          *
 * File: UploadImages.tsx                                                                                   *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: View with application's data loading progress                                               *
 * Version: 1.0                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { NavLinkProps } from "../../../../../../../shared/components/Navbar";
import MenuView, {
  ButtonProps,
} from "../../../../../../../shared/components/Menu";
import { Form } from "react-bootstrap";
/**
 * Menu properties
 */
interface UploadImagesProps {
  handleNextButtonClick: any;
  handlePreviousButtonClick: any;
}

/**
 * View with application's progress
 *
 * @returns ImageSourceMenuView
 */
const UploadImagesView: React.FC<UploadImagesProps> = (
  props: UploadImagesProps
) => {
  /* Props of this View  */
  const { handleNextButtonClick, handlePreviousButtonClick } = props;

  const navLinks: NavLinkProps[] = [
    {
      label: "Salir",
      href: "/",
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
      title={"6- SUBIR IMÁGENES"}
      navLinks={navLinks}
      buttons={menuButtons}
    >
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Seleccione una o varias imágenes en formato jpg</Form.Label>
        <Form.Control
          type="file"
          multiple
          style={{ borderColor: "#000000", color: "#000000" }}
        />
      </Form.Group>
    </MenuView>
  );
};

export default UploadImagesView;
