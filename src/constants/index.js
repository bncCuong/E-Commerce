import avatar_man from '../assets/dataImg/Man/banner_man.jpg';
import man_1 from '../assets/dataImg/Man/man_1-1-black.jpg';


export const leftNavbar = [{id:"nbl1" , title: 'men', to:'./men' },{id:"nbl2" , title: 'woman', to:'./woman' },{id:"nbl3" , title: 'children', to:'./children' },{id:"nbl4" , title: 'accessories', to:'./accessories' },]
export const rightNavbar = [{id: "nvr1", title: 'Homepage', to:'./Homepage'},{id: "nvr2", title: 'About', to:'./About'},{id: "nvr3", title: 'Contact', to:'./Contact'},{id: "nvr4", title: 'Stores', to:'./Stores'},]
export const categories = {title: "Categories", item: ["Women", "Men", "Shoes" ,  'Accessories', "New Arrivals"] } 
export const links = {title: "Links", link: ["FAQ", 'Pages' , 'Stores', 'Compare', 'Cookies']}

export const data =[
    {
        title: "man",
        id: Math.floor(12345 * Math.random()),
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        items: [
            {id:Math.floor(12346 * Math.random()),name: 'On The Regular Denim Shorts' , price: '$25.99', image:[man_1 ,'https://cdn.shopify.com/s/files/1/0293/9277/products/12-23-22Studio5_RT_DJ_13-01-12_52_ZDF01W310001_BlackGold_4245_EH.jpg?v=1672187902', '../assets/dataImg/Man/man_1-2-black.jpg' ] }
        ]
    }
]