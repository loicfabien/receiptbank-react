export const nameError = name => {
    if(!name || name.length <= 0) {
        return true;
    }
    return false;
};
