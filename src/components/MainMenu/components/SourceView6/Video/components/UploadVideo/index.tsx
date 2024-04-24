/************************************************************************************************************
 *                                                                                                          *
 * File: UploadVideo.tsx                                                                                    *
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
interface UploadVideoProps {
  handleNextButtonClick: any;
  handlePreviousButtonClick: any;
}

/**
 * View with application's progress
 *
 * @returns ImageSourceMenuView
 */
const UploadVideoView: React.FC<UploadVideoProps> = (
  props: UploadVideoProps
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
      title={"6- SUBIR VÍDEO"}
      navLinks={navLinks}
      buttons={menuButtons}
    >
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Seleccione un vídeo en formato MP4</Form.Label>
        <Form.Control
          type="file"
          style={{ borderColor: "#000000", color: "#000000" }}
        />
      </Form.Group>
    </MenuView>
  );
};

export default UploadVideoView;
