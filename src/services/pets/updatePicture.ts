import { AddPetRequest } from '../../interfaces/pets'
import httpClient from '../api/httpclient'

export async function updatePicture(petId : string, form : FormData) {

    try {
        const response = await httpClient.put(`/pet/${petId}/photo`, form,{
            headers : {
                'Content-Type' : 'multipart/form-data'
            }
        })
        return response.data
    } catch (error) {
        console.error('Erro ao adcionar pet', error)
    }
}