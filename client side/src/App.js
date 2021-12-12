import React from 'react';
import {Box} from '@material-ui/core'
import Header from './components/Navbar'
import Home from './components/home/Home'
import DetailsPost from './components/posts/DetailView'
import {Switch , Route} from 'react-router-dom'
import CreateBlog from './components/posts/CreateView'
import UpdateBlog from './components/posts/UpdateView'

function App() {
  return (
    <>
      <Header/>
      <Box style={{marginTop : '64px'}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/details/:id" component={DetailsPost} />
          <Route  path="/create" component={CreateBlog} />
          <Route  path="/updateBlog/:id" component={UpdateBlog} />
        </Switch>
      </Box>
    </>
  );
}

export default App;
