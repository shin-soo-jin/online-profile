import coverLetter from '../asset/pdf/shinsoojin_cover-letter.pdf';

function Profile() {
	return (
		<section className='profile'>
			<h2>Profile</h2>

			<ul>
				<li>전화번호: 010-8858-8321</li>
				<li>이메일: 1tnwls02@naver.com</li>
				<li>주소: 경기도 부천시</li>
				<li>
					{/* <a href={coverLetter} target='_blank' rel='noreferrer'> */}
					<a href={coverLetter} download>
						자기소개서 다운로드
					</a>
				</li>
			</ul>
		</section>
	);
}

export default Profile;
