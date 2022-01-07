# Rest Framework
from django.db.models import fields
from rest_framework import serializers
# Movie
from .models import Movie

class MovieSerializer(serializers.ModelSerializer):
  class Meta:
    model = Movie
    fields = "__all__"