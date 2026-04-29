function PreviewAbout({ about }) {
	if (!about) return null;

	return (
		<section className="preview-section">
			<h2 className="preview-section__title">About</h2>
			<p className="preview-section__text">{about}</p>
		</section>
	);
}

export default PreviewAbout;