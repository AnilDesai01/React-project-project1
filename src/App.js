
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Navigation from "./components/Navigation/Navigation";
import "./index.css"



const App = () => {
  return (
    <div>
    <Navigation/>
   <main className="main_container">
   <ContactHeader/>
   <ContactForm/>

   </main>
    </div>
   
  );
};

export default App;

