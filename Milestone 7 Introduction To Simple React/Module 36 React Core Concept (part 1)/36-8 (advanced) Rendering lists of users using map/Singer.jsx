import './App.css';

export default function Singer({singerName}){
    console.log(singerName);
    
    return (
        <div className='singerCSS'>
           <h3>Name: {singerName.name} </h3> 
            <p>Age: {singerName.age}</p>
        </div>
    )
}