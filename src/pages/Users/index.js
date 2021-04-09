import { useEffect,} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUsers } from '../../actions/UsersActions'

import { Card } from '../../components';
import './style.css';

const UsersPage = () => {
  const url = 'http://localhost:3001/users';
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  useEffect(() => {
    dispatch(getUsers(url))
  }, [dispatch]);

  return (
    <div className="page">
      <div className="page-users">
        {users.map((item, i) => {
          return (
            <Link to={`/users/${item.index}`} key={item._id}>
              <Card
                picture={item.picture}
                name={item.name}
                index={item.index}
                id={item._id}
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default UsersPage;