import BackButton from './BackButton'

import styles from './pageHeader.module.scss'

interface IPageHeaderProps {
  title: string
  hasBackBtn?: boolean
  children?: React.ReactNode
}

const PageHeader = ({ title, hasBackBtn, children }: IPageHeaderProps) => {
  return (
    <header className={styles.header}>
      {hasBackBtn && (
        <div className={styles.backBtn}>
          <BackButton />
        </div>
      )}
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.children}>{children}</div>
    </header>
  )
}

export default PageHeader
