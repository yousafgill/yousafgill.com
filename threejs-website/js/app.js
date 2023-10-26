// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const programmerGeometry = new THREE.BoxGeometry(1, 1, 1);
const programmerMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const programmer = new THREE.Mesh(programmerGeometry, programmerMaterial);

scene.add(programmer);

const treeGeometry = new THREE.CylinderGeometry(0.1, 0.2, 1, 8);
const treeMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
const tree = new THREE.Mesh(treeGeometry, treeMaterial);
tree.position.set(2, 0, 0);

scene.add(tree);

const animate = () => {
  requestAnimationFrame(animate);

  // Add animation logic here (e.g., moving the programmer)
  
  renderer.render(scene, camera);
};

animate();
