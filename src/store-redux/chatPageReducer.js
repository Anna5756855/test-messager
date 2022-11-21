
const CHANGE_INPUT = "CHANGE-INPUT"; //we make constants of action types and use them instead of strings to avoid bugs
const ADD_POST = "ADD-POST";

let initialState = {
    initialText: "", 
    messages: [
    {id: 1, text: "What's up"},
    {id: 2, text: "What's going on here?"},
    {id: 3, text: "I have no idea"},
    {id: 4, text: "Me too"},
    {id: 5, text: ":("} ]
};

const chatPageReducer = (state = initialState, action) => { //здесь в стейт приходит уже та информация, которая необходима для изменения 
    //стейта данной страницы chatPage, поэтому стейт уже равен chatPage // пришло: chatPageReducer(chatPage, {type: CHANGE_INPUT, newText: "Hello"})
    let newState = {...state, //making the copy of state
    messages: [...state.messages]};
    switch (action.type) {
        case ADD_POST: 
            let element = { id: 6, text: state.initialText}; //this elem is pushed to the store
            // let stateCopy = {...state}; // we created a shallow copy of state
            // stateCopy.messages = [...state.messages]; // we added an array of messages to the copy
            // stateCopy.messages.push(element); // we pushed a new element to the copy
            // stateCopy.initialText = ""; //changing the text of initialText of the copy
             newState.messages.push(element);
             newState.initialText = '';
            return newState; 
        case CHANGE_INPUT:
           
            newState.initialText = action.newText; //we will take newText from action
            // which will be determined when the function changeInput is called in Chat component
            //this._callSubscriber(); - we dont call _callSubscriber on here anymore. we only change state here and return it
            return newState;
        default:
            return state;
    }
}; //используем свитч кейс и если экшн тайп не найден, то просто возвращаем стейт по умолчанию

const changeInputActionCreator = (data) => { //we need to pass data variable because we
    // need to pass 'data' to store method to change initialText in store
    return {type: CHANGE_INPUT, newText: data};
};

const addPostActionCreator = () => ({ type: ADD_POST }); //we can re-write arrow function like that 
//(no return, () are needed because we need to return an object )

export default chatPageReducer;
export {changeInputActionCreator, addPostActionCreator};