// components/ProductCard.js
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";

export default function ProductCard({ product }) {
  const router = useRouter();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="180" image={product.image} alt={product.name} />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: "10px" }}
          onClick={() => router.push(`/product?id=${product.id}`)}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
