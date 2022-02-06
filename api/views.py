from django.shortcuts import render
# Models
from .models import Movie
# REST Framework
from rest_framework import serializers
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
# Serializers
from . serializers import MovieSerializer

# Create your views here.


@api_view(['GET'])
def apiOverview(request):
  api_urls = {
    'User': '/user/'
  }
  return Response(api_urls)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMovies(request, type):
  if type == 'watch':
    movies = (request.user.movies.filter(watch=True))
  elif type == 'likes':
    movies = (request.user.movies.filter(like=True))
  elif type == 'watchlist':
    movies = (request.user.movies.filter(watchlist=True))
  serializer = MovieSerializer(movies, many=True)
  return Response(serializer.data)


def get_or_none(model, **kwargs):
  try:
    return model.objects.get(**kwargs)
  except model.DoesNotExist:
    return None


#  Get the user's log for a specific movie
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMovie(request, movie_id):
  movie = get_or_none(Movie, user=request.user, movieId=movie_id)
  if movie:
    s = MovieSerializer(movie, many=False)
    return Response(s.data)
  else:
    return Response(None)


# Update the user's log for a specific movie
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def updateMovie(request, movie_id):  
  movie = get_or_none(Movie, user=request.user, movieId=movie_id)

  # If movie does not exist, create a new Movie instance
  if not movie: 
    s = MovieSerializer(data=request.data)
    if s.is_valid():
      s.save()
  #  Otherwise, update the existing Movie instance
  else:
    s = MovieSerializer(instance=movie, data=request.data)
    if s.is_valid():
      s.save()

  return Response(s.data)
