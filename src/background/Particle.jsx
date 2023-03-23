import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function Particle(){

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return(
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            "fullScreen":{
                "enable": true,
                "zIndex": -1,
            },
            /* "particles":{
                "number":{
                    "value": 10,
                    "density": {
                        "enable": false,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#fff"
                },
                "shape":{
                    "type": "star",
                    "options" :{
                        "sides": 5
                    }
                },
                "opacity":{
                    "value": 0.8,
                    "random": false,
                    "anim":{
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 4,
                    "random": false,
                    "anim":{
                        "enable": false,
                        "speed": 40,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "rotate":{
                    "value": 0,
                    "random": true,
                    "direction": "clockwise",
                    "animation":{
                        "enable": true,
                        "speed": 5,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 600,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 2
                },
                "move":{
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            }, */
            particles: {
                color: {
                    value: "#b3b6bc",
                },
                links: {
                    color: "#b3b6bc",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 2.5,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            "interactivity":{
                "events":{
                    "onHover":{
                        "enable": true,
                        "mode": [
                            "repulse"
                        ]
                    },
                    "onClick":{
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes":{
                    "grab":{
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble":{
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 5
                    },
                    "repulse":{
                        "distance": 200
                    },
                    "push":{
                        "patricles_nb": 4
                    },
                    "remove":{
                        "patricles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "background": {
                "color": "#152330",
                "image": "",
                "position": "50% 50%",
                "repeat": "no-repeat",
                "size": "cover"
            }
        }}

        />
    )
}

export default Particle;