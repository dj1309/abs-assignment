import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import game from './asset/game.jpeg';
import './videocomponent.css'; 

const PurchasePage = () => {
  const games = [
    { id: 1, title: 'Epic Quest', description: 'Embark on a journey through mythical lands and conquer mighty foes.', price: 29.99, image: game },
    { id: 2, title: 'Galactic Warfare', description: 'Join the interstellar battle for supremacy in this action-packed space adventure.', price: 39.99, image: game },
    { id: 3, title: 'Medieval Legends', description: 'Immerse yourself in the medieval world filled with knights, dragons, and magic.', price: 49.99, image: game },
    { id: 4, title: 'Cyberpunk Odyssey', description: 'Navigate the futuristic cityscape and unravel the mysteries of a cyberpunk world.', price: 59.99, image: game },
    { id: 5, title: 'Fantasy Realms', description: 'Build and manage your own fantasy kingdom, facing challenges and making strategic decisions.', price: 69.99, image: game },
    { id: 6, title: 'Underworld Secrets', description: 'Delve into the dark underworld and uncover hidden secrets in this suspenseful thriller.', price: 79.99, image: game },
  ];
  
  const handlePurchase = (game) => {
    alert(`Your order for ${game.title} has been placed. Shipping charge applies.`);
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Browse and Purchase Games</h2>
      <Row>
        {games.map((game) => (
          <Col key={game.id} md={4} className="mb-4">
            <Card className="animated-card">
              <Card.Img variant="top" src={game.image} alt={game.title} />
              <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text>${game.price.toFixed(2)}</Card.Text>
                <Card.Text>{game.description}</Card.Text>
                <Button className="purchase-button" onClick={() => handlePurchase(game)}>Purchase</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PurchasePage;
