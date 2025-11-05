/**
 * 3D Globe Animation with Three.js
 * Creates an interactive wireframe globe with city markers
 */

window.addEventListener('load', () => {
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('globe'),
        alpha: true,
        antialias: true
    });

    renderer.setSize(600, 600);
    camera.position.z = 2;

    const globeRadius = 1;
    const segments = 64;

    // Create the globe mesh
    const geometry = new THREE.SphereGeometry(globeRadius, segments, segments);
    const material = new THREE.MeshPhongMaterial({
        color: 0x00FFCC,
        transparent: true,
        opacity: 0.1,
        wireframe: true
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    // Add point light
    const pointLight = new THREE.PointLight(0x00FFCC, 1);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    // Create glowing dots for major cities
    const cities = [
        { lat: 40.7128, lon: -74.0060, name: "New York" },
        { lat: 51.5074, lon: -0.1278, name: "London" },
        { lat: 35.6762, lon: 139.6503, name: "Tokyo" },
        { lat: 48.8566, lon: 2.3522, name: "Paris" },
        { lat: -33.8688, lon: 151.2093, name: "Sydney" }
    ];

    const dotGeometry = new THREE.SphereGeometry(0.02, 16, 16);
    const dotMaterial = new THREE.MeshPhongMaterial({
        color: 0x00FFCC,
        emissive: 0x00FFCC,
        emissiveIntensity: 0.5
    });

    cities.forEach(city => {
        const dot = new THREE.Mesh(dotGeometry, dotMaterial);
        const phi = (90 - city.lat) * (Math.PI / 180);
        const theta = (city.lon + 180) * (Math.PI / 180);

        dot.position.x = -(globeRadius * Math.sin(phi) * Math.cos(theta));
        dot.position.z = (globeRadius * Math.sin(phi) * Math.sin(theta));
        dot.position.y = (globeRadius * Math.cos(phi));

        globe.add(dot);
    });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        globe.rotation.y += 0.002;
        renderer.render(scene, camera);
    }

    animate();

    // Responsive globe sizing
    function onWindowResize() {
        const container = document.querySelector('.globe-container');
        if (container) {
            const size = Math.min(container.offsetWidth, container.offsetHeight);
            renderer.setSize(size, size);
        }
    }

    window.addEventListener('resize', onWindowResize);
    onWindowResize();
});
