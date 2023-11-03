import PropTypes from 'prop-types';
import { AiFillSafetyCertificate } from 'react-icons/ai';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-gray-600 text-white rounded-lg p-4 flex flex-col'>
            <h1 className='text-center'>
                <span className='text-7xl font-bold'>{price}</span>
                <span>/mon</span>
            </h1>
            <h1 className='text-2xl mt-4'>{name}</h1>
            <div className='flex-grow'>
            {
                features.map((item, inx) => <li key={inx} className='flex items-center gap-3'> 
                  <AiFillSafetyCertificate></AiFillSafetyCertificate>  {item}
                </li>)
            }
            </div>
            <button className='relative btn mt-12 w-full '>buy now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;