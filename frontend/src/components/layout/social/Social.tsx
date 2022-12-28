import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import styles from './Social.module.scss'

interface Props {
	className: string
}

const Social = (props: Props) => {
	const splitClass = `${styles['social__img']} ${props.className}`
	const githubLogo = <FontAwesomeIcon icon={faGithubSquare} className={splitClass} />
	const linkedinLogo = <FontAwesomeIcon icon={faLinkedin} className={splitClass} />
	return (
		<div className={styles['social__container']}>
			<a href='https://github.com/gacmen45'>{githubLogo}</a>
			<a href='https://linkedin.com/in/marek-gacek'>{linkedinLogo}</a>
		</div>
	)
}

export default Social
