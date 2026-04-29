import PreviewHeader from './preview/PreviewHeader.jsx';
import PreviewAbout from './preview/PreviewAbout.jsx';
import PreviewEducation from './preview/PreviewEducation.jsx';
import PreviewExperience from './preview/PreviewExperience.jsx';
import '../styles/preview.css';

function CVPreview({ cvData }) {
	return (
		<div className="cv-preview">
			<div className="cv-document">
				<PreviewHeader cvData={cvData} />
				<PreviewAbout about={cvData.about} />
				<PreviewEducation education={cvData.education} />
				<PreviewExperience experiences={cvData.experiences} />
			</div>
		</div>
	);
}

export default CVPreview;