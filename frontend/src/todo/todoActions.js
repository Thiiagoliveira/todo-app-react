export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGE',
    payload: event.target.value
})

import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const search = () => {
    const request = axious.get(`${URL}?sort=-createdAt`)
    return {
        type: 'TODO-SEARCHED',
        payload: request
    }
}