
import './videocomponent.css'
import chatImg from './asset/chat-bubble-dynamic-color.png'

const ContactUs = () => {
  return (
    <div className='contactus'>
        <div className='contactus-home'>
            <div className='container contactus-container'>
                <div className='header-container'>
                    <h2><span>Get In Touch</span><br /><span>with us.</span></h2>
                </div>
                <div className='img-container'>
                    <img src={chatImg} alt='Chat-blob' />
                </div>
            </div>
        </div>
        <div className='contactus-content'>
            <h2>Contact Us</h2>
            <div className='contactus-form-container'>
                <form className='form'>
                    <div className='form-group-container'>
                        <div className='form-group'>
                            <label for='fname' >First Name</label>
                            <input idName='fname' name='fname' type='text' placeholder='Enter Your First Name' required />
                        </div>
                        <div className='form-group'>
                            <label for='lname' >Last Name</label>
                            <input idName='lname' name='lname' type='text' placeholder='Enter Your Last Name' required />
                        </div>
                    </div>
                    <div className='form-group-container'>
                        <div className='form-group'>
                            <label for='email' >Email</label>
                            <input idName='email' name='email' type='email' placeholder='abcd@gmail.com' required />
                        </div>
                        <div className='form-group'>
                            <label for='subject' >Subject</label>
                            <input idName='subject' name='subject' type='text' placeholder='Request info' required />
                        </div>
                    </div>
                    <div className='submit-container'>
                        <div className='form-group'>
                            <input idName='terms' name='terms' type='checkbox' required />
                            <label for='terms'>I agree with terms of usage and privacy policy.</label>
                        </div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactUs
  