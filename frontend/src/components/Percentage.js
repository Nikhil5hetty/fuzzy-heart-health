import React from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';

const rotateStyle = {
  transform: "rotate(-90deg)"
};

export default props => {
  let { percentage, strokeWidth, size, color, background, result } = props;

  size = size || 100;
  percentage = Math.min(percentage, 100) / 100;

  const coordi = size / 2;
  const radius = size / 2 - Math.ceil(strokeWidth / 2);

  const commonStyle = {
    cx: coordi,
    cy: coordi,
    r: radius,
    fill: "none",
    strokeLinecap: "round",
    strokeWidth
  };

  return (
    <>
    
      <Card body style={{ width: '100%', background: '#e6e6e6' }}>
        <Container fluid>
          <Row>
            <Col>
              <span
                style={{
                  color: "black",
                  fontSize: 34,
                  fontFamily: 'Glory',
                  fontStyle: 'normal'
                }}
              >
              </span>
              <div
                style={{
                  marginBottom: 20,
                  fontFamily: 'Glory'
                }}
              >
              <b><span style={{ fontSize: 30, color: "black"}}>{percentage*100}%</span></b><p>Risk of you getting a stroke</p>
              </div>
            </Col>
            <Col>
              <svg width={size} height={size} style={rotateStyle}>
                <circle stroke={background} {...commonStyle} />
                <circle
                  style={{
                    strokeDasharray: [Math.PI * radius * 2],
                    strokeDashoffset: (1 - percentage) * Math.PI * radius * 2
                  }}
                  stroke={color}
                  {...commonStyle}
                />
              </svg>
            </Col>
          </Row>
        </Container>
      </Card>
      
    </>
    
  );
};