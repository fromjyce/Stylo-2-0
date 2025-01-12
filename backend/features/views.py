from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from .models import Product, FeatureExtractionResult
from .serializers import ProductSerializer
from django.shortcuts import render
import json
# Simulated feature extraction (replace with actual models)
import random

class FileUploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        file = request.FILES['file']
        product_id = request.data.get('product_id')
        brand = request.data.get('brand')
        material = request.data.get('material')
        category = request.data.get('category')
        color = request.data.get('color')

        product = Product.objects.create(
            product_id=product_id,
            brand=brand,
            material=material,
            category=category,
            color=color,
            image=file
        )

        # Simulating feature extraction
        features = {
            'brand': brand,
            'material': material,
            'color': color,
            'category': category,
            'pattern': random.choice(['Striped', 'Solid', 'Plaid']),  # Example random feature
        }

        FeatureExtractionResult.objects.create(product=product, features=features)
        return Response({"message": "File uploaded and features extracted successfully!"}, status=status.HTTP_201_CREATED)

class FeatureExtractionResultView(APIView):
    def get(self, request, product_id, *args, **kwargs):
        try:
            product = Product.objects.get(product_id=product_id)
            result = FeatureExtractionResult.objects.get(product=product)
            return Response(result.features, status=status.HTTP_200_OK)
        except Product.DoesNotExist:
            return Response({"error": "Product not found"}, status=status.HTTP_404_NOT_FOUND)
    
