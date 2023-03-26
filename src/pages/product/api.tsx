
import axios from "axios";
import Papa from "papaparse";


import { Product } from "./type";


export default {
    List: async (): Promise<Product[]> => {
        return axios.get(
            'https://docs.google.com/spreadsheets/d/e/2PACX-1vRe0fxEJCNS05T5JGCtkm4o2oCdpQMuPGHZRl9VEVYAMgkZ5jqVsPb-xwRCzpQnf5zdIwQqS3yEGRp9/pub?output=csv',
            
        {
            responseType: "blob"
        },
        
        
        )
        .then((response) =>{
            return new Promise<Product[]>((resolve, reject)=>{
                Papa.parse(response.data, {
                    header: true,
                    complete: results =>{
                    
                        return resolve (results.data as Product[]);
                    },
                    error: (error) => {
                        return reject(error.message);
                    }

                })
            })
        })
        
    },
    
};

