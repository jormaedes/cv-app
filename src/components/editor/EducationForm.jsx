import { useState } from 'react';
import '../../styles/editor.css';

function EducationForm({ education, onUpdate, onAdd, onRemove }) {
	const [editingIndex, setEditingIndex] = useState(
		education.map(() => false)
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
		setNewIndexes(prev => {
			const updated = new Set(prev);
			updated.delete(index);
			return updated;
		});
	};

	const handleAdd = () => {
		const newIndex = education.length;
		onAdd();
		setEditingIndex(prev => [...prev, true]);
		setNewIndexes(prev => new Set([...prev, newIndex]));
	};

	const handleCancel = (index) => {
		if (newIndexes.has(index)) {
			onRemove(index);
			setEditingIndex(prev => prev.filter((_, i) => i !== index));
			setNewIndexes(prev => {
				const updated = new Set(prev);
				updated.delete(index);
				return updated;
			});
		} else {
			stopEditing(index);
		}
	};

	const handleRemove = (index) => {
		onRemove(index);
		setEditingIndex(prev => prev.filter((_, i) => i !== index));
		setNewIndexes(prev => {
			const updated = new Set(prev);
			updated.delete(index);
			return updated;
		});
	};

	const canDelete = education.length > 1;

	return (
		<div className="form-list">
			{education.map((item, index) => (
				<div key={index} className="form-list__item">

					{!editingIndex[index] ? (
						<div className="form-view">
							<div className="form-view__field">
								<span className="form-view__label">School</span>
								<span className="form-view__value">{item.school}</span>
							</div>
							<div className="form-view__field">
								<span className="form-view__label">Degree</span>
								<span className="form-view__value">{item.degree}</span>
							</div>
							<div className="form-view__field">
								<span className="form-view__label">Period</span>
								<span className="form-view__value">{item.start} — {item.end}</span>
							</div>
							<div className="form-view__field">
								<span className="form-view__label">Details</span>
								<span className="form-view__value">{item.details}</span>
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
								<label>School</label>
								<input
									type="text"
									value={item.school}
									onChange={e => onUpdate(index, 'school', e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label>Degree</label>
								<input
									type="text"
									value={item.degree}
									onChange={e => onUpdate(index, 'degree', e.target.value)}
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
								<label>Details</label>
								<textarea
									value={item.details}
									onChange={e => onUpdate(index, 'details', e.target.value)}
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
				+ Add Education
			</button>
		</div>
	);
}

export default EducationForm;