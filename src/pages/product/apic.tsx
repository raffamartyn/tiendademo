import axios from "axios";
import Papa from "papaparse";


import { Productc } from "./type";


export default {
    List: async (): Promise<Productc[]> => {
        return axios.get(
            'https://docs.google.com/spreadsheets/d/e/2PACX-1vRe0fxEJCNS05T5JGCtkm4o2oCdpQMuPGHZRl9VEVYAMgkZ5jqVsPb-xwRCzpQnf5zdIwQqS3yEGRp9/pub?gid=633279448&single=true&output=csv',
            
        {
            responseType: "blob"
        },
        
        
        )
        .then((response) =>{
            return new Promise<Productc[]>((resolve, reject)=>{
                Papa.parse(response.data, {
                    header: true,
                    complete: results =>{
                    
                        return resolve (results.data as Productc[]);
                    },
                    error: (error) => {
                        return reject(error.message);
                    }

                })
            })
        })
        
    },
    
};
