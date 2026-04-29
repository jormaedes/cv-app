import { useState } from 'react';

function ExperienceForm({ experiences, onUpdate }) {
	const [editingIndex, setEditingIndex] = useState(
		experiences.map(() => false)
	);

	const startEditing = (index) => {
		setEditingIndex(prev => {
			const updated = [...prev];
			updated[index] = true;
			return updated;
		});
	};

	const stopEditing = (index) => {
		setEditingIndex(prev => {
			const updated = [...prev];
			updated[index] = false;
			return updated;
		});
	};

	return (
		<div className="form-list">
			{experiences.map((item, index) => (
				<div key={index} className="form-list__item">

					{!editingIndex[index] ? (
						<div className="form-view">
							<div className="form-view__field">
								<span className="form-view__label">Company</span>
								<span className="form-view__value">{item.enterprise}</span>
							</div>
							<div className="form-view__field">
								<span className="form-view__label">Position</span>
								<span className="form-view__value">{item.position}</span>
							</div>
							<div className="form-view__field">
								<span className="form-view__label">Period</span>
								<span className="form-view__value">{item.start} — {item.end}</span>
							</div>
							<div className="form-view__field">
								<span className="form-view__label">Responsibilities</span>
								<span className="form-view__value">{item.responsibilities}</span>
							</div>

							<button className="btn btn--edit" onClick={() => startEditing(index)}>
								Edit
							</button>
						</div>

					) : (
						<div className="form-edit">
							<div className="form-group">
								<label>Company</label>
								<input
									type="text"
									value={item.enterprise}
									onChange={e => onUpdate(index, 'enterprise', e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label>Position</label>
								<input
									type="text"
									value={item.position}
									onChange={e => onUpdate(index, 'position', e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label>Start</label>
								<input
									type="text"
									value={item.start}
									onChange={e => onUpdate(index, 'start', e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label>End</label>
								<input
									type="text"
									value={item.end}
									onChange={e => onUpdate(index, 'end', e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label>Responsibilities</label>
								<textarea
									value={item.responsibilities}
									onChange={e => onUpdate(index, 'responsibilities', e.target.value)}
								/>
							</div>

							<button className="btn btn--save" onClick={() => stopEditing(index)}>
								Save
							</button>
						</div>
					)}

				</div>
			))}
		</div>
	);
}

export default ExperienceForm;