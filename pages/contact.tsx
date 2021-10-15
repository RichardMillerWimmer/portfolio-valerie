import React, {useState} from 'react'

interface UserContact {
    name: string,
    email: string,
    message: string
}

const Contact = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [submitted, setSubmitted] = useState<boolean>(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        let contaceData: UserContact = {
            name, 
            email, 
            message
        }
    }

    return (
        <>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <br/>
                    <input type='text' name='name' required onChange={e => setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <br/>
                    <input type='text' name='email' required onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='message'>Message</label>
                    <br/>
                    <textarea rows={4} cols={20} name='message' required onChange={e => setMessage(e.target.value)}></textarea>
                </div>
                <div>
                    <input type='submit'></input>
                </div>
            </form>
        </>
    )
}

export default Contact
