import victory from "victory";

// Individual component imports
import {
  VictoryBar,
  VictoryChart,
  Bar,
  VictoryLine,
  VictoryTooltip,
  VictoryLabel,
  VictoryTheme,
  VictoryPie,
} from "victory";


class CustomLabel extends React.Component {
    render() {
      return (
        <g>
          <VictoryLabel {...this.props} 
          text={({ datum }) => `${datum.y}` }
          />
          <VictoryTooltip
            {...this.props}
            x={200} y={250}
            orientation="top"
            pointerLength={0}
            cornerRadius={50}
            flyoutWidth={100}
            flyoutHeight={100}
            flyoutStyle={{ fill: "black" }}

          //text={({ datum }) => `${datum.label}`}

          />
        </g>
      );
    }
  }
  
  CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;
  
  
class PieChart extends React.Component {
    
    render() {
        console.log('PIE CHART');

      return (
        //   <VictoryPie
        //     style={{ labels: { fill: "white" } }}
        //     innerRadius={100}
        //     labelRadius={120}
        //     labels={({ datum }) => `# ${datum.y}`}
        //     labelComponent={<CustomLabel />}
        //     data={ [
        //             { x: 1, y: 1 },
        //             { x: 2, y: 4 },
        //             { x: 3, y: 2 },
        //             { x: 4, y: 3 },
        //             { x: 5, y: 1 }
        //           ]}
        //   />
        
        <svg viewBox="0 0 400 400">
        <VictoryPie
          
          colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
          standalone={false}
          width={400} height={400}
          data={this.props.data}
          innerRadius={68} labelRadius={100}
          style={{ labels: { fontSize: 20, fill: "white" } }}
          labelComponent={<CustomLabel />}
          
        />
        {/* <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 20 }}
          x={200} y={200}
          text="Pie!"
        /> */}
      </svg>
      );
    }
  }



export default PieChart;

//OLD DATA: 
//   [
//     { x: 1, y: 5 },
//     { x: 2, y: 4 },
//     { x: 3, y: 2 },
//     { x: 4, y: 3 },
//     { x: 5, y: 1 }
//   ]