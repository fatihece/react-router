import React from 'react'
import { useHistory } from 'react-router';

const Contact = () => {
    const history = useHistory();
    return (
        <div>
            <h1 style={{ color: "green" }}>This is CONTACT Page</h1>
            <button onClick={()=> history.push("/")}>Go to HOME</button>
        </div>
    )
}

export default Contact

// *********1**********
// const Contact = ({history}) => {
//     return (
//         <div>
//             <h1 style={{ color: "green" }}>This is CONTACT Page</h1>
//             <button onClick={()=> history.push("/")}>Go to HOME</button>
//         </div>
//     )
// }

// *********2***********
// const Contact = ({this.props.}) => {
//     return (
//         <div>
//             <h1 style={{ color: "green" }}>This is CONTACT Page</h1>
//             <button onClick={()=> props.history.push("/")}>Go to HOME</button>
//         </div>
//     )
// }