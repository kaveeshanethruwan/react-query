import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './components/Home.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { SuperHeroesPage } from './components/SuperHeroes.page';
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { RQSuperHeroPage } from './components/RQSuperHeroPage';
import { ParallelQueriesPage } from './components/ParallelQueriesPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
              <li>
                <Link to='/parallel'>Parallel</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/parallel' element={<ParallelQueriesPage />} />
            <Route path='/super-heroes/:heroId' element={<RQSuperHeroPage />} />
            <Route path='/super-heroes' element={<SuperHeroesPage />} />
            <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />} />
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initial={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
