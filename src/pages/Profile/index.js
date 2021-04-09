import React, { Component } from 'react';
import axios from 'axios';

import { Card } from '../../components';
import './style.css';

class ProfilePage extends Component {

  state = {
    profileData: null
  }

  componentDidMount = async () => {
    const indexOfUser = this.props.match.params.index;
    const response = await axios.get(`http://localhost:3001/users/${indexOfUser}`);
    this.setState({ profileData: response.data });
  }

  render () {

    /*if (!userData && !loading) {
      return (
        <div>Не удалось загрузить данные пользователя</div>
      )
    }*/
  
    return (
      <div className="page">
        <div className="page-profile">
          {this.state.profileData && (
            <Card picture={this.state.profileData.picture} name={this.state.profileData.name} />
          )}
          <span className="text-field">{this.state.profileData?.email}</span>
          <span className="text-field">{this.state.profileData?.phone}</span>
          <span className="text-field">{this.state.profileData?.about}</span>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
