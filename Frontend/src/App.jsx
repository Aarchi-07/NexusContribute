import React, { useState } from 'react';

const N8N_WEBHOOK_URL = 'http://localhost:5678/webhook-test/bcb9816f-b9ca-4224-a9ba-c27657a13938';

function App() {
  const [repoUrl, setRepoUrl] = useState('');
  const [userQuery, setUserQuery] = useState('');
  const [issues, setIssues] = useState([]); 
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const normalizeResponse = (data) => {
    if (!data) return [];

    if (!Array.isArray(data) && typeof data === 'object') {
      const arr = data.data || data.body || data.items || data.results || data.rows || data.resultsArray;
      if (arr) return normalizeResponse(arr);
    }

    if (!Array.isArray(data)) return [];

    return data.map((item) => {
      if (typeof item === 'string') return { url: item, title: item };

      if (item && typeof item === 'object') {
        if (item.json) {
          const j = item.json;
          
          if (j.html_url || j.url) {
            return { url: j.html_url || j.url, title: j.title || j.summary || j.html_url || j.url };
          }
          
          if (typeof j === 'string') return { url: j, title: j };
          if (j.output) return { url: j.output, title: j.output };
        }

        if (item.output) return { url: item.output, title: item.output };
        if (item.url) return { url: item.url, title: item.title || item.url };
        if (item.html_url) return { url: item.html_url, title: item.title || item.html_url };

        try {
          const s = JSON.stringify(item);
          return { url: '#', title: s };
        } catch {
          return { url: '#', title: 'Unknown item' };
        }
      }

      return null;
    }).filter(Boolean);
  };

  const findIssues = async (event) => {
    event.preventDefault(); 
    
    setIsLoading(true);
    setError(null);
    setIssues([]);

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          repoUrl,
          userQuery,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const resultData = await response.json();
      const normalized = normalizeResponse(resultData);
      setIssues(normalized);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-4 sm:p-8">
      <div className="w-full max-w-3xl">
        
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400">NexusContribute</h1>
          <p className="text-gray-400 mt-2">Find the perfect open-source issues to contribute to.</p>
        </header>

        {/* Form Section */}
        <form onSubmit={findIssues} className="bg-gray-800 p-6 rounded-lg shadow-2xl">
          <div className="space-y-6">
            <div>
              <label htmlFor="repoUrl" className="block mb-2 text-sm font-medium text-gray-300">GitHub Repository URL</label>
              <input
                id="repoUrl"
                type="text"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                placeholder="https://github.com/owner/repo"
                required
              />
            </div>
            <div>
              <label htmlFor="userQuery" className="block mb-2 text-sm font-medium text-gray-300">Describe the issues you're looking for</label>
              <input
                id="userQuery"
                type="text"
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                placeholder="Describe what you want (e.g., easy docs, good-first-issue)"
                required
              />
            </div>
          </div>
          <button type="submit" disabled={isLoading} className="w-full mt-8 p-3 bg-cyan-600 hover:bg-cyan-700 rounded-md font-bold transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed">
            {isLoading ? 'Searching...' : 'Find Issues'}
          </button>
        </form>

        {/* Results Section */}
        <div className="mt-12">
          {isLoading && <p className="text-center">Loading results...</p>}
          {error && <p className="text-center text-red-400">Error: {error}</p>}
          
          {!isLoading && !error && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Matching Issues</h2>
              {issues.length > 0 ? (
                <ul className="space-y-3">
                  {issues.map((issue, index) => (
                    <li key={index} className="bg-gray-800 p-4 rounded-md hover:bg-gray-700 transition-colors">
                      <a href={issue.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline wrap-break-word">
                        {issue.title}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-center">No issues found for your query. Try being more specific!</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;