import React, { useState } from 'react'
import api from "../services/api"

function useApiFech() {
    
    const [data,setData]= useState([])
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState(null)


    async function fetchApi({url, method = "GET", body = null}) {
        setLoading(true)
        setError(null)        

        const objAPI = {
            url,
            method: method.toUpperCase(),
            data: method != 'GET' ? body: undefined
        }
        
        try {
            const res = await api(objAPI)    

            switch (method.toUpperCase()) {
                case 'POST':  
                    setData(prev=>[...prev,res.data])                  
                    break;
                case 'DELETE':                    
                    const id = parseInt(url.split("/").pop())
                    setData(prev => 
                        prev.filter(i =>  i.id != id)
                    )
                    break;            
                default:                    
                    setData(res.data)            
                    break;
            }
            
        } catch (error) {
            setError(error.message)
        }
        finally{
            setLoading(false)
        }        
    }

  return  [data, fetchApi, loading, error]
}


export default useApiFech