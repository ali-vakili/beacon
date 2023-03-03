const formatPrice = price => {
  if (price === null || price === undefined || price === isNaN) return "None";
  const absolutePrice = Math.abs(price);
  const [integer, decimal] = String(absolutePrice).split(".");
  const formattedDecimal = decimal ? decimal.slice(0, 2) : null;
  let formttedPrice = Number(integer).toLocaleString("en-US");
  if (formttedPrice === "0" && formattedDecimal === null) {
    formttedPrice = "0.00";
  }

  const correctPrice = decimal ? `${formttedPrice}.${formattedDecimal}` : `${formttedPrice}`;
  return correctPrice;
};

const getBageClasses = number => {
  let classes = "change-badge ";
  const sign = Math.sign(number);

  const result = checkZeroPrice(number);
  result === true ? classes += "zero" : classes += sign === 1 ? "positive-badge" : sign === -1 ? "negative-badge" : "zero";
  return classes;
};

const getPolygonClasses = number => {
  let classes = "polygon ";
  const sign = Math.sign(number);

  const result = checkZeroPrice(number)
  result === true ? classes = "" : classes += sign === 1 ? "positive" : sign === -1 ? "negative" : null;
  return classes;
};

const checkZeroPrice = number => {
  const absoluteNumber = Math.abs(number);
  const [integer, decimal] = String(absoluteNumber).split(".");
  const formattedDecimal = decimal ? decimal.slice(0, 2) : null;
  const correctPrice = decimal ? `${integer}.${formattedDecimal}` : `${integer}`;

  if (correctPrice === "0" || correctPrice === "0.00") {
    return true;
  }
  else {
    return false;
  }
}


export {formatPrice, getBageClasses, getPolygonClasses};