import { useRouter } from 'next/router'
//test1@test.com
function PaymentSuccess (props) {
    const router = useRouter();

    // // Fetch CheckoutSession from static page via
    // // https://nextjs.org/docs/basic-features/data-fetching#static-generation
    // const { data, error } = useSWR(
    //   router.query.session_id
    //     ? `/api/checkout_sessions/${router.query.session_id}`
    //     : null,
    //   fetchGetJSON
    // );
  
    // if (error) return <div>failed to load</div>;
  
    return (
      <>
        <h1>Checkout Payment Result</h1>
        {/* <h2>Status: {data?.payment_intent?.status ?? 'loading...'}</h2> */}
        <p>
          Your Checkout Session ID:{' '}
          <code>{router.query.session_id ?? 'loading...'}</code>
        </p>
        <p>
          {/* <Link href="/">
            <a>Go home</a>
          </Link> */}
        </p>
      </>
    );
}

export default PaymentSuccess;
