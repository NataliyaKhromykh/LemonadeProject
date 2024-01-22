import './../App.css';
import Form from './Formspree';



const Content = ({setIsOpen}) =>{
    return(<div className="modal_content">
        <Form/>
        <button onClick={() => setIsOpen(false)}>Close Modal</button>
    </div>)
}
export default Content;