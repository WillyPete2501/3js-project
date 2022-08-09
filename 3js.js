
let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)
let renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

let geometry = new THREE.BoxGeometry(1, 1, 1)
let material = new THREE.MeshBasicMaterial({color: 0xff0000})
let cube = new THREE.Mesh(geometry, material)
scene.add(cube)

cube.position.z = -5
function animate() {
    cube.rotation.x += 0.01
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}
animate()