/************************************************************************************************************
 *                                                                                                          *
 * File: MenuView.tsx                                                                                       *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: View with application's data loading progress                                               *
 * Version: 1.0                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { Container, Row, Col } from "react-bootstrap";
import NavbarView from "../Navbar/index";
import styles from "./styles.module.css";
import { ReactNode } from "react";
import { NavLinkProps } from "../Navbar/index";
import Button from "../Button";
import React from "react";
import { useSelector } from "react-redux";
import { MenuRootState } from "../../redux/slices/menuSlice";

export interface ButtonProps {
  id: string;
  path: string;
  label: string;
  onClick: any;
}

/**
 * Menu properties
 */
interface MenuProps {
  navLinks: NavLinkProps[];
  title: string;
  buttons: ButtonProps[];
  children: ReactNode;
}

/**
 * View with application's progress
 *
 * @returns MenuView
 */
const MenuView: React.FC<MenuProps> = (props: MenuProps) => {
  /* Props of this View  */
  const { title, navLinks, children, buttons } = props;

  // Estado para controlar la habilitación del botón
  const isOptionChecked = useSelector(
    (state: MenuRootState) => state.menuState.isOptionChecked
  );

  return (
    <div className={styles.menuView}>
      <NavbarView links={navLinks} />
      <Container fluid className={styles.container}>
        <Row className={`${styles.content}`}>
          <Col className={`p-0`}>
            <Row>
              <Col>
                <h1 className={styles.title}>{title}</h1>
              </Col>
            </Row>
            <Row>
              <Col className={`p-10`}>
                <div>{children}</div>
              </Col>
            </Row>
            <Row>
              <Col className={`p-10`}>
                <div className={styles.buttonDiv}>
                  {buttons.map((button, index) => (
                    <Button
                      key={index}
                      id={button.id}
                      classStyle={styles.button}
                      onClick={button.onClick}
                      path={button.path}
                      type="button"
                      isDisabled={!isOptionChecked}
                    >
                      <p className={styles.buttonText}>{button.label}</p>
                    </Button>
                  ))}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MenuView;
