import BasicInfoForm from './editor/BasicInfoForm.jsx';
import EducationForm from './editor/EducationForm.jsx';
import ExperienceForm from './editor/ExperienceForm.jsx';

function EditorPanel({ activeSection, cvData, updateBasicInfo, updateEducation, updateExperience }) {
	
	const sectionInfo = {
		basic: {
			title: 'Basic Information',
			subtitle: 'Enter your basic information.',
		},
		education: {
			title: 'Education',
			subtitle: 'Enter your educational experience.',
		},
		experience: {
			title: 'Experience',
			subtitle: 'Enter your practical experience.',
		},
	};

	const renderForm = () => {
		if (activeSection === 'basic') {
			return (
				<BasicInfoForm
					data={cvData}
					onUpdate={updateBasicInfo}
				/>
			);
		}

		if (activeSection === 'education') {
			return (
				<EducationForm
					education={cvData.education}
					onUpdate={updateEducation}
				/>
			);
		}

		if (activeSection === 'experience') {
			return (
				<ExperienceForm
					experiences={cvData.experiences}
					onUpdate={updateExperience}
				/>
			);
		}
	};

	return (
		<div className="editor-panel">
			<div className="editor-panel__header">
				<h2>{sectionInfo[activeSection].title}</h2>
				<p>{sectionInfo[activeSection].subtitle}</p>
			</div>

			<div className="editor-panel__content">
				{renderForm()}
			</div>
		</div>
	);
}

export default EditorPanel;