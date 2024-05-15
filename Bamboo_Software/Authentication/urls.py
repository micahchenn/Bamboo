from django.urls import path
from .views import signup  # import the signup view

urlpatterns = [
    # ... your other url patterns ...

    path('authenticate-signup', signup, name='signup'),
]