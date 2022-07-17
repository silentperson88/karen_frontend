import Image from 'next/image'
import styles from '../styles/components/Carousel.module.scss'

export default function Carousel() {
    return (
        <div className={styles.container}>
            <Image 
                src="/family.jpg" 
                alt='family of four walking in the street' 
                layout='fill' 
                objectFit='cover'
                priority
            />
        </div>
    )
}