import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { CompletedChallenges } from '../components/home/CompletedChallenges'
import { ExperienceBar } from '../components/home/ExperienceBar'
import { Profile } from '../components/home/Profile'
import { Countdown } from '../components/home/Countdown'
import { ChallengeBox } from '../components/home/ChallengeBox'
import { AppBar } from '../components/common/AppBar'

import { ChallengesProvider } from '../context/ChallengesContext'
import { CountdownProvider } from '../context/CountdownContext'
import { UserProvider } from '../context/UserContext'
import { UserInformation } from '../types'
import styles from '../styles/pages/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
interface HomeProps {
  level: number;
  currentExperience: number;
  challengeCompleted: number;
  userInformation: UserInformation;
  countdownTime: number;
}

export default function Home({ level, currentExperience, challengeCompleted, userInformation, countdownTime }: HomeProps) {  
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
        
      
        <CountdownProvider countdownTime={countdownTime}>
          <AppBar pageName="home" />
          
          <section>
            <div>
              <UserProvider userInformation={userInformation}>
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
    userInformation,
    countdownTime,
  } = context.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeCompleted: Number(challengeCompleted),
      userInformation: JSON.parse(userInformation),
      countdownTime: Number(countdownTime),
    },
  }
}