from django.urls import path
from .views import FileUploadView, FeatureExtractionResultView

urlpatterns = [
    path('upload/', FileUploadView.as_view(), name='file_upload'),
    path('results/<str:product_id>/', FeatureExtractionResultView.as_view(), name='feature_results'),
]
