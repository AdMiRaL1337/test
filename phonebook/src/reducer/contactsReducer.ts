import { Contact, Action, Update } from '../types';

export interface AppState {
    id: number;
    contacts?: Contact[];
  }

  export const contactsReducer = (state: AppState, action: Action): AppState => {
    switch(action.type){
        case 'ADD_CONTACT':
            return {
              ...state,
              contacts: [...state.contacts, action.payload as Contact]
            };
        case 'UPDATE_CONTACT': {
            const { id, updates } = action.payload as Update;
            return {
                ...state,
                contacts: state.contacts.map((contact) => {
                    if (contact.id === id) {
                        return {
                            ...contact,
                            ...updates
                        };
                    }
                    return contact;
                })
            };
        }
        case 'DELETE_CONTACT': {
            const { id } = action.payload;
            return {
              ...state,
              contacts: state.contacts.filter((contact) => contact.id !== id)
            };
          }
        default:
            return state;
    }
}