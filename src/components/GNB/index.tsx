import { Link, useLocation, matchRoutes } from 'react-router-dom'
import cx from 'classnames'

import styles from './gNB.module.scss'
import { HomeIcon, PencilIcon, PersonIcon } from 'assets'

const GNB = () => {
  const location = useLocation()

  const checkIsActive = (path: string) => {
    return matchRoutes([{ path: `/${path}/*` }], location)
  }

  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link to='/' className={cx(checkIsActive('/') && styles.active)}>
            <HomeIcon />
          </Link>
        </li>
        <li>
          <Link to='quiz/a' className={cx(checkIsActive('quiz') && styles.active)}>
            <PencilIcon />
          </Link>
        </li>
        <li>
          <Link to='contact' className={cx(checkIsActive('/contact') && styles.active)}>
            <PersonIcon />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default GNB
