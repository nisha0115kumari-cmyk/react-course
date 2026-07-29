import { useState } from 'react'
import {Chatbot} from 'supersimpledev'
import dayjs from 'dayjs';
import './ChatInput.css';
import LoadingSpinning from '../assets/loading-spinner.gif';

export function ChatInput({chatMessages,setChatMessages}){
        const [inputText,setInputText] = useState('');
        const [isLoading,setIsLoading] = useState(false);

        function saveInputText(event){
          setInputText(event.target.value)
        }

        async function sendMessage() {
          if(isLoading || inputText === ''){
            return;
          }

          setIsLoading(true);

          setInputText('');
          const newChatMessages = [
              ...chatMessages,
              {
                message : inputText,
                time : dayjs().valueOf(),
                sender : 'user',
                id : crypto.randomUUID()
              }
          ];

          setChatMessages([
            ...newChatMessages,
              {
              message:<img src={LoadingSpinning} className="loading-spinner"/>,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          
          ]);

          const response = await Chatbot.getResponseAsync(inputText);
            setChatMessages([
              ...newChatMessages,
              {
                message : response,
                time : dayjs().valueOf(),
                sender : 'robot',
                id : crypto.randomUUID()
              }
            ]);

            setIsLoading(false);
            
        }

        function handleKeyDown(event){
          if(event.key === 'Enter'){
            sendMessage();
          }
          if(event.key === 'Escape'){
            setInputText('');
          }
        }

        function clearMessage(){
         setChatMessages([]);
        }

        return (
          <div className="chat-input-container">
            <input 
              placeholder = "Send a message to Chatbot" 
              size="30"
              onChange = {saveInputText} //will change the text written in input box
              value = {inputText}
              onKeyDown = {handleKeyDown}
              className="chat-input"
            />
            <button
              onClick = {sendMessage}
              className = "send-button"
            >Send</button>
            <button 
            onClick = {clearMessage}
            className = "clear-button"
            >Clear</button>
          </div>
        );
      }
