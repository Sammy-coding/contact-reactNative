import React from 'react'

const contactsReducer = (state, {type, payload}) => {
    switch (type) {
        case "GET-CONTACTS":
            return state;
    
        default:
            return state;
    }
}

export default contactsReducer;
