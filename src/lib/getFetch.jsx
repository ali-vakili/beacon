const getFetch = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;

  } else {
    const error = true;
    throw new Error(error);
  }
};

export default getFetch;
