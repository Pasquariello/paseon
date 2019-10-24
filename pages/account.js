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
       
        </LayoutApp>

    )

}