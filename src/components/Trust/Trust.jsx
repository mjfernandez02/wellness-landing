import { Check } from 'lucide-react'
import Reveal from '../Reveal/Reveal'
import styles from './Trust.module.css'
const points = ['Personalized wellness experiences', 'Professional medical guidance', 'Clear, thoughtful communication', 'Patient-centered support']
function Trust() { return <section className={`section ${styles.section}`} aria-labelledby="trust-title"><Reveal className={styles.side}><p className="eyebrow">The details matter</p><h2 id="trust-title">Thoughtful care.<br /><em>Informed</em> decisions.</h2></Reveal><Reveal className={styles.content} delay={.1}><p className={styles.lead}>Feeling supported starts with having the information and the space to make choices that feel right for you.</p><ul>{points.map(point => <li key={point}><span><Check size={15} /></span>{point}</li>)}</ul><p className={styles.note}>This independent concept is designed to help you explore wellness topics. It does not provide medical advice or replace a conversation with a qualified healthcare professional.</p></Reveal></section> }
export default Trust
