from django.urls import path
from django.urls.conf import include
from . import views

urlpatterns = [
    path('', views.apiOverview, name='api-overview'),
    path('get-movie/<int:movie_id>', views.getMovie, name='get-movie'),
    path('get-movies/<str:type>', views.getMovies, name='get-movies'),
    path('update-movie/<int:movie_id>', views.updateMovie, name='update-movie'),
    # Django Rest Auth
    path('rest-auth/', include('dj_rest_auth.urls')),
    path('rest-auth/registration/', include('dj_rest_auth.registration.urls')),
]