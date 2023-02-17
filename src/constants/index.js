import avatar_man from '../assets/dataImg/Man/banner_man.jpg';
import man_1 from '../assets/dataImg/Man/man_1-1-black.jpg';
import product1 from '../assets/img/product1.jpg';
import product2 from '../assets/img/product2.jpg';
import ManCateImage from '../assets/dataImg/Man/banner_man.jpg'
import WomanCateImage from '../assets/dataImg/Woman/banner_woman.jpg'
import KidCateImage from '../assets/dataImg/kid/banner_kid.jpg'
import ShoesCateImage from '../assets/dataImg/Shoes/banner_shoes.jpg'


export const leftNavbar = [{id:"nbl1" , title: 'men', to:'./men' },{id:"nbl2" , title: 'woman', to:'./woman' },{id:"nbl3" , title: 'children', to:'./children' },{id:"nbl4" , title: 'accessories', to:'./accessories' },]
export const rightNavbar = [{id: "nvr1", title: 'Homepage', to:'./Homepage'},{id: "nvr2", title: 'About', to:'./About'},{id: "nvr3", title: 'Contact', to:'./Contact'},{id: "nvr4", title: 'Stores', to:'./Stores'},]
export const categories = {title: "Categories", item: ["Women", "Men", "Shoes" ,  'Accessories', "New Arrivals"] } 
export const links = {title: "Links", link: ["FAQ", 'Pages' , 'Stores', 'Compare', 'Cookies']}

export const categoriesData = [
    {
        title: 'Man', id: Math.floor(12345 * Math.random()), img: ManCateImage, to: '/man',
        items: [
            {
                id: Math.floor(12345 * Math.random()),
                img: product1,
                img2: product2,
                title: 'sanpham1_man',
                isNew: true,
                oldPrice: 12,
                price: 11
            },
            {
                id: Math.floor(12345 * Math.random()),
                img: product1,
                img2: product2,
                title: 'sanpham2_man',
                isNew: true,
                oldPrice: 14,
                price: 12
            },
            {
                id: Math.floor(12345 * Math.random()),
                img2: product2,
                img: product1,
                title: 'sanpham3_man',
                isNew: false,
                oldPrice: 17,
                price: 14
            },
            {
                id: Math.floor(12345 * Math.random()),
                img: product1,
                img2: product2,
                title: 'sanpham4_man',
                isNew: false,
                oldPrice: 19,
                price: 17
            }
        ]
    },
    {
        title: 'Woman', id: Math.floor(12345 * Math.random()), img: WomanCateImage, to: '/woman',
        items: [
            {
                id: Math.floor(12345 * Math.random()),
                img: product1,
                img2: product2,
                title: 'sanpham1_woman',
                isNew: true,
                oldPrice: 12,
                price: 11
            },
            {
                id: Math.floor(12345 * Math.random()),
                img: product1,
                img2: product2,
                title: 'sanpham2_woman',
                isNew: true,
                oldPrice: 14,
                price: 12
            },
            {
                id: Math.floor(12345 * Math.random()),
                img2: product2,
                img: product1,
                title: 'sanpham3_woman',
                isNew: false,
                oldPrice: 17,
                price: 14
            },
            {
                id: Math.floor(12345 * Math.random()),
                img: product1,
                img2: product2,
                title: 'sanpham4_woman',
                isNew: false,
                oldPrice: 19,
                price: 17
            }
        ]

    },
    {
        title: 'Kid', id: Math.floor(12345 * Math.random()), img: KidCateImage, to: '/kid',
        items: [
            {
                id: Math.floor(12345 * Math.random()),
                img: product1,
                img2: product2,
                title: 'sanpham1_kid',
                isNew: true,
                oldPrice: 12,
                price: 11
            },
            {
                id: Math.floor(12345 * Math.random()),
                img: product1,
                img2: product2,
                title: 'sanpham2_kid',
                isNew: true,
                oldPrice: 14,
                price: 12
            },
            {
                id: Math.floor(12345 * Math.random()),
                img2: product2,
                img: product1,
                title: 'sanpham3_kid',
                isNew: false,
                oldPrice: 17,
                price: 14
            },
            {
                id: Math.floor(12345 * Math.random()),
                img: product1,
                img2: product2,
                title: 'sanpham4_kid',
                isNew: false,
                oldPrice: 19,
                price: 17
            }
        ]

    },
    {
        title: 'Shoes', id: Math.floor(12345 * Math.random()), img: ShoesCateImage, to: '/shoes',
        items: [
            {
                id: Math.floor(12345 * Math.random()),
                img: product1,
                img2: product2,
                title: 'sanpham1_shoes',
                isNew: true,
                oldPrice: 12,
                price: 11
            },
            {
                id: Math.floor(12345 * Math.random()),
                img: product1,
                img2: product2,
                title: 'sanpham2_shoes',
                isNew: true,
                oldPrice: 14,
                price: 12
            },
            {
                id: Math.floor(12345 * Math.random()),
                img2: product2,
                img: product1,
                title: 'sanpham3_shoes',
                isNew: false,
                oldPrice: 17,
                price: 14
            },
            {
                id: Math.floor(12345 * Math.random()),
                img: product1,
                img2: product2,
                title: 'sanpham4_shoes',
                isNew: false,
                oldPrice: 19,
                price: 17
            }
        ]

    },

]