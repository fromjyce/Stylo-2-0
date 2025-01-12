from django.db import models

class Product(models.Model):
    product_id = models.CharField(max_length=50, unique=True)
    brand = models.CharField(max_length=255)
    material = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    color = models.CharField(max_length=50)
    image = models.ImageField(upload_to='product_images/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Product {self.product_id}"

class FeatureExtractionResult(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    features = models.JSONField()
    processed_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Feature extraction for {self.product.product_id}"
