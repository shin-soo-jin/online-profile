import Skill from './component/Skill';
import Project from './component/Project';
import Profile from './component/Profile';
import Visual from './component/Visual';
import './scss/style.scss';

function App() {
	return (
		<>
			<Visual />
			<Profile />
			<Project />
			<Skill />
		</>
	);
}

export default App;
