from django.shortcuts import render
# Models
from .models import Movie
# REST Framework
from rest_framework import serializers
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
# Serializers
from .serializers import MovieSerializer

# Create your views here.


@api_view(['GET'])
def apiOverview(request):
  api_urls = {
    'User': '/user/'
  }
  return Response(api_urls)


@api_view(['GET'])
def getMovies(request):
  movies = Movie.objects.all()
  serializer = MovieSerializer(movies, many=True)
  return Response(serializer.data)