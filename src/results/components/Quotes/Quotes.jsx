import { useParams } from "react-router-dom";
import SimpsonService from "../../service/SimpsonService";
import { useQuery } from "react-query";
import Quote from "../Quote/Quote";

const simpsonService = new SimpsonService();

const Quotes = () => {
  const params = useParams();

  const { data } = useQuery({
    queryKey: ["quotes", params.character],
    queryFn: () => simpsonService.getQuotesForCharacter(params.character),
  });

  return (
    <div>
      <ul>
        {data && data.map((quote) => <Quote quote={quote} key={quote.quote} />)}
      </ul>
    </div>
  );
};

export default Quotes;
