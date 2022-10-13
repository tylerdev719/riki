import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TopNav = () => {
	return (
		<Navbar expand='lg'>
			<Container>
				<Navbar.Brand href='/'>riki</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/learn'>Learn</Nav.Link>
						<NavDropdown title='Demo' id='basic-nav-dropdown'>
							<NavDropdown.Item href='/counter'>Counter</NavDropdown.Item>
							<NavDropdown.Item href='/birds'>Birds</NavDropdown.Item>
							<NavDropdown.Item href='/food'>Food</NavDropdown.Item>
							<NavDropdown.Item href='/quotes'>Quotes</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='/all_demos'>See All Demos</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href='/docs'>Docs</Nav.Link>
						<Nav.Link href='/github'>Github</Nav.Link>
						<Nav.Link href='/about'>About</Nav.Link>
						<Nav.Link href='/contact'>Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default TopNav;
