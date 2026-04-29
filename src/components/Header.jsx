function Header() {
	const handlePrint = () => window.print();

	return (
		<header className="app-header">
			<span className="app-header__logo">ResumeBuilder</span>

			<div className="app-header__actions">

				<button className="btn btn--print" onClick={handlePrint}>
					Save PDF
				</button>
			</div>
		</header>
	);
}

export default Header;