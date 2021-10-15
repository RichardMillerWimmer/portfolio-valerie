import React from 'react'

const Contact = () => {
    return (
        <>
            <form>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' ></input>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' ></input>
                </div>
                <div>
                    <label htmlFor='message'>Message</label>
                    <textarea rows={4} cols={50} name='message' ></textarea>
                </div>
            </form>
        </>
    )
}

export default Contact
