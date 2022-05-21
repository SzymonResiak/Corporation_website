from django.urls import path
from Website import views

urlpatterns = [
    path("", views.home, name="home"),
]