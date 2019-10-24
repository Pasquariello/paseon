// class QuickAnalyticsCard extends React.Component {
export default function QuickAnalyticsCard(props) {
        console.log(props.cardCount)
        let startWidth = 12 / props.cardCount;
        
        return(
       
            // ${startWidth}
                <div className={`col-lg-${startWidth} mb-4`}>
                <div class="card border-left-info shadow h-100 py-2">
                    <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-info text-uppercase mb-1">{props.data.title}</div>
                        <div class="row no-gutters align-items-center">
                            <div class="col-auto">
                            <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{props.data.body}</div>
                            </div>
                            <div class="col">
                            <div class="progress progress-sm mr-2">
                                <div class="progress-bar bg-info" role="progressbar" style={{width: "50%", ariaValuenow:"50", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-auto">
                        <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        )
    }