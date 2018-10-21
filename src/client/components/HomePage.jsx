import React, { Component } from 'react';
import axios from 'axios';
//https://ssd-api.jpl.nasa.gov/sentry.api?all=1&ip-min=1e-3
class HomePage extends Component {
    state = {
        radius: "",
        energy: "",
        mass: "",
        v_imp: "",
        diameter:"",
        richterScale:""
    };

    updateState(des, energy, mass, v_imp, diameter, blastRadius, fireball, richterScale){
        this.setState({des, energy, mass, v_imp, diameter, blastRadius, fireball, richterScale})
    }

    componentDidMount() {
            axios
                .get('/api')
                .then(json=>
                        json.data.map(
                            result => this.updateState(result.name, result.energy, result.mass, result.v_imp, result.blastRadius, result.fireball, result.richterScale)
                        ));
    }

    render() {
        const state = this.state;
        const name = state.des;
        const energy = state.energy;
        const mass = state.mass;
        const vel = state.v_imp;
        const blastRadius = state.blastRadius;
        const fireball =state.fireball;
        const richterScale = state.richterScale;
        return (
        <div>
            <header className="masthead">
                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <h1 className="mx-auto my-0 text-uppercase">Example Queries to get /api/:name example name, {name}.</h1>
                        <h2 className="mx-auto my-0">You will received a response as a json object as such:</h2>
                        <ul className="mx-auto my-0">Name: {name}
                            <p className="mx-auto my-0">Energy: {energy}</p>
                            <p className="mx-auto my-0">Mass: {mass}</p>
                            <p className="mx-auto my-0">Velocity: {vel} </p>
                            <p className="mx-auto my-0">BlastRadius: {blastRadius}</p>
                            <p className="mx-auto my-0">Fireball: {fireball}</p>
                            <p className="mx-auto my-0">Richter Scale: {richterScale}</p>
                        </ul>
                        <a href="https://rileyjgr.github.io/astapi/" className="btn btn-primary js-scroll-trigger">Jump into the docs!</a>
                    </div>
                </div>
            </header>
            <div id="links">
                <a href="https://teasteroidm-api.herokuapp.com/api">"Full" - Api.</a>
                <br/>
                <a href="https://github.com/rileyjgr/astapi">Backend Github Repo</a>
                <p>Created by Riley Griffin</p>
            </div>

        </div>
        )
    }
}
export default HomePage;
