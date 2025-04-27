import React from "react";
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from 'recharts';


class BarGraph extends React.Component{

    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    render() {
    
        return (
          <>
            <ComposedChart
            width={500}
            height={400}
            data={this.props.data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" barSize={20} fill="rgb(62, 122, 235)" />
            <Line type="monotone" dataKey="cnt" stroke="#ff7300" />
          </ComposedChart>
          </>
        );
    }
}

export default BarGraph;