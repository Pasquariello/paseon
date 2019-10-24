import Layout from '../components/MyLayout';
import Link from 'next/link';
import LayoutApp from '../components/LayoutApp'
import QuickAnalytics from '../components/QuickAnalytics';


export default function ManagedForms() {
    let quickAnalyticsData = [
        {
          title: 'Contact Form',
  
        },
        {
          title: 'Sign Up Form',
        },
        {
          title: 'RSVP From',
        },
    ]

    return (
        <LayoutApp>
            Basic Form Options:
            <QuickAnalytics
                data={quickAnalyticsData}
            />
            <div className="row" style={{marginTop: '50px'}}>
                <div className="col-md-6" style={{padding: '20px'}}>
                    <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src="../static/images/undraw_creative_process_q6aw.svg" alt=""></img>
                </div>
                <div className="col-md-6" style={{padding: '20px'}}>
                    <h3>Manage Your Assets</h3> 
                    <p>Lorem ipsum dolor sit amet, mel te prima assentior suscipiantur, et sumo ridens commodo nec. Vel no solet animal scaevola, et discere singulis aliquando vix, mentitum postulant constituam ei cum.</p>
                </div>
            </div>
            My Custom Forms:

            <p>this is 1</p>
            <p>this is 1</p>
            <p>this is 1</p>
            <p>this is 1</p>
            <p>this is 1</p>
            <p>this is 1</p>
            <p>this is 1</p>
            <p>this is 1</p>
            <p>this is 1</p>
            <p>this is 1</p>
            <p>this is 1</p>
            <p>this is 1</p>
            <p>this is 1</p>
            <p>this is 1</p>
            <p>this is 1</p>
            <p>this is 1</p>
            
        </LayoutApp>

    )

}