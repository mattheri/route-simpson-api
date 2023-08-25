import { QueryClientProvider, QueryClient } from "react-query";
import { Route, Routes } from "react-router-dom";
import Search from "./search/Search/Search";
import Quotes from "./results/components/Quotes/Quotes";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/results/:character" element={<Quotes />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
