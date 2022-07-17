import { Fragment } from 'react'
import Carousel from '../components/Carousel'
import useSidebar from '../hooks/useSidebar'
import SidebarButton from '../components/SidebarButton'

import styles from '../styles/pages/Home.module.scss'

export default function Home({ name, dob, story }) {
  const [active, toggleSidebar] = useSidebar(true)

  const handleStoryType = (type) => {
    // will be pluged into a backend
  }

  return (
    <Fragment>
      <section className={styles.hero}>
        <div className={`${styles.left} ${active ? styles.show : ''}`}>
          <button onClick={() => handleStoryType('in-memory')}>In Memory</button>
          <button onClick={() => handleStoryType('missing')}>Missing</button>
          <button onClick={() => handleStoryType('heroes')}>Heroes</button>
          <button onClick={() => handleStoryType('our-lives-now')}>Our lives now</button>
          <button onClick={() => handleStoryType('animals')}>Animals</button>
          {active && 
          <button onClick={toggleSidebar} className={styles.hideButton}>X</button>
          }
        </div>
        {!active &&        
        <SidebarButton toggleSidebar={toggleSidebar} />  
        }
        <div className={styles.right}>
          <Carousel />
        </div>
      </section>
      <section className={styles.description}>
        <div className={styles.name}>
          <span>
            {name}
          </span>
        </div>
        <p className={styles.dob}>
          {dob}
        </p>
        <div className={styles.story}>
          {/* This regex match splits the story component into parts of equal length */}
          {story.match(/[\s\S]{1,280}/g).map(part => (
            <p key={part.substring(0, 16)}>
              {part}
            </p>
          ))}
        </div>
      </section>
    </Fragment>
  )
}

export async function getStaticProps() {
  return {
    props: {
      name: "John Brown",
      dob: "06-16-1987",
      story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus odio nibh, et vehicula neque sollicitudin vel. Aliquam erat volutpat. Sed efficitur libero vitae ante fermentum ultricies. Donec fringilla diam ac magna viverra placerat. Duis vel magna dui. Suspendisse a sodales ligula. Vestibulum justo risus, feugiat et nulla nec, varius vestibulum nisl. Sed efficitur libero vitae ante fermentum ultricies. Donec fringilla diam ac magna viverra placerat.",
    },
  }
}