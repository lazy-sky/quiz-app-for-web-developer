import PageHeader from 'components/PageHeader'
import { GithubIcon, KakaoIcon, MeerkatIcon } from 'assets/images/svgs'

import styles from './contact.module.scss'

const Maker = () => {
  return (
    <div>
      <PageHeader title='Contact' />
      <main>
        <div className={styles.maker}>
          <div className={styles.logo}>
            <a href='https://github.com/lazy-sky' target='_blank' rel='noreferrer'>
              <MeerkatIcon />
            </a>
          </div>
          <p className={styles.message}>
            원하는 퀴즈 추가 등 문의 사항 및 요구 사항은 깃허브 혹은 오픈 카톡으로 연락주세요!
          </p>
          <div className={styles.contacts}>
            <div>
              <a href='https://github.com/lazy-sky' target='_blank' rel='noreferrer'>
                <GithubIcon />
              </a>
              <a href='https://open.kakao.com/o/siQfK7ke' target='_blank' rel='noreferrer'>
                <KakaoIcon />
              </a>
            </div>
            <div className={styles.copyright}>ⓒ 2022. @lazy-sky. all rights reserved.</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Maker
