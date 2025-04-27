import React, {useEffect, useState} from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import "./ProgressBar.css"


export var ProgressBar = ({ name, width, percent, opacity }) => {
    const [value, setValue] = useState(0);
  
    useEffect(() => {
      setValue(percent * width * 0.01);
    });
  
    return (
      <>
      <div>
        <Row>
          <Col>{name}</Col>
          <Col><div style={{ textAlign: `right` }}>{percent}%</div></Col>
        </Row>
        <br></br>
        <div className="progress-div" style={{ width: `${width}px`, paddingRight:'3%' }}>
          <div style={{ width: `${value}px`, background: `rgba(62, 122, 235,${opacity})` }} className="progress" />
        </div>
      </div>
      </>
      
    );
  };

export default ProgressBar;
