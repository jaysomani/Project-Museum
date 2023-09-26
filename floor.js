import * as THREE from 'three';

export const setupFloor = (scene) => {
    const textureLoader = new THREE.TextureLoader(); // create a textureLoader
    const floorTexture = textureLoader.load('img/floor1.png'); // load the texture

    floorTexture.wrapS = THREE.RepeatWrapping;
    floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(1, 2);

    const planeGeometry = new THREE.PlaneGeometry(40, 40); 
    const planeMaterial = new THREE.MeshPhongMaterial({
        
        map: floorTexture, 
        side: THREE.DoubleSide, 
    });

    const floorPlane = new THREE.Mesh(planeGeometry, planeMaterial); 

    floorPlane.rotation.x = Math.PI / 2; 
    floorPlane.position.y = -Math.PI; 


    scene.add(floorPlane); 
};