import '../App.css';

function GenderModal({ isOpen, onClose, title, userName, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title} for {userName}</h2>
        {children}
        <button className="counter" onClick={onClose} style={{ marginTop: '10px' }}>
          Close
        </button>
      </div>
    </div>
  );
}

export default GenderModal;
