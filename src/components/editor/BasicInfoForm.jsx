import { useState } from 'react';
import '../../styles/editor.css';

function BasicInfoForm({ data, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);

  if (!isEditing) {
    return (
      <div className="form-view">
        <div className="form-view__field">
          <span className="form-view__label">Full Name</span>
          <span className="form-view__value">{data.fullname}</span>
        </div>
        <div className="form-view__field">
          <span className="form-view__label">Title</span>
          <span className="form-view__value">{data.title}</span>
        </div>
        <div className="form-view__field">
          <span className="form-view__label">Email</span>
          <span className="form-view__value">{data.email}</span>
        </div>
        <div className="form-view__field">
          <span className="form-view__label">Phone</span>
          <span className="form-view__value">{data.phone}</span>
        </div>
        <div className="form-view__field">
          <span className="form-view__label">Location</span>
          <span className="form-view__value">{data.location}</span>
        </div>
        <div className="form-view__field">
          <span className="form-view__label">GitHub</span>
          <span className="form-view__value">{data.github}</span>
        </div>
        <div className="form-view__field">
          <span className="form-view__label">LinkedIn</span>
          <span className="form-view__value">{data.linkedin}</span>
        </div>
        <div className="form-view__field">
          <span className="form-view__label">About</span>
          <span className="form-view__value">{data.about}</span>
        </div>

        <button className="btn btn--edit" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </div>
    );
  }

  return (
    <div className="form-edit">
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          value={data.fullname}
          onChange={e => onUpdate('fullname', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={data.title}
          onChange={e => onUpdate('title', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={data.email}
          onChange={e => onUpdate('email', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          value={data.phone}
          onChange={e => onUpdate('phone', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Location</label>
        <input
          type="text"
          value={data.location}
          onChange={e => onUpdate('location', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>GitHub</label>
        <input
          type="text"
          value={data.github}
          onChange={e => onUpdate('github', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>LinkedIn</label>
        <input
          type="text"
          value={data.linkedin}
          onChange={e => onUpdate('linkedin', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>About</label>
        <textarea
          value={data.about}
          onChange={e => onUpdate('about', e.target.value)}
        />
      </div>

      <button className="btn btn--save" onClick={() => setIsEditing(false)}>
        Save
      </button>
    </div>
  );
}

export default BasicInfoForm;