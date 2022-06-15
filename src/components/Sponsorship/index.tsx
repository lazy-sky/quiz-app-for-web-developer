import styles from './sponsorship.module.scss'

const Sponsorship = () => {
  return (
    <div className={styles.sponsorship}>
      <a href='https://www.buymeacoffee.com/lazysky' target='_blank' rel='noreferrer'>
        <img src='https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg' alt='Buy me a coffee' />
        <div className='coffeeButtonText'>하늘이한테 커피 사주기</div>
      </a>
    </div>
  )
}

export default Sponsorship
