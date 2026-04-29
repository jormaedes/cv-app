import { useState } from 'react';
import '../../styles/editor.css';

function ExperienceForm({ experiences, onUpdate, onAdd, onRemove }) {
	const [editingIndex, setEditingIndex] = useState(
		experiences.map(() => false)
	);

	const [newIndexes, setNewIndexes] = useState(new Set());

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
		// se era novo, agora é confirmado
		setNewIndexes(prev => {
			const updated = new Set(prev);
			updated.delete(index);
			return updated;
		});
	};

	const handleAdd = () => {
		onAdd();
		const newIndex = education.length;
		setEditingIndex(prev => [...prev, true]);
		setNewIndexes(prev => new Set([...prev, newIndex]));
	};


	const handleCancel = (index) => {
		if (newIndexes.has(index)) {
			// é novo — remove o item
			onRemove(index);
			setEditingIndex(prev => prev.filter((_, i) => i !== index));
			setNewIndexes(prev => {
				const updated = new Set(prev);
				updated.delete(index);
				return updated;
			});
		} else {
			// é existente — só sai do modo edit
			stopEditing(index);
		}
	};

	const handleRemove = (index) => {
		onRemove(index);
		setEditingIndex(prev => prev.filter((_, i) => i !== index));
	};

	const canDelete = experiences.length > 1;

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

							<div className="form-view__actions">
								<button className="btn btn--edit" onClick={() => startEditing(index)}>
									Edit
								</button>
								{canDelete && (
									<button className="btn btn--delete" onClick={() => handleRemove(index)}>
										Delete
									</button>
								)}
							</div>
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

							<div className="form-edit__actions">
								<button className="btn btn--save" onClick={() => stopEditing(index)}>
									Save
								</button>
								<button className="btn btn--cancel" onClick={() => handleCancel(index)}>
									Cancel
								</button>
							</div>
						</div>
					)}

				</div>
			))}

			<button className="btn btn--add" onClick={handleAdd}>
				+ Add Experience
			</button>
		</div>
	);
}

export default ExperienceForm;