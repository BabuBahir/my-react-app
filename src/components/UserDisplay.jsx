import '../App.css'

function UserDisplay({ data }) {
  return (
    <section id="center" className="about-section">
      <h1>Display Info</h1>
      {data ? (
        <div className="success-message" style={{ margin: '0 auto' }}>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Country:</strong> {data.country}</p>
          <p><strong>Gender:</strong> {data.gender}</p>
          {data.sport && <p><strong>Favorite Sport:</strong> {data.sport}</p>}
          {data.age && <p><strong>Age:</strong> {data.age}</p>}
          {data.hobby && <p><strong>Favorite Hobby:</strong> {data.hobby}</p>}
          {data.city && <p><strong>City:</strong> {data.city}</p>}
        </div>
      ) : (
        <p>No data submitted yet.</p>
      )}
    </section>
  )
}

export default UserDisplay;
