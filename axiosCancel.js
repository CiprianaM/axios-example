const NavBar = props => (
  <Nav>
      <NavItem onClick={() => props.navigate('/home') }> Home </NavItem>
      <NavItem onClick={() => props.navigate('/about') }> About </NavItem>
      <NavItem onClick={() => props.navigate('/contact') }> Contact </NavItem>
  </Nav>
)

class Posts extends Component {
  constructor(props) {
      super(props);
      this.state = { posts: [] }
  }

  navigate = url => {
      // cancel the request
      this.source.cancel('User navigated to different page');

      // assuming we are using React-Router
      this.props.history.push(url);
  }

  async componentDidMount() {
      const CancelToken = axios.CancelToken;
      // create the source
      this.source = CancelToken.source();
      try {
          const {data} = await axios.get(`${ROOT_URL}/posts`, {
              canceltoken: this.source.token
          });
          this.setState({
              posts: data
          })
      } catch (err) {
          // check if the request was cancelled
          if(axios.isCancel(thrown)) {
              console.log(thrown.message);
          }
          console.log(err.message)
      }
  }

  render() {
      return (
          <div className="container">
          <NavBar navigate={this.navigate}/>
          {  this.state.posts && this.state.posts.length !== 0 ?
              this.state.posts.map(post => <Card key={post.id} title={post.title}>{post.content}</Card>) :
              <Loading/> }
          </div>
      );
  }
}