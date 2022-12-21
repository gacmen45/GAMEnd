import styles from './Social.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin,faSteamSquare,faXbox,faPlaystation,faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

const githubLogo = <FontAwesomeIcon icon={faGithubSquare} className={styles['social__img']} />
const linkedinLogo = <FontAwesomeIcon icon={faLinkedin} className={styles['social__img']} />
const steamLogo = <FontAwesomeIcon icon={faSteamSquare} className={styles['social__img']} />
const xboxLogo = <FontAwesomeIcon icon={faXbox} className={styles['social__img']} />
const ytLogo = <FontAwesomeIcon icon={faYoutubeSquare} className={styles['social__img']} />
const psLogo = <FontAwesomeIcon icon={faPlaystation} className={styles['social__img']} />

const Social = () => {
	return (
		<div className={styles['social__container']}>
			<a href='https://github.com/gacmen45'>{githubLogo}</a>
			<a href='https://linkedin.com/in/marek-gacek'>{linkedinLogo}</a>
			<a href='https://linkedin.com/in/marek-gacek'>{steamLogo}</a>
			<a href='https://linkedin.com/in/marek-gacek'>{xboxLogo}</a>
			{/* <a href='https://linkedin.com/in/marek-gacek'>{psLogo}</a> */}
			{/* <a href='https://linkedin.com/in/marek-gacek'>{ytLogo}</a> */}
		</div>
	)
}

export default Social
