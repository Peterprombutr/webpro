from django.urls import path
from .views import (
    WordBankRequest,
    MonsterRequest,
    HighScoreRequest,
    HighScorePost,
)

urlpatterns = [
    path('wordbank/', WordBankRequest, name='WordBankRequest'),
    path('monster/', MonsterRequest, name='MonsterRequest'),
    path('highscore/', HighScoreRequest, name='HighScoreRequest'),
    path('add/highscore/', HighScorePost, name='HighScorePost'),
]