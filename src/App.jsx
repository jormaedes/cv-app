import { useState } from 'react';
import person from './data.js';
import Sidebar from './components/Sidebar.jsx';
import EditorPanel from './components/EditorPanel.jsx';
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

	const addEducation = () => {
		setCvData(prev => ({
			...prev,
			education: [
				...prev.education,
				{ school: '', degree: '', start: '', end: '', details: '' }
			]
		}));
	};

	const addExperience = () => {
		setCvData(prev => ({
			...prev,
			experiences: [
				...prev.experiences,
				{ enterprise: '', position: '', start: '', end: '', responsibilities: '' }
			]
		}));
	};

	const removeEducation = (index) => {
		setCvData(prev => ({
			...prev,
			education: prev.education.filter((_, i) => i !== index)
		}));
	};

	const removeExperience = (index) => {
		setCvData(prev => ({
			...prev,
			experiences: prev.experiences.filter((_, i) => i !== index)
		}));
	};

	return (
		<div className="app">
			<Sidebar
				activeSection={activeSection}
				setActiveSection={setActiveSection}
			/>
			<EditorPanel
				activeSection={activeSection}
				cvData={cvData}
				updateBasicInfo={updateBasicInfo}
				updateEducation={updateEducation}
				updateExperience={updateExperience}
				addEducation={addEducation}
				addExperience={addExperience}
				removeEducation={removeEducation}
				removeExperience={removeExperience}
			/>
			<CVPreview cvData={cvData} />
		</div>
	)
}

export default App
