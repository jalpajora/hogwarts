export const transformResponse = (response, errorMessage) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(errorMessage);
  }
};


export const capitalizeLetters = (letters) => (
  letters.length
    ? `${letters.charAt(0).toLocaleUpperCase()}${letters.substring(1)}`
    : ''
)
