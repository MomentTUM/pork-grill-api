// const {Category, sequelize } = require('./src/models')

// let categoryData = [
//     { name: 'Beef(วัว)', image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676022139/beef_mjlv7k.jpg'},
//     { name: 'Pork(pork)', image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676022139/pork_nev9dj.jpg'},
//     { name: 'Appetizer(ทานเล่น)', image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676022139/appetizer_cv6ip7.jpg'},
//     { name: 'vegetable(ผัก)', image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676022140/vegetable_wzvwke.jpg'},
//     { name: 'Dessert(ของหวาน)', image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676022140/desserts_op64rg.jpg'},
//     { name: 'Beverage(เครื่องดื่ม)', image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676022140/beverage_jgxkho.jpg'},
// ]

// const seedData = async () => {
//     try {
//         // await sequelize.sync({force: true})
//         let category_res = await Category.bulkCreate(categoryData)
//     } catch(err) {
//         console.log(err)
//     }
// }

// seedData()

//-----------------------------------------------------------------------------------------------------------------//

// const { Table } = require("./src/models")

// let tableData = [
//   { numberTable: 1 ,status: 'AVAILABLE'},
//   { numberTable: 2 ,status: 'AVAILABLE'},
//   { numberTable: 3 ,status: 'AVAILABLE'},
//   { numberTable: 4 ,status: 'AVAILABLE'},
//   { numberTable: 5 ,status: 'AVAILABLE'},
//   { numberTable: 6 ,status: 'AVAILABLE'},
//   { numberTable: 7 ,status: 'AVAILABLE'},
//   { numberTable: 8 ,status: 'AVAILABLE'},
//   { numberTable: 9 ,status: 'AVAILABLE'},
//   { numberTable: 10,status: 'AVAILABLE' },
// ]

// const seedData = async () => {
//   try {
//     let table_res = await Table.bulkCreate(tableData)
//   } catch (err) {
//     console.log(err)
//   }
// }

// seedData()

//-----------------------------------------------------------------------------------------------------------------//

// const {Admin, sequelize } = require('./src/models')
// const bcrypt = require('bcryptjs')

// let adminData = [
//     { firstName: 'Elon',lastName: 'Musk',username: 'grillpork01',password: bcrypt.hashSync('123456', 12)},
//     { firstName: 'Mark',lastName: 'Zuckerberg',username: 'grillpork02',password: bcrypt.hashSync('123456', 12)},
//     { firstName: 'Jack',lastName: 'Ma',username: 'grillpork03',password: bcrypt.hashSync('123456', 12)},
//     { firstName: 'Warren',lastName: 'Buffett',username: 'grillpork04',password: bcrypt.hashSync('123456', 12)},
//     { firstName: 'Kevin',lastName: 'Feige',username: 'grillpork05',password: bcrypt.hashSync('123456', 12)},
// ]

// const seedData = async () => {
//     try {
//         let admin_res = await Admin.bulkCreate(adminData)
//     } catch(err) {
//         console.log(err)
//     }
// }

// seedData()

//-----------------------------------------------------------------------------------------------------------------//

const {Food, sequelize } = require('./src/models')
const bcrypt = require('bcryptjs')

let foodData = [
    { name: 'rib-eye slice',detail:'ริปอายสไลค์',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676108114/beef-rip-eye-slice_owvio0.jpg',categoryId:1},
    { name: 'chuck-eye slice',detail:'เนื้อใบพายสไลค์',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676108114/chuck-eye-slice_b2vmd0.jpg',categoryId:1},
    { name: 'premium-beef',detail:'เนื้อพรีเมี่ยม',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676108114/premium-beef_pqelto.jpg',categoryId:1},
    { name: 'shank',detail:'น่องลาย',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676108114/shank_djdveu.jpg',categoryId:1},
    { name: 'strip-loin slice',detail:'สันนอกสไลค์',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676108114/strip-loin-slice_vwy5ta.jpg',categoryId:1},
    { name: 'brisket',detail:'เสือร้องไห้',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676110046/Screenshot_2023-02-11_164943_l178yk.jpg',categoryId:1},
    { name: 'bottom round',detail:'สะโพกนอก',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676110046/Screenshot_2023-02-11_164955_zp5sal.jpg',categoryId:1},
    { name: 'hump',detail:'เนื้อโหนก',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676110046/Screenshot_2023-02-11_165103_tdq79z.jpg',categoryId:1},
    { name: 'silver shank',detail:'น่องแก้ว',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676110046/Screenshot_2023-02-11_165048_jftklt.jpg',categoryId:1},
    { name: 'top pound',detail:'สะโพกใน',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676110046/Screenshot_2023-02-11_165404_q6yfga.jpg',categoryId:1},

    { name: 'kurobuta cheese',detail:'หมูคุโรบูตะชีส',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676124019/pork/Screenshot_2023-02-11_204430_cjjgst.jpg',categoryId:2},
    { name: 'pork loin',detail:'สันนอกหมู',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676124019/pork/Screenshot_2023-02-11_204526_itr5md.jpg',categoryId:2},
    { name: 'pork brily',detail:'หมูสามชั้น',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676124019/pork/Screenshot_2023-02-11_204710_qqfq1h.jpg',categoryId:2},
    { name: 'bacon',detail:'เบคอนหมู',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676124019/pork/Screenshot_2023-02-11_204809_wquhii.jpg',categoryId:2},
    { name: 'kurobuta pork',detail:'หมูคุโรบูตะ',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676124019/pork/Screenshot_2023-02-11_204513_kxbenu.jpg',categoryId:2},
    { name: 'pork neck loin',detail:'สันคอหมู',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676124019/pork/Screenshot_2023-02-11_204354_gel3ad.jpg',categoryId:2},
    { name: 'smoke bacon',detail:'เบคอนรมควัน',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676124019/pork/Screenshot_2023-02-11_204340_qiz86d.jpg',categoryId:2},
    { name: 'pork pound',detail:'หมูสันใน',currentPrice: 0,image: 'hhttps://res.cloudinary.com/dvcwwkqup/image/upload/v1676124019/pork/Screenshot_2023-02-11_204354_gel3ad.jpg',categoryId:2},
    { name: 'brisket pound',detail:'สันในน่องแก้ว',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676124018/pork/Screenshot_2023-02-11_204252_iwjttf.jpg',categoryId:2},
    { name: 'tenderioin',detail:'หมูสันนอก',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676124018/pork/Screenshot_2023-02-11_204409_gv4srv.jpg',categoryId:2},

    { name: 'somtum',detail:'ส้มตำ',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676125490/appetizer/Screenshot_2023-02-11_210751_ievfaq.jpg',categoryId:3},
    { name: 'grilled chicken',detail:'ไก่ย่าง',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676125490/appetizer/Screenshot_2023-02-11_210913_hghz3s.jpg',categoryId:3},
    { name: 'jade noodle',detail:'บะหมี่หยก',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676125490/appetizer/Screenshot_2023-02-11_211154_n1mlir.jpg',categoryId:3},
    { name: 'french fries',detail:'เฟรนช์ฟรายส์',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676125490/appetizer/Screenshot_2023-02-11_211541_fqquv8.jpg',categoryId:3},
    { name: 'fried meatballs',detail:'ลูกชิ้นทอด',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676125490/appetizer/Screenshot_2023-02-11_211904_g6ucbs.jpg',categoryId:3},

    { name: 'iceberg lettuce',detail:'ผักกาดแก้ว',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676127261/vegetable/Screenshot_2023-02-11_213551_xuuqzi.jpg',categoryId:4},
    { name: 'okra',detail:'กระเจี๊ยบ',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676127261/vegetable/Screenshot_2023-02-11_213621_ddz3vu.jpg',categoryId:4},
    { name: 'lettuce',detail:'ผักกาดหอม',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676127261/vegetable/Screenshot_2023-02-11_213700_oear5h.jpg',categoryId:4},
    { name: 'eringi',detail:'เห็ดออรินจิ',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676127261/vegetable/Screenshot_2023-02-11_213728_tpnwie.jpg',categoryId:4},
    { name: 'pumpkin',detail:'ฟักทอง',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676127261/vegetable/Screenshot_2023-02-11_213946_r4ruzy.jpg',categoryId:4},
    { name: 'baby corn',detail:'ข้าวโพดอ่อน',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676127262/vegetable/Screenshot_2023-02-11_214138_udp65y.jpg',categoryId:4},
    { name: 'onion',detail:'หอมใหญ่',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676127261/vegetable/Screenshot_2023-02-11_214755_fv9ybd.jpg',categoryId:4},

    { name: 'cake',detail:'เค้ก',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676132074/desserts/Screenshot_2023-02-11_230024_yptuyn.jpg',categoryId:5},
    { name: 'ice cream',detail:'ไอศครีม',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676132075/desserts/Screenshot_2023-02-11_230127_uenua2.jpg',categoryId:5},
    { name: 'Shaved ice',detail:'น้ำแข็งไส',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676132075/desserts/Screenshot_2023-02-11_230159_mpakxd.jpg',categoryId:5},
    { name: 'lod Chong dessert in coconut milk',detail:'ลอดช่องน้ำกะทิ',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676132075/desserts/Screenshot_2023-02-11_230236_mshbyg.jpg',categoryId:5},
    { name: 'sweet sticky rice with mango',detail:'ข้าวเหนียวมะม่วง',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676132075/desserts/Screenshot_2023-02-11_230302_atcmjs.jpg',categoryId:5},
    { name: 'bananas in coconut sauce',detail:'กล้วยบวชชี',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676132074/desserts/Screenshot_2023-02-11_230325_mcoedg.jpg',categoryId:5},
    { name: 'egg york fudge balls cooked in syrup',detail:'ทองหยอด',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676132075/desserts/Screenshot_2023-02-11_230350_lms2fw.jpg',categoryId:5},
    { name: 'dumplings in coconut cream',detail:'บัวลอยน้ำกะทิ',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676132075/desserts/Screenshot_2023-02-11_230534_sre6k4.jpg',categoryId:5},
    { name: 'grass jelly in syrup',detail:'เฉาก๊วยน้ำเชื่อม',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676132076/desserts/Screenshot_2023-02-11_230654_srqllm.jpg',categoryId:5},
    { name: 'fresh fruit',detail:'ผลไม้สด',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676132075/desserts/Screenshot_2023-02-11_230807_zg0upr.jpg',categoryId:5},

    { name: 'soft drink',detail:'น้ำอัดลม',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676134510/beverage/Screenshot_2023-02-11_233716_cqtcmt.jpg',categoryId:6},
    { name: 'chrysanthemum Juice',detail:'น้ำเก๊กฮวย',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676134510/beverage/Screenshot_2023-02-11_233929_oam1xm.jpg',categoryId:6},
    { name: 'Longan juice',detail:'น้ำลำไย',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676134510/beverage/Screenshot_2023-02-11_234021_tm6q6r.jpg',categoryId:6},
    { name: 'fruit punch',detail:'น้ำพั้นซ์',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676134510/beverage/Screenshot_2023-02-11_234228_yotg9n.jpg',categoryId:6},
    { name: 'water',detail:'น้ำเปล่า',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676134510/beverage/Screenshot_2023-02-11_234312_tld5jn.jpg',categoryId:6},
    { name: 'bubble tea',detail:'ชาไข่มุก',currentPrice: 0,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676134510/beverage/Screenshot_2023-02-11_234355_mcwchs.jpg',categoryId:6},
    { name: 'Chang beer',detail:'เบียร์ช้าง',currentPrice: 56,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676134510/beverage/Screenshot_2023-02-11_234436_ansspk.jpg',categoryId:6},
    { name: 'Leo beer',detail:'เบียร์ลีโอ',currentPrice: 59,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676134510/beverage/Screenshot_2023-02-11_234824_yakcsr.jpg',categoryId:6},
    { name: 'singha beer',detail:'เบียร์สิงห์',currentPrice: 62,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676134510/beverage/Screenshot_2023-02-11_234855_qhmcon.jpg',categoryId:6},
    { name: 'heineken',detail:'ไฮเนเก้น',currentPrice: 76,image: 'https://res.cloudinary.com/dvcwwkqup/image/upload/v1676134510/beverage/Screenshot_2023-02-11_234920_qoknpg.jpg',categoryId:6},
]

const seedData = async () => {
    try {
        let food_res = await Food.bulkCreate(foodData)
    } catch(err) {
        console.log(err)
    }
}

seedData()

    // { name: '',detail:'',currentPrice: 0,image: '',categoryId:6},
    // { name: '',detail:'',currentPrice: 0,image: '',categoryId:6},
    // { name: '',detail:'',currentPrice: 0,image: '',categoryId:6},
    // { name: '',detail:'',currentPrice: 0,image: '',categoryId:6},
    // { name: '',detail:'',currentPrice: 0,image: '',categoryId:6},
    // { name: '',detail:'',currentPrice: 0,image: '',categoryId:6},
    // { name: '',detail:'',currentPrice: 0,image: '',categoryId:6},
    // { name: '',detail:'',currentPrice: 0,image: '',categoryId:6},
    // { name: '',detail:'',currentPrice: 0,image: '',categoryId:6},
    // { name: '',detail:'',currentPrice: 0,image: '',categoryId:6},