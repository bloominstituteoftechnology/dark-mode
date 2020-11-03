import React,{ useEffect,useState } from "react";
import axios from "axios";
import {Card,CardTitle,Label} from 'reactstrap';
 
const Info = () => {
    const [coinList,setCoinList]=useState([]);
    const [coinId,setCoin]=useState('bitcoin');//coinId stores the value of coinId in the list
    const [coinHistory,setCoinHistory]=useState();
    const [coinImage,setCoinImage]=useState();

    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/list')
        .then(res=>{
            console.log(res.data)
            const chain= res.data.filter((item)=>{
                return item.name.includes("link");
            })
            setCoinList(chain)
            console.log('after filter=',chain)
        })
        .catch(err=>console.log('error in axios get',err))
    },[])
    
    useEffect(()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/history?date=11-03-2020`)
            .then(res=>{
                console.log(res.data)
                setCoinHistory(JSON.stringify(res.data))
                // setCoinImage((res.data.image))
                setCoinImage(JSON.stringify(res.data.image))
            })
            .catch(err=> console.log('error in get history',err))
    },[coinId])

    const handleChanges=(e)=>{
        setCoin(e.target.value);
    }

   return(
       <div>
          <h2> Info on Bitcoin</h2>
            {/* {coinList.map((item)=>{
                return <Card className="coin">
                    <CardTitle>
                    {item.name}
                    </CardTitle>
                    </Card>
            })
            } */}
            <Label htmlFor="coin">Choose the Coin Type :</Label>
            <select 
            name="coin"
            id="coin"
            value={coinId}
            onChange={handleChanges}>
                {coinList.map((item)=>{
                    return (
                    <option 
                    value={item.id}
                    id={item.id}
                    key={item.id}>
                    {item.name}    
                    </option> 
                    )
                })} 
            </select>
            <div>
             {console.log('coinHistory=',coinHistory)}
             {console.log('coinImage=',coinImage)}
             <h3>Coin History Info : {coinHistory}</h3>

              <h4>coin Image: <br/>{coinImage}</h4>
            </div>
       </div>
   )

};
export default Info;
