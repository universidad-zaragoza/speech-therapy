/************************************************************************************************************
 *                                                                                                          *
 * File: index.tsx                                                                                          *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: View with the elements of the different buttons                                             *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { ReactNode } from "react";
import Button from "react-bootstrap/Button";
import useButtonViewController from "./useButtonViewController";

/**
 * Button properties
 */
interface ButtonProps {
  id: string;
  classStyle?: string;
  children: ReactNode;
  path: string;
  type: "button" | "submit";
  onClick?: any;
  isDisabled: boolean;
}

/**
 * View with button elements
 *
 * @param ButtonProps
 * @returns ButtonView
 */
const ButtonView: React.FC<ButtonProps> = (props: ButtonProps) => {
  /* Props of this View  */
  const { id, classStyle, children, path, type, onClick, isDisabled } = props;

  /* Controller of this View  */
  const { onClickNavigateToPath } = useButtonViewController();

  return (
    <>
      {type === "button" && onClick ? ( // Custom onClick function
        <Button
          id={id}
          type="button"
          variant="primary"
          className={`${classStyle}`}
          onTouchEnd={onClick}
          disabled={isDisabled ? true : false}
        >
          {children}
        </Button>
      ) : type === "button" && !onClick ? ( // Default onClick function
        <Button
          id={id}
          type="button"
          variant="primary"
          className={`${classStyle}`}
          onTouchEnd={() => onClickNavigateToPath(path)}
          disabled={isDisabled ? true : false}
        >
          {children}
        </Button>
      ) : (
        // Button used in submit type forms
        <Button
          id={id}
          type={type}
          variant="primary"
          className={`${classStyle}`}
          disabled={isDisabled ? true : false}
        >
          {children}
        </Button>
      )}
    </>
  );
};

export default ButtonView;
