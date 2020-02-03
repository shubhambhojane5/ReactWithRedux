import React from 'react';
import '../Dashboard/Dashboard.css'
import {connect} from 'react-redux';
import * as ActionType from '../Store/ActionType';

const Dashboard = (props) => {
    console.log("Initial call");
    
    return (
        <React.Fragment>
            <div className="divCenter">
                <h4>Counter Value: {props.counter}</h4>
            </div>
            <hr></hr>
            <div className="divInline">
                <button type="button" onClick={props.incrementCounterHandler}>Increment Counter</button>
                <button type="button" onClick={props.addCounterHandler}>Add 10 To Counter </button>
                <button type="button" onClick={props.decrementCounter}>Decrement Counter</button>
                <button type="button" onClick={props.subtractCounterHandler}>Subtract 10 From Counter</button>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps=(state)=>{
    console.log("mapStateToProps");
    return{
        counter:state.counter
    }
}

const mapDispatchToPros=dispatch=>{
    console.log("mapDispatchToProps");
    return{
        incrementCounterHandler:()=>dispatch({
            type:ActionType.INCREMENT_COUNTER,
            payload:1
        }),
        addCounterHandler:()=>dispatch({
            type:ActionType.ADD_COUNTER,
            payload:10
        }),
        decrementCounter:()=>dispatch({
            type:ActionType.DECREMENT_COUNTER,
            payload:1
        }),
        subtractCounterHandler:()=>dispatch({
            type:ActionType.SUBTRACT_COUNTER,
            payload:10
        })
    }
}

export default connect(mapStateToProps, mapDispatchToPros)(Dashboard);