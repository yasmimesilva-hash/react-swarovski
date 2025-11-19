import axios from "axios";
import type { Swarovski } from '../types/Swarovski';

export const getSwarovski = async (): Promise<Swarovski[]> => {
   try {
    const resposta = await axios.get("http://localhost:3000/produtos");
    return resposta.data;
   } catch (error) {
    console.error("erro ao buscar os dados:" , error);
    throw error;
   }
}