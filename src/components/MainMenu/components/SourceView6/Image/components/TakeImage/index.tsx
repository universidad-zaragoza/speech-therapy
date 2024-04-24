/************************************************************************************************************
 *                                                                                                          *
 * File: TakeImage.tsx                                                                                      *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: View with application's data loading progress                                               *
 * Version: 1.0                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { NavLinkProps } from "../../../../../../../shared/components/Navbar";
import MenuView, {
  ButtonProps,
} from "../../../../../../../shared/components/Menu";
import { Col, Container, Form, Row } from "react-bootstrap";
import Webcam from "react-webcam";
import React, { useState, useRef, useCallback } from "react";
import Button from "../../../../../../../shared/components/Button";
import styles from "../../../styles.module.css";
import useWebCam from "../../../../../../../shared/hooks/useWebCam";

/**
 * Menu properties
 */
interface TakeImageProps {
  handleNextButtonClick: any;
  handlePreviousButtonClick: any;
}

/**
 * View with application's progress
 *
 * @returns ImageSourceMenuView
 */
const TakeImageView: React.FC<TakeImageProps> = (props: TakeImageProps) => {
  const webcamRef = useRef<Webcam | null>(null);
  const [imgBase64, setImgBase64] = useState<string | null>(null);

  /* Props of this View  */
  const { handleNextButtonClick, handlePreviousButtonClick } = props;

  const { sendImageToServer } = useWebCam();

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

  const videoConstraints = {
    facingMode: "user",
  };

  const capture = useCallback(async () => {
    const imageBase64 = webcamRef.current
      ? webcamRef.current.getScreenshot()
      : null;
    setImgBase64(imageBase64);
  }, [webcamRef]);

  const sendCapture = useCallback(async () => {
    if (imgBase64) {
      await sendImageToServer(imgBase64);
    }
  }, [imgBase64]);

  return (
    <MenuView title={"6- TOMAR FOTO"} navLinks={navLinks} buttons={menuButtons}>
      <Container>
        {imgBase64 === null ? (
          <Row>
            <Col>
              <Webcam
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                audio={false}
                height={300}
                width={450}
                ref={webcamRef}
                mirrored={true}
              />
            </Col>
            <Col>
              <Row style={{ marginBottom: "10px" }}>
                <Button
                  id="take-photo"
                  classStyle={styles.button}
                  onClick={capture}
                  path=""
                  type="button"
                  isDisabled={false}
                >
                  <p className={styles.buttonText}>Tomar Captura</p>
                </Button>
              </Row>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col>
              <img src={imgBase64} alt="screenshot" />
            </Col>
            <Col>
              <Row style={{ marginBottom: "10px" }}>
                <Button
                  id="take-photo"
                  classStyle={styles.button}
                  onClick={sendCapture}
                  path=""
                  type="button"
                  isDisabled={false}
                >
                  <p className={styles.buttonText}>Retomar Captura</p>
                </Button>
              </Row>
              <Row>
                <Button
                  id="take-photo"
                  classStyle={styles.button}
                  onClick={capture}
                  path=""
                  type="button"
                  isDisabled={false}
                >
                  <p className={styles.buttonText}>Enviar Captura</p>
                </Button>
              </Row>
            </Col>
          </Row>
        )}
      </Container>
    </MenuView>
  );
};

export default TakeImageView;
