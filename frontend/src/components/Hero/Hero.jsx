import './Hero.css'
import { motion } from "framer-motion";

const Hero = () => {
return (
      <section className="heroContainer">
        <div className="hero-grid">

          <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="hero-title"
            >
              Personalized Support meets Education
            </motion.h1>

            <p className="hero-subtitle">
            At NeuroWits, we go beyond tutoring. Our team of NYC-certified, master’s-level educators partners with families to build strong academic foundations and essential executive functioning skills. What sets us apart? Our founders work hands-on with every family and tutor to ensure personalized support, advocacy, and access to meaningful resources. We're not just educators—we're your child’s success team.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">Get a demo</a>
              <a href="#solutions" className="btn-secondary" onClick={()=>{}}>Explore solutions</a>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-label">Projects</div>
                <div className="stat-value">50+</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Industries</div>
                <div className="stat-value">12</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Client sat.</div>
                <div className="stat-value">95%</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-frame">
                <img className='landing-image'src='https://www.neurowits.com/Screenshot%202025-02-06%20at%204.22.09%E2%80%AFPM.png?Width=3840&Height=1680' />
            </div>

            <div className="visual-caption">
              Prototype visualization — data, metrics, and brain signals illustrated for concept
            </div>
          </div>

        </div>
      </section>
    )
}

export default Hero