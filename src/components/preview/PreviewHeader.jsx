function PreviewHeader({ cvData }) {
	const { fullname, title, email, phone, location, github, linkedin } = cvData;

	return (
		<header className="preview-header">
			<h1 className="preview-header__name">{fullname}</h1>
			<p className="preview-header__title">{title}</p>

			<div className="preview-header__contacts">
				<span>{email}</span>
				<span>{phone}</span>
				<span>{location}</span>
			</div>

			<div className="preview-header__links">
				{github && <span>{github}</span>}
				{linkedin && <span>{linkedin}</span>}
			</div>
		</header>
	);
}

export default PreviewHeader;