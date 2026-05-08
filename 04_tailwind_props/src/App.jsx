import Card from "./Card"

const App = () => {
  let myObj =[ {
    username : "pranshu",
    age : 34
  }]
  return (
   
<div>
  <Card  name="Pranshu" btntext = "visit me" />
  <Card  name="Pranshu" />

</div>

   
  )
}

export default App
