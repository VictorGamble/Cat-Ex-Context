import React, {useContext} from 'react';
import StateContext from '../context';

const handleChange = (e,dispatch) => {
    dispatch({
        type: "Change_Name",
        name: e.target.value
    })
}

const DemoComponent = (e) => {
    const [value, dispatch] = useContext(StateContext)
    const { name, activity } = value;

    return (
        <>
            <p>{name} is {activity} </p>
            <form>
                <input type="text" name="newName" placeholder="NewnName" onChange={e => handleChange(e, dispatch)}/>
            </form>
        </>
    )
}

export default DemoComponent;