// Comprehensive customization options for all furniture products
export const furnitureOptions = {
    // BEDROOM
    bed: {
        basePrice: 20000,
        materials: [
            { name: "Solid Wood", price: 5000 },
            { name: "Engineered Wood", price: 3000 },
            { name: "Metal Frame", price: 2000 },
        ],
        sizes: [
            { name: "Single", price: 0 },
            { name: "Queen", price: 3000 },
            { name: "King", price: 5000 },
        ],
        colors: [
            { name: "Walnut", code: "#5A3825" },
            { name: "Teak", code: "#8B5A2B" },
            { name: "Oak", code: "#D4A574" },
            { name: "White", code: "#F5F5F5" },
        ],
        storage: [
            { name: "With Storage", price: 4000 },
            { name: "Without Storage", price: 0 },
        ],
        headboard: [
            { name: "Wooden", price: 2000 },
            { name: "Upholstered", price: 3000 },
            { name: "Panel", price: 1500 },
            { name: "Minimal", price: 0 },
        ],
        image: "https://i.pinimg.com/1200x/d9/02/79/d902799fce03ef8f54426b45103a21e1.jpg",
    },
    wardrobe: {
        basePrice: 18000,
        materials: [
            { name: "Solid Wood", price: 6000 },
            { name: "Engineered Wood", price: 4000 },
            { name: "MDF", price: 3000 },
        ],
        sizes: [
            { name: "Medium", price: 0 },
            { name: "Large", price: 4000 },
            { name: "Extra Large", price: 7000 },
        ],
        doors: [
            { name: "2-Door", price: 0 },
            { name: "3-Door", price: 3000 },
            { name: "4-Door", price: 5000 },
            { name: "Sliding", price: 4000 },
        ],
        colors: [
            { name: "Walnut", code: "#5A3825" },
            { name: "White", code: "#F5F5F5" },
            { name: "Grey", code: "#9E9E9E" },
            { name: "High Gloss", code: "#E0E0E0" },
        ],
        style: [
            { name: "Classic", price: 0 },
            { name: "Modern", price: 2000 },
            { name: "Luxury", price: 5000 },
        ],
        image: "https://i.pinimg.com/736x/9a/68/db/9a68dbf9940e3815c759cd793eadb90d.jpg",
    },
    shelf: {
        basePrice: 3000,
        materials: [
            { name: "Solid Wood", price: 1500 },
            { name: "Engineered Wood", price: 800 },
            { name: "Metal", price: 500 },
        ],
        sizes: [
            { name: "Single", price: 0 },
            { name: "Double", price: 1000 },
            { name: "Triple", price: 2000 },
        ],
        colors: [
            { name: "Natural Wood", code: "#D4A574" },
            { name: "White", code: "#F5F5F5" },
            { name: "Black", code: "#212121" },
        ],
        image: "https://i.pinimg.com/736x/e2/7d/a5/e27da51087dedeebc32da1dd1d43b4a9.jpg",
    },
    bedTable: {
        basePrice: 4000,
        materials: [
            { name: "Solid Wood", price: 1500 },
            { name: "Engineered Wood", price: 800 },
            { name: "Metal & Wood", price: 1000 },
        ],
        sizes: [
            { name: "Single", price: 0 },
            { name: "Double", price: 1500 },
        ],
        storage: [
            { name: "With Storage", price: 1000 },
            { name: "Without Storage", price: 0 },
        ],
        colors: [
            { name: "Walnut", code: "#5A3825" },
            { name: "White", code: "#F5F5F5" },
            { name: "Oak", code: "#D4A574" },
        ],
        image: "https://i.pinimg.com/736x/aa/b8/0a/aab80a6db0f28cc75fd7f0438423a4f5.jpg",
    },
    dressingTable: {
        basePrice: 12000,
        materials: [
            { name: "Solid Wood", price: 4000 },
            { name: "Engineered Wood", price: 2500 },
        ],
        sizes: [
            { name: "Single", price: 0 },
            { name: "Double", price: 5000 },
        ],
        storage: [
            { name: "With Storage", price: 2000 },
            { name: "Without Storage", price: 0 },
        ],
        colors: [
            { name: "White", code: "#F5F5F5" },
            { name: "Walnut", code: "#5A3825" },
            { name: "Oak", code: "#D4A574" },
        ],
        image: "https://i.pinimg.com/1200x/4c/82/74/4c827493700a69af3f3f9d8ca465a3b7.jpg",
    },
    bedroomCouch: {
        basePrice: 15000,
        materials: [
            { name: "Fabric", price: 0 },
            { name: "Leather", price: 8000 },
            { name: "Velvet", price: 5000 },
        ],
        sizes: [
            { name: "Single", price: 0 },
            { name: "Double", price: 4000 },
        ],
        colors: [
            { name: "Grey", code: "#9E9E9E" },
            { name: "Beige", code: "#D6C5B3" },
            { name: "Navy", code: "#1A237E" },
            { name: "Brown", code: "#5D4037" },
        ],
        image: "https://i.pinimg.com/1200x/b7/2f/e6/b72fe6b07b8b0d0b32844e79717df3ee.jpg",
    },

    // LIVING ROOM
    sofa: {
        basePrice: 25000,
        materials: [
            { name: "Fabric", price: 0 },
            { name: "Leather", price: 10000 },
            { name: "Velvet", price: 6000 },
        ],
        seating: [
            { name: "2-Seater", price: 0 },
            { name: "3-Seater", price: 8000 },
            { name: "4-Seater", price: 12000 },
        ],
        colors: [
            { name: "Grey", code: "#9E9E9E" },
            { name: "Beige", code: "#D6C5B3" },
            { name: "Navy", code: "#1A237E" },
            { name: "Brown", code: "#5D4037" },
        ],
        storage: [
            { name: "With Storage", price: 5000 },
            { name: "Without Storage", price: 0 },
        ],
        image: "https://i.pinimg.com/1200x/af/bd/cf/afbdcf71db5b292e7f58d84ba6bc407d.jpg",
    },
    tvunit: {
        basePrice: 15000,
        materials: [
            { name: "Engineered Wood", price: 0 },
            { name: "Solid Wood", price: 5000 },
            { name: "MDF", price: 2000 },
        ],
        sizes: [
            { name: "Medium", price: 0 },
            { name: "Large", price: 4000 },
            { name: "Extra Large", price: 7000 },
        ],
        storage: [
            { name: "With Storage", price: 3000 },
            { name: "Without Storage", price: 0 },
        ],
        colors: [
            { name: "Walnut", code: "#5A3825" },
            { name: "White", code: "#F5F5F5" },
            { name: "Black", code: "#212121" },
        ],
        image: "https://i.pinimg.com/736x/09/2d/d0/092dd08a04be3e31bdebed561e798447.jpg",
    },
    centraltable: {
        basePrice: 8000,
        materials: [
            { name: "Solid Wood", price: 3000 },
            { name: "Glass & Metal", price: 2000 },
            { name: "Engineered Wood", price: 1500 },
        ],
        shape: [
            { name: "Round", price: 0 },
            { name: "Rectangle", price: 1000 },
            { name: "Square", price: 500 },
        ],
        storage: [
            { name: "With Storage", price: 2000 },
            { name: "Without Storage", price: 0 },
        ],
        colors: [
            { name: "Natural Wood", code: "#D4A574" },
            { name: "Walnut", code: "#5A3825" },
            { name: "Black", code: "#212121" },
        ],
        image: "https://i.pinimg.com/1200x/e4/bf/0d/e4bf0d153891129dd98aa01142dc4e25.jpg",
    },
    chair: {
        basePrice: 8000,
        materials: [
            { name: "Fabric", price: 0 },
            { name: "Leather", price: 4000 },
            { name: "Mesh", price: 2000 },
        ],
        sizes: [
            { name: "Single", price: 0 },
        ],
        colors: [
            { name: "Black", code: "#212121" },
            { name: "Grey", code: "#9E9E9E" },
            { name: "Brown", code: "#5D4037" },
            { name: "Beige", code: "#D6C5B3" },
        ],
        image: "https://i.pinimg.com/1200x/00/71/11/0071110882356dcfe138a82494212e1f.jpg",
    },
    sidetable: {
        basePrice: 4000,
        materials: [
            { name: "Solid Wood", price: 1500 },
            { name: "Metal", price: 800 },
            { name: "Engineered Wood", price: 1000 },
        ],
        shape: [
            { name: "Round", price: 0 },
            { name: "Square", price: 500 },
            { name: "Rectangle", price: 300 },
        ],
        storage: [
            { name: "With Storage", price: 1000 },
            { name: "Without Storage", price: 0 },
        ],
        colors: [
            { name: "Natural Wood", code: "#D4A574" },
            { name: "Black", code: "#212121" },
            { name: "White", code: "#F5F5F5" },
        ],
        image: "https://i.pinimg.com/736x/99/04/81/99048189af5e75574815fa3791cda778.jpg",
    },
    reclinersofa: {
        basePrice: 35000,
        materials: [
            { name: "Fabric", price: 0 },
            { name: "Leather", price: 12000 },
        ],
        seating: [
            { name: "2-Seater", price: 0 },
            { name: "3-Seater", price: 10000 },
        ],
        colors: [
            { name: "Brown", code: "#5D4037" },
            { name: "Black", code: "#212121" },
            { name: "Grey", code: "#9E9E9E" },
        ],
        image: "https://i.pinimg.com/1200x/a9/09/37/a909376014e837f1d30ba0201e295193.jpg",
    },

    // STUDY
    studytable: {
        basePrice: 12000,
        materials: [
            { name: "Engineered Wood", price: 0 },
            { name: "Solid Wood", price: 4000 },
            { name: "Metal & Wood", price: 2000 },
        ],
        sizes: [
            { name: "Single", price: 0 },
            { name: "Medium", price: 3000 },
            { name: "Large", price: 5000 },
        ],
        storage: [
            { name: "With Storage", price: 3000 },
            { name: "Without Storage", price: 0 },
        ],
        colors: [
            { name: "White", code: "#F5F5F5" },
            { name: "Walnut", code: "#5A3825" },
            { name: "Oak", code: "#D4A574" },
        ],
        image: "https://i.pinimg.com/1200x/d5/fb/23/d5fb23f8a9a02376da29570e9d70157a.jpg",
    },
    studychair: {
        basePrice: 6000,
        materials: [
            { name: "Mesh", price: 0 },
            { name: "Leatherette", price: 2000 },
            { name: "Fabric", price: 1000 },
        ],
        sizes: [
            { name: "Single", price: 0 },
        ],
        colors: [
            { name: "Black", code: "#212121" },
            { name: "Grey", code: "#9E9E9E" },
            { name: "Blue", code: "#1976D2" },
        ],
        image: "https://i.pinimg.com/736x/54/bd/35/54bd35417ae8d3b9f11113daf38695af.jpg",
    },
    rackshelf: {
        basePrice: 5000,
        materials: [
            { name: "Engineered Wood", price: 0 },
            { name: "Metal & Wood", price: 1500 },
            { name: "Solid Wood", price: 3000 },
        ],
        sizes: [
            { name: "Medium", price: 0 },
            { name: "Large", price: 3000 },
        ],
        colors: [
            { name: "Natural Wood", code: "#D4A574" },
            { name: "White", code: "#F5F5F5" },
            { name: "Black", code: "#212121" },
        ],
        image: "https://i.pinimg.com/736x/10/9b/02/109b02298f4ca5718476c4ff2e95f67c.jpg",
    },
    revolvingchair: {
        basePrice: 7000,
        materials: [
            { name: "Mesh", price: 0 },
            { name: "Fabric", price: 1000 },
            { name: "Leatherette", price: 2000 },
        ],
        sizes: [
            { name: "Single", price: 0 },
        ],
        colors: [
            { name: "Black", code: "#212121" },
            { name: "Grey", code: "#9E9E9E" },
            { name: "Blue", code: "#1976D2" },
        ],
        image: "https://i.pinimg.com/736x/85/b7/42/85b742544e7760cd9a5c89c60cd54bf8.jpg",
    },
    shelvesunit: {
        basePrice: 8000,
        materials: [
            { name: "Engineered Wood", price: 0 },
            { name: "Solid Wood", price: 4000 },
        ],
        sizes: [
            { name: "Medium", price: 0 },
            { name: "Large", price: 4000 },
        ],
        storage: [
            { name: "With Storage", price: 3000 },
            { name: "Open Storage", price: 0 },
        ],
        colors: [
            { name: "White", code: "#F5F5F5" },
            { name: "Walnut", code: "#5A3825" },
            { name: "Oak", code: "#D4A574" },
        ],
        image: "https://i.pinimg.com/736x/10/9b/02/109b02298f4ca5718476c4ff2e95f67c.jpg",
    },
    studybedtable: {
        basePrice: 2000,
        materials: [
            { name: "Engineered Wood", price: 0 },
            { name: "Solid Wood", price: 800 },
        ],
        sizes: [
            { name: "Single", price: 0 },
        ],
        colors: [
            { name: "Natural Wood", code: "#D4A574" },
            { name: "White", code: "#F5F5F5" },
        ],
        image: "https://i.pinimg.com/1200x/52/38/2d/52382d0ef3e257a9d27df38df1d06795.jpg",
    },

    // BATHROOM
    vanity: {
        basePrice: 15000,
        materials: [
            { name: "Engineered Wood", price: 0 },
            { name: "Solid Wood", price: 5000 },
        ],
        sizes: [
            { name: "Small", price: 0 },
            { name: "Medium", price: 3000 },
            { name: "Large", price: 6000 },
        ],
        storage: [
            { name: "With Storage", price: 2000 },
            { name: "Without Storage", price: 0 },
        ],
        colors: [
            { name: "White", code: "#F5F5F5" },
            { name: "Grey", code: "#9E9E9E" },
            { name: "Walnut", code: "#5A3825" },
        ],
        image: "https://i.pinimg.com/1200x/8b/49/25/8b49255acfa55b3177ceb58a7d728e62.jpg",
    },
    mirrorcabinet: {
        basePrice: 6000,
        materials: [
            { name: "Engineered Wood", price: 0 },
            { name: "Solid Wood", price: 3000 },
        ],
        sizes: [
            { name: "Small", price: 0 },
            { name: "Medium", price: 2000 },
            { name: "Large", price: 4000 },
        ],
        storage: [
            { name: "With Storage", price: 1000 },
            { name: "Without Storage", price: 0 },
        ],
        colors: [
            { name: "White", code: "#F5F5F5" },
            { name: "Grey", code: "#9E9E9E" },
        ],
        image: "https://i.pinimg.com/1200x/fa/31/1d/fa311dcf664e3df5cc4bfa4bfb307879.jpg",
    },
    undersink: {
        basePrice: 5000,
        materials: [
            { name: "Engineered Wood", price: 0 },
            { name: "Solid Wood", price: 2500 },
        ],
        sizes: [
            { name: "Small", price: 0 },
            { name: "Medium", price: 2000 },
        ],
        storage: [
            { name: "With Storage", price: 1000 },
            { name: "Open Storage", price: 0 },
        ],
        colors: [
            { name: "White", code: "#F5F5F5" },
            { name: "Grey", code: "#9E9E9E" },
        ],
        image: "https://i.pinimg.com/736x/69/ea/ff/69eaff512bfab7a9497cd9f5008a92f0.jpg",
    },
    bathroomshelves: {
        basePrice: 2000,
        materials: [
            { name: "Engineered Wood", price: 0 },
            { name: "Metal", price: 500 },
            { name: "Glass & Metal", price: 800 },
        ],
        sizes: [
            { name: "Small", price: 0 },
        ],
        colors: [
            { name: "White", code: "#F5F5F5" },
            { name: "Chrome", code: "#E0E0E0" },
        ],
        image: "https://i.pinimg.com/736x/97/30/24/9730248ee967ffebec999867580bd76b.jpg",
    },
    laundrycabinet: {
        basePrice: 6000,
        materials: [
            { name: "Engineered Wood", price: 0 },
            { name: "Metal", price: 2000 },
        ],
        sizes: [
            { name: "Medium", price: 0 },
            { name: "Large", price: 3000 },
        ],
        storage: [
            { name: "With Storage", price: 1500 },
            { name: "Open Storage", price: 0 },
        ],
        colors: [
            { name: "White", code: "#F5F5F5" },
            { name: "Grey", code: "#9E9E9E" },
        ],
        image: "https://i.pinimg.com/1200x/4a/17/72/4a17728f1e2bf942dfcafa8205d87cd3.jpg",
    },
    bathroomstool: {
        basePrice: 2000,
        materials: [
            { name: "Teak", price: 0 },
            { name: "Bamboo", price: 500 },
            { name: "Plastic", price: -500 },
        ],
        sizes: [
            { name: "Single", price: 0 },
        ],
        colors: [
            { name: "Natural", code: "#D4A574" },
            { name: "White", code: "#F5F5F5" },
        ],
        image: "https://i.pinimg.com/1200x/cb/ea/72/cbea72531922c10f7e1c1d3f554f253a.jpg",
    },

    // GARDEN
    outdoorsofa: {
        basePrice: 20000,
        materials: [
            { name: "Rattan", price: 0 },
            { name: "Aluminium", price: 3000 },
            { name: "Teak", price: 5000 },
        ],
        seating: [
            { name: "2-Seater", price: 0 },
            { name: "3-Seater", price: 5000 },
        ],
        colors: [
            { name: "Natural", code: "#D4A574" },
            { name: "Grey", code: "#9E9E9E" },
            { name: "Brown", code: "#5D4037" },
        ],
        image: "https://i.pinimg.com/1200x/38/46/bc/3846bc52ece40f7926c1e3a8be68caea.jpg",
    },
    gardendining: {
        basePrice: 25000,
        materials: [
            { name: "Rattan", price: 0 },
            { name: "Aluminium", price: 4000 },
            { name: "Teak", price: 6000 },
        ],
        seating: [
            { name: "4-Seater", price: 0 },
            { name: "6-Seater", price: 5000 },
        ],
        colors: [
            { name: "Natural", code: "#D4A574" },
            { name: "Grey", code: "#9E9E9E" },
        ],
        image: "https://i.pinimg.com/1200x/57/38/59/5738598db637bc052f234ad55c67590c.jpg",
    },
    loungechair: {
        basePrice: 6000,
        materials: [
            { name: "Aluminium", price: 0 },
            { name: "Metal", price: 1000 },
            { name: "Teak", price: 3000 },
        ],
        sizes: [
            { name: "Single", price: 0 },
        ],
        colors: [
            { name: "Grey", code: "#9E9E9E" },
            { name: "Natural", code: "#D4A574" },
            { name: "Brown", code: "#5D4037" },
        ],
        image: "https://i.pinimg.com/1200x/4c/f0/4e/4cf04e6511e319de03de6660b1b8f408.jpg",
    },
    gardentable: {
        basePrice: 8000,
        materials: [
            { name: "Metal", price: 0 },
            { name: "Teak", price: 4000 },
            { name: "Aluminium", price: 2000 },
        ],
        shape: [
            { name: "Round", price: 0 },
            { name: "Rectangle", price: 2000 },
        ],
        colors: [
            { name: "Natural", code: "#D4A574" },
            { name: "Grey", code: "#9E9E9E" },
        ],
        image: "https://i.pinimg.com/736x/ee/99/7e/ee997ed3288a0ece3b7115e23ea9efd3.jpg",
    },
    sunlounger: {
        basePrice: 7000,
        materials: [
            { name: "Aluminium", price: 0 },
            { name: "Teak", price: 4000 },
            { name: "Metal", price: 1500 },
        ],
        sizes: [
            { name: "Single", price: 0 },
        ],
        colors: [
            { name: "Grey", code: "#9E9E9E" },
            { name: "Natural", code: "#D4A574" },
            { name: "Blue", code: "#1976D2" },
        ],
        image: "https://i.pinimg.com/736x/44/cc/54/44cc5436b127c49f608bf734b7472b47.jpg",
    },
    gardenbench: {
        basePrice: 6000,
        materials: [
            { name: "Teak", price: 0 },
            { name: "Metal", price: 2000 },
            { name: "Engineered Wood", price: 1500 },
        ],
        seating: [
            { name: "2-Seater", price: 0 },
            { name: "3-Seater", price: 2000 },
        ],
        storage: [
            { name: "With Storage", price: 2000 },
            { name: "Without Storage", price: 0 },
        ],
        colors: [
            { name: "Natural", code: "#D4A574" },
            { name: "Grey", code: "#9E9E9E" },
        ],
        image: "https://i.pinimg.com/736x/4b/50/6a/4b506ab7424c5ad9e8ea0cc38643c14a.jpg",
    },

    // KITCHEN
    kitchencabinet: {
        basePrice: 20000,
        materials: [
            { name: "Engineered Wood", price: 0 },
            { name: "Solid Wood", price: 8000 },
            { name: "MDF", price: 3000 },
        ],
        sizes: [
            { name: "Single", price: 0 },
            { name: "Queen", price: 5000 },
            { name: "King", price: 8000 },
        ],
        colors: [
            { name: "White", code: "#F5F5F5" },
            { name: "Grey", code: "#9E9E9E" },
            { name: "Wood Texture", code: "#D4A574" },
        ],
        storage: [
            { name: "With Storage", price: 3000 },
            { name: "Without Storage", price: 0 },
        ],
        image: "https://i.pinimg.com/1200x/03/29/cc/0329cc61e86bab86f44cf9170fe5373d.jpg",
    },
    kitchenisland: {
        basePrice: 25000,
        materials: [
            { name: "Engineered Wood", price: 0 },
            { name: "Solid Wood", price: 8000 },
        ],
        sizes: [
            { name: "Medium", price: 0 },
            { name: "Large", price: 6000 },
        ],
        storage: [
            { name: "With Storage", price: 4000 },
            { name: "Without Storage", price: 0 },
        ],
        colors: [
            { name: "White", code: "#F5F5F5" },
            { name: "Wood Texture", code: "#D4A574" },
            { name: "Grey", code: "#9E9E9E" },
        ],
        image: "https://i.pinimg.com/1200x/71/bb/cb/71bbcb9c8561f9c9ad34dbe68982d67a.jpg",
    },
    barstool: {
        basePrice: 3000,
        materials: [
            { name: "Fabric & Metal", price: 0 },
            { name: "Solid Wood", price: 1500 },
            { name: "Metal & Wood", price: 1000 },
        ],
        sizes: [
            { name: "Single", price: 0 },
        ],
        colors: [
            { name: "Black", code: "#212121" },
            { name: "Brown", code: "#5D4037" },
            { name: "Natural Wood", code: "#D4A574" },
        ],
        image: "https://i.pinimg.com/1200x/32/01/00/3201002dff24003ec351f9879251556b.jpg",
    },
    kitchentable: {
        basePrice: 12000,
        materials: [
            { name: "Solid Wood", price: 0 },
            { name: "Engineered Wood", price: 3000 },
        ],
        shape: [
            { name: "Round", price: 0 },
            { name: "Rectangle", price: 2000 },
        ],
        storage: [
            { name: "With Storage", price: 3000 },
            { name: "Without Storage", price: 0 },
        ],
        colors: [
            { name: "Natural Wood", code: "#D4A574" },
            { name: "Walnut", code: "#5A3825" },
            { name: "White", code: "#F5F5F5" },
        ],
        image: "https://i.pinimg.com/1200x/08/ad/01/08ad017a44d55058c343febe07e8bb43.jpg",
    },
    kitchenshelf: {
        basePrice: 3000,
        materials: [
            { name: "Engineered Wood", price: 0 },
            { name: "Metal", price: 1000 },
        ],
        sizes: [
            { name: "Small", price: 0 },
            { name: "Medium", price: 1500 },
        ],
        colors: [
            { name: "White", code: "#F5F5F5" },
            { name: "Black", code: "#212121" },
            { name: "Natural Wood", code: "#D4A574" },
        ],
        image: "https://i.pinimg.com/1200x/76/dc/2e/76dc2ee8a650106fea2354ccb2beacc0.jpg",
    },
    pantryunit: {
        basePrice: 15000,
        materials: [
            { name: "Engineered Wood", price: 0 },
            { name: "Solid Wood", price: 5000 },
        ],
        sizes: [
            { name: "Large", price: 0 },
        ],
        storage: [
            { name: "With Storage", price: 2000 },
            { name: "Without Storage", price: 0 },
        ],
        colors: [
            { name: "White", code: "#F5F5F5" },
            { name: "Grey", code: "#9E9E9E" },
        ],
        image: "https://i.pinimg.com/736x/d8/98/02/d89802713e231b4ea221148b0f92ff3d.jpg",
    },
};

// Helper function to get product type from furnitureData
export const getProductTypeKey = (productName, category) => {
    const typeMap = {
        Bedroom: {
            bed: ["bed", "king", "queen", "single"],
            wardrobe: ["wardrobe", "closet"],
            shelf: ["shelf", "shelves"],
            bedTable: ["bed table", "nightstand", "side table"],
            dressingTable: ["dressing table", "vanity"],
            bedroomCouch: ["couch", "sofa", "bedroom"],
        },
        Living: {
            sofa: ["sofa", "couch"],
            tvunit: ["tv unit", "tv", "media"],
            centraltable: ["coffee table", "central table", "center table"],
            chair: ["chair", "accent"],
            sidetable: ["side table", "end table"],
            reclinersofa: ["recliner", "reclining"],
        },
        Study: {
            studytable: ["desk", "study table", "work table"],
            studychair: ["study chair", "office chair"],
            rackshelf: ["rack", "shelf", "book"],
            revolvingchair: ["revolving", "swivel"],
            shelvesunit: ["shelves", "unit"],
            studybedtable: ["bed table", "laptop table"],
        },
        Bathroom: {
            vanity: ["vanity"],
            mirrorcabinet: ["mirror", "cabinet"],
            undersink: ["sink", "under"],
            bathroomshelves: ["shelf", "bathroom"],
            laundrycabinet: ["laundry"],
            bathroomstool: ["stool"],
        },
        Garden: {
            outdoorsofa: ["outdoor", "sofa"],
            gardendining: ["dining", "garden"],
            loungechair: ["lounge", "chair"],
            gardentable: ["table", "garden"],
            sunlounger: ["sun", "lounger"],
            gardenbench: ["bench"],
        },
        Kitchen: {
            kitchencabinet: ["cabinet", "kitchen"],
            kitchenisland: ["island"],
            barstool: ["bar", "stool"],
            kitchentable: ["table", "kitchen"],
            kitchenshelf: ["shelf", "kitchen"],
            pantryunit: ["pantry"],
        },
    };

    const categoryMap = typeMap[category] || {};
    const lowerName = productName.toLowerCase();

    for (const [key, keywords] of Object.entries(categoryMap)) {
        if (keywords.some((keyword) => lowerName.includes(keyword))) {
            return key;
        }
    }

    return null;
};
