/************************************************************************************************************
 *                                                                                                          *
 * File: TaskMenuView.tsx                                                                                   *
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
interface TaskMenuViewProps {
  handleNextButtonClick: any;
}

/**
 * View with application's progress
 *
 * @returns TaskMenuView
 */
const TaskMenuView: React.FC<TaskMenuViewProps> = (
  props: TaskMenuViewProps
) => {
  /* Props of this View  */
  const { handleNextButtonClick } = props;

  const navLinks: NavLinkProps[] = [
    {
      label: "Debug",
      href: "/debug",
    },
    {
      label: "Salir",
      href: "/",
    },
  ];

  const optionsItems: FormCheckItemProps[] = [
    {
      label: "Detectar la cara",
    },
    {
      label: "Detectar la persona",
    },
    {
      label: "Detectar puntos clave de la cara",
    },
    {
      label: "Detectar la expresión facial",
    },
    {
      label: "Detectar la edad y el género",
    },
    {
      label: "Reconocimiento facial",
    },
    {
      label: "Eliminar fondo",
    },
  ];

  const menuButtons: ButtonProps[] = [
    {
      id: "next",
      path: "/mainMenu",
      label: "Siguiente",
      onClick: handleNextButtonClick,
    },
  ];

  return (
    <MenuView title={"1.- TAREA"} navLinks={navLinks} buttons={menuButtons}>
      <OptionsView variableId="task-id" items={optionsItems} />
    </MenuView>
  );
};

export default TaskMenuView;
