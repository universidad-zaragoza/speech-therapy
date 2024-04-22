/************************************************************************************************************
 *                                                                                                          *
 * File: OptionsView.tsx                                                                                    *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: View with application's data loading progress                                               *
 * Version: 1.0                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { Form } from "react-bootstrap";
import useOptionsController from "./useOptionsController";

/**
 * OptionsProps properties
 */
interface OptionsProps {
  variableId: string;
  items: FormCheckItemProps[];
}

/**
 * NavLinkProps properties
 */
export interface FormCheckItemProps {
  label: string;
}

/**
 * View with application's progress
 *
 * @returns OptionsView
 */
const OptionsView: React.FC<OptionsProps> = (props: OptionsProps) => {
  /* Props of this View  */
  const { variableId, items } = props;

  /* Controller of this View */
  const { handleOptionChange } = useOptionsController();

  return (
    <>
      <h4>Seleccione una de las siguientes opciones: </h4>
      <Form>
        <div key={`default-radio`} className="mb-3">
          {items.map((item, index) => (
            <Form.Check
              key={index}
              type="radio"
              id={variableId}
              label={item.label}
              value={item.label}
              name="options"
              onChange={(event) => handleOptionChange(event, variableId)}
            />
          ))}
        </div>
      </Form>
    </>
  );
};

export default OptionsView;
