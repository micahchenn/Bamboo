from django.urls import path
from .views import index



urlpatterns = [
    path('', index), 
    path('investment-portfolio', index),
    path('home', index),
]
