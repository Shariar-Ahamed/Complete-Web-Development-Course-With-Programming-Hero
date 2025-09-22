/*
1. Components
2. JSX
3. Props
4. State
5. Event
6. Conditional Rendering


Sever site data load..
1. Api / URL https://jsonplaceholder.typicode.com/ 
*/


/* 
//!importent
1. just write a simple fetch with json conversion.
2. Wrap the data loading component under suspense.
*/



/*
//* 1st way
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => console.log(data));


//* 2nd way
const loadData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = res.json();
    return data;
}

loadData()
*/

