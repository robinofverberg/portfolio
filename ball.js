import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: bg, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a sphere geometry
const geometry = new THREE.SphereGeometry(1, 128, 128);

// Create a custom shader material
const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
        time: { value: 0.0 }, // Time uniform for animation
    },
    vertexShader: `
        uniform float time;
        void main() {
            vec3 newPosition = position;
            // Add a sine wave effect to the Y coordinate of the points with animation
            float waveFrequency = 5.0;
            float waveAmplitude = 0.1;
            newPosition.y += sin(newPosition.x * waveFrequency + time) * waveAmplitude;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 0.5);
            gl_PointSize = 2.0; // Adjust point size as needed
        }
    `,
    fragmentShader: `
        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,
});

// Create a points object with the shader material
const sphere = new THREE.Points(geometry, shaderMaterial);

// Add the sphere to the scene
scene.add(sphere);

// Set the camera position
camera.position.z = 5;

// Create a function to handle window resizing
const handleResize = () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    // Update the camera aspect ratio to match the new size
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    // Update the renderer size
    renderer.setSize(newWidth, newHeight);
};

// Add a window resize event listener
window.addEventListener('resize', handleResize);

// Create an animation loop
const animate = () => {
    requestAnimationFrame(animate);

    // Update the time uniform for the shader
    shaderMaterial.uniforms.time.value += 0.01; // You can adjust the speed of the animation

    // Rotate the sphere
    sphere.rotation.x += 0.005;
    sphere.rotation.y += 0.005;

    // Render the scene
    renderer.render(scene, camera);
};

// Call the animate function to start the animation loop
animate();
