export const fetchSearchDetails = (url, queryText) => {
    const updatedUrl = url.replace('%{terms}', queryText);
    return fetch(updatedUrl)
            .then(response => response.json());
};