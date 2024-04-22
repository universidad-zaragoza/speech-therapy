/************************************************************************************************************
 *                                                                                                          *
 * File: NavbarView.tsx                                                                                     *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: View with application's data loading progress                                               *
 * Version: 1.0                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { Navbar, Nav, Container } from "react-bootstrap";

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
              <Nav.Link
                key={index}
                style={{ color: "white", fontWeight: "bold" }}
                href={link.href}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarView;
