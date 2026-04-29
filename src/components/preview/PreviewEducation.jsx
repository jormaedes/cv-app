function PreviewEducation({ education }) {
	if (!education.length) return null;

	return (
		<section className="preview-section">
			<h2 className="preview-section__title">Education</h2>

			{education.map((item, index) => (
				<div key={index} className="preview-item">
					<div className="preview-item__header">
						<strong className="preview-item__name">{item.school}</strong>
						<span className="preview-item__dates">{item.start} — {item.end}</span>
					</div>
					<p className="preview-item__sub">{item.degree}</p>
					<p className="preview-item__details">{item.details}</p>
				</div>
			))}
		</section>
	);
}

export default PreviewEducation;