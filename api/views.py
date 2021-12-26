from django.shortcuts import render

# REST Framework
from rest_framework import serializers
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

# Create your views here.
@api_view(['GET'])
def apiOverview(request):
  api_urls = {
    'User': '/user/'
  }
  return Response(api_urls)

