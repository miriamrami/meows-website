import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Row, Col, Carousel, Image, Card, CardBody, CardText, Button, CardTitle } from "react-bootstrap";
import "./cssFiles//AboutMe.css";
import myImage from "./imgs/miriamimg.jpg";
import castleImage from "./imgs/osakaCastle.jpg";
import towerImage from "./imgs/tokyoTower.jpg";
import rockefellerImage from "./imgs/rockefellerTower.jpg";

const AboutMe = () => {
	return (
	<body>
		<div className="home-background">
		<Navbar sticky="top" className="home-nav">
			<Container>
				<Navbar.Brand href="/">=^-w-^=</Navbar.Brand>
					<Nav className="nav-tabs">
						<Link className="nav-link" to="/">Home</Link>
						<Link className="nav-link active" aria-current="page" to="/AboutMe.js">About Me</Link>
						<Link className="nav-link" to="/Projects.js">Projects</Link>
				</Nav>
			</Container>
		</Navbar>

		
		<Container className="c1">
			<Row className="AM-row1">
				<Col className="miriamImage">
					<Image src={myImage} roundedCircle fluid/>
				</Col>

				<Col className="nameInfoCol">
					<Card className="nameCard">
						<CardBody>
							<CardText className="nameCardText">Miriam T Ramirez</CardText>
						</CardBody>
					</Card>
					<Card className="emailCard">
						<CardBody>
							<CardText className="emailText">e-mail: miriamteresaram@gmail.com</CardText>
						</CardBody>
					</Card>
				</Col>

				<Col className="socialsCol">
					<Row>
						<Card className="socialsCard">
							<Card.Body>
								<Card.Title className="socialsTitle">Socials</Card.Title>
							</Card.Body>
						</Card>
					</Row>

					<Row>
						<Container>
							<Row className="iconsRow">
								<Col><Button variant="danger" href="https://www.instagram.com/_meowriam_/" target="_blank"><i className="bi-instagram"></i></Button></Col>
								<Col><Button variant="success" href="https://open.spotify.com/user/mairix3?si=a4411d782b4144c4" target="_blank"><i className="bi-spotify"></i></Button></Col>
								<Col><Button variant="dark" href="https://steamcommunity.com/id/11151999/" target="_blank"><i className="bi-steam"></i></Button></Col>
								<Col><Button variant="info" href="https://www.linkedin.com/in/miriamtramirez/" target="_blank"><i className="bi-linkedin"></i></Button></Col>

							</Row>
						</Container>
					</Row>
				</Col>

			</Row>
		</Container>
		<Container className="c2">
			<Row className="AM-row2">
				<Col>
					<Card className="bioTitleCard">
						<CardBody>
							<CardTitle className="bioTitle">A Little About Me</CardTitle>
						</CardBody>
					</Card>
					<Card className="bioParagraphCard">
						<CardBody>
							<Card.Text>
							Hello! My name is Miriam Ramirez and I was born in Ciudad Juarez, Chihuaha but I was raised in El Paso, Texas. I graduated from the University of Texas at El Paso with a Bachelor's of Science in Computer Science and with a minor in Mathematics.
							</Card.Text>
							<Card.Text>
							I have a strong passion for software development, particularly in areas such as web development, data analysis, and mobile app development. I am proficient in several programming languages including Java, PHP, HTML, C, Dart, Javascript, CSS and Python. My experience extends to various frameworks such as React Native, React Bootstrap, Flutter and Bootstrap.
							</Card.Text>
							<Card.Text>
							In terms of methodologies and practices, I am well versed in Agile, Sprint Planning and the Personal Software Process, which I apply to ensure efficient and high quality development processes. 
							</Card.Text>
							<Card.Text>My current goal is to gain hands-on experience in the tech industry and contribute to innovative projects. I aspire to become a web developer and software engineer, creating impactful and efficient web applications and software solutions.</Card.Text>
							<Card.Text> Feel free to connect with me on LinkedIn or reach out via email.</Card.Text>
						</CardBody>
					</Card>
				</Col>
				
				<Col>
				<Image src="" roundedCircle fluid/>
				</Col>
			</Row>
		</Container>
		<Container className="c3">
			<Row className="AM-row3">
				<Col>
					<Carousel>
						<Carousel.Item>
							<Container className="c4">
							<img className="d-block w-100" src="" alt="First Slide"/>
							<Carousel.Caption>
								<h3>Title</h3>
								<p>insert description here?</p>
							</Carousel.Caption>
							</Container>
						</Carousel.Item>
						<Carousel.Item>
							<Container>
							<img className="d-block w-100" src="" alt="Second Slide"/>
							<Carousel.Caption>
								<h3>Title</h3>
								<p>insert description here?</p>
							</Carousel.Caption>
							</Container>
						</Carousel.Item>
						<Carousel.Item>
							<img className="d-block w-100" src="" alt="Third Slide"/>
							<Carousel.Caption>
								<h3>Title</h3>
								<p>insert description here?</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Col>
			</Row>
		</Container>

		<Container className="footerContainer"fluid>
			<Row className="row3">
				<Col>
					Website by meowzilla =^-w-^=
				</Col>
			</Row>
		</Container>

		</div>
	</body>



	);
};

export default AboutMe;
