// dependencies
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BackgroundHelmet from './BackgroundHelmet';
// hooks and dependencies


const Home = () => {
  return (
    <motion.section 
      className="initial" 
      initial={{ width: 0 }} 
      animate={{ width: "auto", transition: { duration: 0.8 } }} 
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
   
   <BackgroundHelmet color="rgba(197, 203, 26, 0.67)" />
      
      {/* Logo */}
      <img src="LOGO.png" alt="Logo" style={{ width: '300px', height: 'auto' }} />

      {/* Welcome Message */}
      <h3>Boas-vindas!</h3>
      <p>Que tal adotar seu novo melhor amigo?</p>

      {/* Buttons */}
      <div className="home__buttons">
        <Link className="button" to="/home">
          Pets disponíveis para adoção
        </Link>
        <div>
          <a className="initial__link" href="/cadastro">Cadastrar</a>
          <span style={{ fontSize: 14, padding: '0 1rem', color: '#fff' }}>ou</span>
          <a className="initial__link" href="/login">Fazer login</a>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
