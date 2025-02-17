import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import { Container, Typography, Button } from "@mui/material";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/products/${id}`)
        .then(response => setProduct(response.data))
        .catch(error => console.error("Error fetching product:", error));
    }
  }, [id]);

  if (!product) return <Typography>Loading...</Typography>;

  const handleBuyNow = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/payments/create-checkout-session", { product });
      window.location.href = `https://checkout.stripe.com/pay/${response.data.id}`;
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4">{product.name}</Typography>
      <Image src="/example.jpg" alt="Product Image" width={500} height={300} />
      <Typography>{product.description}</Typography>

      <Button
        variant="contained"
        color="secondary"
        sx={{ marginTop: "10px" }}
        onClick={() => window.open(product.demo_url, "_blank")}
      >
        Live Demo
      </Button>

      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: "10px", marginLeft: "10px" }}
        onClick={handleBuyNow}
      >
        Buy Now - ${product.price}
      </Button>
    </Container>
  );
}
