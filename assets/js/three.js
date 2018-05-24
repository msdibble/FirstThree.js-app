var scene = new THREE.Scene();

// PerspectiveCamera is one of the different cameras provided by three.js
// First attribute, in this case "75", is the field of view (FOV)
// window.innerWidth / window.innerHeight s the aspect ratio
// The last two attributes are "near" and "far" clipping plane
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
// Width and height of the window are set for the renderer. If this were to be displayed on a mobile device then the height and width can be adjusted. Ex. both can be divided by two
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// An object that contains all the points and fill of a cube
var geometry = new THREE.BoxGeometry(1, 1, 1);
// Materials is used to color the geometry
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
// a Mesh is an object that applies material to the geometry.
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// A render loop that causes the renderer to draw the scene whenv the screen is refreshed
function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.03;
    cube.rotation.y += 0.03;
    cube.rotation.z += 0.03;
    renderer.render(scene, camera);
}

animate();