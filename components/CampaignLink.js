import Link from 'next/link';


const CampaignLink = props => (

    <Link href="/campaignManagment/[id]" as={`/campaignManagment/${props.id}`}>
    <a>{props.title}</a>
    </Link>

  );

  export default CampaignLink;