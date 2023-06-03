import Banner from "./Banner"
import Navbar from "./Navbar"
import { Fragment, useEffect } from "react"
import { Box,styled } from "@mui/system"
import {useDispatch, useSelector} from "react-redux"
import { getProducts } from "../../redux/actions/productAction"
import Slide from "./Slide"
import MidSection from "./MidSection"


const Wrapper=styled(Box)`
padding:10px;
background:#F2F2F2;
`;
const Home = () => {
  const {products}=useSelector(state=> state.getProducts);
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);
  return (
    <Fragment>
        <Navbar/>
        <Wrapper>
            <Banner/>
            <Slide products={products} title="Deal of the Day" timer={true}/>
            <MidSection/>
            <Slide products={products} title="Discounts for You" timer={false}/>
            <Slide products={products} title="Top Selection" timer={false}/>
            <Slide products={products} title="Recommended Items" timer={false}/>
            <Slide products={products} title="Treanding Offers" timer={false}/>
            <Slide products={products} title="Season's Top Pick" timer={false}/>
            <Slide products={products} title="Top Deals on Accessories" timer={false}/>
        </Wrapper>
    </Fragment>
  )
}

export default Home
