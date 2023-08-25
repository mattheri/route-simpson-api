const Quote = ({ quote }) => {
  return (
    <li className="flex flex-col gap-2">
      <div className="flex items-center">
        <img
          className="w-12 h-12 rounded-full"
          src={quote.image}
          alt={quote.character}
        />
        <div>{quote.quote}</div>
      </div>
      <small>- {quote.character}</small>
    </li>
  );
};

export default Quote;
