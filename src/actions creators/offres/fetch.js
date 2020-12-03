import c from '../../actions/constants'
import requestOffers from './requestOffers'
import receiveOffers from './receiveOffers'
import setOffers from './setOffers'
import Axios from 'axios'

const fetchAllOffers = () => {
    return (dispatch) => {
        console.log('ici')
        dispatch(requestOffers())
        Axios.get('/api/Alloffres/:startupname').then(
            res => {
                dispatch(setOffers(res.data))
            }
        ).then(dispatch(receiveOffers()))
            .catch(err => console.log('hnaaa'))
    }
}

export default fetchAllOffers