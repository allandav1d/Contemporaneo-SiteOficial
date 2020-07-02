import React, { useEffect, useState } from 'react';

import './styles.css';

interface Props{
    open:boolean,
    title?:string, 
    text?:string
}



const Modal: React.FC<Props> = ({open, title, text}) => {
    const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(open);
    document.body.style.overflow = show ? "hidden" : "initial";
    console.log(open);
  }, [open]);

  function closeModal(){
    setShow(false);
  }

  return (
      <div id="modal" className={show ? "on": "" }>
          <div className="body">
            <header>
                <div className="close" onClick={closeModal}>X</div>
            </header>
            <main className="content">
                <h1>{title}</h1>
                <p>{text}</p>
            </main>
          </div>
      </div>
  );
}

export default Modal;