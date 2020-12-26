from django.contrib.auth.models import User
from rest_framework import serializers
from .models import HighScore


class HighScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = HighScore
        fields = ('p_name', 'p_difficulty', 'p_floor', 'p_wpm')