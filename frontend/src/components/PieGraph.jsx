import React from "react";
import { PieChart, Pie, Tooltip } from 'recharts';

class PieGraph extends React.Component{

    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    render() {
    
        return (
            <>
                <h3>
                    <center>Top Risk Factors for Stroke</center>
                </h3>
                <br/>
                <PieChart width={300} height={200}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={this.props.data}
                        innerRadius={50}
                        outerRadius={70}
                        fill="rgb(62, 122, 235)"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </>
        );
    }

}

export default PieGraph;