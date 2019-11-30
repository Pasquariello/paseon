import Layout from '../components/MyLayout';
import Link from 'next/link';


export default function Index() {


  return (
    <Layout>
{/* height:'700px', marginBottom:'200px' */}
  <div className="headerContainer" style={{width: '100%', position: 'relative', height: '700px', marginBottom: '200px'}}>
  {/* <div className="headerContainerInner" style={{position: 'absolute', bottom: '0', top: '0'}}> */}

{/* style={{display: 'flex', justifyContent: 'space-between'}} */}
        <div className="" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}} >
          <div className="justify-content-md-center">
            <div className="headerText">
            <h1>PASEON</h1>
            <p>Easy, customizable, copy and paste submission forms. We handle all the backend so you have time to focus on the important stuff.</p>
            <button className="action-button white-btn ">LEARN MORE</button>
            </div>
          </div>
{/* float: 'right',  */}
          <div  className="headerImg" style={{position: 'absolute', right: '0'}}>
          {/* <div style={{position: 'absolute'}}> */}
            <img className="img-fluid float-md-right" src='../static/images/undraw_updates_et2k.svg'></img>
            {/* </div> */}
          </div>

        </div>

        {/* <div style={{height: '100%', border: '1px solid red'}}> */}
            <svg width="100%" height="100%" viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%',}}>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor:"#f83600"}} />
                  <stop offset="100%" style={{stopColor:"#f9d423"}} />
                </linearGradient>
              </defs>
              <g fill="url(#gradient)">
                <path d=" M0,120 C200,100 300,150 500,140 L500,0 L0,0 Z " > </path>
              </g>
            </svg>
        {/* </div> */}
  {/* </div> */}
  </div>
  

    <div style={{width: '80%', marginLeft: '10%'}}>
      <div className="grid-container grid-container--fit ">
        <div className="grid-element dark-background">
          <h1>EMBED IT</h1>
          <p>Get started in 2 minutes by placing our custom Paseon HTML tags anywhere you need a form to instantly start gathering submission data.</p>
        </div>
        <div className="grid-element dark-background">
          <h1>SHARE IT</h1>
          <p>Need to send forms to your audiance? Set up professional brandable form templates that can eaisly be shared.</p>
        </div>
        </div>
        <div className="grid-container grid-container--fit" >
        <div className="grid-element dark-background">
        <h1>MANAGE IT</h1>
          <p>Use the Paseon dashboard to manage all your different forms, submissions, and analyitcs. Stay on top of the data that drives your business.</p>
        </div>
        <div className="grid-element dark-background">
        <h1>BUILD IT</h1>
          <p>Use the Paseon form building tool to eaily drag and drop form elements to build beautiful professional forms right away. Want to write your own forms? All Paseon forms accpet HTML so anyone on your team can easily get started creating the forms you need.  Simply embed your form inside the Paseon HTML tags and you're good to go!</p>
        </div>
      </div>
    </div>


      <div style={{marginTop: '200px',  width: '70%', marginLeft:'15%', fontSize: '1.1em', lineHeight: '1.4em'}}>

        <div style={{marginTop: '320px', marginBottom: '300px', padding: '50px', backgroundColor: '#F1F1F1', textAlign: 'center', fontSize: '1.1em', lineHeight: '1.4em'}}>
          <p>Paseon offers a suit a prebuilt forms, form building tools, and integegrations, to handle processing and sending form information to where you need it to go. Manage submission data, view submission analytics and export the data to use however you need! Follow the steps below to see an example of our basic contact form.  </p> 
          <p> To see other services, prebuilt forms or to learn how to use your own form that utilizes our backend to process and send information where you need it to go click the button below </p>
          <Link href="/pricing">
          <button className="action-button black-btn">LEARN MORE</button>
          </Link>
        </div>
        <div className="grid-container grid-container--fit">
          <div className="grid-element">
            <p>Try a test submission! Add your email inbetween the quotes in the HTML below then fill out and submit the form.</p>
            
            {/* <div contenteditable="true" style={{border: '1px solid black', padding:'30px'}}>
            This text can be edited by the user.
            </div> */}

            <div style={{backgroundColor: '#F1F1F1', padding: '30px'}}>

            <span style={{color:'#3498DB'}}>&lt;</span> <span style={{color:'#DD1C1A'}}>paseon-contact-form </span> 
            recipient_email="<span style={{backgroundColor: '#dcdcdc', padding: '2px', borderRadius: '5px'}} contentEditable="true">YOUR_EMAIL</span>"
            <span style={{color:'#3498DB'}}> &gt;</span> <span style={{color:'#3498DB'}}>&lt; /</span> <span style={{color:'#DD1C1A'}}>paseon-contact-form</span> <span style={{color:'#3498DB'}}>&gt;</span><br></br>
            <br></br>
            <span style={{color:'#3498DB'}}>&lt;</span> <span style={{color:'#DD1C1A'}}>script</span> src="https://MYCDN"<span style={{color:'#3498DB'}}>&gt;</span> <span style={{color:'#3498DB'}}>&lt; /</span> <span style={{color:'#DD1C1A'}}>script</span>  <span style={{color:'#3498DB'}}>&gt;</span>


            </div>

          </div>
          <div className="grid-element">
            {/* TODO: replace with a actual interactive form */} 
            <label>This will be sent to: </label>
            <form>
                <input 
                    name="name"
                    type="text" 
                    placeholder="Your Name"
                    required
                    // .value="${this.form_obj.name}"
                    // @input="${(e) => this.handleSetInputValues(e)}" 
                ></input>
                <input 
                    name="from"
                    type="text" 
                    placeholder="Your Email"
                    required
                    // .value="${this.form_obj.from}"
                    // @input="${(e) => this.handleSetInputValues(e)}" 
                ></input>
                <input 
                    name="subject"
                    type="text" 
                    placeholder="Subject" 
                    required
                    // .value="${this.form_obj.subject}"
                    // @input="${(e) => this.handleSetInputValues(e)}" 
                ></input>
                <textarea 
                    name="body"
                    rows="4" 
                    cols="50" 
                    placeholder="Talk to me Goose..." 
                    required
                    // .value="${this.form_obj.body}"
                    // @input="${(e) => this.handleSetInputValues(e)}" 
                ></textarea>
                <input type="submit"></input>
            </form>
          </div>
       
        </div>
        </div>
        {/* width: '60%', marginLeft: '20%', */}
        <div className="" style={{ width: '50%', marginLeft: '25%',  marginTop: '300px', fontSize: '1.1em', lineHeight: '1.4em'}}>
        
          <div className="stepsRow">


          <h1>Step 1</h1>
          <p>Copy the following html tags.  Make sure to switch the bolded information to match the email address where you would like the contact information to be sent.</p>
          <div style={{backgroundColor: '#DCDCDC', padding: '30px'}}>
              {/* &lt;paseon-contact-form
                recipient_email="<b>YOUR_EMAIL</b>"
              &gt; &lt;/paseon-contact-form &gt;
              &lt;script src="https://MYCDN">&lt;/script &gt; */}
              <span style={{color:'#3498DB'}}>&lt;</span> <span style={{color:'#DD1C1A'}}>paseon-contact-form </span> 
              recipient_email="<span style={{backgroundColor: '#dcdcdc', padding: '2px', borderRadius: '5px'}} contentEditable="true">YOUR_EMAIL</span>"
              <span style={{color:'#3498DB'}}> &gt;</span> <span style={{color:'#3498DB'}}>&lt; /</span> <span style={{color:'#DD1C1A'}}>paseon-contact-form</span> <span style={{color:'#3498DB'}}>&gt;</span><br></br>
              <br></br>
              <span style={{color:'#3498DB'}}>&lt;</span> <span style={{color:'#DD1C1A'}}>script</span> src="https://MYCDN"<span style={{color:'#3498DB'}}>&gt;</span> <span style={{color:'#3498DB'}}>&lt; /</span> <span style={{color:'#DD1C1A'}}>script</span>  <span style={{color:'#3498DB'}}>&gt;</span>

          </div>
          <p style={{fontSize: '.75em'}}>Have a SPA and need an NPM install?<br></br>
          Ignore the script tag and paste the following into your root directory</p> 
          </div>

          <div className="stepsRow">

          <h1>Step 2</h1>
          <p>Paste the tags to wherever you need a contact form on your site! Our tags are supported by any CRM that will let you add custom HTML</p>
          </div>
          <div className="stepsRow">

          <h1>Step 3</h1>
          <p>At this point you are ready to start recieving emails from your form submissions! Go ahead and send yourself a test email through the contact form.  You may need check the spam folder, if the email ends up there mark it as 'Not Spam' and all future emails will go straight into your inbox.</p>
          </div>

          <div className="stepsRow">

          <h1>Step 4</h1>
          <p>Customize the labels, colors, and success message of your form by adding and editing the HTML attributes of the Paseon tags. </p>
          <p>To see a list of options click the button below.</p>
             
          <button style={{display: 'block'}} className="action-button black-btn">Learn More</button>

          </div>
        </div>
      {/* </div> */}

      <style jsx>{`
   p {
    font-family: 'Montserrat', sans-serif;  
  }
  h1 h2 h3 {
    font-family: 'Roboto', sans-serif;
  }

  .stepsRow {
    padding: 50px 0 50px 0;
    
  }




  .headerContainer{
    // height: 1000px;
    margin-bottom: 200px;

    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    // position: relative;
  }

.headerText {
  // color: white;
  // position: relative;
  padding: 50px 100px 50px 100px;
  // color: white;
  width: 40%;

  position: absolute;
  text-transform: uppercase;
  top: 40%;
  // left: 50%;
  transform: translate(0%,-40%);
  color: #fff;

}

.headerText h1{
  font-size: 6em;
}

.headerText p {
  font-size: 1.2em;
}

.headerImg{
  margin-top: 175px;
  
}

.headerImg img{
  width: 60%;
  margin-right: 100px;
}

@media (max-width: 768px) {
  .headerText {
    padding: 0 0 0 0;
    width: 50%;
    margin-left: 25%;
    // margin-top: 100px;

  //   top: 40%;
  // // left: 50%;
  // transform: translate(0%,-40%);
    
  
  }
  .headerText h1{
    font-size: 3em;
  }

  .headerText p{
    font-size: 1em;
  }

  .headerImg {
    
  width: 50%;
  margin-top:50px;

  margin-left: 25%; 
  }

  .headerImg img{
    width: 500px;
    margin-right: 0; 
   }
}


  @media (max-width: 576px) { 
    .headerContainer{
      margin-bottom: 300px;
    }

    .headerImg {
      display: none;
    }
  
  }

        // START WILL BE MOVED OUT - for interactive test form
        input[type=text], select, textarea {
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }

        input[type=submit] {
          width: 100%;
          color: white;
          background: rgb(2,0,36);
          //background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(108,9,121,1) 39%, rgba(255,0,63,1) 100%);
          padding: 14px 20px;
          margin: 8px 0;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        input[type=submit]:hover {
          //background-color: #45a049;
          opacity: 0.7;
          
        }
        // END WILL BE MOVED OUT


        .action-button {
          background-color: Transparent;
          background-repeat:no-repeat;
          cursor:pointer;
          padding: 20px;
          font-weight: heavy;
          overflow: hidden;
          outline:none;
          font-size: .75em;
         
        }

        .white-btn {
          color: white;
          border: 3px solid white;
          background: linear-gradient(to right, #fff 0%, #fff 50%, Transparent 50%, Transparent 100%);
          background-size: 200% 100%;
          background-position: 100% 0;
          transition: background-position 0.3s;
        }

        .black-btn {
          color: black;
          border: 3px solid black;
          background: linear-gradient(to right, #000 0%, #000 50%, Transparent 50%, Transparent 100%);
          background-size: 200% 100%;
          background-position: 100% 0;
          transition: background-position 0.3s;
        }



        .white-btn:hover {
          background-position:0 0;
          color: black;
        }

        .black-btn:hover {
          background-position:0 0;
          color: white;
        }

        .grid-container {
          display: grid;
        }

        .grid-container--fill {
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }

        .grid-container--fit {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .grid-element {
          padding: 50px;
        }

        .dark-background {
          background-color: #36454f;
          color: #fff;
          border: 1px solid #fff;
        }


        
        .header {
          grid-area: header;
        }

        .innerContainer{
          position:absolute;
          top:0;
          width:100%;
        }

        svg {
          display: inline-block;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
        }


        .container {
          display: inline-block;
          position: relative;
          width: 100%;
          padding-bottom: 100%;
          vertical-align: middle;
          overflow: hidden;
        }


        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}
      </style>
    </Layout>
  );
}