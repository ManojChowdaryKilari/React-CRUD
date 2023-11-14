import React, { useState } from 'react'

function Form(props) {

  const[product,setproduct]=useState(props.data)
  const [sumitted, setSubmitted] = useState(false)
  let changeFormData=(event)=>{
    const{name,value}=event.target;
    setproduct({...product,[name]: value})
  }
  return (
  <div className='form-overlay'>
<form>
  <div className='form-group'>
<label htmlFor="">Name:</label>
<input type="text" name="name" className='form-control mt-2'  value={product.name}placeholder='EnterName' onChange={changeFormData} />
{
 sumitted && product.name.length < 5 && <span className="text-danger">Product name must be 5 charecters</span>
}
  </div>
  <div className='form-group'>
<label htmlFor="">Price:</label>
<input type="number" name="price"  className='form-control mt-2 'value={product.price}  placeholder='EnterPrice' onChange={changeFormData} />

{
sumitted && product.price === "" && <span className="text-danger">Product Price required</span>
}

  </div>

<div className='form-group'>
  <label htmlFor="">Category:</label>
<select className='form-control mt-2' name="category" value={product.category}onChange={changeFormData}>
  <option value="-1"></option>
  <option value={'mobile'}>Mobiles</option>
  <option value={"laptap"}>Laptops</option>
  <option value={"tv"}>TV's</option>
</select>

{
sumitted && product.category === "" && <span className="text-danger">Product category required</span>
 }

</div>

<button className='btn btn-primary float-end' 
onClick={(e)=>{
  setSubmitted(true)
  e.preventDefault();
  if (!!product.name && !!product.price && !!product.category) {
      props.add(product)
  }



}}

>Send</button>
<button className='btn btn-danger float-end'
onClick={(e)=>{
  e.preventDefault();
  props.close()
  }}
>Cancel</button>

</form>
  </div>
  )
}

export default Form