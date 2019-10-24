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
            My Custom Forms:
        </LayoutApp>

    )

}