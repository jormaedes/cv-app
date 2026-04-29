import { useState } from 'react'
import person from './data'
import './App.css'

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
			updated[index] = {...updated[index], [field]: value};
			return { ...prev, experiences: updated};
		});
	}


	return (
		<>
			<h1>{person.fullname}</h1>
		</>
	)
}

export default App
