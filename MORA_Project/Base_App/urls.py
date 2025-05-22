from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('about', views.about, name="about"),
    path('service', views.service, name="service"),
    path('login', views.login, name="login"),
    path('index1', views.index1, name="index1"),
    path('register', views.register, name="register"),
]