import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <div >
            <li className="md:ml-10 p-2 hover:bg-pink-600" key={route.id}>
            <a href={route.path}>{route.name}</a>
          </li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired,
}
export default Link;