from django.urls import path
from django.urls.conf import include
from . import views

urlpatterns = [
    path('', views.apiOverview, name='api-overview'),
    path('get-movies/', views.getMovies, name='get-movies')
]