import { ArrowUpRight } from 'lucide-react'
import { treatments } from '../../data/content'
import Reveal from '../Reveal/Reveal'
import skinImage from '../../assets/images/treatment-skin.jpg'
import movementImage from '../../assets/images/treatment-movement.jpg'
import styles from './Treatments.module.css'
const imageMap = { skin: skinImage, movement: movementImage }
function Treatments() { return <section id="treatments" className={`section ${styles.section}`} aria-labelledby="treatments-title"><Reveal className={styles.heading}><div><p className="eyebrow">Explore with intention</p><h2 id="treatments-title">A more personalized<br />approach to <em>wellness.</em></h2></div><p>Thoughtful starting points for the conversations that matter most to you.</p></Reveal><div className={styles.grid}>{treatments.map((item, index) => <Reveal key={item.title} delay={index * 0.06}><article className={`${styles.card} ${styles[item.tone]}`}><div className={styles.cardImage}>{imageMap[item.image] ? <img src={imageMap[item.image]} alt="" loading="lazy" /> : <div className={styles.abstract} aria-hidden="true"><span /></div>}<span>{item.number}</span></div><div className={styles.cardBody}><h3>{item.title}</h3><p>{item.description}</p><a href="#final-cta" aria-label={`Learn more about ${item.title}`}>Learn more <ArrowUpRight size={16} /></a></div></article></Reveal>)}</div></section> }
export default Treatments
