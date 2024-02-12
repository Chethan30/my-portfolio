import React from "react";
import * as THREE from "three";
import { useEffect, useRef } from "react";

const Background = () => {
  const refContainer = useRef(null);
  useEffect(() => {
    // === THREE.JS CODE START ===

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 1;
    camera.rotation.x = Math.PI / 2;

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // use ref as a mount point of the Three.js scene instead of the document.body
    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);

    var starGeo = new THREE.ShapeGeometry();
    for (let i = 0; i < 6000; i++) {
      var star = new THREE.Vector3(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300
      );
      starGeo.shapes.push(star);
    }

    let sprite = new THREE.TextureLoader().load("star.png");
    let starMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.7,
      map: sprite,
    });

    var stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);

    var animate = function () {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
  }, []);
  return <div className="background" ref={refContainer}></div>;
};

export default Background;
