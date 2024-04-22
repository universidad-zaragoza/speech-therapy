/************************************************************************************************************
 *                                                                                                          *
 * File: WelcomeView.tsx                                                                                    *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: View with application's data loading progress                                               *
 * Version: 1.0                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../shared/components/Button";
import styles from "./styles.module.css";

/**
 * View with application's progress
 *
 * @returns WelcomeView
 */
const WelcomeView: React.FC = () => {
  return (
    <>
      <Container fluid className={styles.container}>
        <Row className={`${styles.row} ${styles.rowTitle}`}>
          <Col className={styles.col}>
            <p>Ejercicios Logopedia</p>
          </Col>
        </Row>
        <Row className={`${styles.row} ${styles.rowButton}`}>
          <Col className={styles.col}>
            <Button
              id="start"
              classStyle={styles.button}
              path="/mainMenu"
              type="button"
            >
              <p className={styles.buttonText}>Comenzar</p>
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WelcomeView;
