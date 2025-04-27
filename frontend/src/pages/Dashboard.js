import "./Dashboard.css";
import React from "react";
import ProgressBar from "../components/ProgressBar";
import Percentage from "../components/Percentage";
import { withGlobalState } from 'react-globally';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-bootstrap-range-slider';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  LabelList
} from "recharts";
import Spinner from 'react-bootstrap/Spinner';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';


const prediction = {
  "result": "no",
  "feature_importance": {
      "age": 0.16,
      "hypertension": 0.02,
      "heart_disease": 0.02,
      "avg_glucose_level": 0.25,
      "bmi": 0.29,
      "gender": 0.05,
      "ever_married": 0.02,
      "work_type": 0.060000000000000005,
      "residence_type": 0.03,
      "smoking": 0.09
  }
};

  const dataAge = [
    {
      name: "14-50",
      count: 23
    },
    {
      name: "51-56",
      count: 24
    },
    {
      name: "57-68",
      count: 44
    },
    {
      name: "69-79",
      count: 17
    },
    {
      name: "80-82",
      count: 39
    }
  ];

  const dataBMI = [
    {
      name: "16.89-23.46",
      count: 21
    },
    {
      name: "23.46-25.6",
      count: 22
    },
    {
      name: "25.6-28.04",
      count: 40
    },
    {
      name: "28.04-34.58",
      count: 82
    },
    {
      name: "34.58-47.5",
      count: 42
    }
  ];

  const dataGlucose = [
    {
      name: "56.109-70.204",
      count: 21
    },
    {
      name: "70.204-76.482",
      count: 21
    },
    {
      name: "76.482-95.968",
      count: 41
    },
    {
      name: "95.968-205.686",
      count: 82
    },
    {
      name: "205.686-271.74",
      count: 42
    }
  ];

function Dashboard(props) {
  

  const [ resultModel, setResultModel ] = React.useState("No");
  const [ valueAge, setValueAge ] = React.useState(50);
  const [ valueBmi, setValueBmi ] = React.useState(50);
  const [ valueGlucose, setValueGlucose ] = React.useState(50);
  const [ glucose, setGlucose ] = React.useState(50);
  const [ age, setAge ] = React.useState(50);
  const [ bmi, setBmi ] = React.useState(50);
  const [ loading, setLoading ] = React.useState(false);

  function handleGlucoseChange(e){
    setLoading(true);
    console.log(e.target.value);

    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`http://localhost:8000/api/stroke/getGlucosePrediction?glucose=${e.target.value}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(JSON.parse(result));
      let jsonresult = JSON.parse(result); 
      console.log(jsonresult.result.No);
      setGlucose(Math.round((jsonresult.result.Yes + Number.EPSILON) * 100) / 100);
    })
    .catch(error => console.log('error', error));

    console.log(loading);
    setLoading(false);
  }

  function handleAgeChange(e){
    setLoading(true);
    console.log(e.target.value);

    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`http://localhost:8000/api/stroke/getAgePrediction?age=${e.target.value}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(JSON.parse(result));
      let jsonresult = JSON.parse(result); 
      console.log(jsonresult.result.No);
      setAge(Math.round((jsonresult.result.Yes + Number.EPSILON) * 100) / 100);
    })
    .catch(error => console.log('error', error));

    console.log(loading);
    setLoading(false);
  }

  function handleBmiChange(e){
    setLoading(true);
    console.log(e.target.value);

    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`http://localhost:8000/api/stroke/getBmiPrediction?bmi=${e.target.value}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(JSON.parse(result));
      let jsonresult = JSON.parse(result); 
      console.log(Math.round((jsonresult.result.No + Number.EPSILON) * 100) / 100);
      setBmi(Math.round((jsonresult.result.Yes + Number.EPSILON) * 100) / 100);
    })
    .catch(error => console.log('error', error));

    console.log(loading);
    setLoading(false);
  }

  


  let rows = [];
  var items = Object.keys(prediction.feature_importance).map(function(key) {
    return [key.charAt(0).toUpperCase() + key.slice(1), Math.round(prediction.feature_importance[key]*100)];
  });

  // Sort the array based on the second element
  items.sort(function(first, second) {
    return second[1] - first[1];
  });

  var op = 1.0;
  for (let i = 0; i < items.length; i++) {
  // note: we are adding a key prop here to allow react to uniquely identify each
  // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
  rows.push(<><br/><ProgressBar name={items[i][0]} width={425} percent={items[i][1]} opacity={op}/></>);
  op = op - 0.1;
  }


  let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  fetch(`http://localhost:8000/api/stroke/getStrokeProbabilty/?gender=${props.globalState.gender}&age=${props.globalState.age}&avg_glucose_level=${props.globalState.avg_glucose_level}&bmi=${props.globalState.bmi}&ever_married=${props.globalState.ever_married}&work_type=${props.globalState.work_type}&hypertension=${props.globalState.hypertension}&heart_disease=${props.globalState.heart_disease}&residence_type=${props.globalState.residence_type}&smoking_status=${props.globalState.smoking_status}`, requestOptions)
    .then(response => response.text())
    .then(result => {console.log(result); setResultModel(capitalizeFirstLetter(JSON.parse(result).result));console.log(props.globalState);})
    .catch(error => console.log('error', error));


  let compBmi;
  let compAge;
  let compGlucose;

  if (loading===true) {
    compGlucose = <center><Spinner animation="border" variant="primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner></center>;
  } else {
    compGlucose = 
    <Percentage
      percentage={glucose}
      stroke="black"
      strokeWidth={10}
      color="rgb(62, 122, 235)"
      background="white"
      result="No"
    />;
  }
  
  if (loading===true) {
    compAge = <center><Spinner animation="border" variant="primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner></center>;
  } else {
    compAge = 
    <Percentage
      percentage={age}
      stroke="black"
      strokeWidth={10}
      color="rgb(62, 122, 235)"
      background="white"
      result="No"
    />;
  }

  if (loading===true) {
    compBmi = <center><Spinner animation="border" variant="primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner></center>;
  } else {
    compBmi = 
    <Percentage
      percentage={bmi}
      stroke="black"
      strokeWidth={10}
      color="rgb(62, 122, 235)"
      background="white"
      result="No"
    />;
  }

    return (
        <>
          <Container fluid>
            <div className="mt-10 mb-[60px]">
              <h1 className="mb-9 font-glory font-extrabold text-[#233348] text-[48px] leading-[54px]">
                Stroke Evaluation Dashboard
              </h1>
            </div>
            <Row>
              <Col md={4} style={{paddingRight:'3%'}}>
                <Row>
                  <Col>
                    <h3>Result of Analysis:</h3>  
                  </Col>
                  <Col>
                    <h1 style={{textAlign:'right', marginRight:'1%'}}>{resultModel}</h1>
                  </Col>
                </Row>
               
                <br></br>
                <p style={{fontFamily: 'Glory' , fontSize: 24}}>According to your data: Top 10 Risk & Cause factors for Stroke</p>
                {rows}
              </Col>
              <Col md={8}>
                <h3>Interactive Analysis of Major Causative Factor for Stroke</h3>
                <p>Following visualizations contain pecentage of a person getting stroke based on input given for the major contributing factors</p>
                <br></br>
                <Row>
                  <Col md={4}>
                    <h3>Age</h3>
                    <Form>
                      <Form.Group as={Row}>
                        <Col xs="9">
                        <RangeSlider
                          value={valueAge}
                          onChange={e => setValueAge(e.target.value)}
                          onAfterChange={e => handleAgeChange(e)}
                        />
                        </Col>
                        <Col xs="3">
                          <Form.Control value={valueAge}/>
                        </Col>
                      </Form.Group>
                    </Form> 
                    <br></br>
                    {compAge}
                    <br></br>
                  </Col>
                  <Col md={4}>
                    <h3>BMI</h3>
                    <Form>
                      <Form.Group as={Row}>
                        <Col xs="9">
                        <RangeSlider
                          value={valueBmi}
                          onChange={e => setValueBmi(e.target.value)}
                          onAfterChange={e => handleBmiChange(e)}
                        />
                        </Col>
                        <Col xs="3">
                          <Form.Control value={valueBmi}/>
                        </Col>
                      </Form.Group>
                    </Form>
                    <br></br>
                    {compBmi}
                    <br></br>
                  </Col>
                  <Col md={4}>
                    <h3>Glucose Level</h3>
                    <Form>
                      <Form.Group as={Row}>
                        <Col xs="9">
                        <RangeSlider
                          value={valueGlucose}
                          onChange={e => setValueGlucose(e.target.value)}
                          onAfterChange={e => handleGlucoseChange(e)}
                          max={400}
                        />
                        </Col>
                        <Col xs="3">
                          <Form.Control value={valueGlucose}/>
                        </Col>
                      </Form.Group>
                    </Form>
                    <br></br>
                    {compGlucose}
                    <br></br>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>

                    <h3>Statistical Analysis of Major Contributing Factors</h3>
                    <p>Following graphs contain statistics on the number of people who had stroke for the contirbuting factors assesed</p>
                    <br></br>
                    <Container flex>
                    <h3>Age</h3>
                    <br></br>
                    <BarChart
                      width={900}
                      height={300}
                      data={dataAge}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 20
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" ><Label value="Age Ranges" offset={0} position="bottom" /></XAxis>
                      <YAxis  label={{ value: 'Count', angle: -90, position: 'insideLeft' }}/>
                      <Tooltip />
                      <Bar dataKey="count" fill="rgb(62, 122, 235)" />
                    </BarChart>
                    </Container>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                  <br></br>
                  <h3>BMI</h3>
                    <br></br>
                    <BarChart
                      width={500}
                      height={200}
                      data={dataBMI}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 20
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" ><Label value="BMI Ranges" offset={0} position="bottom" /></XAxis>
                      <YAxis  label={{ value: 'Count', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Bar dataKey="count" fill="rgb(62, 122, 235)" />
                    </BarChart>
                  </Col>
                  <Col md={6}>
                    <br></br>
                    <h3>Glucose Level</h3>
                    <br></br>
                    <BarChart
                      width={500}
                      height={200}
                      data={dataGlucose}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 20
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" ><Label value="Glucose Ranges" offset={0} position="bottom" /></XAxis>
                      <YAxis label={{ value: 'Count', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Bar dataKey="count" fill="rgb(62, 122, 235)" />
                    </BarChart>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <br></br>
          <br></br>
        </>
      );
}

export default withGlobalState(Dashboard);