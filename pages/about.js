import Layout from '../components/MyLayout';
import FormSandBox from '../components/FormSandBox';


export default function About() {
	return (
		<>

			<Layout>
				<div className="bg-light">
					<div className="container py-5">
						<div className="row h-100 align-items-center py-5">
							<div className="col-lg-6">
								<h1 className="display-4">Forms and beyond</h1>
								<p className="lead text-muted mb-0">
                  Paseon can help drive your business forward. Let's build something great together!
								</p>
								{/* <p className="lead text-muted">Snippet by <a href="https://bootstrapious.com/snippets" className="text-muted"> 
									<u>Bootstrapious</u></a> https://bootstrapious.com/p/about-us-page
								</p> */}
							</div>
							<div className="col-lg-6 d-none d-lg-block"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png" alt="" className="img-fluid"/></div>
						</div>
					</div>
				</div> 

				<div className="container py-5">
					<div className="row h-100 align-items-center py-5" style={{textAlign: 'center'}}>
						<p className="lead text-muted mb-0">Paseon offers a suite of tools to help you create and manage online forms. We are here to help whether you need an employee survey, contact form, payment portal, patient information or whatever else you can imagine</p>
					</div>
				</div>

				<div className="bg-white py-5">
					<div className="container py-5">
						<div className="row align-items-center" style={{marginBottom: '100px'}}>
							<div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
								<h2 className="font-weight-light">Keep it simple</h2>
								<p className="font-italic text-muted mb-4">
                  Use Paseon to build forms, analyze submission data, and manage user input all in one easy to use app.
								</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
							</div>
							<div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/></div>
						</div>
						<div className="row align-items-center" style={{marginBottom: '200px'}}>
							<div className="col-lg-5 px-5 mx-auto"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-2_vdgqgn.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/></div>
							<div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
								<h2 className="font-weight-light">Email SMTP services</h2>
								<p className="font-italic text-muted mb-4">
                  All our forms are preconfigured to handle email submission through a secure SMTP Service.  Recipient Emails are encrypted and protected from malicious users
								</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
							</div>
						</div>
            <div className="row align-items-center" style={{marginBottom: '100px'}}>
							<div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
								<h2 className="font-weight-light">Drag and drop</h2>
								<p className="font-italic text-muted mb-4">
                  Choose to use our drag and drop form building tool, or write your own custom HTML, we've got you covered! 
								</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
							</div>
							<div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="../static/images/undraw_work_together_h63l.svg" alt="" className="img-fluid mb-4 mb-lg-0"/></div>
						</div>
					</div>
				</div>

				<div className="bg-light py-5">
					<div className="container py-5">
						<div className="row mb-4">
							<div className="col-lg-5">
								<h2 className="display-4 font-weight-light">Our team</h2>
								<p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							</div>
						</div>

						<div className="row text-center">
							{/* <!-- Team item--> */}
							<div className="col-xl-3 col-sm-6 mb-5">
								<div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
									<h5 className="mb-0">Taylor Pasquariello</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
									<ul className="social mb-0 list-inline mt-3">
										<li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
										<li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
										<li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
										<li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
									</ul>
								</div>
							</div>
							{/* <!-- End--> */}

							{/* <!-- Team item--> */}
							<div className="col-xl-3 col-sm-6 mb-5">
								<div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834132/avatar-4_ozhrib.png " alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
									<h5 className="mb-0">Samuel Hardy</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
									<ul className="social mb-0 list-inline mt-3">
										<li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
										<li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
										<li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
										<li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
									</ul>
								</div>
							</div>
							{/* <!-- End--> */}

							{/* <!-- Team item--> */}
							<div className="col-xl-3 col-sm-6 mb-5">
								<div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
									<h5 className="mb-0">Tom Sunderland</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
									<ul className="social mb-0 list-inline mt-3">
										<li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
										<li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
										<li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
										<li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
									</ul>
								</div>
							</div>
							{/* <!-- End--> */}

							{/* <!-- Team item--> */}
							<div className="col-xl-3 col-sm-6 mb-5">
								<div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-1_s02nlg.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
									<h5 className="mb-0">John Tarly</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
									<ul className="social mb-0 list-inline mt-3">
										<li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
										<li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
										<li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
										<li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
									</ul>
								</div>
							</div>
							{/* <!-- End--> */}
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}

// Paseon offers a suite of tools to build custom Forms, analyze submission data, and manage user input.  Whether your form is a survey, contact form, payment portal, or whatever else you can imagine Paseon can help drive your business forward.
// Each submission gets saved under its associated campaign so you have access to all the data you need, managed in one place.  All our forms are preconfigured to handle email submission through a secure SMTP Service.  

// Keep it simple: 
// Its a core value for Paseon to keep things simple, life is complicated enough as it is so let us take on the complicated stuff. 
// In order to keep things simple we have prebuilt forms that you can use for the most common situations, this includes: 
// RSVP
// Contact Form
// Sign up
// Mailing List

// if you need to make a custom form take advantage of the intuitive drag and drop form builder.  The form builder will show you the RAW HTML you if you choose to make further adjustments.About

// Want to write your own custome HTML but dont want the hassle fo writting a backend? 
// We've got you covered! 
// Simply nest your HTML form within the paseon tags <PaseonForm> ... </PaseonForm> Paseon will capture the event, persist all the data into your account and send any emails out if necessary. 

// Our competitors will force you to use complicated scripts to add forms to your sites or templates, but Paseon believes that your forms are YOUR forms, we will always give you the raw HTML to your forms.

