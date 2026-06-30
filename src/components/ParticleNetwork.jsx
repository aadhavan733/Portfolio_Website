import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleNetwork = () => {
    const initParticles = async (engine) => {
        await loadSlim(engine);
    };

    const options = useMemo(() => ({
        fullScreen: { enable: false },
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 160,
                    links: {
                        opacity: 1,
                        color: "#EAB308"
                    },
                },
            },
        },
        particles: {
            color: {
                value: "#EAB308", // var(--accent)
            },
            links: {
                color: "#EAB308",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1,
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
        detectRetina: true,
    }), []);

    return (
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, overflow: "hidden" }}>
            <ParticlesProvider init={initParticles}>
                <Particles
                    id="tsparticles"
                    options={options}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                />
            </ParticlesProvider>
        </div>
    );
};

export default ParticleNetwork;
