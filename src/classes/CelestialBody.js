import * as THREE from 'three'

export default class CelestialBody {
    constructor(name, radius, position, texture) {
        this.name = name;
        this.radius = radius;
        this.position = position
        this.texture = texture;
    }

    getCelestialBody() {
        if (this.mesh === undefined ||  this.mesh === null) {
            const meshData = {
                radius: this.radius,
                textureFile: this.texture,
                position: this.position,
                name: this.name
            }
            this.mesh = createMesh(meshData)
        }
        return this.mesh
    }
}

function createMesh(meshData) {
    const { radius, textureFile, position, name } = meshData;
    const geo = new THREE.SphereGeometry(radius);
    const texture = new THREE.TextureLoader().load(textureFile);
    const meshBasicMaterial = new THREE.MeshBasicMaterial({ map: texture })
    const mesh = new THREE.Mesh(geo, meshBasicMaterial)
    mesh.position.x = position
    mesh.name = name
    return mesh
}