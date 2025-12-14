const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '40px',
        }}>
        <span
          style={{
            borderBottom: 0,
            borderRight: '1px solid #EAEAEA',
            padding: '0 20px 0 0',
            width: 'auto',
          }}>
          404
        </span>
        <p
          style={{
            height: '100%',
            lineHeight: '40px',
            paddingLeft: '20px',
            margin: '0',
          }}>
          The requested path could not be found
        </p>
      </section>
    </div>
  );
};

export default NotFound;
