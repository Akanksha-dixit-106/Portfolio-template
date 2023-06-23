import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Timeline = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="timeline">
            <div className="timeline-line"></div>
            <div className="timeline-content">
              <div className="timeline-item">
                <div className="timeline-dot bg-primary"></div>
                <div className="timeline-card">
                  <h3>Event 1</h3>
                  <p>Event description goes here</p>
                </div>
              </div>
              <div className="timeline-item timeline-item-right">
                <div className="timeline-dot bg-primary"></div>
                <div className="timeline-card">
                  <h3>Event 2</h3>
                  <p>Event description goes here</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot bg-primary"></div>
                <div className="timeline-card">
                  <h3>Event 3</h3>
                  <p>Event description goes here</p>
                </div>
              </div>
              {/* Add more timeline items */}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Timeline;
