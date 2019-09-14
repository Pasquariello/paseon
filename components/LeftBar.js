
const wrapper = {
  border: 'red solid 1px',
  padding: '20px',
};

const LeftBar = props => (
  <div style={wrapper}>
      {props.children}
  </div>
);

export default LeftBar;