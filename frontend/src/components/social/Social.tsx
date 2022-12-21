import styles from './Social.module.scss'

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faGithubSquare,faLinkedin } from "@fortawesome/free-brands-svg-icons"

  const githubLogo = <FontAwesomeIcon icon={faGithubSquare} className={styles['social__img']} />
  const linkedinLogo = <FontAwesomeIcon icon={faLinkedin} className={styles['social__img']} />

const Social = () => {
	return (
		<div className={styles['social__container']}>
			<a href='https://github.com/gacmen45'>{githubLogo}</a>
            <a href='https://linkedin.com/in/marek-gacek'>{linkedinLogo}</a>
		</div>
	)
}

export default Social
