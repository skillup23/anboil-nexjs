import style from '../styles/ContactFormMain.module.scss'
import { useState } from 'react'
import Heading from "../components/Heading";
import Button from './Button';

function ContactFormMain() {
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [company, setCompany] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    return (
        <section className={`content-section ${style.section}`}>
            <div className="container">
                <div className={style.content}>

                    <div className={style.column}>
                        <h3 className={`${style.title} font__extra`}>У вас есть <span>вопросы?</span></h3>
                        <p className={`${style.subtitle} font__light`}>Заполните форму <span>и наш</span> менеджер свяжется <span>с вами</span></p>
                    </div>

                    <div className={style.column}>
                        <div className={style.container}>
                            <form className={`${style.mainForm} font__light`} >
                                < formGroup className={style.inputGroup} >
                                    < input 
                                        type='text' 
                                        onChange={(e)=>{setName(e.target.value)}} 
                                        name='name' 
                                        className={style.inputField} 
                                        placeholder='Ваше имя'
                                    />
                                </formGroup>
                                < formGroup className={style.inputGroup} >
                                    < input 
                                        type='tel'
                                        onChange={(e)=>{setName(e.target.value)}}  
                                        name='tel' 
                                        className={style.inputField} 
                                        placeholder='Номер телефона'
                                    />
                                </formGroup>
                                < formGroup className={style.inputGroup} >
                                    < input 
                                        type='text'
                                        onChange={(e)=>{setName(e.target.value)}}  
                                        name='company' 
                                        className={style.inputField} 
                                        placeholder='Компания'
                                    />
                                </formGroup>
                                < formGroup className={style.inputGroup} >
                                    < input 
                                        type='email'
                                        onChange={(e)=>{setName(e.target.value)}}  
                                        name='email' 
                                        className={style.inputField} 
                                        placeholder='Ваш адрес электронной почты'
                                    />
                                </formGroup>
                                < formGroup className={`${style.inputGroup} ${style.inputArea}`} >
                                    < textarea 
                                        type='text'
                                        onChange={(e)=>{setName(e.target.value)}}  
                                        name='message' 
                                        className={`${style.inputField} font__light`} 
                                        placeholder='Ваш вопрос' 
                                        rows="4"
                                    />
                                </formGroup>
                                < formGroup className={style.inputButtom} >
                                    < input 
                                        className='font__extra' 
                                        type='submit'
                                    />
                                </formGroup>
                                
                            </form >
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );

}

export default ContactFormMain;