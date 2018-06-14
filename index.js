//1.in ra man hinh thong tin cua vu tru ABC
function fMethod() {
    let ABC = [
        {
            solar: 'A',
            planet: ['A1', 'B1', 'C1', 'D1', 'E1']
        },
        {
            solar: 'B',
            planet: ['AB', 'BB', 'CB', 'DB', 'EB']
        },
        {
            solar: 'C',
            planet: ['A3', 'C3', 'D3', 'E3']
        },
        {
            solar: 'D',
            planet: ['A4', 'B4', 'C4', 'D4', 'E4']
        },
        {
            solar: 'E',
            planet: ['AE', 'BE', 'CE']
        }
    ];

    for (let i = 0; i < ABC.length; i++) {
        let x1 = ABC[i].solar
        let x2 = ABC[i].planet
        console.log(i + 1 + ' He mat troi ' + x1 + ' gom cac hanh tinh ' + x2)
    }
}
// fMethod();
//2. In ra man hinh hanh tinh co dan so dong nhat va it nhat cua moi he mat troi
let ABC = [
    {
        solar: 'A',
        planet: {
            A1: 1000,
            B1: 2000,
            C1: 1500,
            D1: 1700,
            E1: 2050
        }
    },
    {
        solar: 'B',
        planet: {
            AB: 1500,
            BB: 2050,
            CB: 1550,
            DB: 1700,
            EB: 2050
        }
    },
    {
        solar: 'C',
        planet: {
            A3: 1000,
            C3: 1500,
            D3: 1700,
            E3: 2050
        }
    },
    {
        solar: 'D',
        planet: {
            A4: 1000,
            B4: 2000,
            C4: 1500,
            D4: 1700,
            E4: 2050
        }
    },
    {
        solar: 'E',
        planet: {
            AE: 1000,
            BE: 2000,
            CE: 1500
        }
    }
];

let planetMax = null
for (let i = 0; i < ABC.length; i++) {
    let x = ABC[i].planet
    console.log(x);

    let arr = [];
 
    for (key in x) {
        if(!planetMax){
            planetMax = {name: key, value: x[key]}
            continue
        }
        if(x[key] > planetMax.value){
            planetMax = {name: key, value: x[key]}
        }
    }
}

console.log(planetMax)

//chay thuat toan o day

//

let planetMaxArr = []
for (let i = 0; i < ABC.length; i++) {
    let x = ABC[i].planet
    console.log(x);

    let arr = [];
 
    for (key in x) {
        if(x[key] == planetMax.value){
            planetMaxArr.push({key: key, value: x[key]})
        }
    }
}
console.log(planetMaxArr)
//chay lai thuat toan o day

//




function findMax(arr) {
    let max = arr[0];
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] > max) {
            max = arr[j];
        };
    };
    return max;
}

function findMin(arr) {
    let min = arr[0];
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] < min) {
            min = arr[j];
        };
    };
    return min;
}

//3. Tim duong di co do dai ngan nhat tu A1 -> AE va in ra cac duong phai di
function timDuong() {

}

/*

if (diem cuoi == 'AE') {
    luu vo mang
    plus
} else {
    luu vo mang
    plus
    timDuong()
}
*/

// let ABC = [
//     {
//         name: "A", 
//         planets: [
//             {
//                 name: 'A1',
//                 ds: 1000,
//                 duongdi: {
//                     B1: 10,
//                     BB: 10
//                 }
//             },
//             {
//                 name: 'B1',
//                 ds: 2000,
//                 duongdi: {
//                     AB: 15
//                 }
//             }
//         ] 
//     },
//     {
//         name: "B", 
//         planets: [
//             {
//                 name: 'AB',
//                 ds: 1500,
//                 duongdi: {
//                     A3: 20
//                 }
//             },
//             {
//                 name: 'BB',
//                 ds: 2050,
//                 duongdi: {
//                     C3: 15,
//                     B4: 30
//                 }
//             }
//         ] 
//     }
// ]

// function layduongdi(duongphaidi, duongdi, hanhtinh){
//     return duongphaidi[hanhtinh] = duongdi[hanhtinh]
// }

// function timduong(vutru, from, to){
//     const allPlanets = vutru.reduce((total, hemattroi) => {
//         total = total.concat(hemattroi.planets)
//         return total
//     }, [])
//     const start = allPlanets.find(planet => planet.name == from)
//     let duongphaidi = {}
//     if(!start.duongdi){
//         console.log("no way")
//     }
//     else{
        
//         for(let prop in start.duongdi){
//             layduongdi(duongphaidi, start.duongdi, prop)
//         }
//     }
    
// }

//