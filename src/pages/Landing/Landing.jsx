import styles from './Landing.module.css'
import BottomNav from '../../components/NavBar/BottomNav'

const Landing = ({ user }) => {
  return (
    <>
      <main className={styles.container}>
        <h1>hello, {user ? user.name : 'friend'}</h1>
        <BottomNav />
      </main>
    </>
  )
}

export default Landing
