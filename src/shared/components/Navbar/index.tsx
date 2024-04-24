/************************************************************************************************************
 *                                                                                                          *
 * File: NavbarView.tsx                                                                                     *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: View with application's data loading progress                                               *
 * Version: 1.0                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

/**
 * NavbarProps properties
 */
interface NavbarProps {
  links: NavLinkProps[];
}

/**
 * NavLinkProps properties
 */
export interface NavLinkProps {
  label: string;
  href: string;
}

/**
 * View with application's progress
 *
 * @returns NavbarView
 */
const NavbarView: React.FC<NavbarProps> = (props: NavbarProps) => {
  /* Props of this View  */
  const { links } = props;

  const navigate = useNavigate();

  const handleButtonClick = (_path: string) => {
    navigate(_path);
  };

  const buttonStyle = {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "transparent",
    border: "none",
    textDecoration: "none",
  };

  return (
    <Navbar collapseOnSelect expand="md" bg="dark">
      <Container style={{ width: "100%" }}>
        <Navbar.Brand
          style={{ color: "white", fontWeight: "bold" }}
          href="#home"
        >
          Logopedia
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ backgroundColor: "white" }}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="justify-content-end"
            style={{ width: "100%", color: "white", fontWeight: "bold" }}
          >
            {links.map((link, index) => (
              <Button
                key={index}
                variant="link"
                style={buttonStyle}
                onClick={() => {
                  handleButtonClick(link.href);
                }}
              >
                {link.label}
              </Button>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarView;
