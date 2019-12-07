const Loading = props => (
    <>
    <div class="spinner-grow text-danger" role="status">
        <span class="sr-only">Loading...</span>
    </div>

    <style jsx>
            {`
    .centered {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
`}
    </style>
    </>
);

export default Loading;