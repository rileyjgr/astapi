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
            <div id="knowledge">
                <h4> Example Queries to get /api/:name example name, {name}.
                    <p>You will received a response as a json object as such:</p>
                    <ul> {name}:
                        <p>Energy: {energy}</p>
                        <p>Mass: {mass}</p>
                        <p>Velocity: {vel}</p>
                        <p>BlastRadius: {blastRadius}</p>
                        <p>Fireball: {fireball}</p>
                        <p>Richter Scale: {richterScale}</p>
                    </ul>
                </h4>
            </div>
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
