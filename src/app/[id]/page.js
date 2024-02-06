

export default async function page({params}) {
  const id = +params.id;

  let  response = await fetch('http://localhost:3000/api/login', {method:"GET"});
  response = await response.json();

   const data = await response.find(p => p.id == id);




  return (
    <div>
      
    </div>
  )
}
