import React from "react";
import "./App.css";
import axios from "axios";


class Contact extends React.Component {
    state ={
        name:'',
        contact:'',
        msg:'',
        error:'',
        success:''
      }
       onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
       
      };
      submit = async () => {
        if(this.state.name !== '' && this.state.msg !== '' && this.state.contact !== '' ){
    
          const msg = `///// NEW MSG ///// "Name": "${this.state.name}", "Contact": "${this.state.contact}", "Msg": "${this.state.msg}"`
          const res = await axios.post(`https://api.telegram.org/bot1127776038:AAG6B2Pf_HycyZCRdNPuKWmlIBU5bmrBKo0/sendMessage?chat_id=-181771913&text=${msg}`);
          if(res.status === 200){
            this.setState({success:true})
          }
        }else{
          this.setState({error: <p>Please fill the values</p>})
        }
      }

    // https://api.telegram.org/bot1127776038:AAG6B2Pf_HycyZCRdNPuKWmlIBU5bmrBKo0/sendMessage?chat_id=-181771913&text=test
    render(){
        return (
            <div>
             {this.state.success? 
                <div className='msg'>
                     <h2>Thank you  {this.state.name}!</h2>

                </div>
            :
                <div className='msg'>
                <p>Leave a Messege</p>
                <div className='emailname'>
                    <input onChange={this.onChange} value={this.state.name} placeholder='Name' name='name' type='text'></input>
                    <input onChange={this.onChange} value={this.state.contact} placeholder='Email/phone' name='contact' type='text'></input>
                </div>
                <div>
                    <textarea onChange={this.onChange} value={this.state.msg} placeholder='Messege' name='msg'></textarea>
                </div>
                <button onClick={this.submit}>Send</button>
            </div>
            }
             
         
         
             <div className="contactlinks">
                       <div>
                         <a rel="noopener noreferrer"  target="_blank"  href="https://t.me/Maaniis">Telegram</a>
                       </div>

                        <div>
                            <a rel="noopener noreferrer"  target="_blank"  href="https://www.behance.net/manis">Behance</a>
                        </div>

                        <div>
                            <a rel="noopener noreferrer"  target="_blank"  href="https://www.instagram.com/ahmedmanis">Instagram</a>
                        </div>

                        <div>
                            <a rel="noopener noreferrer"  target="_blank"  href="https://twitter.com/ahmedmanis">Twitter</a>
                        </div>
            </div>
            </div>
           );
    }
  
}

export default Contact;
