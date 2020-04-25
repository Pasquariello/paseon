
const wrapper = {
	// border: 'red solid 1px',
	// padding: '20px',
	// marginTop: 0,
	// position: 'fixed',
	//height: '100%'
	top:'32px',
	zIndex: 0,

};

const LeftBar = props => (
	<div style={wrapper} className="sticky-top">
		{props.children}
	</div>

);

export default LeftBar;