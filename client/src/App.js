import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'
import {BrowserRouter as Router, Routes} from 'react-router-dom'

import routes from './routes';
// import './styling/SignUpForm.css'
// import './styling/Login.css'


import './App.css'


// uri determines the URL of the GraphQL server
// cache is an instance of InMemoryCache, allows apollo client to cache query results after fetchin
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache,
})



// apollo provider connects the apollo client to react
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          {routes}
        </Routes>

      </Router>

    </ApolloProvider>
  );
}

export default App;


// // Archived code

  /* {routes.map((route, index) => (
    <Route key={index} path={route.path} element={route.component} />
  ))} 
  */