import React, {useState} from 'react';
import { Form, useNavigate } from 'react-router-dom';
import './styles.css';
import Logocentral from "../../_assets/img/logoredonda.png"
import register from '../../_service/Register';
import {AiOutlineUserAdd } from 'react-icons/ai' ; 
import {FiMail} from 'react-icons/fi' ;
import {FaLock} from 'react-icons/fa' ;

export default function Register() {
  const navigate = useNavigate();
  const [isShown, setIsSHown] = useState(false);
  const [userData, setUserData] = React.useState({email: '', senha: '', nome:'', sobrenome: '', celular: ''});
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };
  const registerUser = (params) => {
    register(params)
    navigate('/')
  }
  return (
    <div className='container-all'>
      <div className='container-texto'>
      <img className='img2' src= {Logocentral}></img>
      <h1>Cadastro</h1>
        <span>"Facilite seus processos." <em>LI-SENSE</em>, onde você é importante.</span>
      </div>
      <div className='container-panel'>
       
        <div className='panel-form'>
            <div className="mb-3">
              <span className='span-input1'>Nome completo</span>
              <div className='container-input'>
                <input
                  type="name"
                  className="form-control"
                  placeholder="nome completo"
                  onChange={(event) => {setUserData({email: userData.email, senha: userData.senha, nome:event.target.value, sobrenome: userData.sobrenome, celular: userData.celular})}}
                />
              <AiOutlineUserAdd size={24} className='icon-register' />
              </div>
            </div>
            <div className="mb-3">
              <span className='span-input1'>Email</span>
              <div className='container-input'>
                <input
                  type="email"
                  className="form-control"
                  placeholder="mail@mail.com"
                  onChange={(event) => {setUserData({email: event.target.value, senha: userData.senha, nome:userData.nome, sobrenome: userData.sobrenome, celular: userData.celular})}}
                />
            <FiMail size={24} className='icon-register' />
              </div>
            </div>
            <div className="mb-3">
              <span className='span-input1'>Senha</span>
              <div className='container-input'>
                <input
                  type={isShown ? "text" :"password"}
                  className="form-control"
                  placeholder="senha"
                  checked={isShown}
                  onChange={(event) => {setUserData({email: userData.email, senha:event.target.value, nome:userData.nome, sobrenome: userData.sobrenome, celular: userData.celular})}}
                />
          <FaLock size={20} className='icon-register' />
              </div>
            </div>
            <div className="mb-3">
              <span className='span-input1'>Repetir senha</span>
              <div className='container-input'>
                <input
                  type={isShown ? "text" :"password"}
                  className="form-control"
                  placeholder="repetir senha"
                  checked={isShown}
                  onChange={(event) => {setUserData({email: userData.email, senha:event.target.value, nome:userData.nome, sobrenome: userData.sobrenome, celular: userData.celular})}}
                />
          <FaLock size={20} className='icon-register' />
              </div>
            </div>
          <div className="checkbox-container">
                
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={isShown}
                  onChange={togglePassword}
                />
                <label htmlFor="checkbox">Show password?</label>
          </div>
        </div>
        
       
          <button
          type='submit'
          className='btn-cad' 
          onClick={() => {
            registerUser(userData)
          }}
          >Cadastar</button>
          
          {/* 
            o botão de reiniciar por enquanto não tem funcionalidade porque 
            será mais facil implementa-lo quando estivermos usando hooks e states  
          */}
       
        
      </div>
    </div>
  );
}