import React from "react";
//import {addPostActionCreator, changeInputActionCreator} from './../../store-redux/chatPageReducer'; //we import actioncreators


function Chat(props) {
    console.log(props);
    //let textRef = React.createRef(); //to create ref of the input data

    // let onClickEvent = () => { 
    //     props.addPost(); //addPost is a function from store (it pushes new elem with input data to the store array)
    //    // props.changeInput(""); // changeInput is a function from store which changes initialText to "" (empty string)
    // };
    let onClickEvent = () => {
        props.addPost();
        //props.dispatch(addPostActionCreator());
    };
    let onEnterKey = (event) => {
        if (event.key === "Enter") {
            props.addPost();
        }
    }; //woohoo new feature on here!!!

    // let onClickEvent = () => { 
    //     let data = textRef.current.value; //to get the value of input
    //     props.addPost(data); //addPost is a function from store (it pushes new elem with input data to the store array)
    //     props.changeInput(""); // changeInput is a function from store which changes initialText to "" (empty string)
    // };

    // let onInputChange = () => {
    //     let data = textRef.current.value; //to get the value of input (it comes from props)
    //     props.changeInput(data); //changeInput is a function from store 
    //     //(it changes initialText in the store, then this new value rerenders to the Chat component)
    // }

    let onInputChange = (event) => {
        let data = event.target.value; //instead of ref we use event.target.value to get input value //we get data on here
        props.changeInput(data); //we pass newText (which we need in store) to action 
    }
    let messages = props.messages.map(elem => <div>{elem.text}</div>) 

    return (
        <div>
            {messages}
            <textarea onChange={onInputChange} placeholder="Your message here" value={props.initialText} onKeyPress={onEnterKey}></textarea> 
            <button onClick={onClickEvent}>Add</button>
           
        </div>
    )
}

export default Chat;