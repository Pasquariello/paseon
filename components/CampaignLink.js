import Link from 'next/link';


const CampaignLink = props => (

    <Link href={`/${props.directory}/[id]`}  as={`/${props.directory}/${props.id}`}>
    <a>{props.title}</a>
    {/* "/campaignManagment/[id]" */}
    </Link>

  );

  export default CampaignLink;