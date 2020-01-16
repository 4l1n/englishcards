import React, {Component} from "react"
import carta1color from './cartas/carta1color.jpg';
import carta2color from './cartas/carta2color.jpg';
import carta3color from './cartas/carta3color.jpg';
import carta4color from './cartas/carta4color.jpg';
import carta5color from './cartas/carta5color.jpg';
import carta6color from './cartas/carta6color.jpg';
import carta7color from './cartas/carta7color.jpg';
import carta8color from './cartas/carta8color.jpg';
import carta9color from './cartas/carta9color.jpg';
import carta10color from './cartas/carta10color.jpg';
import carta11color from './cartas/carta11color.jpg';
import carta12color from './cartas/carta12color.jpg';

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: <img src={carta1color} className="Carta1" alt="Carta1Color" />,
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    componentDidMount() {
        fetch(<img src={carta1color} className="App-logo" alt="logo" />)
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })
            })
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }
    
    /**
     * Create a method that, when the "Gen" button is clicked, chooses one of the
     * memes from our `allMemeImgs` array at random and makes it so that is the
     * meme image that shows up in the bottom portion of our meme generator site (`.url`)
     */
    
    handleSubmit() {
        
    }
    
    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    /> 
                
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator