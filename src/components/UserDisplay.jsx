import '../App.css'

function UserDisplay({ data }) {
  return (
    <section id="center" className="about-section">
      <h1>Display Info</h1>
      {data ? (
        <div className="success-message" style={{ margin: '0 auto' }}>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Country:</strong> {data.country}</p>
        </div>
      ) : (
        <p>No data submitted yet.</p>
      )}
    </section>
  )
}

export default UserDisplay;
