function Sidebar({activeSection, setActiveSection}) {
	const sections = [
		{ id: 'basic', label: 'Basic Info'},
		{ id: 'education', label: 'Education'},
		{ id: 'experience', label: 'Experience'}
	];

	return (
		<div className="sidebar">
			<h1 className="sidebar__logo">ResumeBuilder</h1>
			
			<nav>
				 <p className="sidebar__label">EDITOR STEPS</p>
				 {
					sections.map(section => (
						<button
							key={section.id}
							className={`sidebar__item ${activeSection === section.id ? 'sidebar__item--active' : ''}`}
							onClick={setActiveSection(section.id)}
						>
							{section.label}
						</button>
					))
				 }
			</nav>
		</div>
	);
}

export default Sidebar;