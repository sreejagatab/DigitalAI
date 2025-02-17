import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <Container>
      <Navbar />
      <Typography variant="h4" align="center" sx={{ margin: "20px 0" }}>
        Digital Products Showcase
      </Typography>
      <Grid container spacing={4}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
