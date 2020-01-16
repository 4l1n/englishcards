import React, {Component} from "react"
import Menu from "./Menu"



class EnglishCards extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "https://github.com/4l1n/englishcards/blob/master/src/cartas/carta1color.jpg?raw=true",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.carta1 = this.carta1.bind(this)
        this.carta2 = this.carta2.bind(this)
        this.carta3 = this.carta3.bind(this)
        this.carta4 = this.carta4.bind(this)
        this.carta5 = this.carta5.bind(this)
        this.carta6 = this.carta6.bind(this)
        this.carta7 = this.carta7.bind(this)
        this.carta8 = this.carta8.bind(this)
        this.carta9 = this.carta9.bind(this)
        this.carta10 = this.carta10.bind(this)
        this.carta11 = this.carta11.bind(this)
        this.carta12 = this.carta12.bind(this)
    }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
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

    carta1(event){
        event.preventDefault()
        this.setState({ randomImg: "https://github.com/4l1n/englishcards/blob/master/src/cartas/carta1color.jpg?raw=true" })
    }
    carta2(event){
        event.preventDefault()
        this.setState({ randomImg: "https://github.com/4l1n/englishcards/blob/master/src/cartas/carta2color.jpg?raw=true" })
    }
    carta3(event){
        event.preventDefault()
        this.setState({ randomImg: "https://github.com/4l1n/englishcards/blob/master/src/cartas/carta3color.jpg?raw=true" })
    }
    carta4(event){
        event.preventDefault()
        this.setState({ randomImg: "https://github.com/4l1n/englishcards/blob/master/src/cartas/carta4color.jpg?raw=true" })
    }
    carta5(event){
        event.preventDefault()
        this.setState({ randomImg: "https://github.com/4l1n/englishcards/blob/master/src/cartas/carta5color.jpg?raw=true" })
    }
    carta6(event){
        event.preventDefault()
        this.setState({ randomImg: "https://github.com/4l1n/englishcards/blob/master/src/cartas/carta6color.jpg?raw=true" })
    }
    carta7(event){
        event.preventDefault()
        this.setState({ randomImg: "https://github.com/4l1n/englishcards/blob/master/src/cartas/carta7color.jpg?raw=true" })
    }
    carta8(event){
        event.preventDefault()
        this.setState({ randomImg: "https://github.com/4l1n/englishcards/blob/master/src/cartas/carta8color.jpg?raw=true" })
    }
    carta9(event){
        event.preventDefault()
        this.setState({ randomImg: "https://github.com/4l1n/englishcards/blob/master/src/cartas/carta9color.jpg?raw=true" })
    }
    carta10(event){
        event.preventDefault()
        this.setState({ randomImg: "https://github.com/4l1n/englishcards/blob/master/src/cartas/carta10color.jpg?raw=true" })
    }
    carta11(event){
        event.preventDefault()
        this.setState({ randomImg: "https://github.com/4l1n/englishcards/blob/master/src/cartas/carta11color.jpg?raw=true" })
    }
    carta12(event){
        event.preventDefault()
        this.setState({ randomImg: "https://github.com/4l1n/englishcards/blob/master/src/cartas/carta12color.jpg?raw=true" })
    }

    render() {
        return (
            <div>
                <button onClick={this.carta1}>Carta 1</button>
                    <button onClick={this.carta2}>Carta 2</button>
                    <button onClick={this.carta3}>Carta 3</button>
                    <button onClick={this.carta4}>Carta 4</button>
                    <button onClick={this.carta5}>Carta 5</button>
                    <button onClick={this.carta6}>Carta 6</button>
                    <button onClick={this.carta7}>Carta 7</button>
                    <button onClick={this.carta8}>Carta 8</button>
                    <button onClick={this.carta9}>Carta 9</button>
                    <button onClick={this.carta10}>Carta 10</button>
                    <button onClick={this.carta11}>Carta 11</button>
                    <button onClick={this.carta12}>Carta 12</button>
                <form className="meme-form">
                    <input 
                        type="text"
                        name="topText"
                        placeholder=" Primera línea"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder=" Segunda línea"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    /> 
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

export default EnglishCards