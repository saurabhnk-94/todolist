// Action Creator

export const createToDo = (items) => {
    //Return the action
    return {
        type: 'ITEM_CREATED',
        payload: items
    };
};