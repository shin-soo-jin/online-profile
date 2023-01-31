import portfolioGuide from '../asset/pdf/shinsoojin_portfolio-guide.pdf';
import { faDownload, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project() {
	return (
		<section className='project'>
			<h2>Project</h2>
			<div>
				<h3>기업형 레이아웃 페이지</h3>
				<p>HTML을 사용하여 기업형 홈페이지를 제작했습니다</p>
				<p>HTML5, CSS3, JS 활용</p>
				{/* <ul>
        <li>
          <a target='_blank' rel='noreferrer' title='홈페이지 바로가기'>
            <FontAwesomeIcon icon={faHome} />
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' title='깃허브 바로가기'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a download title='프로젝트 가이드 다운로드'>
            <FontAwesomeIcon icon={faDownload} />
          </a>
        </li>
      </ul> */}
			</div>

			<div>
				<h3>기업형 레이아웃 페이지</h3>
				<p>React를 사용하여 기존 HTML 기업형 홈페이지를 변환해 제작했습니다</p>
				<p>React17, Redux, Redux-saga 활용</p>
				<ul>
					<li>
						<a
							href='https://shin-soo-jin.github.io/corporate-react/'
							target='_blank'
							rel='noreferrer'
							title='홈페이지 바로가기'
						>
							{/* <FontAwesomeIcon icon={faWindowRestore} /> */}
							<FontAwesomeIcon icon={faHome} />
						</a>
					</li>
					<li>
						<a
							href='https://github.com/shin-soo-jin/corporate-react.git'
							target='_blank'
							rel='noreferrer'
							title='깃허브 바로가기'
						>
							<FontAwesomeIcon icon={faGithub} />
						</a>
					</li>
					<li>
						{/* <a href={portfolioGuide} target='_blank' rel='noreferrer'> */}
						<a href={portfolioGuide} download title='프로젝트 가이드 다운로드'>
							<FontAwesomeIcon icon={faDownload} />
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Project;
