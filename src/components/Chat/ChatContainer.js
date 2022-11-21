import Chat from "./Chat";
import {addPostActionCreator, changeInputActionCreator} from '../../store-redux/chatPageReducer'; //we import actioncreators
import { connect } from "react-redux";


// function ChatContainer(props) {

// let state = props.store.getState();
//    // console.log(state);
//     //let textRef = React.createRef(); //to create ref of the input data

//     // let onClickEvent = () => { 
//     //     props.addPost(); //addPost is a function from store (it pushes new elem with input data to the store array)
//     //    // props.changeInput(""); // changeInput is a function from store which changes initialText to "" (empty string)
//     // };
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     };

//     // let onClickEvent = () => { 
//     //     let data = textRef.current.value; //to get the value of input
//     //     props.addPost(data); //addPost is a function from store (it pushes new elem with input data to the store array)
//     //     props.changeInput(""); // changeInput is a function from store which changes initialText to "" (empty string)
//     // };

//     // let onInputChange = () => {
//     //     let data = textRef.current.value; //to get the value of input (it comes from props)
//     //     props.changeInput(data); //changeInput is a function from store 
//     //     //(it changes initialText in the store, then this new value rerenders to the Chat component)
//     // }

//     let changeInput = (data) => {
//         props.store.dispatch(changeInputActionCreator(data)) //we pass newText (which we need in store) to action 
//     }

//    let messages = state.chatPage.messages.map(elem => <div>{elem.text}</div>) //to make each elem of the array to render in Chat component

//     return ( <Chat changeInput={changeInput} addPost={addPost} messages={messages} newText={state.chatPage.initialText}/>) 
   
// }


let mapStateToProps = (state) => { //this function returns a part of state we need for this page
    return {
        initialText: state.chatPage.initialText,
        messages: state.chatPage.messages
    }
};

let mapDispatchToProps = (dispatch) => { //this function dispatches the logic from store
    return {
        addPost: () => {dispatch(addPostActionCreator())},
        changeInput: (data) => {dispatch(changeInputActionCreator(data))}
    }
};

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat) //connect is a special 
//function that takes what mapStateToProps, mapDispatchToProps returned and "builds a container component" around the component 
//stated in the arguments

export default ChatContainer;