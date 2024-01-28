import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <SocialLinks></SocialLinks>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
    </>
  );
}
