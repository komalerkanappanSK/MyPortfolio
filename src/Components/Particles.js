import React, { Component } from "react";
import { Particles as ReactParticles } from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
  },
});

const Particles = () => {
  const classes = useStyles();

  return (
    <ReactParticles
      canvasClassName={classes.particlesCanva}
      params={{
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 600,
            },
          },
          shape: {
            type: "star",
            stroke: {
              widht: 1,
              color: "white",
            },
          },
          size: {
            value: 8,
            random: true,
            anim: {
              enable: true,
              speed: 6,
              size_min: 0.1,
              sync: true,
            },
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: true,
            },
          },
        },
      }}
    />
  );
};

export default Particles;
