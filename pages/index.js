import Layout from '../components/MyLayout';
import Link from 'next/link';

// function getPosts() {
//   return [
//     { id: 'hello-nextjs', title: 'Hello Next.js' },
//     { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
//     { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
//   ];
// }

export default function Blog() {

 
  function initDivMouseOver()   {
     var div = document.getElementById("mydiv");
     div.mouseIsOver = false;
     div.onmouseover = function()   {
        this.mouseIsOver = true;
     };
     div.onmouseout = function()   {
        this.mouseIsOver = false;
     }
     div.onclick = function()   {
        if (this.mouseIsOver)   {
           console.log('here!')
        }
     }
  }
  

  return (
    <Layout>


      {/*  */}
      {/* <div style={{position: 'relative', width:'100%', height:'500px', border: '1px solid blue'}}>
      <div className="container">
        <div className="innerContainer"><h1>Hello</h1></div>
  <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
    <path d="M0,200 C250,300 350,0 600,300 L500,00 L0,0 Z0" style={{stroke: 'none', fill:'red'}}></path>
  </svg>
</div>
</div> */}
<div id="mydiv" className="" style={{width:'100%', height:'700px'}} onMouseEnter={()=>console.log('hi')}>

<div style={{position: 'relative', margin: '50px 0 30px 30px', color: 'white', width: '40%', padding: '20px'}}>
<h1 style={{fontSize: "6em", margin:"0 0 10px 0"}}>PASEON</h1>
<p  style={{fontSize: '1.2em'}}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
<button className="action-button">LEARN MORE</button>
</div>
<div>
  <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%',}}>
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
  
</div>

 
</div>



<div className="grid-container grid-container--fill" style={{width: '70%', marginLeft:'15%'}}>
  <div className="grid-element">
    1 ro eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
  </div>
  <div className="grid-element">
    2 ro eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
  </div>
  <div className="grid-element">
    3 ro eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
  </div>
  <div className="grid-element">
    4 ro eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
  </div>

</div>


<div style={{marginTop: '200px', height: '650px', border: '1px solid black', width: '80%', marginLeft:'10%'}}>

</div>

<div style={{margin: '200px 0 0 0', height: '300px', width: '100%',backgroundImage: "linear-gradient(to right, #f9d423 0%, #f83600 100%)"}}>

</div>
{/* M0,180 C250,400 350,0 600,320 L500,00 L0,0 Z0 */}

{/* M0.00,100.27 C216.83,240 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z */}

{/* M0,200 C250,300 350,0 600,300 L500,00 L0,0 Z0 */}
      {/* <h1>My Blog</h1>
      <ul>
        {getPosts().map(post => (
          <li key={post.id}>
            <Link href="/p/[id]" as={`/p/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul> */}
      <style jsx>{`

// 
.action-button {
  background-color: Transparent;
  background-repeat:no-repeat;
  cursor:pointer;
  padding: 20px;
  color: white;
  font-weight: heavy;
  border: 3px solid white;
  overflow: hidden;
  outline:none;
  background: linear-gradient(to right, #fff 0%, #fff 50%, Transparent 50%, Transparent 100%);

  background-size: 200% 100%;
  background-position: 100% 0;
  transition: background-position 0.3s;
}



.action-button:hover {
  background-position:0 0;
  color: black;

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
background-color: #E3E3E3;
padding: 50px;
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
      `}</style>
    </Layout>
  );
}