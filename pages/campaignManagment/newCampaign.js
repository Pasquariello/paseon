import Link from 'next/link';
import LayoutApp from '../../components/LayoutApp'


export default function NewCampaign() {
   
    return (
        <LayoutApp>
     
            <div>
                <div style={{marginBottom: '50px'}}>
                    <h3>New Campaign</h3>
                </div>
                <form>
                    <div className="form-group">
                        <label for="inputEmail4">Campaign Name</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="Campaign Name"></input>
                    </div>
                    <div className="form-group">
                        <label for="inputPassword4">Recipient Email</label>
                        <input type="text" className="form-control" id="inputPassword4" placeholder="Recipient Email"></input>
                    </div>
                    <div className="form-group">
                        <label for="inputState">Form Type</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>Basic Contact</option>
                            <option>Basic RSVP</option>
                            <option>Basic Sign Up</option>
                            <option>Basic Mailing List</option>
                            <option>Custom</option>
                        </select>                    
                    </div>
                    {/* If custom let them set fields here! so backend can pick up what to do with it all */}
                    <input className="btn btn-primary" type="submit"/>
                </form>
            </div>
       
        </LayoutApp>

    )

}