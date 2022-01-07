# Models
from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE
from django.db.models.expressions import F
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.

class Movie(models.Model):
  user = models.ForeignKey(User, on_delete=CASCADE, related_name='movies')
  movieId = models.IntegerField()
  watch = models.BooleanField(default=False)
  like = models.BooleanField(default=False)
  watchlist = models.BooleanField(default=False)
  Rating = models.SmallIntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(6)])

  def __str__(self):
    return (f"{self.user}: {self.movieId}")