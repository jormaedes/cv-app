import { useState } from 'react';
import person from './data.js';
import Sidebar from './components/Sidebar.jsx';
import CVPreview from './components/CVPreview.jsx';
import './App.css';

function App() {
	const [cvData, setCvData] = useState(person);
	const [activeSection, setActiveSection] = useState('basic');

	const updateBasicInfo = (field, value) => {
		setCvData(prev => ({ ...prev, [field]: value }));
	}

	const updateEducation = (index, field, value) => {
		setCvData(prev => {
			const updated = [...prev.education];
			updated[index] = { ...updated[index], [field]: value };
			return { ...prev, education: updated };
		});
	}

	const updateExperience = (index, field, value) => {
		setCvData(prev => {
			const updated = [...prev.experiences];
			updated[index] = { ...updated[index], [field]: value };
			return { ...prev, experiences: updated };
		});
	}

	return (
		<div className="app">
			<Sidebar
				activeSection={activeSection}
				setActiveSection={setActiveSection}
			/>
			<CVPreview cvData={cvData} />
		</div>
	)
}

export default App
