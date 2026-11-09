import { ArrowUpRight } from 'lucide-react'
import { testimonials } from '../../data/content'
import Reveal from '../Reveal/Reveal'
import styles from './Testimonials.module.css'
function Testimonials() { return <section className={`section ${styles.section}`} aria-labelledby="stories-title"><Reveal className={styles.head}><p className="eyebrow">A softer point of view</p><h2 id="stories-title">A wellness experience<br />that meets you <em>where you are.</em></h2></Reveal><div className={styles.cards}>{testimonials.map((item, i) => <Reveal key={i} delay={i * .1} className={styles.card}><span className={styles.mark}>“</span><blockquote>{item.quote}</blockquote><div><strong>{item.name}</strong><small>{item.detail}</small></div></Reveal>)}</div><Reveal><a href="#final-cta" className="textLink">Explore what a more personal approach could look like <ArrowUpRight size={16} /></a></Reveal></section> }
export default Testimonials
