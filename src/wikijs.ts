import axios from "axios";
import  type { AxiosResponse } from 'axios';
import { config } from "dotenv";
config();
const { WIKIJS_TOKEN, WIKIJS_URL } = process.env


const accessToken = WIKIJS_TOKEN;
const endpoint = 'http://192.168.110.221:4500/graphql';
//const endpoint = WIKIJS_URL;
const headers = {
Authorization: `Bearer ${accessToken}`,
};

export const query = `
query testing {
    pages {
    list(orderBy: ID, orderByDirection: ASC) {
        title
        createdAt
        tags
    }
    }
}
`;
export function db () {
    axios.post(endpoint, { query }, { headers })
    .then((response: AxiosResponse) => {
        console.log(JSON.stringify(response.data, null, 2));
    })
    .catch((error: any) => {
        console.error(`Query failed to run with a ${error.response.status}.`);
    });

}