import React, { useEffect, useRef ,useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';
export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options;
  let pirceOptions = Object.keys(options)
  const [qty,setQty] = useState(1) 
  const [size,setSize] = useState("") 
  const handleAddToCart = async() =>{
    let food = []
    for(const item of data){
      if(item.id === props.foodItem._id){
        food = item;
        break;
      }
    }
    if(food !== []){
      if(food.size === size){
        await dispatch({type:"UPDATE", id:props.foodItem._id, price:finalPrice, qty:qty})
        return
      }else if( food.size !== size){
        await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price: finalPrice,qty:qty,size: size})
        return
      }
      return
    }
      await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price: finalPrice,qty:qty,size: size})
    // console.log(data)
  }
  let finalPrice = qty * parseInt(options[size]);
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])

  return (
    <div>
         <div>
          <div className="card mt-3" style={{"width": "16rem","maxHeight":"360px"}}>
            <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"150px", objectFit:"fill"}}/>
            <div className="card-body">
              <h5 className="card-title">{props.foodItem.name}</h5>
              {/* <p className="card-text">this is some important text.</p> */}
              <div className="container w-100" >
                <select className='m-2 h-100 bg-success rounded' onChange={(e)=> setQty(e.target.value)}>
                  {Array.from(Array(6),(e,i)=>{
                    return(
                      <option key={i+1} value={i+1}>{i+1}</option>
                    )
                  })}
                </select>
                <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e)=> setSize(e.target.value)}>
                  {/* <option value="half">Half</option>
                  <option value="full">Full</option> */}
                  {pirceOptions.map((data)=>{
                    return <option key={data} value={data}>{data}</option>
                  })}

                </select>
                <div className='d-inline h-100'>${finalPrice}/-</div>
              </div>
              <hr/>
              <button className={"btn btn-success justify-center ms-2"} onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>



         {/* <div>
          <div className="card mt-3" style={{"width": "18rem","maxHeight":"360px"}}>
            <img src="https://source.unsplash.com/random/200×100/?biryani" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">this is some important text.</p>
              <div className="container w-100" >
                <select className='m-2 h-100 bg-success rounded'>
                  {Array.from(Array(6),(e,i)=>{
                    return(
                      <option key={i+1} value={i+1}>{i+1}</option>
                    )
                  })}
                </select>
                <select className='m-2 h-100 bg-success rounded'>
                  <option value="half">Half</option>
                  <option value="full">Full</option>

                </select>
                <div className='d-inline h-100'>Total Price</div>
              </div>
            </div>
          </div>
        </div>
         <div>
          <div className="card mt-3" style={{"width": "18rem","maxHeight":"360px"}}>
            <img src="https://source.unsplash.com/random/200×100/?paneer-tikka" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">this is some important text.</p>
              <div className="container w-100" >
                <select className='m-2 h-100 bg-success rounded'>
                  {Array.from(Array(6),(e,i)=>{
                    return(
                      <option key={i+1} value={i+1}>{i+1}</option>
                    )
                  })}
                </select>
                <select className='m-2 h-100 bg-success rounded'>
                  <option value="half">Half</option>
                  <option value="full">Full</option>

                </select>
                <div className='d-inline h-100'>Total Price</div>
              </div>
            </div>
          </div>
        </div>
         <div>
          <div className="card mt-3" style={{"width": "18rem","maxHeight":"360px"}}>
            <img src="https://source.unsplash.com/random/200×100/?paneer-tikka" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">this is some important text.</p>
              <div className="container w-100" >
                <select className='m-2 h-100 bg-success rounded'>
                  {Array.from(Array(6),(e,i)=>{
                    return(
                      <option key={i+1} value={i+1}>{i+1}</option>
                    )
                  })}
                </select>
                <select className='m-2 h-100 bg-success rounded'>
                  <option value="half">Half</option>
                  <option value="full">Full</option>

                </select>
                <div className='d-inline h-100'>Total Price</div>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  )
}
