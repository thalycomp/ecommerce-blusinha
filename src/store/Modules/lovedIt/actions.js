export function addToLovedIt(lovedIt) {
    return {
        type: 'ADD_LOVED_IT',
        lovedIt,
    };
}
export function removeToLovedIt(lovedIt) {
    return {
        type: 'REMOVE_LOVED_IT',
        lovedIt,
    };
}
