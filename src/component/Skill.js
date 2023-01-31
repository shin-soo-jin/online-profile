import html5Icon from '../asset/icon/icon_html5.svg';
import css3Icon from '../asset/icon/icon_css3.svg';
import jsIcon from '../asset/icon/icon_javascript.svg';
import reactIcon from '../asset/icon/icon_react.svg';
import reduxIcon from '../asset/icon/icon_redux.svg';

function Skill() {
	return (
		<section className='skill'>
			<h2>Skill</h2>
			<ul>
				<li>
					<img src={html5Icon} alt='html5' />
				</li>
				<li>
					<img src={css3Icon} alt='css3' />
				</li>
				<li>
					<img src={jsIcon} alt='javascript' />
				</li>
				<li>
					<img src={reactIcon} alt='react' />
				</li>
				<li>
					<img src={reduxIcon} alt='redux' />
				</li>
			</ul>
		</section>
	);
}

export default Skill;
