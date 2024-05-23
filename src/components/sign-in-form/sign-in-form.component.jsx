import { useState } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
    email: '',
    password: '',
};


const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const user = await signInAuthUserWithEmailAndPassword(email, password);
            // console.log(user);
            resetFormFields();
        }
        catch (error) {
            switch(error.code) {
                case 'auth/invalid-credential':
                    alert('E-mail ou senha estão incorretos');
                    break;
                default:
                    console.log(error);
            }
        }
        
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className="sign-up-container">
            <h2>Já tem uma conta?</h2>
            <span>Entre com seu e-mail e senha</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                 label="E-mail"
                 type="email" 
                 required 
                 onChange={handleChange} 
                 name="email" 
                 value={email} 
                />
                
                <FormInput
                 label="Senha"
                 type="password" 
                 required 
                 onChange={handleChange} 
                 name="password" 
                 value={password} 
                />

                <div className="buttons-container">
                    <Button type="submit">Entrar</Button>
                    <Button type="button" onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google} >Entrar com Google</Button>
                </div>
            </form>
        </div>
    )
};

export default SignInForm;