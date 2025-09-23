export function Friend({ friend }) {

    console.log(friend);
    const { name, email, phone, website } = friend;


  return (
    <div>
        
        <div className="card">
            <h3>Friend</h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>

    </div>
  );
}