# Rest Framework
from rest_framework import serializers
# Models
from . models import Movie

class MovieSerializer(serializers.ModelSerializer):
  class Meta:
    model = Movie
    fields = '__all__'