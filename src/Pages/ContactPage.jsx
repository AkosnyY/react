import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

export default function ContactPage() {
    return (
        <div>
            <Navbar />
            <form className='form'>
                <input placeholder='Firstname' type="text" name="firstName" id="firstName" />
                <input placeholder='Lastname' type="text" name="lastName" id="lastName" />
                <input placeholder='Email address' type="text" name="email" id="email" />
                <input placeholder='Phone number' type="text" name="phone" id="phone" />
                <textarea placeholder='Message' name="message" id="message" cols="30" rows="10"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
