
export default function Browser(props) {
	return (
		<>

			<div className="browser-wrapper">
				<div className="browser-navigation-bar">
					<i></i>
					<i></i>
					<i></i>
					<input value="http://yourradsite.com" disabled></input>
				</div>
    
				<div className="browser-container" style={{width: '100%', background: 'white', padding: '50px'}}>
					{/* <img src="http://placehold.it/900x300" alt="Browser content"/> */}
                    <div className="skeletonHeader"></div>
					<div className="row" style={{padding: '20px'}}>
                        <div className="col-lg-6">
                            {props.children}
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="textSkeleton"></div>
                            <div className="textSkeleton"></div>
                            <div className="paragraphSkeleton"></div>
                            <div className="textSkeleton"></div>
                            <div className="textSkeleton"></div>
                            <div className="paragraphSkeleton"></div>
                            <div className="paragraphSkeleton"></div>
                            <div className="textSkeleton"></div>
                            <div className="textSkeleton"></div>
                            <div className="textSkeleton"></div>
                            <div className="textSkeleton"></div>
                            <div className="textSkeleton"></div>
                            <div className="textSkeleton"></div>
                            <div className="paragraphSkeleton"></div>
                            <div className="textSkeleton"></div>
                            <div className="textSkeleton"></div>
                            <div className="textSkeleton"></div>
                            <div className="textSkeleton"></div>
                            <div className="textSkeleton"></div>
                            <div className="textSkeleton"></div>
                            <div className="textSkeleton"></div>
                            <div className="textSkeleton"></div>
                            <div className="textSkeleton"></div>
                            <div className="textSkeleton"></div>
                        </div>

					</div>
				</div>
			</div>

			<style jsx>{`

            .skeletonHeader {
                width: 100%;
                background: #ddd;
                height: 100px;
                margin-bottom: 25px;
            }

            .textSkeleton {
                width: 100%;
                background: #ddd;
                height: 20px;
                margin-bottom: 10px;
            }

            .paragraphSkeleton {
                width: 100%;
                background: #ddd;
                height: 55px;
                margin-bottom: 20px;
            }
                    
            .browser-wrapper {
                padding: 40px 0 0 0;
                border-radius: 3px;
                border: 1px solid #ddd;
                background: #ddd;
                display: inline-block;
                position: relative;
                width: 80%;
                margin-left: 10%;
            }

            .browser-wrapper .browser-navigation-bar {
                display: block;
                height: 35px;
                position: absolute;
                top: 6px;
                left: 1px;
                width: 100%;
                border-bottom: 2px solid #ccc;
            }
            
            .browser-wrapper i {
                height: 10px;
                width: 10px;
                border-radius: 8px;
                background-color: #eee;
                border: 1px solid #dadada;
                float: left;
                margin: 0 0 0 4px;
            }

            .browser-wrapper i:nth-child(1) {background-color: rgb(255, 86, 79)}

            .browser-wrapper i:nth-child(1):hover {background-color: rgb(255, 20, 25)}

            .browser-wrapper i:nth-child(2) {background-color: rgb(255, 183, 42)}

            .browser-wrapper i:nth-child(2):hover {background-color: rgb(230, 175, 42)}

            .browser-wrapper i:nth-child(3) {background-color: rgb(37, 198, 58)}

            .browser-wrapper i:nth-child(3):hover {background-color: rgb(10, 225, 10)}

            .browser-wrapper input {
                clear: both;
                height: 15px;
                color: #aaa;
                width: calc(100% - 28px);
                border: 0;
                border-radius: 8px;
                background-color: #eee;
                float: left;
                margin: 3px 0 0 4px;
                padding: 0 8px 0 8px;
                display: block;
            }

        `}</style>
		</>
	)
}