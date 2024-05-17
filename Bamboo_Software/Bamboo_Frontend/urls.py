from django.urls import path
from .views import index

urlpatterns = [
    path('', index), 
    path('my-dashboard', index),
    path('investment-portfolio', index),
    path('crypto', index),
    path('retirement-account', index),
    path('trading-account', index),
    path('market-watchlist', index),
    path('home', index),
    path('login', index),
    path('signup', index),
    path('logout', index),
]