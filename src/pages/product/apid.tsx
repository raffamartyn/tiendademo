import axios from "axios";
import Papa from "papaparse";


import { Productd } from "./type";


export default {
    List: async (): Promise<Productd[]> => {
        return axios.get(
            'https://docs.google.com/spreadsheets/d/e/2PACX-1vRe0fxEJCNS05T5JGCtkm4o2oCdpQMuPGHZRl9VEVYAMgkZ5jqVsPb-xwRCzpQnf5zdIwQqS3yEGRp9/pub?gid=1357591300&single=true&output=csv',
            
        {
            responseType: "blob"
        },
        
        
        )
        .then((response) =>{
            return new Promise<Productd[]>((resolve, reject)=>{
                Papa.parse(response.data, {
                    header: true,
                    complete: results =>{
                    
                        return resolve (results.data as Productd[]);
                    },
                    error: (error) => {
                        return reject(error.message);
                    }

                })
            })
        })
        
    },
    
};
