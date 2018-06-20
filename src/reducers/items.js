export function itemsHaveError(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function itemsAreLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
        console.log('testing',action.items);
            return action.items;

        default:
            return state;
    }
}

export function toggle(state = false, action) {
    switch (action.type) {
        case 'TOGGLE_MODAL':
            return action.toggle;

        default:
            return state;
    }
}