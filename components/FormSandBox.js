const wrapper = {
    border: 'grey dashed 2px',
    padding: '20px',
    paddingBottom: '120px',
    height: '100%',
    // marginLeft: '20px',
    overflow: 'scroll',
    overflowX: 'hidden',

    background: '#f0f0f0'
  };
  
  const FormSandBox = props => (
    <div style={wrapper}>
        {props.children}
    </div>
  );
  
  export default FormSandBox;