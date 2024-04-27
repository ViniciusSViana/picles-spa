import { AddPetRequest } from '../../interfaces/pets'
import httpClient from '../api/httpclient'

export async function addPet(params: AddPetRequest) {

    try {
        const response = await httpClient.put('/pet', params)
        return response.data
    } catch (error) {
        console.error('Erro ao adcionar pet', error)
    }
}