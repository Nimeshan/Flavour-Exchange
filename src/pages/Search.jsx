import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchRecipes } from '../api/recipes';
import RecipeList from '../components/RecipeList';

export default function Search() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = new URLSearchParams(useLocation().search).get('q');

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await searchRecipes(query);
        setResults(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (query) fetchResults();
  }, [query]);

  return (
    <div className="page search">
      <h2>Search Results for "{query}"</h2>
      {loading ? (
        <p>Searching...</p>
      ) : (
        <RecipeList recipes={results} />
      )}
    </div>
  );
}