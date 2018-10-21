import React, { Component } from 'react';
import * as THREE from 'three';

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
        const diameter = state.diameter;
        const energy = state.energy;
        const mass = state.mass;
        const vel = state.v_imp;
        const blastRadius = state.blastRadius;
        const fireball =state.fireball;
        const richterScale = state.richterScale;

        // beinginning of
        // threejs code to render 3d model of asteroid
        let camera, scene, renderer;
        let geometry, material, mesh, texture;

        init();
        animate();

        function init() {

            camera = new THREE.PerspectiveCamera( 200, window.innerWidth / window.innerHeight, 0.01, 10 );
            camera.position.z = 1;

            scene = new THREE.Scene();
            const lenght = mass / 3;
            const width = mass / 3;
            const height = mass / 3;


            geometry = new THREE.BoxGeometry(lenght, height, mass);
            material = new THREE.MeshBasicMaterial( {color: 0xffff00} );

            mesh = new THREE.Mesh( geometry, material );

            scene.add( mesh );


            renderer = new THREE.WebGLRenderer( { antialias: true } );
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );

        }

        function animate() {

            requestAnimationFrame( animate );

            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.02;
            texture = new THREE.TextureLoader().load( "textures/bg.gif" );

            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set( 4, 4 );
            renderer.render( scene, camera );

        }
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
                <div id="webGl">
                    <p>Below will be a Three.js/WebGl, animation to simulate impact in a 3d setting.</p>
                </div>
            </div>
        )
    }
}
export default HomePage;
