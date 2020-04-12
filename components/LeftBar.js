
const wrapper = {
	// border: 'red solid 1px',
  // padding: '20px',
  // marginTop: 0,
  // position: 'fixed',
  height: '100%'

};

const LeftBar = props => (
	<div style={wrapper}>
		{props.children}
  </div>

);

export default LeftBar;