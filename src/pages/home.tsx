import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { Countdown } from '../components/Countdown'
import { ChallengeBox } from '../components/ChallengeBox'

import styles from '../styles/pages/Home.module.css'
import { ChallengesProvider } from '../context/ChallengesContext'
import { CountdownProvider } from '../context/CountdowContext'
import { UserProvider } from '../context/UserContext'
import { UserInformations } from '../types'

interface HomeProps {
  level: number;
  currentExperience: number;
  challengeCompleted: number;
  userInformations: UserInformations;
}

export default function Home({ level, currentExperience, challengeCompleted, userInformations }: HomeProps) {  
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengeCompleted={challengeCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | Moveit</title>
        </Head>
        
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <UserProvider userInformations={userInformations}>
                <Profile />
              </UserProvider>
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    level,
    currentExperience,
    challengeCompleted,
    userInformations,
  } = context.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeCompleted: Number(challengeCompleted),
      userInformations: JSON.parse(userInformations),
    },
  }
}