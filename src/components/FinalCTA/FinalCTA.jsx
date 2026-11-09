import { ArrowUpRight } from 'lucide-react'
import Reveal from '../Reveal/Reveal'
import styles from './FinalCTA.module.css'
function FinalCTA() { return <section id="final-cta" className={styles.section} aria-labelledby="cta-title"><Reveal className={styles.content}><p className="eyebrow">Begin in your own way</p><h2 id="cta-title">Your next chapter in<br /><em>wellness</em> starts here.</h2><p>Explore a more thoughtful approach to your personal wellness journey.</p><a className={`${styles.button} button`} href="#treatments">Explore your options <ArrowUpRight size={17} /></a></Reveal><div className={styles.orb} aria-hidden="true" /></section> }
export default FinalCTA
