export const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const debounce = (() => {
    let timer;
    return (callback, ms) => {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();