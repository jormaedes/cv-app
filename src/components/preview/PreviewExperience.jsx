function PreviewExperience({ experiences }) {
	if (!experiences.length) return null;

	return (
		<section className="preview-section">
			<h2 className="preview-section__title">Experience</h2>

			{experiences.map((item, index) => (
				<div key={index} className="preview-item">
					<div className="preview-item__header">
						<strong className="preview-item__name">{item.position}</strong>
						<span className="preview-item__dates">{item.start} — {item.end}</span>
					</div>
					<p className="preview-item__sub">{item.enterprise}</p>
					<p className="preview-item__details">{item.responsibilities}</p>
				</div>
			))}
		</section>
	);
}

export default PreviewExperience;