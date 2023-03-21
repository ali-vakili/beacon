const CoinDescription = ({coinData}) => {

  const {
    name,
    symbol,
    description:{ en: description_en}
  } = coinData;

  const hasDescription = description_en.trim() ? true : false;
  const descriptionParagraphs = description_en.split("\r\n\r\n");
  const firstTwoParagraphs = descriptionParagraphs.slice(0, 2);
  if (hasDescription) {
    return ( 
      <>
        <h2 className="coin-description-title">What Is {name} ({symbol.toUpperCase()})?</h2>

        {firstTwoParagraphs.map((paragraph, index) => (
          <p key={`paragraph_${index}`} className='coin-description-paragraph'>{paragraph.replace(/<\/?a[^>]*>/g, "")}</p>
        ))}
      </>
    );
  }
}

export default CoinDescription;