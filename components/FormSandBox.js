const wrapper = {
    border: 'grey dashed 4px',
    padding: '20px',
    height: '100vh',
    overflow: 'scroll',

    background: '#f0f0f0'
  };
  
  const FormSandBox = props => (
    <div style={wrapper}>
        {props.children}
    </div>
  );
  
  export default FormSandBox;