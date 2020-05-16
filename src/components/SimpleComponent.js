// Code SimpleComponent Here
import React from "react";

class SimpleComponent extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            mood: "happy"
        }
    }

    handleOnClick = () =>
    {
        if(this.state.mood === "happy")
        {
            this.setState({
                mood: "sad"
            })
        }
        else
        {
            this.setState({
                mood: "happy"
            })
        }
    }

    render()
    {
        return <div onClick={this.handleOnClick}>{this.state.mood}</div>
    }
}

export default SimpleComponent;