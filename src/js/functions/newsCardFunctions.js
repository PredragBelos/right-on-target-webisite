
// Function for setting card title
export const setTitle = (title) => {
    if (title.length >= 69) {
        return `${title.slice(0, 66)}...`;
    }
    else { return title };
}