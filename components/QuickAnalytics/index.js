import QuickAnalyticsCard from './QuickAnalyticsCard';
import QuickAnalyticsRow from './QuickAnalyticsRow';

class QuickAnalytics extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render(){
        let cardCount = this.props.data.length;
        let rowCount = this.props.data.length % 4;
        let size = 4;
        var newArray = new Array(Math.ceil(cardCount / size)).fill("")
        .map(function() { return this.splice(0, size) }, this.props.data.slice());
        console.log(newArray)
        return(
            <div>
            <a data-toggle="collapse" href="#multiCollapseExample1"  aria-expanded="true" aria-controls="multiCollapseExample1">Toggle Quick Analytics</a>

            <div className="collapse multi-collapse show" id="multiCollapseExample1"> 


                {   

                    newArray.map((row, rowIndex) => {
                        return (
                            <div className="row">

                       
                    {row.map((data, index) =>{
                            return (
                            

                                <QuickAnalyticsCard
                                    cardCount={newArray[rowIndex].length}
                                    key={index}
                                    data={data}
                                /> 
                            )
                        
                        })}
                             </div>
                        )
                    })


                }


                {/* <QuickAnalyticsCard
                    data={this.props.data}
                /> */}
            </div>
            </div>
        )
    }

}
export default QuickAnalytics;