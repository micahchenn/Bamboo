"""
URL configuration for Bamboo_Software project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls), #this is included by default
    path('', include('Bamboo_Frontend.urls')), #if empty path, include the urls from Bamboo_Frontend
    path('backend/', include('Bamboo_Backend.urls')), #if path is api, include the urls from Bamboo_Backend
    path('signup/', include('Authentication.urls')), #if path is login, include the urls from Authentication
    path('login/', include('Authentication.urls')), #if path is login, include the urls from Authentication
]
