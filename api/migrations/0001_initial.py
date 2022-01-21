# Generated by Django 3.2.9 on 2022-01-21 18:17

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('movieId', models.IntegerField()),
                ('title', models.TextField()),
                ('posterPath', models.TextField()),
                ('watch', models.BooleanField(default=False)),
                ('like', models.BooleanField(default=False)),
                ('watchlist', models.BooleanField(default=False)),
                ('Rating', models.SmallIntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(6)])),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='movies', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
