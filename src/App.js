import React, { useEffect, useState } from 'react'
import Form from "./Form"
import Table from "./Table"
import {getData,deleteData, postData,putData} from "./Api"
function App() {
const[Products,setProduct]=useState([])
const[openForm,setopenForm]=useState(false)
const[edit,setEdit]=useState(false)
const[initialForm,setForm]=useState({
  name:"",
  price:"",
  category:""
})
  useEffect(
    ()=>{
getProducts()

    },[]
  )

  let getProducts =async ()=>{
   let res= await getData()
  setProduct( res.data)
  }
  let deleteProducts = async (id)=>{
     await deleteData(id)
     getProducts()
   
   }

   let addProducts = async (products)=>{
let data={
  name: products.name,
  price: products.price,
  category:products.category
}


if(edit)
await putData(products.id,data)
else

    await postData(data)
    getProducts()
    setopenForm(false)
  
  }
  
  let editProducts = async (data)=>{
    setForm(data)
    setopenForm(true)
    setEdit(true)
  
  }

  let showForm=()=>{
    setopenForm(true)
    setForm(({
      name:"",
      price:"",
      category:""
    }))
  }
  let closeForm=()=>{
    setopenForm(false)
  }

  return (
   <>
 <div className='wrapper m-5 w-50'>
 <h2 className='text-primary'>CRUD Operations</h2>
  <button className='btn btn-primary' onClick={()=>{
     showForm()
  }}>Add Product</button>
  <Table products={Products} delete={deleteProducts} edit={editProducts} />
  {
    openForm && <Form close={closeForm} data={initialForm} add={addProducts}/>
  }
 </div>

   </>
  )
}

export default App