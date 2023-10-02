import Axios from '@/utils/Axios';

/**
 *
 * @desc global info
 * @link
 *
 * @method GET
 *
 * @return {Promise}
 */
export const getGlobal = async () => {
  return await Axios({
    url: '/api/v1/global',
  });
};
