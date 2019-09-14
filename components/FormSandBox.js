const wrapper = {
    border: 'red solid 1px',
    padding: '20px',
  };
  
  const FormSandBox = props => (
    <div style={wrapper}>
        {props.children}
    </div>
  );
  
  export default FormSandBox;