const bodyMaterial = new MeshPhysicalMaterial({
    color: 0xededed,
    metalness: 0.5,
    roughness: 0.8,
    clearcoat: 1,
    clearcoatRoughness: 0
})

const glassMaterial = new MeshPhysicalMaterial({
    color: 0x000000,
    metalness: 0,
    roughness: 0.1,
    transmission: 0.6,
    transparent: true
})

const redglassMaterial = new MeshPhysicalMaterial({
    color: 0x6e0c0c,
    metalness: 0.5,
    roughness: 0.1,
    transmission: 0.7,
    transparent: true
})

const detailsMaterial = new MeshPhysicalMaterial({
    color: 0x1b1b1b,
    metalness: 1,
    roughness: 1
})

const metalDetailsMaterial = new MeshPhysicalMaterial({
    color: 0x292929,
    metalness: 0.64,
    roughness: 1,
    clearcoat: 1,
    clearcoatRoughness: 0.5,
    reflectivity: 0.5
})

const yellowMaterial = new MeshPhysicalMaterial({
    color: 0xd4b220,
    metalness: 1,
    roughness: 1
})

const chromeMaterial = new MeshPhysicalMaterial({
    color: 0x898989,
    metalness: 1,
    roughness: 0
})

const mirrorMaterial = new MeshPhysicalMaterial({
    color: 0x7d7d7d,
    metalness: 1,
    roughness: 0
})

const diskMaterial = new MeshPhysicalMaterial({
    color: 0x7d7d7d,
    metalness: 1,
    roughness: 1
})

const carbonMaterial = new MeshPhysicalMaterial({
    color: 0x1b1b1b,
    metalness: 1,
    roughness: 0.8
})

export const materials = {
    carpaint: bodyMaterial,
    windowglass: glassMaterial,
    interior: detailsMaterial,
    chrome: chromeMaterial,
    tire: detailsMaterial,
    black: metalDetailsMaterial,
    rim_second: metalDetailsMaterial,
    brakedisk: diskMaterial,
    yellow: yellowMaterial,
    clearglass: glassMaterial,
    redglass: redglassMaterial,
    carbon: carbonMaterial,
    mirror: mirrorMaterial
}
