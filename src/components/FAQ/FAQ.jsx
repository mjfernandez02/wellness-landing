import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqItems } from '../../data/content'
import Reveal from '../Reveal/Reveal'
import styles from './FAQ.module.css'
function FAQ() { const [active, setActive] = useState(0); return <section id="faq" className={`section ${styles.section}`} aria-labelledby="faq-title"><Reveal className={styles.heading}><p className="eyebrow">Helpful to know</p><h2 id="faq-title">Questions, <em>answered.</em></h2><p>A calm place to start. For personal advice, always speak with a qualified healthcare professional.</p></Reveal><Reveal className={styles.list} delay={.1}>{faqItems.map((item, i) => { const isOpen = active === i; const panelId = `faq-panel-${i}`; return <div className={styles.item} key={item.question}><h3><button onClick={() => setActive(isOpen ? -1 : i)} aria-expanded={isOpen} aria-controls={panelId}><span>{item.question}</span>{isOpen ? <Minus aria-hidden="true" /> : <Plus aria-hidden="true" />}</button></h3><div id={panelId} className={`${styles.answer} ${isOpen ? styles.show : ''}`} aria-hidden={!isOpen}><p>{item.answer}</p></div></div>})}</Reveal></section> }
export default FAQ
