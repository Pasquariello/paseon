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



    
  
class TimeBarChart extends React.Component {
    
    render() {
      return (

<VictoryChart
  theme={VictoryTheme.material}
  domainPadding={{ x: 15 }}
>
  <VictoryBar
    barRatio={0.8}
    style={{
      data: { fill: "#c43a31" }
    }}
    data={[
        { x: 1, y: 2, y0: 0 },
        { x: 2, y: 3, y0: 0 },
        { x: 3, y: 5, y0: 0 },
        { x: 4, y: 4, y0: 0 },
        { x: 5, y: 6, y0: 0 }
      ]}  />
  
  </VictoryChart>

      );
    }
  }



export default TimeBarChart;

//OLD DATA: 
//   [
//     { x: 1, y: 5 },
//     { x: 2, y: 4 },
//     { x: 3, y: 2 },
//     { x: 4, y: 3 },
//     { x: 5, y: 1 }
//   ]