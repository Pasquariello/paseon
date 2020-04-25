import QuickAnalyticsCard from './QuickAnalyticsCard';
import QuickAnalyticsRow from './QuickAnalyticsRow';
import auth from '../../redux/reducers/auth';

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
		return(
			<div>
				<div style={{position: 'relative'}}>
					<a data-toggle="collapse" href="#multiCollapseExample1"  aria-expanded="true" aria-controls="multiCollapseExample1">Toggle Quick Analytics</a>
				</div>
				<div className="collapse multi-collapse show" id="multiCollapseExample1"> 


					{   

						newArray.map((row, rowIndex) => {
							return (
								<div key={rowIndex}
									className="row">

                       
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


				<style jsx>
					{`
        /* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: #29d;

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 2px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #29d, 0 0 5px #29d;
  opacity: 1;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
  -ms-transform: rotate(3deg) translate(0px, -4px);
  transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: #29d;
  border-left-color: #29d;
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
  animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes nprogress-spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


       `}   
				</style>

			</div>
		)
	}

}

export default QuickAnalytics;