
import './App.css';

const App : React.FC =()=> { //app 's type is React.Fc , actually jsx object
  return (
    <div className="App">
       hello world
    </div>
  );
}

export default App;



/**
 *  TYPESCRİPT , INSTANCES OF TYPE
  let city : string ; 
  let  idNum : string | number ; 
  let isCame : boolean ; 
  let hoppies : string[];// DEFINIFION OF ARRAYS 
  let role : [string, number]; 

  idNum = 'twenty one '; 

  type Person ={
    name: string,
    age:number
  }

  let user : Person ={
    name:'meryem',
    age:22

  }

  let allPersons : Person[];  //defining a new array which  in Person Type


  console.log('age and name from Person type object', user.name, user.age );
  

  // extending type objcets and intefaces 

  interface Universty {
    name:string,
    built:number
   }
 
   let firat :Universty= {
     name :'firat ',
      built : 1975
   }
  
   interface New   extends Universty  { //interface's names should start with capital letter
     name :string
 
   }
 
   type AnotherCollage =  {
     title:string
   }
 
   type Collage =  Universty &{ //extending interface
     title:string
 
   }
 
   type TypeInherit = AnotherCollage &{
     title:string
   }
 
 
   
 const x : Collage ={  //using extended object should use all veriables
   title:'Helsinky',
   name:'firat',
   built:123
 }
 
 
 const y : Collage={
   title:'Oxford'
 } 
 
 
   console.log('universty of' , firat.name, firat.built);
   
   function printName  (name :string){
     console.log('name', name );
     
   }
 
   printName ('meryem'); //  NOT REALATED TO PERSON OBJECT
 
 
 
 */