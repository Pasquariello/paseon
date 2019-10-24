import Layout from '../components/MyLayout';
import Link from 'next/link';
import LayoutApp from '../components/LayoutApp'
import QuickAnalytics from '../components/QuickAnalytics';


export default function Account() {
    let quickAnalyticsData = [
        {
          title: 'Account Type',
          body: 'Gold Tier',
  
        },
        {
          title: 'TOTAL FORMS MANAGED',
          body: '6'
        },
        {
          title: 'TOTAL MONTHLY SUBMISSIONS',
          body: '50%'
        },
        {
          title: 'TOTAL MONTHLY SUBMISSIONS',
          body: '50%'
        },
      ]
    return (
        <LayoutApp>
            <QuickAnalytics
                data={quickAnalyticsData}
            />
            <div style={{marginTop: '50px'}}>
                <h3>Basic Account Information</h3>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputCompany">Company</label>
                        <input type="text" class="form-control" id="inputCompany" placeholder="TaylorPasqLLC"></input>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control" id="inputCity"></input>
                        </div>
                        <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                        </div>
                        <div class="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" class="form-control" id="inputZip"></input>
                        </div>
                    </div>
                </form>
            </div>
       
        </LayoutApp>

    )

}