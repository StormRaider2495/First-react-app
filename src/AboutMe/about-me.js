import React from 'react';
import './about-me.css';

export default class AboutMe extends React.Component {

    constructor(props) {
        super(props);

        let self = this;

        self.availableColors = [
            {
                "name": "Black",
                "value": "#000"
            },
            {
                "name": "Red",
                "value": "#ca3814"
            },
            {
                "name": "Blue",
                "value": "#0086cc"
            },
            {
                "name": "Green",
                "value": "#3aa22b"
            },
            {
                "name": "Cherry",
                "value": "#b2112b"
            }
        ];

        // Set initial state values
        self.state = {
            name: '',
            color: self.availableColors[0].value
        };
    };

    // Return active color name from available colors, based on state value
    getActiveColorName() {
        let self = this;

        return self.availableColors.filter(color => color.value === self.state.color)[0].name;
    };

    updateName(evt) {
        let self = this;

        self.setState({
            name: evt.target.value
        })
    };

    updateColor(evt) {
        let self = this;

        self.setState({
            color: evt.target.value
        })
    };

    render() {
        let self = this;

        return (
            <article className="about">
                <section className="about__inner" style={{ background: self.state.color }}>
                    <h2>This is data-binding using REACT</h2>                       
                    <article className="about__content">
                        {
                            self.state.name ? 
                        <p>Hello there. My name is {self.state.name}, and my favourite color is {self.getActiveColorName()}</p> 
                        : <p> Name is need to render. Please type in your name.</p>
                        }
                    </article>
                    <form className="[ about__form ] [ boilerform ]">
                        <div>
                            <label className="c-label" htmlFor="name_field">Your name</label>
                            <input className="c-input-field" type="text" id="name_field" value={self.state.name} onChange={self.updateName.bind(self)} />
                        </div>
                        <div>
                            <label className="c-label" htmlFor="color_field">Your favourite color</label>
                            <div className="c-select-field">
                                <select className="c-select-field__menu" value={self.state.color} onChange={self.updateColor.bind(self)} id="color_field">
                                    {self.availableColors.map((color, index) => {
                                        return (
                                            <option key={index} value={color.value}>{color.name}</option>
                                        );
                                    })}
                                </select>
                                <span className="c-select-field__decor" aria-hidden="true" role="presentation">▾</span>
                            </div>
                        </div>
                    </form>
                </section>
            </article>
        );
    };
};
