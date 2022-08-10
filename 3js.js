

//document.body.style.backgroundImage = "url('./05.-Foyer_828-Moaniala-Street.jpg')"

let scene = new THREE.Scene()
const loader = new THREE.TextureLoader();
loader.load('https://images.pexels.com/photos/1205301/pexels-photo-1205301.jpeg' , function(texture)
{
    scene.background = texture; 
})
const input = document.createElement('input')
input.type='color'
input.id='inputID'
input.setAttribute('value', '#0000ff')
console.log(input)
let inputID = document.getElementById('inputID')
document.querySelector('body').appendChild(input)

let mouseState = false
//scene.background = new THREE.Color(0x0c5a0c)

let camera = new THREE.PerspectiveCamera(80, window.innerWidth/window.innerHeight)
let renderer = new THREE.WebGLRenderer({antialias: true})

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

let geometry = new THREE.TorusGeometry(10, 2, 16, 80)
let materials = new THREE.MeshBasicMaterial({color: input.value})
let mesh = new THREE.Mesh(geometry, materials)
scene.add(mesh)
let geo = new THREE.EdgesGeometry(mesh.geometry)
let mat = new THREE.LineBasicMaterial({color: 0x000000})
let wireframe = new THREE.LineSegments(geo, mat)
mesh.add(wireframe)



function animate() {
    mesh.rotation.x += 0.02
    mesh.rotation.y += 0.02
    mesh.position.z = -30
    
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}
animate()