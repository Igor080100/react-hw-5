import { Component, FormEvent, ChangeEvent } from 'react';
import styles from './SignForm.module.css'
import './style.css'
import classnames from 'classnames'



interface IForm {
   value: string;
   email: string;
   password: string;
   emailIsValid: boolean;
   passwordIsValid: boolean;
}

const initialState = {
   value: 'Вінницька',
   email: '',
   password: '',
   emailIsValid: true,
   passwordIsValid: true,
}


export class SignForm extends Component<{}, IForm> {

   constructor(props: IForm) {
      super(props);
      this.state = { ...initialState }
   }


   handlerForm = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.currentTarget.reset();
      console.log(this.state.email);
      console.log(this.state.password);
      this.setState({ ...initialState })
      console.log(e);
   };


   // handlerEmail = (e: ChangeEvent<HTMLInputElement>) => {
   //   const isValid = !e.target.value.includes(' ');
   //   this.setState({ email: e.currentTarget.value, emailIsValid: isValid })
   // }

   // handlerPasword = (e: ChangeEvent<HTMLInputElement>) => {
   //   const isValid = !e.target.value.includes(' ');
   //   this.setState({ password: e.currentTarget.value, passwordIsValid: isValid })
   // }

   handlerInput = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const isValid = !value.includes(' ');
      this.setState({
         ...this.state,
         [name]: value,
         [`${name}IsValid`]: isValid,
      });
   };

   handlerChange = (e: ChangeEvent<HTMLSelectElement>) => {
      this.setState({ value: e.target.value });
   }


   handlerLower = () => {
      this.setState({
         email: this.state.email.toLowerCase(),
         password: this.state.password.toLowerCase()
      })
   }

   render() {
      const styleEmail = classnames(styles.input, { [styles.invalid]: !this.state.emailIsValid })
      const stylePassword = classnames(styles.input, { [styles.invalid]: !this.state.passwordIsValid })
      return (
         <div className={styles.container}>
            <form className={styles.form} onSubmit={this.handlerForm} action="">
               <input
                  className={styleEmail}
                  value={this.state.email}
                  type="text"
                  name="email"
                  onChange={this.handlerInput} />
               <input
                  className={stylePassword}
                  value={this.state.password}
                  type="password"
                  name="password"
                  onChange={this.handlerInput} />

               <label >Область:
                  <select className="select" value={this.state.value} onChange={this.handlerChange}>
                     <option value="Вінницька">Вінницька</option>
                     <option value="Волинська">Волинська</option>
                     <option value="Донецька">Донецька</option>
                     <option value="Житомирська">Житомирська</option>
                     <option value="Вінницька">Вінницька</option>
                     <option value="Закарпатська">Закарпатська</option>
                     <option value="Запорізька">Запорізька</option>
                     <option value="Івано-Франківська">Івано-Франківська</option>
                     <option value="Київська">Київська</option>
                     <option value="Кіровоградська">Кіровоградська</option>
                     <option value="Луганська">Луганська</option>
                     <option value="Львівська">Львівська</option>
                     <option value="Миколаївська">Миколаївська</option>
                     <option value="Одеська">Одеська</option>
                     <option value="Полтавська">Полтавська</option>
                     <option value="Рівненська">Рівненська</option>
                     <option value="Сумська">Сумська</option>
                     <option value="Тернопільська">Тернопільська</option>
                     <option value="Харківська">Харківська</option>
                     <option value="Херсонська">Херсонська</option>
                     <option value="Хмельницька">Хмельницька</option>
                     <option value="Черкаська">Черкаська</option>
                     <option value="Чернігівська">Чернігівська</option>
                     <option value="Чернівецька">Чернівецька</option>
                  </select>
               </label>
               <div className='selected-text'>{this.state.value}</div>
               {/* <button className={styles.input} onClick={this.handlerLower}>Lower B</button> */}
               <input className='btns' value='Lower I' type="button" onClick={this.handlerLower} />
               <input className='btns' type="submit" />
            </form>


            {/* <form className={styles.form} onSubmit={this.handlerForm} action="">
          <input
            value={this.state.email}
            className={`${styles.input} ${!this.state.emailIsValid ? styles.invalid : ''}`}
            type="text"
            name="email"
            onChange={this.handlerEmail} />
          <input
            className={`${styles.input} ${!this.state.passwordIsValid ? styles.invalid : ''}`}
            value={this.state.password}

            type="password"
            name="password"
            onChange={this.handlerPasword} />
          <input
            className={styles.input}
            type="submit" />
          <button className={styles.input} onClick={this.handlerLower}>Lower B</button>
          <input value='Lower I' type="button" className={styles.input} onClick={this.handlerLower} />
        </form> */}

         </div>
      )
   }
}
