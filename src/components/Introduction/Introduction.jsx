import Reveal from '../Reveal/Reveal'
import introImage from '../../assets/images/intro-wellness.jpg'
import styles from './Introduction.module.css'
function Introduction() { return <section className={`section ${styles.section}`} aria-labelledby="intro-title"><Reveal className={styles.imageWrap}><img src={introImage} alt="Woman taking a quiet moment for herself in natural light" loading="lazy" /><span className={styles.imageTag}>Your pace. Your path.</span></Reveal><Reveal className={styles.content} delay={0.1}><p className="eyebrow">Wellbeing, made personal</p><h2 id="intro-title">Your wellness journey deserves a more <em>personal</em> approach.</h2><p>Good care begins with being seen as a whole person. We believe the most meaningful wellness experiences make room for your questions, your context, and the life you want to live.</p><a href="#approach" className="textLink">How we think about care <span>↗</span></a></Reveal></section> }
export default Introduction
