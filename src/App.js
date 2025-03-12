import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from './components/Pages/Contacts';
import About from './components/Pages/About';
import Blog from './components/Pages/Blog';
import ItemDetails from './components/ItemDetails';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home({ items }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (items.length > 0) {
      navigate(`/item/${items[0].id}`); 
    }
  }, [items, navigate]);

  return <h2>Loading...</h2>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [ {
                  id: 1,
                  tesak: "Սանտեխնիկա",
                  img: "pexels-clickerhappy-675987.jpg",
                  categories: "Plumbing",

                  masnaget:"Սանտեխնիկ",
                  anun: "Arman",
                  volortum: "Volortum-5tari",
                  nkar:"man-personage-with-neutral-facial-expression_316839-7775.avif",
                  heraxos: "+37477386850" 
                },
                {
                  id : 2,
                  tesak: "Էլեկտրականություն",
                  img: "anthony-indraus-Bb9jWuTMPUk-unsplash.jpg",
                
                  categories: "Electricity",

                  masnaget:"Էլեկտրիկ",
                  anun: "Karen",
                  volortum: "Volortum-10tari",
                  nkar:"man-personage-with-neutral-facial-expression_316839-7775.avif",
                  heraxos: "+37477386850" 
                 
                },
                {
                  id : 3,
                  tesak: "Տեղափոխման ծառայություններ",
                  img: "R.jpg",
                  
                  categories: "Moving",

                  masnaget:"Տեղափոխման ծառայություններ",
                  anun: "Gurgen",
                  volortum: "Volortum-10tari",
                  nkar:"man-personage-with-neutral-facial-expression_316839-7775.avif",
                 
                },
                {
                  id : 4,
                  tesak: "Կար ու ձև",
                  img: "rocknwool-jGXBpAKGkfI-unsplash.jpg",
                  
                  categories: "Knitting",

                  masnaget:"Կար ու ձև",
                  anun: "Vazgen",
                  volortum: "Volortum-1tari",
                  nkar:"man-personage-with-neutral-facial-expression_316839-7775.avif",
              
                },     
                {
                  id : 5,
                  tesak: "Երեխայի զարգացում",
                  img: "element5-digital-OyCl7Y4y0Bk-unsplash.jpg",
                  
                  categories: "Child",

                  masnaget:"Երեխայի զարգացում",
                  anun: "Petros",
                  volortum: "Volortum-3tari",
                  nkar:"man-personage-with-neutral-facial-expression_316839-7775.avif",
                  
                },
                {
                  id : 6,
                  tesak: "Մաքրման ծառայություններ",
                  img: "ai-generated-8511571_1280.jpg",
                 
                  categories: "Cleaning",

                  masnaget:"Երեխայի զարգացում",
                  anun: "Petros",
                  volortum: "Volortum-3tari",
                  nkar:"man-personage-with-neutral-facial-expression_316839-7775.avif",
               
                }, 
               {
                id : 7,
                tesak: "Բակային աշխատանքների ծառայություններ",
                img: "1024.jpg",
               
                categories: "Yard",

                masnaget:"Երեխայի զարգացում",
                anun: "Petros",
                volortum: "Volortum-3tari",
                nkar:"man-personage-with-neutral-facial-expression_316839-7775.avif",
                
              },
              {
                  id : 8,
                  tesak: "Շինարարություն",
                  img: "pexels-pixabay-209266.jpg",
                  
                  categories: "Construction",

                  masnaget:"Երեխայի զարգացում",
                  anun: "Petros",
                  volortum: "Volortum-3tari",
                  nkar:"man-personage-with-neutral-facial-expression_316839-7775.avif",
                  
                },
              
              {
                id : 9,
                tesak: "Ավտոսպասարկում",
                img: "pexels-mikebirdy-190574.jpg",
                
                categories: "Car",

                masnaget:"Երեխայի զարգացում",
                anun: "Petros",
                volortum: "Volortum-3tari",
                nkar:"man-personage-with-neutral-facial-expression_316839-7775.avif",
                heraxos: "+37477386850" 
                
              },
              ],

      
      fullItem: {},
    };

    this.state.currentItems = this.state.items;
  }

  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js")
        .then((registration) => console.log("Service Worker Registered:", registration))
        .catch((error) => console.error("Service Worker Registration Failed:", error));
    }
  }


  choosCategory = (category) => {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
    } else {
      this.setState({
        currentItems: this.state.items.filter((el) => el.categories === category),
      });
    }
  };

  deleteOrder = (id) => {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  };

  addToOrder = (item) => {
    if (!this.state.orders.some((el) => el.id === item.id)) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <Router>
          <Header />
          <Routes>
          <Route path="/home" element={<Home items={this.state.items} />} />
          <Route
  path="/"
  element={
    <>
      <Categories choosCategory={this.choosCategory} />
      <Items
        items={this.state.currentItems}
        onAdd={this.addToOrder}
      />
    </>
  }
/>
            <Route path="/" element={<Home items={this.state.items} />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/item/:id" element={<ItemDetails items={this.state.items} />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;