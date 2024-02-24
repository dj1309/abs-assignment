import React from 'react';
import { Card } from 'react-bootstrap';
import './videocomponent.css';
import science from './asset/science.jpg';
import tech from './asset/tech.jpg';
import health from './asset/health.jpg'
import art from './asset/art.jpg'
import food from './asset/food.jpg'
import envi from './asset/envi.jpg'
const MediaNews = () => {
  return (
    <>
      <div className='news'>
        <Card style={{ width: '30rem' }}>
          <Card.Body>
            <Card.Img variant="top" src={tech} />
            <Card.Title>Tech Giants Collaborate on New Innovation</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Technology</Card.Subtitle>
            <Card.Text>
              Leading tech companies join forces to develop groundbreaking technologies for the future.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '30rem' }}>
          <Card.Body>
            <Card.Img variant="top" src={science} />
            <Card.Title>New Discoveries in Space Exploration</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Science</Card.Subtitle>
            <Card.Text>
              Scientists unveil exciting findings in the latest space exploration mission, expanding our understanding of the cosmos.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '30rem' }}>
          <Card.Body>
            <Card.Img variant="top" src={health} />
            <Card.Title>Healthy Living Tips for a Balanced Lifestyle</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Health</Card.Subtitle>
            <Card.Text>
              Explore practical tips and advice for maintaining a healthy and balanced lifestyle in today's busy world.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className='news1'>
        <Card style={{ width: '30rem' }}>
          <Card.Body>
            <Card.Img variant="top" src={art} />
            <Card.Title>Artists Showcase Latest Creations at Global Exhibition</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Art & Culture</Card.Subtitle>
            <Card.Text>
              Renowned artists from around the world gather to exhibit their latest creations in a prestigious global art exhibition.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '30rem' }}>
          <Card.Body>
            <Card.Img variant="top" src={food} />
            <Card.Title>Exploring Culinary Delights: Food Festival Highlights</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Food & Cuisine</Card.Subtitle>
            <Card.Text>
              Indulge in the diverse and flavorful experiences showcased at the annual international food festival.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '30rem' }}>
          <Card.Body>
            <Card.Img variant="top" src={envi} />
            <Card.Title>Environmental Conservation Initiatives Making Strides</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Environment</Card.Subtitle>
            <Card.Text>
              Learn about the latest projects and efforts aimed at preserving and protecting our environment for future generations.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default MediaNews;
