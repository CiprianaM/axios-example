//separate requests

class User extends Component {
  constructor(props) {
      super(props);
      this.state = {
          user: {
              data: {},
              permissions: {}
          }
      };
  }

  getUserData = async () => {
      try {
          const {data} = await axios.get(`${ROOT_URL}/profile/${this.props.activeUserId}`);
          return data;
      } catch (err) {
          console.log(err.message);
      }
  }

  getPermissions = async () => {
      try {
          const {data} = await axios.get(`${ROOT_URL}/permissions/${this.props.activeUserId}`);
          return data;
      } catch (err) {
          console.log(err.message);
      }
  }

  async componentDidMount() {
      const userData = await this.getUserData();
      const userPermissions = await this.getPermissions();
      this.setState({
          user: {
              data: userData,
              permissions: userPermissions
          }
        }
      );
  }

  render() {
      // render the data
  }

}


//one single request
class User extends Component {
  // ...

  getUserData = () => axios.get(`${ROOT_URL}/profile/${this.props.activeUserId}`);

  getPermissions = () => axios.get(`${ROOT_URL}/permissions/${this.props.activeUserId}`);

  async componentDidMount() {
      try {
          const [userData, userPermissions] = await axios.all([ this.getUserData(), this.getPermissions() ]);
          this.setState(
            {user: {
                  data: userData.data,
                  permissions: userPermissions.data
              }
            }
          );
      }
      catch (err) {
          console.log(err.message);
      }
  }
  // ...
}