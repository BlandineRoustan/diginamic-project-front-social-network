import PropTypes from 'prop-types';

// Styles
import './userItem.scss';

const UserItem = ({ user, buttons }) => {
    return (
        <div className="userItem">
            <p className="userItem__identity">{user.firstname} {user.lastname}</p>
            { buttons.map((button, key) => <button className={'userItem__button ' + button.color} key={key}>{button.label}</button>)}
        </div>
    );
};

UserItem.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
    }).isRequired,
    buttons: PropTypes.array.isRequired,
};

export default UserItem;